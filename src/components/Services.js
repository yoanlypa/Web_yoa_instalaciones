"use client";

import { services } from "@/lib/site-config";
import { useLanguage } from "@/lib/language-context";
import Reveal3D from "@/components/fx/Reveal3D";
import Tilt from "@/components/fx/Tilt";

export default function Services() {
  const { t, lang } = useLanguage();

  return (
    <section id="servicios" className="bg-stone-50 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal3D tilt={10} className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-amber-700 uppercase">{t.nav.servicios}</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">{t.services.title}</h2>
          <p className="mt-4 text-lg text-stone-600">{t.services.subtitle}</p>
        </Reveal3D>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal3D key={service.title.es} tilt={14 + (i % 3) * 4}>
              <Tilt className="h-full rounded-2xl border border-stone-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl">
                <span className="text-sm font-bold text-amber-700 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-semibold text-stone-900">{service.title[lang]}</h3>
                <p className="mt-2 text-sm text-stone-600">{service.description[lang]}</p>
              </Tilt>
            </Reveal3D>
          ))}
        </div>
      </div>
    </section>
  );
}
