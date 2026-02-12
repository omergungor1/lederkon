import TeklifForm from "@/components/TeklifForm";

export const metadata = {
  title: "İletişim",
  description:
    "LED ekran teklifi ve iletişim. Lederkon iletişim formu, telefon ve adres. LED ekran fiyatları için hemen ulaşın.",
  keywords: "led ekran teklif, led ekran iletişim, Lederkon",
};

export default function IletisimPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-white">İletişim</h1>
      <p className="mt-4 max-w-2xl text-lg text-[#D1D5DB]">
        LED ekran fiyatları ve proje teklifi için formu doldurun veya telefon ve WhatsApp ile ulaşın.
      </p>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-white">İletişim Bilgileri</h2>
          <ul className="mt-6 space-y-4 text-[#D1D5DB]">
            <li>
              <strong className="text-white">Telefon:</strong>{" "}
              <a href="tel:+905327344119" className="text-[#00E5FF] hover:underline">
                0532 734 41 19
              </a>
            </li>
            <li>
              <strong className="text-white">E-posta:</strong>{" "}
              <a href="mailto:info@lederkon.com" className="text-[#00E5FF] hover:underline">
                info@lederkon.com
              </a>
            </li>
            <li>
              <strong className="text-white">Adres:</strong> Beşevler Küçük Sanayi Sitesi 23. Sokak, 23. Blok No:3, Nilüfer / Bursa
            </li>
          </ul>
          <p className="mt-6 text-[#D1D5DB]">
            LED ekran montaj firması olarak Türkiye genelinde hizmet veriyoruz. Teklif almak için formu doldurmanız yeterli.
          </p>
        </div>

        <div id="teklif">
          <h2 className="text-2xl font-bold text-white">Teklif Formu</h2>
          <p className="mt-2 text-[#D1D5DB]">LED ekran fiyatları ve proje teklifi için aşağıdaki formu doldurun.</p>
          <div className="mt-6">
            <TeklifForm id="iletisim-teklif" />
          </div>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-white">Konum</h2>
        <p className="mt-2 text-[#D1D5DB]">Merkez ofisimiz ve çalışma alanımız.</p>
        <div className="mt-6 aspect-video overflow-hidden rounded-xl bg-[#111827]">
          <iframe
            title="Lederkon Konum"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.1825530371702!2d28.94633678959145!3d40.20500199495834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca114cebabf0ff%3A0x7df255edc56ed302!2zw5zDp2V2bGVyLCAyMy4gU2suIE5vOjczLCAxNjEyMCBOacyHbMO8ZmVyL0J1cnNh!5e0!3m2!1str!2str!4v1770893914331!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full min-h-[300px]"
          />
        </div>
      </section>
    </div>
  );
}
