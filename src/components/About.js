"use client";

import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/lib/language-context";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl px-5 py-20">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-stone-900">{t.about.title}</h2>
          <p className="mt-4 text-stone-600">{t.about.paragraph1(siteConfig.businessName)}</p>
          <p className="mt-4 text-stone-600">{t.about.paragraph2}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 text-center">
            <p className="text-3xl font-extrabold text-amber-700">100%</p>
            <p className="mt-1 text-sm text-stone-600">{t.about.stat1Label}</p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 text-center">
            <p className="text-3xl font-extrabold text-amber-700">24h</p>
            <p className="mt-1 text-sm text-stone-600">{t.about.stat2Label}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
