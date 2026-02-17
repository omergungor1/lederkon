"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const SLIDE_DURATION = 5000;

export default function HeroSlider({ slides }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(t);
  }, [slides.length]);

  const go = (index) => setCurrent((index + slides.length) % slides.length);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#111827] shadow-xl">
      <div className="relative aspect-[4/3] w-full sm:aspect-video">
        {slides.map((slide, i) => (
          <div
            key={slide.image + i}
            className={`absolute inset-0 transition-opacity duration-500 ${
              i === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            aria-hidden={i !== current}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white sm:p-6">
              <h3 className="text-lg font-bold sm:text-xl">{slide.title}</h3>
              <p className="mt-1 text-sm text-[#D1D5DB] line-clamp-2 sm:line-clamp-none">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => go(current - 1)}
        className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-[#00E5FF] hover:text-[#0B0F1A] sm:left-4"
        aria-label="Önceki slayt"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => go(current + 1)}
        className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-[#00E5FF] hover:text-[#0B0F1A] sm:right-4"
        aria-label="Sonraki slayt"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="flex justify-center gap-2 border-t border-white/10 bg-[#0B0F1A]/80 px-4 py-3">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${
              i === current
                ? "w-6 bg-[#00E5FF]"
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Slayt ${i + 1}`}
            aria-current={i === current}
          />
        ))}
      </div>
    </div>
  );
}
