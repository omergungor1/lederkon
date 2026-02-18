import UrunSayfaSablon from "@/components/UrunSayfaSablon";
import { SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";

export const metadata = {
  title: "Cami LED Ekran",
  description:
    "Cami ve ibadethaneler için LED ekran sistemleri. Vaaz, hutbe ve bilgilendirme ekranı. Cami LED ekran fiyatları ve montaj.",
  keywords: "cami led ekran, cami vaaz ekranı, cami ekran sistemleri, led ekran montaj",
};

const galleryImages = [
  "/images/gallery/cami-1.jpg",
];

const teknikOzellikler = [
  "Pixel pitch: P2.5 – P4 (salon mesafesine göre)",
  "Parlaklık: 600–1000 cd/m² (iç mekân)",
  "Düşük gürültü, ısı yönetimi",
  "Uzaktan kumanda ve zamanlama",
  "Arapça ve Türkçe metin desteği",
  "Uzun ömürlü, düşük bakım",
];

const kullanimAlanlari = [
  "Cami vaaz ve hutbe ekranı",
  "Namaz vakitleri ve bilgi ekranı",
  "Kur'an ve sure gösterimi",
  "Cemaat bilgilendirme",
  "Küçük ve büyük camiler",
];

const sss = [
  {
    soru: "Cami LED ekran fiyatları neye göre belirlenir?",
    cevap:
      "Ekran boyutu (metrekare), pixel pitch ve montaj konumu (duvar, tavan vb.) fiyatı etkiler. Cami kapasitesine göre önerilen boyut ve çözünürlük sunuyoruz.",
  },
  {
    soru: "İçerik nasıl yönetilir?",
    cevap:
      "Bilgisayar veya tablet ile vaaz metni, vakitler ve duyurular yüklenebilir. İmam veya görevli tarafından kolayca kullanılabilir.",
  },
  {
    soru: "Montaj süresi ve garanti?",
    cevap:
      "Cami LED ekran montajı genelde 1–2 gün sürer. Standart garanti ve isteğe bağlı bakım sözleşmesi sunuyoruz.",
  },
];

const content = (
  <>
    <p className="text-[#D1D5DB] leading-relaxed">
      <strong className="text-white">Cami LED ekran</strong> sistemleri, cami ve ibadethanelerde vaaz, hutbe, namaz vakitleri ve cemaat bilgilendirmesi için kullanılan özel LED ekran çözümleridir. Okunabilir yazı boyutu, düşük gürültü ve uzun ömürlü yapı ile cami LED ekran projelerinde deneyimli ekibimizle hizmet veriyoruz.
    </p>
    <h2 className="mt-8 text-xl font-bold text-white">Cami LED Ekranın Faydaları</h2>
    <p className="mt-2 text-[#D1D5DB] leading-relaxed">
      Vaaz ve hutbe metinleri büyük ekrandan okunabilir; arka sıralardaki cemaat de rahatça takip eder. Namaz vakitleri, duyurular ve sure metinleri tek ekrandan yönetilebilir. Cami LED ekran, hem imam hem cemaat için kullanım kolaylığı sağlar.
    </p>
    <h2 className="mt-8 text-xl font-bold text-white">Teknik Özellikler ve Konum</h2>
    <p className="mt-2 text-[#D1D5DB] leading-relaxed">
      Cami içi aydınlatma genelde yumuşak olduğu için orta parlaklık (600–1000 cd/m²) yeterlidir. Pixel pitch, cemaat sayısı ve son sıra mesafesine göre P2.5–P4 arası önerilir. Duvar veya mihrap üstü montaj için keşif ile en uygun konum belirlenir. LED ekran fiyatları bu kriterlere göre hazırlanır.
    </p>
    <h2 className="mt-8 text-xl font-bold text-white">İçerik Yönetimi</h2>
    <p className="mt-2 text-[#D1D5DB] leading-relaxed">
      Basit yazılım ile vaaz metni, vakitler ve duyurular güncellenir. Arapça ve Türkçe karakter desteği vardır. İsteğe bağlı olarak uzaktan erişim ve zamanlı yayın da eklenebilir. LED ekran montaj firması olarak kurulum sonrası kullanım eğitimi veriyoruz.
    </p>
  </>
);

const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Cami LED Ekran",
  description: "Cami ve ibadethaneler için vaaz ve bilgilendirme LED ekran sistemleri.",
  url: `${SITE_URL}/urunler/cami-led-ekran`,
};

export default function CamiLedEkranPage() {
  return (
    <UrunSayfaSablon
      title="Cami LED Ekran"
      description="Cami ve ibadethaneler için vaaz, hutbe ve bilgilendirme LED ekranı. Fiyat ve montaj teklifi alın."
      image="/images/gallery/cami-1.jpg"
      imageAlt="Cami LED ekran"
      galleryImages={galleryImages}
      content={content}
      teknikOzellikler={teknikOzellikler}
      kullanimAlanlari={kullanimAlanlari}
      sss={sss}
      jsonLdProduct={jsonLdProduct}
    />
  );
}
