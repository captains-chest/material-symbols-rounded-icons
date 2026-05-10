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
  }

  console.log(`Smoke check passed (${target.id}) for ${files.length} generated icon components.`);
}
