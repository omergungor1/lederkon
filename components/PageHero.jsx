export default function PageHero({ title, description, variant = "default" }) {
  const isIletisim = variant === "iletisim";

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#0B0F1A]">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(0,229,255,0.08)_0%,transparent_50%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_right_bottom,rgba(185,255,0,0.06)_0%,transparent_45%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-[#D1D5DB]">
              {description}
            </p>
          </div>
          {isIletisim && (
            <div className="flex shrink-0 flex-wrap items-center justify-center gap-6 lg:justify-end" aria-hidden>
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/90 shadow-[0_0_20px_rgba(0,229,255,0.15)]">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/90 shadow-[0_0_20px_rgba(0,229,255,0.15)]">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/90 shadow-[0_0_20px_rgba(185,255,0,0.12)]">
                <span className="text-xl font-bold">@</span>
              </span>
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/90 shadow-[0_0_20px_rgba(185,255,0,0.12)]">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
