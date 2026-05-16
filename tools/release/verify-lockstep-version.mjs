#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const repoRoot = process.cwd();
const tagName = process.argv[2] ?? '';
const expectedVersion = tagName.replace(/^v/, '');

const packagePaths = [
  'projects/material-symbols-rounded-icons/package.json',
  'projects/material-symbols-rounded-icons-filled/package.json',
];

const packages = packagePaths.map((packagePath) => {
  const manifest = JSON.parse(fs.readFileSync(path.join(repoRoot, packagePath), 'utf8'));
  return { packagePath, name: manifest.name, version: manifest.version };
});

const versions = new Set(packages.map(({ version }) => version));
const violations = [];

if (!/^v\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/.test(tagName)) {
  violations.push({ code: 'invalid-tag-format', expected: 'v<semver>', actual: tagName });
}

if (versions.size !== 1) {
  violations.push({ code: 'package-version-mismatch', packages });
}

for (const packageInfo of packages) {
  if (packageInfo.version !== expectedVersion) {
    violations.push({
      code: 'tag-package-version-mismatch',
      package: packageInfo.name,
      expected: expectedVersion,
      actual: packageInfo.version,
    });
  }
}

if (violations.length > 0) {
  console.error(JSON.stringify({ error: 'release-version-policy-violation', violations }, null, 2));
  process.exitCode = 1;
}
