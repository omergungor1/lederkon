import UrunSayfaSablon from "@/components/UrunSayfaSablon";
import { SITE_URL } from "@/lib/constants";

export const metadata = {
  title: "Kiralık (Rental) LED Ekran",
  description:
    "Konser, fuar, lansman ve etkinlikler için kiralık (rental) LED ekran çözümleri. Hızlı kurulum, modüler panel ve sahne sistemleri. Kiralık LED ekran fiyatları.",
  keywords:
    "kiralık led ekran, rental led ekran, etkinlik led ekran, sahne led ekran, konser led ekran, fuar led ekran, led ekran kiralama",
};

const galleryImages = [
  "/images/gallery/led-screen-2.jpg",
  "/images/gallery/led-screen-1.webp",
];

const teknikOzellikler = [
  "Hızlı kilit (lock) sistemli modüler rental kabinet",
  "Indoor/Outdoor seçenekleri (proje alanına göre)",
  "Pixel pitch: P2.6 – P4.8 (kullanım mesafesine göre)",
  "Hafif kabinet, hızlı kurulum ve söküm",
  "Rigging / truss asma ve yer (stack) kurulum uyumu",
  "Flightcase (taşıma kasası) ile lojistik",
];

const kullanimAlanlari = [
  "Konser ve festival sahnesi",
  "Kurumsal etkinlik ve lansman",
  "Fuar standı ve sahne arkası",
  "Düğün, organizasyon ve özel günler",
  "AVM etkinlik alanı",
  "Açık hava etkinlikleri",
];

const sss = [
  {
    soru: "Kiralık LED ekran fiyatları nasıl belirlenir?",
    cevap:
      "Metrekare, kiralama süresi (gün/hafta), indoor/outdoor seçimi, pixel pitch ve kurulum/operatör ihtiyacı fiyatı etkiler. Etkinlik bilgilerinizi iletin, hızlı teklif hazırlayalım.",
  },
  {
    soru: "Kurulum ve teknik ekip sağlıyor musunuz?",
    cevap:
      "Evet. Kurulum-söküm ve etkinlik boyunca teknik destek sunuyoruz. İsteğe bağlı operatör hizmeti de sağlanabilir.",
  },
  {
    soru: "Indoor ile outdoor rental arasında fark nedir?",
    cevap:
      "Outdoor rental kabinetler daha yüksek parlaklık ve hava koşullarına dayanım için tasarlanır. Proje alanınıza göre en uygun modeli öneriyoruz.",
  },
];

const content = (
  <>
    <p className="text-[#D1D5DB] leading-relaxed">
      <strong className="text-white">Kiralık (rental) LED ekran</strong>, konser, fuar, lansman ve organizasyonlarda
      kısa süreli kullanım için tasarlanan modüler LED ekran sistemleridir. Sahne kurulumu, hızlı sök-tak,
      dayanıklı kabinet yapısı ve taşımaya uygun flightcase çözümleriyle etkinlik sektöründe en çok tercih edilen
      ekran tiplerindendir. LED ekran montaj firması olarak kiralık LED ekran projelerinde keşif, kurulum ve teknik
      destek hizmeti veriyoruz.
    </p>

    <h2 className="mt-8 text-xl font-bold text-white">Rental LED Ekranın Avantajları</h2>
    <p className="mt-2 text-[#D1D5DB] leading-relaxed">
      Rental sistemler hızlı kilit mekanizması sayesinde kısa sürede kurulur. Modüler yapı, istenen ölçüde ekran
      kurulmasına imkân tanır. Sahne uygulamalarında rigging/truss ile asma veya yerden stack kurulum yapılabilir.
      Etkinlik boyunca güvenli çalışma ve stabil görüntü için güç, kablo ve kontrol altyapısı proje bazında
      planlanır.
    </p>

    <h2 className="mt-8 text-xl font-bold text-white">Pixel Pitch ve Görüntü Mesafesi</h2>
    <p className="mt-2 text-[#D1D5DB] leading-relaxed">
      Kiralık LED ekran seçiminde en kritik konu pixel pitch’tir. Yakın izleme mesafesi için daha sık piksel aralığı
      (ör. P2.6–P3.9), daha uzak izleme için ise daha ekonomik seçenekler (ör. P4.8) tercih edilir. Mekân, seyirci
      mesafesi ve içerik tipine göre en doğru çözümü öneriyoruz.
    </p>

    <h2 className="mt-8 text-xl font-bold text-white">Kurulum, Operatör ve Teknik Destek</h2>
    <p className="mt-2 text-[#D1D5DB] leading-relaxed">
      Etkinlik planına göre kurulum-söküm takvimi çıkarılır. İsteğe bağlı olarak operatör hizmetiyle içerik
      yönetimi, kaynak cihaz bağlantıları ve canlı yayın entegrasyonu sağlanabilir. Kiralık LED ekran fiyatları ve
      paketleri için ücretsiz teklif alabilirsiniz.
    </p>
  </>
);

const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Kiralık (Rental) LED Ekran",
  description: "Konser, fuar ve etkinlikler için hızlı kurulum kiralık (rental) LED ekran çözümleri.",
  url: `${SITE_URL}/urunler/rental-led-ekran`,
};

export default function RentalLedEkranPage() {
  return (
    <UrunSayfaSablon
      title="Kiralık (Rental) LED Ekran"
      description="Konser, fuar, lansman ve organizasyonlar için kiralık LED ekran çözümleri. Hızlı kurulum, modüler panel ve teknik destek. Teklif alın."
      image="/images/product-list/rental-screen.webp"
      imageAlt="Kiralık rental LED ekran"
      galleryImages={galleryImages}
      content={content}
      teknikOzellikler={teknikOzellikler}
      kullanimAlanlari={kullanimAlanlari}
      sss={sss}
      jsonLdProduct={jsonLdProduct}
    />
  );
}

