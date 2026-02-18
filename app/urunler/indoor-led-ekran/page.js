import UrunSayfaSablon from "@/components/UrunSayfaSablon";
import { SITE_URL } from "@/lib/constants";

export const metadata = {
  title: "Indoor LED Ekran",
  description:
    "Kapalı alan indoor LED ekran çözümleri. Ofis, showroom, fuar ve etkinlik mekânları için LED ekran fiyatları ve montaj. Profesyonel indoor led ekran.",
  keywords: "indoor led ekran, kapalı alan led ekran, led ekran fiyatları, led ekran montaj",
};

const galleryImages = [
  "/images/product-list/flexible-led-display-screen.webp",
  "/images/solutions/Shopping-Mall-LED-Display.jpg",
  "/images/product-list/totem-led-screen.jpg",
];

const teknikOzellikler = [
  "Pixel pitch: P1.2 – P4 arası seçenekler",
  "Parlaklık: 600–1200 cd/m² (iç mekân uyumlu)",
  "Görüş açısı: 140° yatay / 140° dikey",
  "Ömür: 100.000 saat kullanım",
  "Koruma sınıfı: IP20 (iç mekân)",
  "Kontrol sistemi: Senkron / asenkron",
  "Kurulum: Sabit veya taşınabilir modüller",
];

const kullanimAlanlari = [
  "Ofis ve kurumsal toplantı odaları",
  "Showroom ve mağaza vitrinleri",
  "Fuar ve sergi alanları",
  "Konferans ve seminer salonları",
  "Stadyum ve spor salonu iç mekânları",
  "Oteller ve lobi alanları",
];

const sss = [
  {
    soru: "Indoor LED ekran fiyatları neye göre değişir?",
    cevap:
      "Pixel pitch (nokta aralığı), çözünürlük, panel boyutu ve kontrol sistemi LED ekran fiyatlarını etkiler. Düşük pixel pitch daha yüksek çözünürlük ve fiyat demektir.",
  },
  {
    soru: "Kapalı alanda hangi pixel pitch tercih edilmeli?",
    cevap:
      "İzleme mesafesine göre değişir. Yakın mesafe (1–3 m) için P1.2–P2, orta mesafe (3–6 m) için P2–P3, büyük salonlar için P3–P4 uygundur.",
  },
  {
    soru: "Indoor LED ekran montaj süresi ne kadardır?",
    cevap:
      "Ekran metrekaresi ve montaj zorluğuna göre 1–5 iş günü arasında değişir. Keşif sonrası net süre bildirilir.",
  },
];

const content = (
  <>
    <p className="text-[#D1D5DB] leading-relaxed">
      <strong className="text-white">Indoor LED ekran</strong>, kapalı mekânlarda kullanılan ve yüksek görüntü kalitesi sunan LED ekran sistemleridir. Ofis, showroom, fuar alanı, konferans salonu ve mağaza gibi mekânlarda reklam, bilgilendirme ve sunum amaçlı kullanılır. LED ekran montaj firması olarak indoor led ekran projelerinde deneyimli ekibimizle hizmet veriyoruz.
    </p>
    <h2 className="mt-8 text-xl font-bold text-white">Indoor LED Ekran Nedir?</h2>
    <p className="mt-2 text-[#D1D5DB] leading-relaxed">
      Indoor LED ekran, kapalı alanlara özel tasarlanmış, düşük parlaklıkta ve ince pixel pitch ile yüksek çözünürlük sunan ekranlardır. Açık hava (outdoor) ekranlara göre daha hassas iklim koşullarında çalıştığı için maliyetleri daha düşük, görüntü kalitesi ise izleme mesafesine göre optimize edilebilir. LED ekran fiyatları indoor modellerde pixel pitch ve panel kalitesine göre değişir.
    </p>
    <h2 className="mt-8 text-xl font-bold text-white">Neden Indoor LED Ekran Tercih Edilmeli?</h2>
    <p className="mt-2 text-[#D1D5DB] leading-relaxed">
      Kapalı mekânlarda güneş ışığı ve yağmur gibi dış etkenler olmadığı için ekranlar daha az dayanıklı malzemeden üretilebilir; bu da LED ekran fiyatları açısından avantaj sağlar. Aynı zamanda yakın izleme mesafesinde yüksek çözünürlük (düşük pixel pitch) kullanılabilir. Toplantı odası, showroom veya fuar standında net ve canlı görüntü için indoor led ekran ideal çözümdür.
    </p>
    <h2 className="mt-8 text-xl font-bold text-white">Pixel Pitch ve Çözünürlük</h2>
    <p className="mt-2 text-[#D1D5DB] leading-relaxed">
      Pixel pitch, LED noktaları arasındaki mesafedir (mm). P1.2, P1.5, P2, P2.5, P3, P4 gibi değerler kullanılır. Değer düştükçe çözünürlük artar, fiyat da yükselir. Yakın mesafeden izlenecek ekranlarda P1.2–P2, büyük salonlarda P3–P4 tercih edilir. Doğru pixel pitch seçimi hem görüntü kalitesi hem de LED ekran fiyatları açısından önemlidir.
    </p>
    <h2 className="mt-8 text-xl font-bold text-white">Montaj ve Kurulum</h2>
    <p className="mt-2 text-[#D1D5DB] leading-relaxed">
      Lederkon olarak indoor LED ekran projelerinde keşif, projelendirme, tedarik ve montajı tek elden yönetiyoruz. Duvar, asma veya taşınabilir çözümler sunuyoruz. Montaj sonrası garantili teknik destek ve gerekirse uzaktan yazılım güncellemesi sağlıyoruz. LED ekran montaj firması olarak zamanında teslimat ve devreye alma taahhüdü veriyoruz.
    </p>
  </>
);

const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Indoor LED Ekran",
  description: "Kapalı alan indoor LED ekran çözümleri. Ofis, showroom, fuar ve etkinlik mekânları için profesyonel LED ekran.",
  url: `${SITE_URL}/urunler/indoor-led-ekran`,
};

export default function IndoorLedEkranPage() {
  return (
    <UrunSayfaSablon
      title="Indoor LED Ekran"
      description="Kapalı alanlar için yüksek çözünürlüklü indoor LED ekran çözümleri. LED ekran fiyatları ve montaj teklifi için bize ulaşın."
      image="/images/solutions/indoor-led-screen.jpeg"
      imageAlt="Indoor LED ekran"
      galleryImages={galleryImages}
      content={content}
      teknikOzellikler={teknikOzellikler}
      kullanimAlanlari={kullanimAlanlari}
      sss={sss}
      jsonLdProduct={jsonLdProduct}
    />
  );
}
