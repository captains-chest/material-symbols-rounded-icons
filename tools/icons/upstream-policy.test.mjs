import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';

const repoRoot = process.cwd();
const syncScript = path.join(repoRoot, 'tools/icons/sync-material-symbols-rounded.mjs');
const originalConfig = fs.readFileSync(path.join(repoRoot, 'tools/icons/upstream.json'), 'utf8');

const runSyncWithConfig = (config) => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'upstream-policy-'));
  fs.cpSync(repoRoot, tmp, { recursive: true, filter: (source) => !source.includes(`${path.sep}.git`) && !source.includes(`${path.sep}node_modules`) });
  fs.writeFileSync(path.join(tmp, 'tools/icons/upstream.json'), JSON.stringify(config, null, 2));

  return spawnSync(process.execPath, [syncScript, '--target', 'none'], { cwd: tmp, encoding: 'utf8' });
};

test('sync rejects mutable upstream refs before target validation', () => {
  const result = runSyncWithConfig({ ...JSON.parse(originalConfig), ref: 'main' });

  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /upstream-policy-violation/);
  assert.match(result.stderr, /mutable-ref/);
});

test('sync rejects unexpected upstream owner', () => {
  const result = runSyncWithConfig({ ...JSON.parse(originalConfig), owner: 'example' });

  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /unexpected-owner/);
});
