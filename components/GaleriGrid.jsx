"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";

export default function GaleriGrid({ items }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);

  const open = (index) => setSelectedIndex(index);
  const close = () => setSelectedIndex(null);

  const goPrev = useCallback(() => {
    setSelectedIndex((i) => (i <= 0 ? items.length - 1 : i - 1));
  }, [items.length]);

  const goNext = useCallback(() => {
    setSelectedIndex((i) => (i >= items.length - 1 ? 0 : i + 1));
  }, [items.length]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
      if (selectedIndex === null) return;
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedIndex, goPrev, goNext]);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [selectedIndex]);

  const onTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const onTouchEnd = (e) => {
    const x = e.changedTouches[0].clientX;
    const diff = touchStartX - x;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
    setTouchStartX(null);
  };

  const current = selectedIndex !== null ? items[selectedIndex] : null;

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3" id="galeri">
        {items.map((item, index) => (
          <article
            key={`${item.src}-${index}`}
            className="group block overflow-hidden rounded-xl border border-white/10 bg-[#0B0F1A] transition hover:border-[#00E5FF]/40 hover:shadow-[0_0_24px_rgba(185,255,0,0.10)]"
          >
            <button
              type="button"
              className="relative block w-full text-left"
              onClick={() => open(index)}
              aria-label={`${item.title} - görseli büyüt`}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  title={item.title}
                />
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 p-4 opacity-0 transition duration-300 group-hover:opacity-100 lg:flex"
                  aria-hidden
                >
                  <span className="text-center text-lg font-semibold text-white">
                    {item.title}
                  </span>
                  <span className="mt-2 text-center text-sm text-[#D1D5DB]">
                    {item.description}
                  </span>
                </div>
              </div>
            </button>
            {/* Masaüstü: hover overlay. Mobil: sadece galeri (görsel), başlık/açıklama lightbox'ta tam yazıyor */}
            <div className="hidden border-t border-white/10 bg-[#0B0F1A] px-4 py-3 lg:block">
              <h3 className="text-sm font-semibold text-white">{item.title}</h3>
              <p className="mt-1 text-xs text-[#D1D5DB]">{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox: Google Görseller gibi - tüm satır, altında tam başlık ve açıklama, kaydırma */}
      {current && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-black/95"
          role="dialog"
          aria-modal="true"
          aria-label="Görsel galerisi"
          onClick={close}
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Kapat"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-4"
            aria-label="Önceki görsel"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-4"
            aria-label="Sonraki görsel"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            className="relative z-10 flex flex-1 flex-col overflow-auto"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-4 py-16 sm:px-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Görsel: tüm satırı kaplar, altında tam başlık ve açıklama */}
              <div className="relative w-full flex-shrink-0 overflow-hidden rounded-lg bg-[#111827]">
                <div className="relative aspect-[4/3] w-full sm:aspect-video">
                  <Image
                    src={current.src}
                    alt={current.title}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority={selectedIndex !== null}
                  />
                </div>
              </div>
              <div className="mt-6 w-full border-t border-white/10 pt-6 text-white">
                <h2 className="text-xl font-bold sm:text-2xl">{current.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#D1D5DB] sm:text-base">
                  {current.description}
                </p>
                <p className="mt-4 text-xs text-white/60">
                  {selectedIndex + 1} / {items.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
