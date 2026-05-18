#!/usr/bin/env node
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { formatSanitizationError, sanitizeSvg, SvgSanitizationError } from './svg-sanitizer.mjs';

const execFileAsync = promisify(execFile);

const repoRoot = process.cwd();
const configPath = path.join(repoRoot, 'tools/icons/upstream.json');
const defaultSampleIconsPath = path.join(repoRoot, 'tools/icons/sample-icons.txt');

function parseArgs(argv) {
  const args = { limit: undefined, iconsFile: undefined, target: 'all' };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--limit') args.limit = Number(argv[++i]);
    if (arg === '--icons-file') args.iconsFile = path.resolve(repoRoot, argv[++i]);
    if (arg === '--sample') args.iconsFile = defaultSampleIconsPath;
    if (arg === '--target') args.target = argv[++i];
  }
  return args;
}

function toPascalCase(iconName) {
  return iconName
    .split('_')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

function componentSource({ selector, className, viewBox, innerSvg, classPrefix, directivePrefix }) {
  const escapedInner = innerSvg.replace(/`/g, '\\`').replace(/\$\{/g, '\\\${');
  const hostClass = `${directivePrefix}-icon`;
  const svgClass = `${directivePrefix}-icon-svg`;
  return `import { Component, input } from '@angular/core';
import { ${classPrefix}IconHostDirective } from '../../shared/${directivePrefix}-icon-host.directive';
import { ${classPrefix}IconSvgDirective } from '../../shared/${directivePrefix}-icon-svg.directive';

@Component({
  selector: '${selector}',
  imports: [${classPrefix}IconSvgDirective],
  hostDirectives: [${classPrefix}IconHostDirective],
  styles: [\`
    :host.${hostClass} {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
    }

    .${svgClass} {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      fill: currentColor;
    }
  \`],
  template: \
\`<svg
  ${directivePrefix}IconSvg
  focusable="false"
  [attr.viewBox]="'${viewBox}'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  ${escapedInner}
</svg>\`,
})
export class ${className} {
  readonly ariaLabel = input<string | null>(null);
}
`;
}

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

const EXEC_MAX_BUFFER = 1024 * 1024 * 200;
const UPSTREAM_POLICY = {
  owner: 'google',
  repo: 'material-design-icons',
  refPattern: /^[0-9a-f]{40}$/,
};

function validateUpstreamPolicy(config) {
  const violations = [];
  if (config.owner !== UPSTREAM_POLICY.owner) {
    violations.push({ code: 'unexpected-owner', expected: UPSTREAM_POLICY.owner, actual: config.owner });
  }
  if (config.repo !== UPSTREAM_POLICY.repo) {
    violations.push({ code: 'unexpected-repo', expected: UPSTREAM_POLICY.repo, actual: config.repo });
  }
  if (!UPSTREAM_POLICY.refPattern.test(config.ref ?? '')) {
    violations.push({ code: 'mutable-ref', expected: '40-character lowercase git commit SHA', actual: config.ref });
  }
  if (violations.length === 0) return;

  throw new Error(
    JSON.stringify(
      {
        error: 'upstream-policy-violation',
        configPath: path.relative(repoRoot, configPath),
        violations,
      },
      null,
      2,
    ),
  );
}

async function runGit(args, cwd) {
  await execFileAsync('git', args, { cwd, maxBuffer: EXEC_MAX_BUFFER });
}

async function runGitRead(args, cwd) {
  const { stdout } = await execFileAsync('git', args, { cwd, maxBuffer: EXEC_MAX_BUFFER });
  return stdout.trim();
}

async function clonePromisorRepo(config) {
  const tmp = await fs.mkdtemp(path.join(os.tmpdir(), 'msr-sync-'));
  const repoUrl = `https://github.com/${config.owner}/${config.repo}.git`;

  let lastError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      await runGit(['clone', '--depth', '1', '--filter=blob:none', '--no-checkout', repoUrl, tmp], repoRoot);
      return tmp;
    } catch (error) {
      lastError = error;
      if (attempt < 3) await new Promise((resolve) => setTimeout(resolve, attempt * 1500));
    }
  }

  throw lastError;
}

function filePathForIcon(iconName, config, target) {
  return `symbols/web/${iconName}/${config.symbolFamily}/${iconName}${target.variant.fileSuffix}`;
}

async function discoverIconNamesFromTree(tmp, config, target) {
  const treePaths = await runGitRead(['ls-tree', '-r', '--name-only', config.ref, 'symbols/web'], tmp);
  const iconNames = [];

  for (const line of treePaths.split(/\r?\n/)) {
    const match = line.match(/^symbols\/web\/([^/]+)\/[^/]+\/(.+)$/);
    if (!match) continue;

    const iconName = match[1];
    const fileName = match[2];
    if (line.includes(`/${config.symbolFamily}/`) && fileName === `${iconName}${target.variant.fileSuffix}`) {
      iconNames.push(iconName);
    }
  }

  return [...new Set(iconNames)].sort((a, b) => a.localeCompare(b));
}

async function readIconList(args, tmp, config, target) {
  if (args.iconsFile) {
    const raw = await fs.readFile(args.iconsFile, 'utf8');
    return raw
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);
  }

  return discoverIconNamesFromTree(tmp, config, target);
}

