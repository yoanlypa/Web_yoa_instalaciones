"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { whatsappLink } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/language-context";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden bg-stone-900 text-white">
      <Image
        src="/images/trabajos/mueble-tv-chimenea.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        quality={45}
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/85 to-stone-900" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-24 sm:py-32">
        <span className="rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1 text-xs font-semibold tracking-wide text-amber-300 uppercase">
          {t.hero.badge}
        </span>
        <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
          {t.hero.title}
        </h1>
        <p className="max-w-xl text-lg text-stone-300">{t.hero.subtitle}</p>

        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href={whatsappLink(t.hero.whatsappMessage(siteConfig.businessName))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="h-5 w-5" />
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#trabajos"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
