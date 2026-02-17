import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { URUNLER } from "@/lib/constants";

export const metadata = {
  title: "Ürünler",
  description:
    "Indoor ve outdoor LED ekran çözümleri, kiralık (rental) sistemler ve özel uygulamalar. LED ekran fiyatları, teknik terimler (pixel pitch, IP65) ve montaj süreci hakkında bilgi.",
  keywords:
    "led ekran, led ekran fiyatları, indoor led ekran, outdoor led ekran, kiralık led ekran, rental led ekran, pixel pitch, ip65, led ekran montaj",
};

const urunRozetleri = {
  "indoor-led-ekran": ["P1.2–P4", "Yakın izleme"],
  "outdoor-led-ekran": ["IP65", "5000–8000 cd/m²"],
  "rental-led-ekran": ["Hızlı kurulum", "Etkinlik / Sahne"],
  "dugun-salonu-led-ekran": ["Kiralama", "Organizasyon"],
  "avm-led-ekran": ["Reklam", "Bilgilendirme"],
  "cami-led-ekran": ["Vakit / Vaaz", "İç mekân"],
  "totem-led-ekran": ["Yönlendirme", "Poster / Totem"],
  "transparan-led-ekran": ["Şeffaf", "Vitrin / Cam"],
  "elastik-led-ekran": ["Esnek", "Kavisli yüzey"],
};

export default function UrunlerPage() {
  return (
    <>
      <PageHero
        title="Ürünler"
        description="Kapalı (indoor) ve açık alan (outdoor) LED ekran çözümleri, kiralık (rental) sistemler ve özel uygulamalar. Türkiye genelinde keşif, montaj, devreye alma ve teknik servis hizmeti veriyoruz."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-[#111827] p-6">
            <h2 className="text-lg font-semibold text-white">Pixel Pitch (P) Seçimi</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#D1D5DB]">
              Pixel pitch, görüntü netliğini belirler. Yakın izleme için daha düşük P (P1.2–P3),
              uzak izleme için daha yüksek P (P4–P10) tercih edilir. Mekân ve izleme mesafesine göre öneriyoruz.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#111827] p-6">
            <h2 className="text-lg font-semibold text-white">
              Outdoor için IP65 Koruma
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#D1D5DB]">
              Dış mekân LED ekranlarda IP65, su/toz dayanımı ve uzun ömür için kritiktir. Ayrıca yüksek parlaklık
              (gündüz görünürlük) ve sağlam kabinet yapısı outdoor projelerde standarttır.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#111827] p-6">
            <h2 className="text-lg font-semibold text-white">Kiralık (Rental) Sistemler</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#D1D5DB]">
              Konser, fuar ve etkinlikler için hızlı kurulum-söküm yapılabilen rental kabinet sistemleri sunuyoruz.
              İsteğe bağlı operatör ve teknik destek ile paket kurulum sağlayabiliriz.
            </p>
          </div>
        </section>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {URUNLER.map((urun) => (
            <Link
              key={urun.slug}
              href={`/urunler/${urun.slug}`}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111827] transition hover:border-[#00E5FF]/40 hover:shadow-[0_0_26px_rgba(185,255,0,0.10)]"
            >
              <div className="relative h-56">
                <Image
                  src={urun.image || "/images/products/LED video wall modular panel.webp"}
                  alt={urun.title}
                  fill
                  className="object-cover transition group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                {urunRozetleri[urun.slug] && (
                  <div className="mb-3 flex flex-wrap gap-2">
                    {urunRozetleri[urun.slug].map((etiket, i) => (
                      <span
                        key={`${urun.slug}-${etiket}`}
                        className={[
                          "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium",
                          i % 2 === 0
                            ? "border-[#00E5FF]/30 bg-[#00E5FF]/10 text-[#00E5FF]"
                            : "border-[#B9FF00]/30 bg-[#B9FF00]/10 text-[#B9FF00]",
                        ].join(" ")}
                      >
                        {etiket}
                      </span>
                    ))}
                  </div>
                )}
                <h2 className="text-xl font-semibold text-white group-hover:text-[#00E5FF]">{urun.title}</h2>
                <p className="mt-2 text-[#D1D5DB]">{urun.short}</p>
                <span className="mt-3 inline-block text-sm font-medium text-[#B9FF00]">Detaylı bilgi →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
