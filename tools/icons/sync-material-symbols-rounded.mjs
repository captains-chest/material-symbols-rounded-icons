#!/usr/bin/env node
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

const repoRoot = process.cwd();
const configPath = path.join(repoRoot, 'tools/icons/upstream.json');
const defaultSampleIconsPath = path.join(repoRoot, 'tools/icons/sample-icons.txt');
const collisionReportPath = path.join(repoRoot, 'tools/icons/collision-report.txt');
const libRoot = path.join(repoRoot, 'projects/material-symbols-rounded-icons/src/lib');
const generatedDir = path.join(libRoot, 'icons/generated');
const generatedIndexPath = path.join(libRoot, 'icons/index.ts');
const generatedComponentMapPath = path.join(libRoot, 'icons/component-map.ts');
const manifestPath = path.join(libRoot, 'generated/icon-manifest.ts');

function parseArgs(argv) {
  const args = { limit: undefined, iconsFile: undefined };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--limit') args.limit = Number(argv[++i]);
    if (arg === '--icons-file') args.iconsFile = path.resolve(repoRoot, argv[++i]);
    if (arg === '--sample') args.iconsFile = defaultSampleIconsPath;
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

function normalizeSvg(svgContent) {
  const viewBox = svgContent.match(/viewBox="([^"]+)"/)?.[1] ?? '0 0 24 24';
  const inner = svgContent
    .replace(/^[\s\S]*?<svg[^>]*>/, '')
    .replace(/<\/svg>\s*$/, '')
    .trim();
  return { viewBox, inner };
}

function componentSource({ selector, className, viewBox, innerSvg }) {
  const escapedInner = innerSvg.replace(/`/g, '\\`').replace(/\$\{/g, '\\\${');
  return `import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: '${selector}',
  standalone: true,
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  template: \
\`<svg
  msrIconSvg
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

async function clearGeneratedFiles() {
  await ensureDir(generatedDir);
  const existing = await fs.readdir(generatedDir);
  await Promise.all(
    existing.filter((name) => name.endsWith('.ts')).map((name) => fs.unlink(path.join(generatedDir, name))),
  );
}

const EXEC_MAX_BUFFER = 1024 * 1024 * 200;

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

function filePathForIcon(iconName, config) {
  return `symbols/web/${iconName}/${config.symbolFamily}/${iconName}${config.variant.fileSuffix}`;
}

async function discoverIconNamesFromTree(tmp, config) {
  const treePaths = await runGitRead(['ls-tree', '-r', '--name-only', config.ref, 'symbols/web'], tmp);
  const iconNames = [];

  for (const line of treePaths.split(/\r?\n/)) {
    const match = line.match(/^symbols\/web\/([^/]+)\/[^/]+\/(.+)$/);
    if (!match) continue;

    const iconName = match[1];
    const fileName = match[2];
    if (line.includes(`/${config.symbolFamily}/`) && fileName === `${iconName}${config.variant.fileSuffix}`) {
      iconNames.push(iconName);
    }
  }

  return [...new Set(iconNames)].sort((a, b) => a.localeCompare(b));
}

async function readIconList(args, tmp, config) {
  if (args.iconsFile) {
    const raw = await fs.readFile(args.iconsFile, 'utf8');
    return raw
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);
  }

  return discoverIconNamesFromTree(tmp, config);
}

async function materializeOnlyPaths(tmp, config, iconNames) {
  await runGit(['sparse-checkout', 'init', '--no-cone'], tmp);

  const sparseFile = path.join(tmp, '.git/info/sparse-checkout');
  const lines = iconNames.map((iconName) => filePathForIcon(iconName, config));
  await fs.writeFile(sparseFile, `${lines.join('\n')}\n`, 'utf8');

  await runGit(['checkout', '--detach', config.ref], tmp);
}

async function writeCollisionReport(lines) {
  await fs.writeFile(collisionReportPath, `${lines.join('\n')}\n`, 'utf8');
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const config = JSON.parse(await fs.readFile(configPath, 'utf8'));

  const tmp = await clonePromisorRepo(config);
  const discoveredOrRequested = await readIconList(args, tmp, config);
  const selected = args.limit ? discoveredOrRequested.slice(0, args.limit) : discoveredOrRequested;

  if (selected.length === 0) throw new Error('No icons selected for generation');

  const collisions = new Map();
  for (const iconName of selected) {
    const selector = `msr-${iconName.replaceAll('_', '-')}-icon`;
    collisions.set(selector, (collisions.get(selector) ?? 0) + 1);
  }

  const duplicates = [...collisions.entries()].filter(([, count]) => count > 1).map(([name]) => name);
  if (duplicates.length > 0) {
    await writeCollisionReport(['Selector collisions detected:', ...duplicates]);
    throw new Error(`Selector collision detected. See ${collisionReportPath}`);
  }

  await materializeOnlyPaths(tmp, config, selected);
  await clearGeneratedFiles();

  const missing = [];
  const generated = [];

  for (const iconName of selected) {
    const relativeSvgPath = filePathForIcon(iconName, config);
    const svgPath = path.join(tmp, relativeSvgPath);

    let svgText;
    try {
      svgText = await fs.readFile(svgPath, 'utf8');
    } catch {
      missing.push(relativeSvgPath);
      continue;
    }

    const { viewBox, inner } = normalizeSvg(svgText);
    const className = `Msr${toPascalCase(iconName)}IconComponent`;
    const fileName = `${iconName.replaceAll('_', '-')}.icon.ts`;
    const selector = `msr-${iconName.replaceAll('_', '-')}-icon`;

    await fs.writeFile(
      path.join(generatedDir, fileName),
      componentSource({ selector, className, viewBox, innerSvg: inner }),
      'utf8',
    );

    generated.push({ iconName, className, fileName });
  }

  if (missing.length > 0) {
    await writeCollisionReport(['Missing expected SVG files:', ...missing]);
    throw new Error(`Missing expected icon SVG files. See ${collisionReportPath}`);
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

  await ensureDir(path.dirname(generatedIndexPath));
  await fs.writeFile(generatedIndexPath, indexContent, 'utf8');
  await fs.writeFile(generatedComponentMapPath, componentMapContent, 'utf8');

  const sha = await runGitRead(['rev-parse', 'HEAD'], tmp);
  const committedAt = await runGitRead(['log', '-1', '--format=%cI', 'HEAD'], tmp);

  const manifest = `export const ICON_MANIFEST = {
  packageName: '@captains-chest/material-symbols-rounded-icons',
  source: {
    owner: '${config.owner}',
    repo: '${config.repo}',
    ref: '${config.ref}',
    resolvedSha: '${sha}',
    resolvedCommittedAt: '${committedAt}',
  },
  variant: {
    fill: ${config.variant.fill},
    wght: ${config.variant.wght},
    grad: ${config.variant.grad},
    opsz: ${config.variant.opsz},
  },
  iconCount: ${generated.length},
} as const;
`;

  await ensureDir(path.dirname(manifestPath));
  await fs.writeFile(manifestPath, manifest, 'utf8');

  console.log(`Generated ${generated.length} icons from ${config.owner}/${config.repo}@${sha}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
