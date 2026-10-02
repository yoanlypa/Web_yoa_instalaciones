"use client";

import Link from "next/link";
import { siteConfig, reviews } from "@/lib/site-config";
import { whatsappLink } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/language-context";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { DigitalServiceCards } from "@/components/DigitalServices";
import BrowserMock3D from "@/components/BrowserMock3D";
import Reveal3D from "@/components/fx/Reveal3D";

export default function WebServicesPage() {
  const { t } = useLanguage();
  const w = t.webPage;
  const waWeb = whatsappLink(t.digital.whatsappMessage(siteConfig.businessName));

  return (
    <>
      <section className="relative overflow-hidden bg-stone-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(245,158,11,0.18),transparent_55%)]" />
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 py-24 sm:py-28 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-6">
          <span className="rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1 text-xs font-semibold tracking-wide text-amber-300 uppercase">
            {w.badge}
          </span>
          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">{w.title}</h1>
          <p className="max-w-xl text-lg text-stone-300">{w.subtitle}</p>
          <a
            href={waWeb}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="h-5 w-5" />
            {t.digital.ctaWhatsapp}
          </a>
          </div>
          <BrowserMock3D googleLabel={t.digital.mockGoogle} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-3xl font-bold tracking-tight text-stone-900">{w.problemsTitle}</h2>
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {w.problems.map((p) => (
            <li key={p} className="flex gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-5 text-stone-700">
              <span className="mt-0.5 font-bold text-amber-700" aria-hidden="true">✕</span>
              {p}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-stone-50 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="mb-10 text-3xl font-bold tracking-tight text-stone-900">{w.servicesTitle}</h2>
          <DigitalServiceCards />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="mb-10 text-3xl font-bold tracking-tight text-stone-900">{w.stepsTitle}</h2>
        <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {w.steps.map((step, i) => (
            <Reveal3D as="li" key={step.title} tilt={14 + i * 3} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <span className="text-3xl font-extrabold text-amber-700">0{i + 1}</span>
              <h3 className="mt-3 font-semibold text-stone-900">{step.title}</h3>
              <p className="mt-2 text-sm text-stone-600">{step.text}</p>
            </Reveal3D>
          ))}
        </ol>
      </section>

      <section className="bg-stone-900 py-20 text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">{w.proofTitle}</h2>
            <p className="mt-4 text-stone-300">{w.proofText}</p>
            <Link href="/#resenas" className="mt-6 inline-block font-semibold text-amber-400 hover:text-amber-300">
              {w.proofReviews} →
            </Link>
          </div>
          <figure className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-amber-400" aria-label="5 de 5 estrellas">★★★★★</p>
            <blockquote className="mt-3 text-stone-200">&ldquo;{reviews[0].text}&rdquo;</blockquote>
            <figcaption className="mt-3 text-sm font-semibold text-white">{reviews[0].author} · Taskia</figcaption>
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="rounded-3xl border border-dashed border-amber-400 bg-amber-50 p-8 sm:p-10">
          <span className="rounded-full bg-amber-400/20 px-3 py-1 text-xs font-semibold tracking-wide text-amber-800 uppercase">
            {t.digital.soon}
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-stone-900">{w.soonTitle}</h2>
          <p className="mt-3 max-w-2xl text-stone-700">{w.soonText}</p>
          <a
            href={whatsappLink(w.soonMessage(siteConfig.businessName))}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-stone-900 px-5 py-2.5 text-sm font-semibold text-stone-900 transition-colors hover:bg-stone-900 hover:text-white"
          >
            {w.soonCta}
          </a>
        </div>
      </section>

      <section className="bg-stone-50 py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-5">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900">{w.ctaTitle}</h2>
          <p className="max-w-xl text-stone-600">{w.ctaText}</p>
          <a
            href={waWeb}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="h-5 w-5" />
            {t.digital.ctaWhatsapp}
          </a>
        </div>
      </section>
    </>
  );
}
