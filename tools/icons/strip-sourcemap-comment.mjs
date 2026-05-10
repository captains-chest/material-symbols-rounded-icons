#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';

const repoRoot = process.cwd();

function parseArgs(argv) {
  const args = { dist: [] };
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === '--dist') args.dist.push(argv[++i]);
  }
  return args;
}

async function stripFromDistDir(distDir) {
  const fesmDir = path.join(distDir, 'fesm2022');
  let entries = [];

  try {
    entries = await fs.readdir(fesmDir);
  } catch {
    return 0;
  }

  let changed = 0;
  for (const entry of entries) {
    if (!entry.endsWith('.mjs')) continue;
    const filePath = path.join(fesmDir, entry);
    const source = await fs.readFile(filePath, 'utf8');
    const updated = source.replace(/\n?\/\/\# sourceMappingURL=.*\n?$/m, '\n');
    if (updated !== source) {
      await fs.writeFile(filePath, updated, 'utf8');
      changed += 1;
    }
  }

  return changed;
}

const args = parseArgs(process.argv.slice(2));
const distDirs =
  args.dist.length > 0
    ? args.dist.map((dir) => path.resolve(repoRoot, dir))
    : [
        path.join(repoRoot, 'dist/material-symbols-rounded-icons'),
        path.join(repoRoot, 'dist/material-symbols-rounded-icons-filled'),
      ];

let totalChanged = 0;
for (const distDir of distDirs) {
  totalChanged += await stripFromDistDir(distDir);
}

if (totalChanged > 0) {
  console.log(`Removed sourceMappingURL comments from ${totalChanged} FESM bundle(s).`);
} else {
  console.log('No sourceMappingURL comments found; no changes made.');
}
