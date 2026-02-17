"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/kurumsal", label: "Kurumsal" },
  { href: "/urunler", label: "Ürünler" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0B0F1A]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          <Image
            src="/lederkon-logo-2.png"
            alt="Lederkon Logo"
            width={120}
            height={40}
            className="h-20 md:h-32 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#D1D5DB] transition hover:text-[#00E5FF]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/iletisim#teklif"
            className="rounded-lg bg-[#00E5FF] px-4 py-2 font-semibold text-[#0B0F1A] transition hover:bg-[linear-gradient(90deg,#00E5FF,#B9FF00)] glow-duo-hover"
          >
            Teklif Al
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden rounded-lg p-2 text-white hover:bg-white/10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menüyü aç"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0B0F1A] px-4 py-4">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-3 text-[#D1D5DB] hover:bg-white/5 hover:text-[#00E5FF]"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/iletisim#teklif"
              className="mt-2 rounded-lg bg-[#00E5FF] px-4 py-3 text-center font-semibold text-[#0B0F1A] transition hover:bg-[linear-gradient(90deg,#00E5FF,#B9FF00)] glow-duo-hover"
              onClick={() => setMenuOpen(false)}
            >
              Teklif Al
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
