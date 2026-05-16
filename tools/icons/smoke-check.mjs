#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';

const repoRoot = process.cwd();

const targets = [
  {
    id: 'outline',
    generatedDir: 'projects/material-symbols-rounded-icons/src/lib/icons/generated',
    hostDirectiveSnippet: 'hostDirectives: [MsrIconHostDirective]',
    svgDirectiveSnippet: 'msrIconSvg',
  },
  {
    id: 'filled',
    generatedDir: 'projects/material-symbols-rounded-icons-filled/src/lib/icons/generated',
    hostDirectiveSnippet: 'hostDirectives: [MsrfIconHostDirective]',
    svgDirectiveSnippet: 'msrfIconSvg',
  },
];

const sharedSnippets = [
  "[attr.aria-hidden]=\"ariaLabel() ? null : 'true'\"",
  '[attr.aria-label]="ariaLabel()"',
  "[attr.role]=\"ariaLabel() ? 'img' : null\"",
];

const forbiddenPatterns = [
  { code: 'script-element', pattern: /<\s*\/?\s*script\b/i },
  { code: 'foreign-object-element', pattern: /<\s*\/?\s*foreignObject\b/i },
  { code: 'event-handler-attribute', pattern: /\s+on[a-z]+\s*=/i },
  { code: 'javascript-uri', pattern: /javascript\s*:/i },
  { code: 'data-uri', pattern: /\bdata\s*:/i },
  { code: 'remote-uri', pattern: /(?:https?:)?\/\//i },
];

const findForbiddenPatterns = (source) =>
  forbiddenPatterns.filter(({ pattern }) => pattern.test(source)).map(({ code }) => code).sort();

for (const target of targets) {
  const generatedDir = path.join(repoRoot, target.generatedDir);
  const files = (await fs.readdir(generatedDir)).filter((file) => file.endsWith('.ts'));
  if (files.length === 0) {
    throw new Error(`Smoke check failed (${target.id}): no generated icon components found.`);
  }

  const requiredSnippets = [target.hostDirectiveSnippet, target.svgDirectiveSnippet, ...sharedSnippets];

  for (const file of files) {
    const source = await fs.readFile(path.join(generatedDir, file), 'utf8');
    for (const snippet of requiredSnippets) {
      if (!source.includes(snippet)) {
        throw new Error(`Smoke check failed (${target.id}): ${file} missing snippet: ${snippet}`);
      }
    }

    const forbiddenMatches = findForbiddenPatterns(source);
    if (forbiddenMatches.length > 0) {
      throw new Error(
        JSON.stringify(
          {
            error: 'smoke-forbidden-pattern',
            target: target.id,
            file,
            violations: forbiddenMatches,
          },
          null,
          2,
        ),
      );
    }
  }

  console.log(`Smoke check passed (${target.id}) for ${files.length} generated icon components.`);
}
