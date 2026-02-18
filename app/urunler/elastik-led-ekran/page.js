import UrunSayfaSablon from "@/components/UrunSayfaSablon";
import { SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";

export const metadata = {
  title: "Esnek LED Ekran",
  description:
    "Kavisli yüzey ve özel formatta esnek (elastik) LED ekran çözümleri. Silindirik, yuvarlak ve eğrisel montaj. Esnek LED ekran fiyatları.",
  keywords: "esnek led ekran, elastik led ekran, kavisli led ekran, curved led, silindirik led ekran, led ekran montaj",
};

const galleryImages = [
  "/images/solutions/elastik-sanatsal-led-uygulama.webp",
  "/images/product-list/LED-flexible-screen.jpg",
];

const teknikOzellikler = [
  "Eğilebilir (flexible) modül yapısı",
  "Belirli eğrilik yarıçapına kadar kavisli montaj",
  "Pixel pitch: P2.5 – P4 (iç mekân)",
  "Silindirik, yuvarlak ve özel form uygulama",
  "Hafif ve ince modül",
  "İçerik yönetim ve video duvar desteği",
];

const kullanimAlanlari = [
  "Kavisli duvar ve tavan uygulaması",
  "Silindirik sütun ve kolon ekranı",
  "Fuar standı ve özel form pano",
  "Showroom ve mağaza özel tasarım",
  "Stadyum ve arena eğrisel ekran",
  "Otomotiv ve retail özel uygulama",
];

const sss = [
  {
    soru: "Esnek LED ekran fiyatları neye göre hesaplanır?",
    cevap:
      "Metrekare, eğrilik yarıçapı (R değeri), pixel pitch ve montaj zorluğu fiyatı etkiler. Özel form projeleri için keşif sonrası net teklif veriyoruz.",
  },
  {
    soru: "Ne kadar eğilebilir?",
    cevap:
      "Modül tipine göre eğrilik yarıçapı (R) değişir. Yuvarlak sütun, hafif kavisli duvar veya silindirik yapı için uygun esnek modeller mevcuttur. Proje özelinde teknik öneri sunuyoruz.",
  },
  {
    soru: "Montaj süresi ne kadar?",
    cevap:
      "Kavisli ve özel form montajı düz panele göre daha detaylı planlama gerektirir. Proje büyüklüğüne göre süre belirlenir; genelde birkaç gün ile bir hafta arası değişebilir.",
  },
];

const content = (
  <>
    <p className="text-[#D1D5DB] leading-relaxed">
      <strong className="text-white">Esnek LED ekran</strong> (elastik / flexible LED ekran), kavisli yüzey, silindirik yapı ve özel formatta montaj yapılabilen eğilebilir LED modül sistemleridir. Düz duvar dışında yuvarlak sütun, eğrisel tavan, fuar standı ve showroom için özel tasarım projelerde kullanılır. LED ekran montaj firması olarak esnek LED ekran projelerinde keşif, projelendirme ve montaj hizmeti veriyoruz.
    </p>
    <h2 className="mt-8 text-xl font-bold text-white">Esnek LED Ekran Kullanım Alanları</h2>
    <p className="mt-2 text-[#D1D5DB] leading-relaxed">
      AVM ve showroomda silindirik sütun ekranı, fuar standında eğrisel pano, mağazada kavisli duvar uygulaması, stadyum ve arena içinde curved (eğrisel) ekran projeleri esnek LED ile gerçekleştirilir. Otomotiv showroom ve retail alanlarında özel form ve tasarım ihtiyacı olan projelerde tercih edilir. LED ekran fiyatları eğrilik yarıçapı ve metrekareye göre değişir.
    </p>
    <h2 className="mt-8 text-xl font-bold text-white">Teknik Yapı ve Eğrilik</h2>
    <p className="mt-2 text-[#D1D5DB] leading-relaxed">
      Esnek LED modüller belirli bir eğrilik yarıçapına (R değeri) kadar bükülebilir. İç mekân için P2.5–P4 pixel pitch seçenekleri vardır. Silindirik montajda çap ve yükseklik, kavisli duvarda ise eğrilik yarıçapı proje başında hesaplanır. Statik ve kablo yönlendirmesi özel formata göre planlanır.
    </p>
    <h2 className="mt-8 text-xl font-bold text-white">Projelendirme ve Montaj</h2>
    <p className="mt-2 text-[#D1D5DB] leading-relaxed">
      Kavisli ve özel form projelerinde ölçü, konum ve istenen görüntü alanı keşifte belirlenir. Buna göre esnek modül tipi, eğrilik yarıçapı ve montaj sistemi seçilir. LED ekran montaj firması olarak kurulumdan sonra garanti ve teknik destek sunuyoruz. Esnek LED ekran fiyatları için ücretsiz teklif alabilirsiniz.
    </p>
  </>
);

const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Esnek LED Ekran",
  description: "Kavisli yüzey ve özel formatta esnek (elastik) LED ekran çözümleri.",
  url: `${SITE_URL}/urunler/elastik-led-ekran`,
};

export default function ElastikLedEkranPage() {
  return (
    <UrunSayfaSablon
      title="Esnek LED Ekran"
      description="Kavisli yüzey, silindirik ve özel formatta eğilebilir LED ekran. Fuar, showroom ve AVM projeleri. Teklif alın."
      image="/images/product-list/flexible-led-display-screen.webp"
      imageAlt="Esnek LED ekran"
      galleryImages={galleryImages}
      content={content}
      teknikOzellikler={teknikOzellikler}
      kullanimAlanlari={kullanimAlanlari}
      sss={sss}
      jsonLdProduct={jsonLdProduct}
    />
  );
}
