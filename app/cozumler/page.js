import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import IletisimTalepCTA from "@/components/IletisimTalepCTA";
import { COZUMLER } from "@/lib/cozumler";

export const metadata = {
  title: "Çözümler | LED Ekran Hizmetleri ve Uygulama Çözümleri",
  description:
    "Led reklam ekranı, 3D LED ekran, kiralık LED ekran, dış mekân LED ekran, LED afiş ekranı ve ticari LED ekran çözümleri. Lederkon.",
  keywords:
    "led ekran çözümleri, led reklam ekranı, kiralık led ekran, dış mekan led ekran, led afiş ekranı, ticari led ekran",
};

export default function CozumlerPage() {
  return (
    <>
      <PageHero
        title="Çözümler"
        description="LED ekran hizmetleri kapsamında sunduğumuz tüm çözümler. Reklam, bilgilendirme, etkinlik ve kurumsal projeler için LED ekran çözümleri."
      />
      <section className="border-t border-white/10 bg-[#111827] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {COZUMLER.map((cozum) => (
              <Link
                key={cozum.slug}
                href={`/cozumler/${cozum.slug}`}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0B0F1A] transition hover:border-[#00E5FF]/40 hover:shadow-[0_0_26px_rgba(185,255,0,0.10)]"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={cozum.image}
                    alt={cozum.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-semibold text-white group-hover:text-[#00E5FF]">
                    {cozum.title}
                  </h2>
                  <p className="mt-2 text-sm text-[#D1D5DB] line-clamp-3">
                    {cozum.description}
                  </p>
                  <span className="mt-3 inline-block text-sm font-medium text-[#B9FF00]">
                    Detaylı bilgi →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <IletisimTalepCTA />
    </>
  );
}
