import UrunSayfaSablon from "@/components/UrunSayfaSablon";
import { SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";

export const metadata = {
  title: "Outdoor LED Ekran",
  description:
    "Açık hava outdoor LED ekran ve reklam panosu çözümleri. Dayanıklı, yüksek parlaklık. LED ekran fiyatları ve montaj. Profesyonel outdoor led ekran.",
  keywords: "outdoor led ekran, açık hava led ekran, led reklam panosu, led ekran montaj firması",
};

const galleryImages = [
  "/images/gallery/mall-2.jpg",
];

const teknikOzellikler = [
  "Pixel pitch: P4 – P10 arası (açık hava uyumlu)",
  "Parlaklık: 5000–8000 cd/m² (gündüz görünür)",
  "Koruma: IP65 su ve toz geçirmez",
  "Ömür: 100.000 saat",
  "Çalışma sıcaklığı: -30°C / +50°C",
  "Kontrol: Uzaktan erişim, hava sensörü entegrasyonu",
];

const kullanimAlanlari = [
  "Reklam panoları ve billboard",
  "Stadyum ve açık hava arenası",
  "Caddeler ve kavşaklar",
  "AVM dış cephe",
  "Otoyol ve şehir girişi",
  "Fuarlar ve açık alan etkinlikleri",
];

const sss = [
  {
    soru: "Outdoor LED ekran fiyatları neden daha yüksek?",
    cevap:
      "Açık hava ekranları su geçirmez (IP65), yüksek parlaklık ve dayanıklı malzeme gerektirir. Bu da maliyeti artırır. LED ekran fiyatları pixel pitch ve metrekaresine göre değişir.",
  },
  {
    soru: "Gündüz güneşte görünür mü?",
    cevap:
      "Evet. Outdoor LED ekranlar 5000–8000 cd/m² parlaklıkla gündüz net görüntü sunar. Ortam ışığına göre parlaklık otomatik ayarlanabilir.",
  },
  {
    soru: "Bakım gerekir mi?",
    cevap:
      "Toz ve nemden koruma için periyodik kontrol önerilir. Montaj sonrası garanti ve bakım sözleşmesi sunuyoruz.",
  },
];

const content = (
  <>
    <p className="text-[#D1D5DB] leading-relaxed">
      <strong className="text-white">Outdoor LED ekran</strong>, açık havada kullanılan, yüksek parlaklık ve su/toz korumalı (IP65) LED ekran sistemleridir. Reklam panosu, stadyum, cadde ve AVM dış cephe gibi alanlarda kullanılır. LED ekran montaj firması olarak outdoor led ekran projelerinde uzmanız.
    </p>
    <h2 className="mt-8 text-xl font-bold text-white">Outdoor LED Ekran Nedir?</h2>
    <p className="mt-2 text-[#D1D5DB] leading-relaxed">
      Outdoor LED ekran, yağmur, toz ve güneşe dayanıklı kabinlerde üretilir. Gündüz güneş altında okunabilir olması için yüksek parlaklık (cd/m²) değerine sahiptir. Pixel pitch genelde P4–P10 arası seçilir; izleme mesafesi uzak olduğu için ince pitch gerekmez, bu da LED ekran fiyatları açısından dengeli çözüm sağlar.
    </p>
    <h2 className="mt-8 text-xl font-bold text-white">Nerede Kullanılır?</h2>
    <p className="mt-2 text-[#D1D5DB] leading-relaxed">
      Billboard, şehir içi reklam panoları, stadyum skorbordları, AVM dış cephe ekranları ve otoyol kenarı bilgilendirme ekranları outdoor LED ekran uygulama alanlarıdır. Her projede rüzgar, deprem ve elektrik tesisatı standartlarına uygun montaj yapıyoruz.
    </p>
    <h2 className="mt-8 text-xl font-bold text-white">IP65 Koruma ve Dayanıklılık</h2>
    <p className="mt-2 text-[#D1D5DB] leading-relaxed">
      Açık hava ekranları IP65 koruma sınıfıyla toz ve su sıçramasına karşı dayanıklıdır. Soğuk ve sıcak iklim koşullarında (-30°C / +50°C) çalışacak şekilde tasarlanır. LED ekran montaj firması olarak tedarik ettiğimiz tüm outdoor ürünler bu standartları karşılar.
    </p>
    <h2 className="mt-8 text-xl font-bold text-white">Montaj ve Proje Yönetimi</h2>
    <p className="mt-2 text-[#D1D5DB] leading-relaxed">
      Büyük ölçekli outdoor projelerde statik hesaplama, rüzgar yükü analizi ve elektrik projesi hazırlanır. Lederkon, keşiften devreye almaya kadar tüm süreci yönetir. LED ekran fiyatları teklifi ölçü ve konuma göre ücretsiz verilir.
    </p>
  </>
);

const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Outdoor LED Ekran",
  description: "Açık hava ve reklam panosu için dayanıklı outdoor LED ekran çözümleri.",
  url: `${SITE_URL}/urunler/outdoor-led-ekran`,
};

export default function OutdoorLedEkranPage() {
  return (
    <UrunSayfaSablon
      title="Outdoor LED Ekran"
      description="Açık hava ve reklam panoları için yüksek parlaklıklı, dayanıklı outdoor LED ekran. Fiyat ve teklif için iletişime geçin."
      image="/images/product-list/outdoor-led-screen.webp"
      imageAlt="Outdoor LED ekran"
      galleryImages={galleryImages}
      content={content}
      teknikOzellikler={teknikOzellikler}
      kullanimAlanlari={kullanimAlanlari}
      sss={sss}
      jsonLdProduct={jsonLdProduct}
    />
  );
}
