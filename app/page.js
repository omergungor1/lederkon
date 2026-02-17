import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import TeklifForm from "@/components/TeklifForm";
import JsonLd from "@/components/JsonLd";
import { URUNLER, SITE_URL } from "@/lib/constants";
import { projeler } from "@/lib/projeler";

const sssListe = [
  {
    soru: "LED ekran fiyatları nasıl hesaplanır?",
    cevap:
      "LED ekran fiyatları genelde metrekare (m²), pixel pitch (çözünürlük), indoor/outdoor sınıfı, parlaklık, kabinet tipi, montaj altyapısı ve kurulum/servis kapsamına göre belirlenir. Proje ölçüsü ve kullanım alanına göre ücretsiz keşif sonrası net teklif hazırlanır.",
  },
  {
    soru: "Pixel pitch nedir? Hangi pixel pitch seçilmeli?",
    cevap:
      "Pixel pitch, LED’ler arası mesafedir ve görüntü netliğini doğrudan etkiler. İzleme mesafesi yakınsa (ör. showroom, toplantı salonu) daha düşük pitch (P2–P3) tercih edilir; mesafe arttıkça (AVM, outdoor) daha yüksek pitch (P4–P6+) yeterli olabilir. En doğru seçim için izleme mesafesi ve içerik tipine bakılır.",
  },
  {
    soru: "Indoor ve outdoor LED ekran arasındaki fark nedir?",
    cevap:
      "Outdoor LED ekranlar yüksek parlaklık, IP koruma (su/toz dayanımı) ve hava koşullarına uygun kabinet yapısına sahiptir. Indoor LED ekranlar ise daha düşük parlaklıkla daha yüksek görüntü kalitesi ve yakın mesafe izleme için optimize edilir. Kullanım alanına göre doğru sınıf seçimi performans ve maliyeti belirler.",
  },
  {
    soru: "LED ekran montajı ne kadar sürer?",
    cevap:
      "Montaj süresi ekran ölçüsü, montaj tipi (duvar, asma, truss), elektrik/çelik konstrüksiyon ihtiyacı ve saha koşullarına göre değişir. Küçük-orta ölçekli projeler çoğunlukla 1–3 gün içinde tamamlanır; büyük ölçekli projelerde keşif sonrası net takvim planlanır.",
  },
  {
    soru: "Kiralık (rental) LED ekran mı, sabit kurulum mu daha avantajlı?",
    cevap:
      "Etkinlik, konser, fuar ve kısa süreli organizasyonlar için kiralık (rental) LED ekran hızlı kurulum ve esneklik sağlar. Sürekli kullanım (AVM, cami, mağaza, kurumsal) için sabit montaj daha uzun vadede verimlidir. Kullanım süresi ve hedefe göre en doğru modeli öneriyoruz.",
  },
  {
    soru: "Türkiye geneline hizmet veriyor musunuz?",
    cevap:
      "Evet. Lederkon olarak Türkiye genelinde keşif, projelendirme, montaj, devreye alma ve teknik servis hizmeti veriyoruz. Lokasyon ve proje büyüklüğüne göre ekip ve lojistik planlaması yapıyoruz.",
  },
  {
    soru: "LED ekran bakım ve teknik servis hizmeti var mı?",
    cevap:
      "Evet. Periyodik bakım, modül/power supply değişimi, kontrol kartı ve kablolama kontrolleri ile arıza giderme hizmetleri sunuyoruz. İsteğe bağlı bakım sözleşmesi ve hızlı servis seçenekleri mevcuttur.",
  },
  {
    soru: "Garanti ve yedek parça süreci nasıl işliyor?",
    cevap:
      "Kurulum sonrası garanti kapsamı proje teklifinde netleştirilir. Arıza durumunda önce hızlı teşhis yapılır; modüler yapı sayesinde ekranın tamamı değil ilgili parça değiştirilir. Yedek parça ve servis süreçlerini minimum kesintiyle yönetiyoruz.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: sssListe.map((item) => ({
    "@type": "Question",
    name: item.soru,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.cevap,
    },
  })),
};

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
      <JsonLd data={faqJsonLd} />
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
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.12)_0%,rgba(185,255,0,0.08)_35%,transparent_70%)]"
          aria-hidden
        />
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
            <Button href="/iletisim#teklif" variant="secondary" className="border-[#B9FF00] text-[#B9FF00] border-2">
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
                <h3 className="font-semibold text-[#B9FF00]">{item.title}</h3>
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
              className="absolute left-0 right-0 top-6 hidden h-0.5 bg-[linear-gradient(90deg,rgba(0,229,255,0.35),rgba(185,255,0,0.35))] lg:block"
              style={{ left: "12.5%", right: "12.5%" }}
              aria-hidden
            />
            {surec.map((item) => (
              <div
                key={item.step}
                className="relative z-10 flex flex-1 basis-0 flex-col items-center text-center lg:min-w-0"
              >
                <div
                  className={[
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-bold text-[#0B0F1A]",
                    item.step % 2 === 0 ? "bg-[#B9FF00]" : "bg-[#00E5FF]",
                  ].join(" ")}
                >
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
                className="group block overflow-hidden rounded-xl border border-white/10 bg-[#0B0F1A] transition hover:border-[#00E5FF]/40 hover:shadow-[0_0_24px_rgba(185,255,0,0.10)]"
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
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
            Sık Sorulan Sorular (LED Ekran)
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-[#D1D5DB]">
            LED ekran montaj, bakım, teknik servis ve kiralama süreçleriyle ilgili en çok sorulan soruların kısa yanıtları.
            Türkiye geneli hizmet için teklif alabilirsiniz.
          </p>

          <div className="mt-12 grid gap-4 sm:gap-6 lg:grid-cols-2">
            {sssListe.map((item) => (
              <details
                key={item.soru}
                className="group rounded-xl border border-white/10 bg-[#111827] p-5 transition hover:border-[#00E5FF]/30 hover:shadow-[0_0_24px_rgba(185,255,0,0.08)]"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span className="text-base font-semibold text-white">
                    {item.soru}
                  </span>
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white/5 text-[#B9FF00]">
                    +
                  </span>
                </summary>
                <div className="mt-3 text-sm leading-relaxed text-[#D1D5DB]">
                  {item.cevap}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
            <Button href="/iletisim#teklif" variant="primary">
              Ücretsiz Teklif Al
            </Button>
            <Button href="tel:+905327344119" variant="secondary">
              Hemen Ara
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
