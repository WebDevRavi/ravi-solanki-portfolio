'use client';

const GLYPHS = '0123456789ABCDEF!@#$%&*<>~_';

export type ScrambleOptions =
  | number
  | {
      durationMs?: number;
      fps?: number;
      onComplete?: () => void;
    };

export function scrambleText(
  originalText: string,
  onUpdate: (current: string) => void,
  options: ScrambleOptions = 600
) {
  let duration = 600;
  let onComplete: (() => void) | undefined;

  if (typeof options === 'number') {
    duration = options;
  } else if (options) {
    if (options.durationMs) duration = options.durationMs;
    if (options.onComplete) onComplete = options.onComplete;
  }

  const steps = 15;
  const stepDuration = duration / steps;
  let step = 0;

  const interval = setInterval(() => {
    step++;
    const progress = step / steps;
    const revealedLength = Math.floor(progress * originalText.length);

    const result = originalText
      .split('')
      .map((char, index) => {
        if (index < revealedLength) return originalText[index];
        if (char === ' ' || char === '·' || char === '/') return char;
        return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      })
      .join('');

    onUpdate(result);

    if (step >= steps) {
      clearInterval(interval);
      onUpdate(originalText);
      if (onComplete) onComplete();
    }
  }, stepDuration);

  return () => clearInterval(interval);
}
