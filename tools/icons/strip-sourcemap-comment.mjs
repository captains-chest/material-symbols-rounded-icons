#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';

const filePath = path.join(
  process.cwd(),
  'dist/material-symbols-rounded-icons/fesm2022/captains-chest-material-symbols-rounded-icons.mjs',
);

const source = await fs.readFile(filePath, 'utf8');
const updated = source.replace(/\n?\/\/\# sourceMappingURL=.*\n?$/m, '\n');

if (updated !== source) {
  await fs.writeFile(filePath, updated, 'utf8');
  console.log('Removed sourceMappingURL comment from FESM bundle.');
} else {
  console.log('No sourceMappingURL comment found; no changes made.');
}
