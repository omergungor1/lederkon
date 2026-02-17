import Link from "next/link";

const footerLinks = {
  kurumsal: [
    { href: "/kurumsal", label: "Hakkımızda" },
    { href: "/kurumsal#misyon", label: "Misyon & Vizyon" },
  ],
  urunler: [
    { href: "/urunler/indoor-led-ekran", label: "Indoor LED Ekran" },
    { href: "/urunler/outdoor-led-ekran", label: "Outdoor LED Ekran" },
    { href: "/urunler/dugun-salonu-led-ekran", label: "Düğün Salonu LED" },
    { href: "/urunler/avm-led-ekran", label: "AVM LED Ekran" },
    { href: "/urunler/cami-led-ekran", label: "Cami LED Ekran" },
    { href: "/urunler/totem-led-ekran", label: "Totem & Poster LED Ekran" },
  ],
  diger: [
    { href: "/blog", label: "Blog" },
    { href: "/iletisim", label: "İletişim" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#111827]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold text-white">Lederkon</h3>
            <p className="mt-2 text-sm text-[#D1D5DB]">
              Profesyonel LED ekran montaj ve proje çözümleri. Türkiye genelinde hizmet.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[#D1D5DB]">
              <li>
                <a href="tel:+905327344119" className="hover:text-[#B9FF00] hover:underline">
                  0532 734 41 19
                </a>
              </li>
              <li>
                <a href="mailto:info@lederkon.com" className="hover:text-[#B9FF00] hover:underline">
                  info@lederkon.com
                </a>
              </li>
              <li>
                Beşevler Küçük Sanayi Sitesi 23. Sokak, 23. Blok No:3, Nilüfer / Bursa
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Kurumsal</h4>
            <ul className="mt-3 space-y-2">
              {footerLinks.kurumsal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#D1D5DB] hover:text-[#00E5FF]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Ürünler</h4>
            <ul className="mt-3 space-y-2">
              {footerLinks.urunler.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#D1D5DB] hover:text-[#00E5FF]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Diğer</h4>
            <ul className="mt-3 space-y-2">
              {footerLinks.diger.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#D1D5DB] hover:text-[#00E5FF]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-[#D1D5DB] transition hover:bg-[#00E5FF] hover:text-[#111827]"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-[#D1D5DB] transition hover:bg-[#B9FF00] hover:text-[#111827]"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.994 2.013 9.338 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-8 text-center text-sm text-[#D1D5DB]">
          © {new Date().getFullYear()} Lederkon. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
