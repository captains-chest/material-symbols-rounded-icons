const ALLOWED_ELEMENTS = new Set([
  'svg',
  'path',
  'g',
  'defs',
  'clippath',
  'mask',
  'rect',
  'circle',
  'ellipse',
  'line',
  'polyline',
  'polygon',
  'use',
  'lineargradient',
  'radialgradient',
  'stop',
]);

const DENIED_ELEMENTS = new Set([
  'script',
  'iframe',
  'object',
  'embed',
  'foreignobject',
  'audio',
  'video',
  'canvas',
  'image',
  'link',
  'meta',
  'base',
  'form',
  'input',
  'button',
  'textarea',
  'select',
  'option',
  'style',
]);

const ALLOWED_ATTRIBUTES = new Set([
  'xmlns',
  'xmlns:xlink',
  'viewbox',
  'd',
  'fill',
  'stroke',
  'stroke-width',
  'stroke-linecap',
  'stroke-linejoin',
  'stroke-miterlimit',
  'stroke-opacity',
  'fill-rule',
  'clip-rule',
  'opacity',
  'transform',
  'x',
  'y',
  'x1',
  'x2',
  'y1',
  'y2',
  'cx',
  'cy',
  'r',
  'rx',
  'ry',
  'width',
  'height',
  'points',
  'id',
  'class',
  'style',
  'clip-path',
  'mask',
  'href',
  'xlink:href',
  'offset',
  'stop-color',
  'stop-opacity',
]);

const URI_ATTRIBUTES = new Set(['href', 'xlink:href', 'clip-path', 'mask']);
const EXECUTABLE_URI_PATTERN = /(?:javascript|data|vbscript|file|https?):|^\/\//i;
const LOCAL_REFERENCE_PATTERN = /^(?:#[A-Za-z][\w:.-]*|url\(#[A-Za-z][\w:.-]*\))$/;

export class SvgSanitizationError extends Error {
  constructor({ targetId, iconName, sourcePath, violations }) {
    super(`SVG sanitization failed for ${targetId}/${iconName}`);
    this.name = 'SvgSanitizationError';
    this.targetId = targetId;
    this.iconName = iconName;
    this.sourcePath = sourcePath;
    this.violations = violations;
  }
}

const decodeAttributeValue = (value) =>
  value
    .replaceAll('&quot;', '"')
    .replaceAll('&apos;', "'")
    .replaceAll('&amp;', '&')
    .trim();

const pushViolation = (violations, code, detail) => {
  violations.push({ code, detail });
};

const validateUriAttribute = (violations, name, value) => {
  const decoded = decodeAttributeValue(value);
  if (EXECUTABLE_URI_PATTERN.test(decoded) || !LOCAL_REFERENCE_PATTERN.test(decoded)) {
    pushViolation(violations, 'blocked-uri', `${name}=${JSON.stringify(value)}`);
  }
};

export const sanitizeSvg = (svgContent, context) => {
  const violations = [];
  const viewBox = svgContent.match(/\bviewBox=(['"])(.*?)\1/)?.[2] ?? '0 0 24 24';

  const withoutComments = svgContent.replace(/<!--[\s\S]*?-->/g, '');
  const inner = withoutComments.replace(/^[\s\S]*?<svg\b[^>]*>/i, '').replace(/<\/svg>\s*$/i, '').trim();

  for (const match of withoutComments.matchAll(/<\/?\s*([A-Za-z][\w:.-]*)([^>]*)>/g)) {
    const [, rawElementName, rawAttributes] = match;
    const elementName = rawElementName.toLowerCase();

    if (DENIED_ELEMENTS.has(elementName)) {
      pushViolation(violations, 'blocked-element', rawElementName);
      continue;
    }

    if (!ALLOWED_ELEMENTS.has(elementName)) {
      pushViolation(violations, 'unknown-element', rawElementName);
      continue;
    }

    if (match[0].startsWith('</')) continue;

    for (const attrMatch of rawAttributes.matchAll(/([:@A-Za-z_][\w:.-]*)\s*=\s*("[^"]*"|'[^']*')/g)) {
      const rawName = attrMatch[1];
      const name = rawName.toLowerCase();
      const value = attrMatch[2].slice(1, -1);

      if (name.startsWith('on')) pushViolation(violations, 'blocked-event-attribute', rawName);
      if (!ALLOWED_ATTRIBUTES.has(name)) pushViolation(violations, 'unknown-attribute', rawName);
      if (URI_ATTRIBUTES.has(name)) validateUriAttribute(violations, rawName, value);
      if (!name.startsWith('xmlns') && EXECUTABLE_URI_PATTERN.test(decodeAttributeValue(value))) {
        pushViolation(violations, 'blocked-uri', `${rawName}=${JSON.stringify(value)}`);
      }
    }
  }

  if (violations.length > 0) {
    throw new SvgSanitizationError({
      ...context,
      violations: violations.sort((a, b) => `${a.code}:${a.detail}`.localeCompare(`${b.code}:${b.detail}`)),
    });
  }

  return { viewBox, inner };
};

export const formatSanitizationError = (error) =>
  JSON.stringify(
    {
      error: 'svg-sanitization-failed',
      target: error.targetId,
      icon: error.iconName,
      sourcePath: error.sourcePath,
      violations: error.violations,
    },
    null,
    2,
  );
