import UrunSayfaSablon from "@/components/UrunSayfaSablon";
import { SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";

export const metadata = {
  title: "Düğün Salonu LED Ekran",
  description:
    "Düğün salonu LED ekran kiralama ve montaj. Nikah, kına ve düğün organizasyonları için LED ekran fiyatları ve profesyonel çözümler.",
  keywords: "düğün salonu led ekran, düğün led ekran, nikah ekranı, led ekran fiyatları",
};

const galleryImages = [
  "/images/gallery/wedding-2.jpg",
  "/images/gallery/wedding-3.png",
  "/images/gallery/wedding-4.png",
  "/images/gallery/wedding-5.jpg",
  "/images/gallery/wedding-6.webp",
  "/images/gallery/wedding-7.jpg",
];

const teknikOzellikler = [
  "Pixel pitch: P2.5 – P4 (salon boyutuna göre)",
  "Parlaklık: 800–1200 cd/m²",
  "Kiralama veya sabit montaj seçenekleri",
  "HD/SD video ve canlı yayın desteği",
  "Ses sistemi entegrasyonu",
  "Kurulum: 1 gün içinde",
];

const kullanimAlanlari = [
  "Düğün ve nikah törenleri",
  "Kına geceleri",
  "Nişan ve sünnet organizasyonları",
  "Toplantı ve seminer",
  "Özel gün partileri",
];

const sss = [
  {
    soru: "Düğün salonu LED ekran fiyatları ne kadar?",
    cevap:
      "Ekran metrekaresi, pixel pitch ve kiralama/sabit montaj tercihine göre değişir. Kiralama günlük veya paket fiyatla sunulur. Ücretsiz keşif ile net fiyat alabilirsiniz.",
  },
  {
    soru: "Kiralık mı sabit montaj mı daha uygun?",
    cevap:
      "Tek seferlik organizasyonlar için kiralama, sürekli düğün yapan salonlar için sabit montaj daha ekonomik olabilir. İhtiyaca göre teklif hazırlıyoruz.",
  },
  {
    soru: "Kurulum ne kadar sürer?",
    cevap:
      "Standart bir düğün salonu LED ekran montajı genelde aynı gün tamamlanır. Önceden randevu almanız yeterli.",
  },
];

const content = (
  <>
    <p className="text-[#D1D5DB] leading-relaxed">
      <strong className="text-white">Düğün salonu LED ekran</strong>, nikah, kına ve düğün organizasyonlarında video, canlı yayın ve slayt gösterimi için kullanılan profesyonel ekran çözümleridir. Hem kiralama hem sabit montaj seçenekleriyle düğün salonu LED ekran hizmeti sunuyoruz. LED ekran fiyatları düğün salonları için özel paketlerle sunulmaktadır.
    </p>
    <h2 className="mt-8 text-xl font-bold text-white">Düğün Salonu İçin Neden LED Ekran?</h2>
    <p className="mt-2 text-[#D1D5DB] leading-relaxed">
      LED ekranlar, projektör ve televizyona göre daha parlak, büyük ve etkileyici görüntü sunar. Gündüz ve gece aynı netlikte görüntü alınır. Nikah anı, video klipler ve canlı bağlantılar sorunsuz yayınlanır. Düğün salonu LED ekran tercihi, misafir deneyimini artırır ve organizatörün işini kolaylaştırır.
    </p>
    <h2 className="mt-8 text-xl font-bold text-white">Kiralama ve Sabit Montaj</h2>
    <p className="mt-2 text-[#D1D5DB] leading-relaxed">
      Tek etkinlik için düğün salonu LED ekran kiralama hizmeti veriyoruz: ekran, kablo, kontrol ünitesi ve gerekirse operatör dahil. Sürekli düğün yapan salonlar için sabit montajlı LED ekran çözümü daha ekonomik olabilir; LED ekran fiyatları sabit sistemde uzun vadede kiralama maliyetini karşılar.
    </p>
    <h2 className="mt-8 text-xl font-bold text-white">Teknik Destek ve Operatör</h2>
    <p className="mt-2 text-[#D1D5DB] leading-relaxed">
      İsteğe bağlı olarak etkinlik süresince teknik operatör görevlendirebiliriz. Video formatları, canlı yayın ve ses sistemi entegrasyonu konusunda destek sağlanır. LED ekran montaj firması olarak kurulumdan kaldırmaya kadar tüm süreci yönetiyoruz.
    </p>
  </>
);

const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Düğün Salonu LED Ekran",
  description: "Düğün, nikah ve özel günler için LED ekran kiralama ve montaj.",
  url: `${SITE_URL}/urunler/dugun-salonu-led-ekran`,
};

export default function DugunSalonuLedEkranPage() {
  return (
    <UrunSayfaSablon
      title="Düğün Salonu LED Ekran"
      description="Düğün ve nikah organizasyonları için LED ekran kiralama ve sabit montaj. Fiyat ve paket bilgisi için teklif alın."
      image="/images/gallery/wedding-1.webp"
      imageAlt="Düğün salonu LED ekran"
      galleryImages={galleryImages}
      content={content}
      teknikOzellikler={teknikOzellikler}
      kullanimAlanlari={kullanimAlanlari}
      sss={sss}
      jsonLdProduct={jsonLdProduct}
    />
  );
}
