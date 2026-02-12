import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import TeklifForm from "@/components/TeklifForm";
import JsonLd from "@/components/JsonLd";
import { URUNLER } from "@/lib/constants";
import { SITE_URL } from "@/lib/constants";

const hizmetler = [
  { title: "Indoor LED Ekran", desc: "Kapalı mekânlar için yüksek çözünürlüklü LED ekran montajı.", icon: "🏢" },
  { title: "Outdoor LED Ekran", desc: "Açık hava ve reklam panoları için dayanıklı LED sistemleri.", icon: "🌆" },
  { title: "Düğün Salonu", desc: "Düğün ve özel günler için profesyonel LED ekran kiralama.", icon: "💒" },
  { title: "AVM Ekranları", desc: "Alışveriş merkezleri için dijital reklam ve bilgilendirme ekranları.", icon: "🛒" },
  { title: "Cami LED Ekran", desc: "Cami ve ibadethaneler için vaaz ve bilgi ekranı çözümleri.", icon: "🕌" },
  { title: "Totem & Bilgi Ekranı", desc: "Yönlendirme ve bilgilendirme totem LED ekranları.", icon: "📺" },
];

const nedenler = [
  { title: "Uzman Ekip", desc: "Yıllarca sektör deneyimine sahip montaj ve proje ekibi." },
  { title: "Garanti & Servis", desc: "Montaj sonrası garanti ve hızlı teknik destek." },
  { title: "Rekabetçi Fiyat", desc: "LED ekran fiyatları konusunda şeffaf ve rekabetçi teklifler." },
  { title: "Zamanında Teslimat", desc: "Proje planına uygun, zamanında montaj ve devreye alma." },
];

const surec = [
  { step: 1, title: "İletişim", desc: "İhtiyacınızı bize iletin, ücretsiz keşif ve ön teklif alın." },
  { step: 2, title: "Teklif", desc: "Ölçü ve kullanım alanına göre detaylı teklif hazırlanır." },
  { step: 3, title: "Montaj", desc: "Uzman ekip tarafından profesyonel montaj yapılır." },
  { step: 4, title: "Devreye Alma", desc: "Test ve eğitim sonrası sistem teslim edilir." },
];

const projelerHome = [
  { title: "Düğün Salonu LED Ekran", category: "dugun", image: "/images/gallery/wedding-1.webp", slug: "dugun-salonu" },
  { title: "AVM İç Mekan Ekran", category: "avm", image: "/images/gallery/mall-1.png", slug: "avm" },
  { title: "Cami Bilgi ve Vakit Ekranı", category: "cami", image: "/images/gallery/cami-1.jpg", slug: "cami" },
  { title: "Mağaza Vitrin LED", category: "magaza", image: "/images/gallery/store-1.jpg", slug: "magaza" },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Lederkon",
  description: "Profesyonel LED ekran montaj ve proje firması. Indoor, outdoor, düğün salonu, cami ve AVM LED ekran çözümleri.",
  url: SITE_URL,
  telephone: "+90-532-123-45-67",
  address: {
    "@type": "PostalAddress",
    addressCountry: "TR",
    addressLocality: "İstanbul",
  },
  areaServed: "TR",
  priceRange: "$$",
};

