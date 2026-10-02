"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { cities } from "@/lib/cities";
import { whatsappLink } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/language-context";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-stone-950 py-10 text-stone-400">
      <div className="mx-auto max-w-6xl px-5 pb-8 text-center sm:text-left">
        <p className="text-xs font-semibold tracking-wide text-stone-500 uppercase">
          {t.footer.zonas}
        </p>
        <nav className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm sm:justify-start">
          {cities.map((city) => (
            <a
              key={city.slug}
              href={`/montador-de-muebles-${city.slug}`}
              className="transition-colors hover:text-amber-400"
            >
              {city.name}
            </a>
          ))}
        </nav>
        <a href="/webs-para-negocios" className="mt-4 inline-block text-sm font-semibold text-amber-400 hover:text-amber-300">
          {t.footer.digital} →
        </a>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 border-t border-stone-800 px-5 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <Image src="/logo-claro.svg" alt={siteConfig.businessName} width={111} height={60} className="mx-auto h-14 w-auto sm:mx-0" />
          <p className="mt-2 text-sm">{siteConfig.phoneDisplay}</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={whatsappLink(t.hero.whatsappMessageInfo(siteConfig.businessName))}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="rounded-full border border-stone-700 p-2.5 transition-colors hover:border-amber-500 hover:text-amber-400"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="rounded-full border border-stone-700 p-2.5 transition-colors hover:border-amber-500 hover:text-amber-400"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="rounded-full border border-stone-700 p-2.5 transition-colors hover:border-amber-500 hover:text-amber-400"
          >
            <FacebookIcon className="h-5 w-5" />
          </a>
        </div>

        <p className="text-xs text-stone-500">
          {t.footer.rights(new Date().getFullYear(), siteConfig.businessName)}
        </p>
      </div>
    </footer>
  );
}
