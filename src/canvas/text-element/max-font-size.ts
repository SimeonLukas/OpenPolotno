'use client';

import Konva from 'konva';
import { TextElementType } from '../../model/text-model';

export function getLimitedFontSize({
  oldText,
  newText,
  element,
}: {
  oldText: string;
  newText: string;
  element: TextElementType;
}): number {
  // Only limit if new text is dramatically longer than old
  if (newText.length / Math.max(20, oldText.length) < 4) {
    return (element as any).fontSize;
  }

  const area = (element as any).width * (element as any).page.computedHeight / newText.length;
  const suggested = 1.5 * Math.sqrt(area);
  return Math.min((element as any).fontSize, Math.max(5, Math.round(suggested)));
}

/**
 * Binary-search for the largest font size at which `text` still fits
 * inside the box defined by `width` × `height`.
 *
 * Uses a temporary off-screen Konva.Text node for measurement so the
 * result is pixel-perfect and consistent with what Konva renders.
 *
 * @param text          Plain text (no HTML tags)
 * @param width         Box width  (pixels, element coordinate space)
 * @param height        Box height (pixels, element coordinate space)
 * @param fontFamily    Font family string, e.g. `"Roboto"`
 * @param lineHeight    Numeric line-height multiplier (e.g. 1.2)
 * @param fontStyle     Combined font-style + weight string, e.g. `"italic bold"`
 * @param letterSpacingEm  Letter-spacing in **em** units (same as element.letterSpacing)
 * @param padding       Optional inner padding (default 0)
 * @param minFontSize   Lower bound for the search (default 4 px)
 * @param maxFontSize   Upper bound for the search (default 400 px).
 *                      Pass the element's current / design font size here so
 *                      the function never grows the text beyond that value.
 */
export function getFittedFontSize({
  text,
  width,
  height,
  fontFamily,
  lineHeight,
  fontStyle,
  letterSpacingEm,
  padding = 0,
  minFontSize = 4,
  maxFontSize = 400,
}: {
  text: string;
  width: number;
  height: number;
  fontFamily: string;
  lineHeight: number;
  fontStyle: string;
  letterSpacingEm: number;
  padding?: number;
  minFontSize?: number;
  maxFontSize?: number;
}): number {
  if (!text || width <= 0 || height <= 0) return maxFontSize;

  const innerW = Math.max(1, width  - 2 * padding);
  const innerH = Math.max(1, height - 2 * padding);

  // Temporary measurement node – never added to any stage.
  const probe = new Konva.Text({
    text,
    width: innerW,
    fontFamily: `"${fontFamily}"`,
    fontStyle,
    lineHeight,
    listening: false,
    visible: false,
  });

  /** Does the text fit at the given font size? */
  function fits(size: number): boolean {
    probe.fontSize(size);
    probe.letterSpacing(letterSpacingEm * size);
    return probe.height() <= innerH;
  }

  let lo = minFontSize;
  let hi = maxFontSize;

  // Fast path: current max already fits → return it unchanged.
  if (fits(hi)) {
    probe.destroy();
    return hi;
  }

  // Binary search for the largest size that still fits.
  while (hi - lo > 1) {
    const mid = Math.floor((lo + hi) / 2);
    if (fits(mid)) lo = mid;
    else hi = mid;
  }

  probe.destroy();
  return lo;
}