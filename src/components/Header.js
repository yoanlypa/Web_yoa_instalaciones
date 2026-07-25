"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { whatsappLink } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/language-context";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header() {
  const { t } = useLanguage();

  const navLinks = [
    { href: "#trabajos", label: t.nav.trabajos },
    { href: "#servicios", label: t.nav.servicios },
    { href: "#resenas", label: t.nav.resenas },
    { href: "#sobre-mi", label: t.nav.sobreMi },
    { href: "#contacto", label: t.nav.contacto },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-[var(--background)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight text-stone-900">
          {siteConfig.businessName}
        </Link>

        <nav className="hidden gap-8 text-sm font-medium text-stone-600 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-amber-700">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href={whatsappLink(t.hero.whatsappMessageInfo(siteConfig.businessName))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
