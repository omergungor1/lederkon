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
    { href: "/urunler/totem-led-ekran", label: "Totem LED Ekran" },
  ],
  diger: [
    { href: "/projeler", label: "Projeler" },
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
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-8 text-center text-sm text-[#D1D5DB]">
          © {new Date().getFullYear()} Lederkon. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