async function materializeOnlyPaths(tmp, config, target, iconNames) {
  await runGit(['sparse-checkout', 'init', '--no-cone'], tmp);

  const sparseFile = path.join(tmp, '.git/info/sparse-checkout');
  const lines = iconNames.map((iconName) => filePathForIcon(iconName, config, target));
  await fs.writeFile(sparseFile, `${lines.join('\n')}\n`, 'utf8');

  await runGit(['checkout', '--detach', config.ref], tmp);
}

async function clearGeneratedFiles(generatedDir) {
  await ensureDir(generatedDir);
  const existing = await fs.readdir(generatedDir);
  await Promise.all(
    existing.filter((name) => name.endsWith('.ts')).map((name) => fs.unlink(path.join(generatedDir, name))),
  );
}

async function removeFileIfExists(filePath) {
  try {
    await fs.unlink(filePath);
  } catch (error) {
    if (error?.code !== 'ENOENT') throw error;
  }
}

async function writeLines(filePath, lines) {
  await ensureDir(path.dirname(filePath));
  await fs.writeFile(filePath, `${lines.join('\n')}\n`, 'utf8');
}

function targetPaths(target) {
  const libRoot = path.join(repoRoot, target.projectPath, 'src/lib');
  return {
    generatedDir: path.join(libRoot, 'icons/generated'),
    generatedIndexPath: path.join(libRoot, 'icons/index.ts'),
    generatedComponentMapPath: path.join(libRoot, 'icons/component-map.ts'),
    manifestPath: path.join(libRoot, 'generated/icon-manifest.ts'),
  };
}

