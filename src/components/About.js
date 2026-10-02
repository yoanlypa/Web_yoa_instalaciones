"use client";

import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/lib/language-context";
import Reveal3D from "@/components/fx/Reveal3D";
import Tilt from "@/components/fx/Tilt";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <Reveal3D tilt={10}>
          <h2 className="text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">{t.about.title}</h2>
          <p className="mt-4 text-stone-600">{t.about.paragraph1(siteConfig.businessName)}</p>
          <p className="mt-4 text-stone-600">{t.about.paragraph2}</p>
        </Reveal3D>

        <Reveal3D tilt={18} className="grid grid-cols-3 gap-4">
          {[
            ["100%", t.about.stat1Label],
            ["24h", t.about.stat2Label],
            ["5★", t.about.stat3Label],
          ].map(([value, label]) => (
            <Tilt key={label} className="rounded-2xl border border-stone-200 bg-stone-50 p-5 text-center sm:p-6">
              <p className="text-3xl font-extrabold text-brand-700 sm:text-4xl">{value}</p>
              <p className="mt-1 text-xs text-stone-600 sm:text-sm">{label}</p>
            </Tilt>
          ))}
        </Reveal3D>
      </div>
    </section>
  );
}
