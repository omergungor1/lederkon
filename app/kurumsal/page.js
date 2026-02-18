import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Kurumsal",
  description:
    "Lederkon hakkında bilgi. LED ekran montaj firması olarak misyonumuz ve vizyonumuz. Profesyonel LED ekran çözümleri.",
  keywords: "led ekran montaj firması, Lederkon, kurumsal, hakkımızda",
};

export default function KurumsalPage() {
  return (
    <>
      <PageHero
        title="Kurumsal"
        description="Lederkon olarak LED ekran montaj ve proje alanında Türkiye'nin güvenilir çözüm ortağıyız."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="mt-0">
          <h2 className="text-2xl font-bold text-white">Hakkımızda</h2>
          <div className="mt-4 space-y-4 text-[#D1D5DB]">
            <p>
              Lederkon, indoor ve outdoor LED ekran sistemlerinin projelendirilmesi, tedariki ve montajı konusunda uzman bir LED ekran montaj firmasıdır. Düğün salonu LED ekran, cami LED ekran, AVM LED ekran ve kurumsal mekân projelerinde yılların deneyimini müşteri memnuniyeti ile birleştiriyoruz.
            </p>
            <p>
              LED ekran fiyatları konusunda şeffaf çalışıyor; her projede müşterinin bütçe ve ihtiyacına uygun çözümler sunuyoruz. Pixel pitch seçiminden montaj sonrası teknik desteğe kadar tüm süreçte yanınızdayız.
            </p>
            <p>
              Türkiye genelinde hizmet veren ekibimiz, düğün salonu led ekran montajından büyük ölçekli AVM ve cami led ekran projelerine kadar geniş bir yelpazede referans projelere imza atmıştır.
            </p>
          </div>
        </section>

        <section id="misyon" className="mt-16 scroll-mt-24">
          <h2 className="text-2xl font-bold text-white">Misyon & Vizyon</h2>
          <div className="mt-6 grid gap-8 sm:grid-cols-2">
            <div className="rounded-xl border border-[#00E5FF]/20 bg-[#111827] p-6">
              <h3 className="text-lg font-semibold text-[#00E5FF]">Misyonumuz</h3>
              <p className="mt-3 text-[#D1D5DB]">
                Müşterilerimize en uygun LED ekran çözümlerini, kaliteli malzeme ve profesyonel montaj ile sunmak. LED ekran fiyatları ve performans dengesinde en iyi değeri sağlamak.
              </p>
            </div>
            <div className="rounded-xl border border-[#B9FF00]/20 bg-[#111827] p-6">
              <h3 className="text-lg font-semibold text-[#B9FF00]">Vizyonumuz</h3>
              <p className="mt-3 text-[#D1D5DB]">
                Türkiye&apos;nin her noktasında tercih edilen, indoor led ekran ve outdoor led ekran projelerinde referans gösterilen bir LED ekran montaj firması olmak.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
