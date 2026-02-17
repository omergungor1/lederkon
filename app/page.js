import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import TeklifForm from "@/components/TeklifForm";
import JsonLd from "@/components/JsonLd";
import { URUNLER, SITE_URL } from "@/lib/constants";
import { projeler } from "@/lib/projeler";

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
          // src="/led-ekran-home-banner.webp"
          src="/images/hero/lederkon-6.jpeg"
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

      <section className="border-t border-white/10 bg-[#0B0F1A] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
            Ürün Kategorileri
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[#D1D5DB]">
            İhtiyacınıza uygun indoor led ekran, outdoor led ekran ve özel uygulama çözümleri.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {URUNLER.map((item) => (
              <Link
                key={item.slug}
                href={`/urunler/${item.slug}`}
                className="block overflow-hidden rounded-xl border border-white/10 bg-[#0B0F1A] transition hover:border-[#00E5FF]/30"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#D1D5DB]">{item.short}</p>
                </div>
              </Link>
            ))}
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
            Örnek Uygulamalar
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[#D1D5DB]">
            Tamamladığımız düğün salonu led ekran, cami led ekran ve avm led ekran projeleri.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3" id="ornek-uygulamalar">
            {projeler.map((proje) => (
              <div
                key={proje.id}
                className="group block overflow-hidden rounded-xl border border-white/10 bg-[#0B0F1A] transition hover:border-[#00E5FF]/40"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={proje.image}
                    alt={proje.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Masaüstü: hover'da siyah katman + başlık + açıklama */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 p-4 opacity-0 transition duration-300 group-hover:opacity-100 lg:flex"
                    aria-hidden
                  >
                    <span className="text-center text-lg font-semibold text-white">
                      {proje.title}
                    </span>
                    <span className="mt-2 text-center text-sm text-[#D1D5DB]">
                      {proje.description}
                    </span>
                  </div>
                </div>
                {/* Mobil: hover yok, başlık + kısa açıklama altta görünsün */}
                <div className="border-t border-white/10 bg-[#0B0F1A] px-4 py-3 lg:hidden">
                  <h3 className="text-sm font-semibold text-white">{proje.title}</h3>
                  <p className="mt-1 line-clamp-2 text-xs text-[#D1D5DB]">{proje.description}</p>
                </div>
              </div>
            ))}
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
