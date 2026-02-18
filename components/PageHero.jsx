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
            <div className="flex shrink-0 flex-wrap items-center justify-center gap-6 lg:justify-end">
              <a
                href="mailto:info@lederkon.com"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/90 shadow-[0_0_20px_rgba(0,229,255,0.15)] transition hover:border-[#00E5FF]/50 hover:bg-white/10 hover:text-white"
                aria-label="E-posta gönder"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a
                href="tel:+905327344119"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/90 shadow-[0_0_20px_rgba(0,229,255,0.15)] transition hover:border-[#00E5FF]/50 hover:bg-white/10 hover:text-white"
                aria-label="Ara: 0532 734 41 19"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <a
                href="https://wa.me/905327344119"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/90 shadow-[0_0_20px_rgba(185,255,0,0.12)] transition hover:border-[#B9FF00]/50 hover:bg-white/10 hover:text-white"
                aria-label="WhatsApp ile yaz"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
