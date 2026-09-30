'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { CreativeImage } from '@/data/projects';

interface CreativeLightboxProps {
  image: CreativeImage | null;
  images: CreativeImage[];
  onClose: () => void;
  onSelect: (img: CreativeImage) => void;
}

export function CreativeLightbox({
  image,
  images,
  onClose,
  onSelect,
}: CreativeLightboxProps) {
  useEffect(() => {
    if (!image) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        const idx = images.findIndex((img) => img.id === image.id);
        if (idx !== -1 && idx < images.length - 1) {
          onSelect(images[idx + 1]);
        }
      }
      if (e.key === 'ArrowLeft') {
        const idx = images.findIndex((img) => img.id === image.id);
        if (idx > 0) {
          onSelect(images[idx - 1]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [image, images, onClose, onSelect]);

  if (!image) return null;

  const currentIndex = images.findIndex((img) => img.id === image.id);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl transition-all sm:p-8"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[95vh] w-full max-w-6xl flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="mb-3 flex w-full items-center justify-between border-b border-[var(--border)] pb-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-[var(--yellow)]">
              {image.title}
            </span>
            <span className="font-mono text-[10px] text-[var(--muted)]">
              {image.category}
            </span>
            <span className="rounded border border-[var(--border)] bg-[var(--surface)] px-2 py-0.5 font-mono text-[9px] text-[var(--muted-dark)]">
              {image.dimensions}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-[var(--muted)]">
              {currentIndex + 1} / {images.length}
            </span>
            <button
              onClick={onClose}
              className="rounded border border-[var(--border)] bg-[var(--surface)] px-3 py-1 font-mono text-xs text-[var(--muted)] transition-colors hover:border-[var(--yellow)] hover:text-[var(--text)]"
            >
              ESC ✕
            </button>
          </div>
        </div>

        {/* Main Display Image */}
        <div className="relative aspect-[16/10] max-h-[75vh] w-full overflow-hidden rounded-lg border border-[var(--border)] bg-black">
          <Image
            src={image.src}
            alt={image.title}
            fill
            className="object-contain"
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
          />
        </div>

        {/* Bottom Details & Nav Bar */}
        <div className="mt-3 flex w-full items-center justify-between">
          <p className="font-mono text-xs text-[var(--muted)]">
            {image.description}
          </p>

          <div className="flex items-center gap-2">
            <button
              disabled={currentIndex <= 0}
              onClick={() => onSelect(images[currentIndex - 1])}
              className="rounded border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 font-mono text-xs text-[var(--text)] transition-colors hover:border-[var(--yellow)] disabled:opacity-30"
              aria-label="Previous image"
            >
              ← PREV
            </button>
            <button
              disabled={currentIndex >= images.length - 1}
              onClick={() => onSelect(images[currentIndex + 1])}
              className="rounded border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 font-mono text-xs text-[var(--text)] transition-colors hover:border-[var(--yellow)] disabled:opacity-30"
              aria-label="Next image"
            >
              NEXT →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
