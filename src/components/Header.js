"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { whatsappLink } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/language-context";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/#trabajos", label: t.nav.trabajos },
    { href: "/#servicios", label: t.nav.servicios },
    { href: "/webs-para-negocios", label: t.nav.digital },
    { href: "/#resenas", label: t.nav.resenas },
    { href: "/#sobre-mi", label: t.nav.sobreMi },
    { href: "/#contacto", label: t.nav.contacto },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-stone-950/90 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="shrink-0" aria-label={`${siteConfig.businessName} — inicio`}>
          <Image src="/logo-claro.svg" alt={siteConfig.businessName} width={89} height={48} priority className="h-12 w-auto sm:h-14" />
        </Link>

        <nav className="hidden gap-7 text-sm font-medium text-stone-300 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-brand-400">
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
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={t.nav.menu}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-white/15 lg:hidden"
          >
            <span className={`h-0.5 w-4 bg-white transition-transform ${open ? "translate-y-1 rotate-45" : ""}`} />
            <span className={`h-0.5 w-4 bg-white transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-movil" className="border-t border-white/10 px-5 pb-5 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 py-3 text-base font-medium text-stone-200 hover:text-brand-400"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
