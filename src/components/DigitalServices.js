"use client";

import Link from "next/link";
import { digitalServices, siteConfig } from "@/lib/site-config";
import { whatsappLink } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/language-context";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import DigitalIcon from "@/components/DigitalIcon";
import BrowserMock3D from "@/components/BrowserMock3D";
import Reveal3D from "@/components/fx/Reveal3D";
import Tilt from "@/components/fx/Tilt";

export function DigitalServiceCards({ dark = false }) {
  const { t, lang } = useLanguage();
  const items = [...digitalServices].sort((a, b) => Number(!!a.soon) - Number(!!b.soon));

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <Tilt
          key={item.title.es}
          className={`relative rounded-2xl border p-6 ${
            dark ? "border-white/10 bg-white/5" : "border-stone-200 bg-white shadow-sm"
          } ${item.soon ? "opacity-80" : ""}`}
        >
          {item.soon && (
            <span className="absolute top-4 right-4 rounded-full bg-brand-400/15 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-brand-500 uppercase">
              {t.digital.soon}
            </span>
          )}
          <span
            className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${
              dark ? "bg-brand-400/10 text-brand-300" : "bg-brand-50 text-brand-700"
            }`}
          >
            <DigitalIcon name={item.icon} />
          </span>
          <h3 className={`mt-4 font-semibold ${dark ? "text-white" : "text-stone-900"}`}>{item.title[lang]}</h3>
          <p className={`mt-2 text-sm ${dark ? "text-stone-300" : "text-stone-600"}`}>{item.description[lang]}</p>
        </Tilt>
      ))}
    </div>
  );
}

export default function DigitalServices() {
  const { t } = useLanguage();

  return (
    <section id="webs" className="overflow-hidden bg-stone-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-14 grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal3D tilt={10}>
            <span className="rounded-full border border-brand-400/40 bg-brand-400/10 px-4 py-1 text-xs font-semibold tracking-wide text-brand-300 uppercase">
              {t.digital.badge}
            </span>
            <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">{t.digital.title}</h2>
            <p className="mt-4 text-lg text-stone-300">{t.digital.subtitle}</p>
          </Reveal3D>
          <BrowserMock3D googleLabel={t.digital.mockGoogle} />
        </div>

        <DigitalServiceCards dark />

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/webs-para-negocios"
            className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-stone-950 transition-transform hover:scale-105"
          >
            {t.digital.cta} →
          </Link>
          <a
            href={whatsappLink(t.digital.whatsappMessage(siteConfig.businessName))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {t.digital.ctaWhatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
