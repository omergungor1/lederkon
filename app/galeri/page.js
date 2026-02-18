import PageHero from "@/components/PageHero";
import GaleriGrid from "@/components/GaleriGrid";
import { galeriGorselleri } from "@/lib/galeri";

export const metadata = {
  title: "Galeri | LED Ekran Projeleri ve Uygulama Örnekleri",
  description:
    "Düğün salonu, cami, AVM, mağaza ve outdoor LED ekran projeleri. Lederkon galeri ve referans uygulamalar.",
  keywords:
    "led ekran galeri, düğün salonu led ekran, cami led ekran, avm led ekran, led ekran projeleri",
};

export default function GaleriPage() {
  return (
    <>
      <PageHero
        title="Galeri"
        description="Düğün salonu, cami, AVM, mağaza ve outdoor LED ekran projelerimiz. Referans uygulamalar ve görsel örnekler."
      />
      <section className="border-t border-white/10 bg-[#111827] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GaleriGrid items={galeriGorselleri} />
        </div>
      </section>
    </>
  );
}