export default function Home() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <section className="relative min-h-[85vh] overflow-hidden bg-[#0B0F1A] py-28 sm:py-36 lg:py-48 xl:py-56">
        <Image
          src="/led-ekran-home-banner.webp"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0B0F1A]/70" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.12)_0%,transparent_70%)]" aria-hidden />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Profesyonel LED Ekran Çözümleri
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#D1D5DB]">
            Düğün salonu, cami, AVM ve kurumsal mekânlar için indoor ve outdoor LED ekran montajı.
            LED ekran fiyatları ve proje teklifi için hemen iletişime geçin.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="tel:+905327344119" variant="primary">
              Hemen Ara
            </Button>
            <Button href="/iletisim#teklif" variant="secondary">
              Teklif Al
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#111827] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
            Hizmet Verilen Alanlar
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[#D1D5DB]">
            LED ekran montaj firması olarak kapalı ve açık alan projelerinde uzmanız.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hizmetler.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-[#0B0F1A] p-6 transition hover:border-[#00E5FF]/30"
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-[#D1D5DB]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0B0F1A] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
            Ürün Kategorileri
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[#D1D5DB]">
            İhtiyacınıza uygun indoor led ekran, outdoor led ekran ve özel uygulama çözümleri.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {URUNLER.map((urun) => {
              const imgMap = {
                "indoor-led-ekran": "/images/products/Indoor LED panel close up.jpg",
                "outdoor-led-ekran": "/images/products/Outdoor LED cabinet back side.jpg",
                "dugun-salonu-led-ekran": "/images/gallery/wedding-1.webp",
                "avm-led-ekran": "/images/gallery/mall-1.png",
                "cami-led-ekran": "/images/gallery/cami-1.jpg",
                "totem-led-ekran": "/images/products/LED poster display.webp",
              };
              return (
                <Link
                  key={urun.slug}
                  href={`/urunler/${urun.slug}`}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#111827] transition hover:border-[#00E5FF]/40"
                >
                  <div className="relative h-48 bg-[#0B0F1A]">
                    <Image
                      src={imgMap[urun.slug] || "/images/products/LED video wall modular panel.webp"}
                      alt={urun.title}
                      fill
                      className="object-cover opacity-80 transition group-hover:opacity-100"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] to-transparent" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-white group-hover:text-[#00E5FF]">{urun.title}</h3>
                    <p className="mt-1 text-sm text-[#D1D5DB]">{urun.short}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#111827] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
            Neden Lederkon?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[#D1D5DB]">
            LED ekran montaj firması olarak kalite ve güveni ön planda tutuyoruz.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {nedenler.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#00E5FF]/20 bg-[#0B0F1A] p-6 text-center"
              >
                <h3 className="font-semibold text-[#00E5FF]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#D1D5DB]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0B0F1A] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
            Süreç Nasıl İşliyor?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[#D1D5DB]">
            Tekliften montaja kadar şeffaf ve düzenli bir süreç.
          </p>
          <div className="relative mt-12 flex flex-col gap-8 sm:flex-row sm:flex-wrap lg:flex-nowrap lg:gap-0">
            {/* Tek çizgi: tüm dairelerin ortasından geçer, dairelerin altında kalır */}
            <div
              className="absolute left-0 right-0 top-6 hidden h-0.5 bg-[#00E5FF]/30 lg:block"
              style={{ left: "12.5%", right: "12.5%" }}
              aria-hidden
            />
            {surec.map((item) => (
              <div
                key={item.step}
                className="relative z-10 flex flex-1 basis-0 flex-col items-center text-center lg:min-w-0"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00E5FF] text-lg font-bold text-[#0B0F1A]">
                  {item.step}
                </div>
                <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-[#D1D5DB]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#111827] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
            Projelerden Örnekler
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[#D1D5DB]">
            Tamamladığımız düğün salonu led ekran, cami led ekran ve avm led ekran projeleri.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {projelerHome.map((proje) => (
              <Link
                key={proje.title}
                href="/projeler"
                className="group overflow-hidden rounded-xl border border-white/10 bg-[#0B0F1A] transition hover:border-[#00E5FF]/30"
              >
                <div className="relative h-48">
                  <Image
                    src={proje.image}
                    alt={proje.title}
                    fill
                    className="object-cover transition group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-white">{proje.title}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/projeler" variant="secondary">
              Tüm Projeleri Gör
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0B0F1A] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ücretsiz Teklif Alın
            </h2>
            <p className="mt-4 text-[#D1D5DB]">
              LED ekran fiyatları ve proje teklifi için formu doldurun, size özel teklif hazırlayalım.
            </p>
            <div className="mt-10 w-full">
              <TeklifForm id="ana-sayfa-teklif" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
