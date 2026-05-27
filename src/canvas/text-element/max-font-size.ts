'use client';

import { TextElementType } from '../../model/text-model';

/**
 * Berechnet per Binary Search die größte Schriftgröße,
 * bei der der Text noch in width × height passt.
 */
export function fitFontSize(
  text: string,
  element: TextElementType,
  minSize = 6,
  maxSize = 500,
): number {
  const width  = (element as any).a.width;
  const height = (element as any).a.height;
  const fontFamily = (element as any).fontFamily;
  const lineHeight = (element as any).lineHeight ?? 1.2;
  const letterSpacing = (element as any).letterSpacing ?? 0;

  // Hilfs-Canvas zum Messen
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d')!;

  function measureHeight(size: number): number {
    ctx.font = `${size}px "${fontFamily}"`;
    const lh = (typeof lineHeight === 'number' ? lineHeight : 1.2) * size;
    const words = text.split('\n');
    let lines = 0;
    for (const paragraph of words) {
      if (paragraph === '') { lines++; continue; }
      let line = '';
      for (const word of paragraph.split(' ')) {
        const test = line ? line + ' ' + word : word;
        const w = ctx.measureText(test).width * (1 + letterSpacing);
        if (w > width && line) { lines++; line = word; }
        else { line = test; }
      }
      lines++;
    }
    return lines * lh;
  }

  let lo = minSize, hi = Math.min(maxSize, (element as any).a.fontSize * 3);
  while (lo < hi - 0.5) {
    const mid = (lo + hi) / 2;
    measureHeight(mid) <= height ? (lo = mid) : (hi = mid);
  }
  return Math.floor(lo);
}

/** @deprecated Nur für Rückwärtskompatibilität */
export function getLimitedFontSize({
  oldText,
  newText,
  element,
}: {
  oldText: string;
  newText: string;
  element: TextElementType;
}): number {
  return fitFontSize(newText, element);
}