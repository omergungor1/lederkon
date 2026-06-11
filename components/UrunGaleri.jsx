"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

export default function UrunGaleri({ title, galleryImages }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length));
  }, [galleryImages.length]);

  const showNext = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % galleryImages.length));
  }, [galleryImages.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, close, showPrev, showNext]);

  if (!galleryImages?.length) return null;

  return (
    <>
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-white">Görsel Galeri</h2>
        <p className="mt-2 text-[#D1D5DB]">
          Ürüne ait örnek uygulama ve kurulum görselleri.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {galleryImages.map((src, i) => (
            <button
              key={`${src}-${i}`}
              type="button"
              onClick={() => setActiveIndex(i)}
              className="group relative aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-xl border border-white/10 bg-[#111827] text-left transition hover:border-[#00E5FF]/30 hover:shadow-[0_0_24px_rgba(185,255,0,0.12)] focus:outline-none focus:ring-2 focus:ring-[#00E5FF] focus:ring-offset-2 focus:ring-offset-[#0B0F1A]"
              aria-label={`${title} galeri ${i + 1} - tam ekran aç`}
            >
              <Image
                src={src}
                alt={`${title} galeri ${i + 1}`}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
                unoptimized
              />
              <span className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-black/50 to-transparent p-3 opacity-0 transition group-hover:opacity-100">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  Tam ekran
                </span>
              </span>
            </button>
          ))}
        </div>
      </section>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} galeri görseli`}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white transition hover:bg-white/20"
            aria-label="Kapat"
          >
            ×
          </button>

          {galleryImages.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white transition hover:bg-white/20"
                aria-label="Önceki görsel"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white transition hover:bg-white/20"
                aria-label="Sonraki görsel"
              >
                ›
              </button>
            </>
          )}

          <div
            className="relative h-[min(85vh,900px)] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[activeIndex]}
              alt={`${title} galeri ${activeIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              unoptimized
              priority
            />
          </div>

          {galleryImages.length > 1 && (
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/70">
              {activeIndex + 1} / {galleryImages.length}
            </p>
          )}
        </div>
      )}
    </>
  );
}
