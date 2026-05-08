#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';

const repoRoot = process.cwd();
const generatedDir = path.join(
  repoRoot,
  'projects/material-symbols-rounded-icons/src/lib/icons/generated',
);

const requiredSnippets = [
  "hostDirectives: [MsrIconHostDirective]",
  'msrIconSvg',
  "[attr.aria-hidden]=\"ariaLabel() ? null : 'true'\"",
  '[attr.aria-label]="ariaLabel()"',
  "[attr.role]=\"ariaLabel() ? 'img' : null\"",
];

const files = (await fs.readdir(generatedDir)).filter((file) => file.endsWith('.ts'));
if (files.length === 0) {
  throw new Error('Smoke check failed: no generated icon components found.');
}

for (const file of files) {
  const source = await fs.readFile(path.join(generatedDir, file), 'utf8');
  for (const snippet of requiredSnippets) {
    if (!source.includes(snippet)) {
      throw new Error(`Smoke check failed: ${file} missing snippet: ${snippet}`);
    }
  }
}

console.log(`Smoke check passed for ${files.length} generated icon components.`);
