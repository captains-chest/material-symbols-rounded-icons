import assert from 'node:assert/strict';
import test from 'node:test';

import { sanitizeSvg, SvgSanitizationError } from './svg-sanitizer.mjs';

const context = { targetId: 'outline', iconName: 'safe_icon', sourcePath: 'safe.svg' };

test('sanitizeSvg accepts deterministic static Material Symbols markup', () => {
  const result = sanitizeSvg('<svg viewBox="0 0 24 24"><path d="M1 2h3" fill="none"/></svg>', context);

  assert.deepEqual(result, { viewBox: '0 0 24 24', inner: '<path d="M1 2h3" fill="none"/>' });
});

test('sanitizeSvg rejects active elements', () => {
  assert.throws(
    () => sanitizeSvg('<svg><script>alert(1)</script></svg>', context),
    (error) => error instanceof SvgSanitizationError && error.violations[0].code === 'blocked-element',
  );
});

test('sanitizeSvg rejects event handlers and executable URIs', () => {
  assert.throws(
    () => sanitizeSvg('<svg><path onclick="run()" href="javascript:alert(1)" d="M0 0"/></svg>', context),
    (error) =>
      error instanceof SvgSanitizationError &&
      error.violations.map((violation) => violation.code).includes('blocked-event-attribute') &&
      error.violations.map((violation) => violation.code).includes('blocked-uri'),
  );
});

test('sanitizeSvg permits local fragment URL references', () => {
  const result = sanitizeSvg(
    '<svg><defs><clipPath id="clip"><path d="M0 0"/></clipPath></defs><path clip-path="url(#clip)" d="M0 0"/></svg>',
    context,
  );

  assert.match(result.inner, /clip-path="url\(#clip\)"/);
});