async function generateForTarget(args, config, target) {
  const paths = targetPaths(target);
  const collisionReportPath = path.join(repoRoot, `tools/icons/collision-report-${target.id}.txt`);
  const missingReportPath = path.join(repoRoot, `tools/icons/missing-report-${target.id}.txt`);

  const tmp = await clonePromisorRepo(config);

  const discoveredOrRequested = await readIconList(args, tmp, config, target);
  const selected = args.limit ? discoveredOrRequested.slice(0, args.limit) : discoveredOrRequested;

  if (selected.length === 0) throw new Error(`No icons selected for generation for target: ${target.id}`);

  const collisions = new Map();
  for (const iconName of selected) {
    const selector = `${target.selectorPrefix}-${iconName.replaceAll('_', '-')}-icon`;
    collisions.set(selector, (collisions.get(selector) ?? 0) + 1);
  }

  const duplicates = [...collisions.entries()].filter(([, count]) => count > 1).map(([name]) => name);
  if (duplicates.length > 0) {
    await writeLines(collisionReportPath, ['Selector collisions detected:', ...duplicates]);
    throw new Error(`Selector collision detected for ${target.id}. See ${collisionReportPath}`);
  }

  await removeFileIfExists(collisionReportPath);

  await materializeOnlyPaths(tmp, config, target, selected);
  await clearGeneratedFiles(paths.generatedDir);

  const missing = [];
  const generated = [];

  for (const iconName of selected) {
    const relativeSvgPath = filePathForIcon(iconName, config, target);
    const svgPath = path.join(tmp, relativeSvgPath);

    let svgText;
    try {
      svgText = await fs.readFile(svgPath, 'utf8');
    } catch {
      missing.push(iconName);
      continue;
    }

    const { viewBox, inner } = sanitizeSvg(svgText, {
      targetId: target.id,
      iconName,
      sourcePath: relativeSvgPath,
    });
    const className = `${target.classPrefix}${toPascalCase(iconName)}IconComponent`;
    const fileName = `${iconName.replaceAll('_', '-')}.icon.ts`;
    const selector = `${target.selectorPrefix}-${iconName.replaceAll('_', '-')}-icon`;

    await fs.writeFile(
      path.join(paths.generatedDir, fileName),
      componentSource({
        selector,
        className,
        viewBox,
        innerSvg: inner,
        classPrefix: target.classPrefix,
        directivePrefix: target.directivePrefix,
      }),
      'utf8',
    );

    generated.push({ iconName, className, fileName });
  }

  if (generated.length === 0) {
    throw new Error(`No icons were generated for ${target.id}. Check variant suffix and upstream paths.`);
  }

  if (missing.length > 0) {
    await writeLines(missingReportPath, ['Missing icons for target:', target.id, ...missing]);
  } else {
    await removeFileIfExists(missingReportPath);
  }

  const indexContent = `${generated
    .map(({ fileName, className }) => `export { ${className} } from './generated/${fileName.replace(/\.ts$/, '')}';`)
    .join('\n')}

export const MSR_ICON_NAMES = [
${generated.map(({ iconName }) => `  '${iconName}',`).join('\n')}
] as const;

export type MsrIconName = (typeof MSR_ICON_NAMES)[number];
`;

  const componentMapContent = `import { Type } from '@angular/core';
import { MsrIconName } from './index';
${generated
  .map(({ fileName, className }) => `import { ${className} } from './generated/${fileName.replace(/\.ts$/, '')}';`)
  .join('\n')}

export const MSR_ICON_COMPONENTS: Type<unknown>[] = [
${generated.map(({ className }) => `  ${className},`).join('\n')}
];

export const MSR_ICON_COMPONENT_MAP: Record<MsrIconName, Type<unknown>> = {
${generated.map(({ iconName, className }) => `  '${iconName}': ${className},`).join('\n')}
};
`;

  await ensureDir(path.dirname(paths.generatedIndexPath));
  await fs.writeFile(paths.generatedIndexPath, indexContent, 'utf8');
  await fs.writeFile(paths.generatedComponentMapPath, componentMapContent, 'utf8');

  const sha = await runGitRead(['rev-parse', 'HEAD'], tmp);
  const committedAt = await runGitRead(['log', '-1', '--format=%cI', 'HEAD'], tmp);

  const manifest = `export const ICON_MANIFEST = {
  packageName: '${target.packageName}',
  source: {
    owner: '${config.owner}',
    repo: '${config.repo}',
    ref: '${config.ref}',
    resolvedSha: '${sha}',
    resolvedCommittedAt: '${committedAt}',
  },
  variant: {
    fill: ${target.variant.fill},
    wght: ${target.variant.wght},
    grad: ${target.variant.grad},
    opsz: ${target.variant.opsz},
  },
  iconCount: ${generated.length},
} as const;
`;

  await ensureDir(path.dirname(paths.manifestPath));
  await fs.writeFile(paths.manifestPath, manifest, 'utf8');

  console.log(
    `[${target.id}] Generated ${generated.length} icons from ${config.owner}/${config.repo}@${sha}` +
      (missing.length > 0 ? ` (${missing.length} missing; see ${path.relative(repoRoot, missingReportPath)})` : ''),
  );
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const config = JSON.parse(await fs.readFile(configPath, 'utf8'));
  validateUpstreamPolicy(config);
  const targets = Object.values(config.targets ?? {});

  if (targets.length === 0) {
    throw new Error('No targets configured in tools/icons/upstream.json');
  }

  const selectedTargets =
    args.target === 'all' ? targets : targets.filter((target) => target.id === args.target);

  if (selectedTargets.length === 0) {
    throw new Error(`Unknown target "${args.target}". Available targets: ${targets.map((t) => t.id).join(', ')}`);
  }

  for (const target of selectedTargets) {
    await generateForTarget(args, config, target);
  }
}

main().catch((error) => {
  if (error instanceof SvgSanitizationError) {
    console.error(formatSanitizationError(error));
  } else {
    console.error(error);
  }
  process.exitCode = 1;
});
