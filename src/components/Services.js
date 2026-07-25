"use client";

import { services } from "@/lib/site-config";
import { useLanguage } from "@/lib/language-context";

export default function Services() {
  const { t, lang } = useLanguage();

  return (
    <section id="servicios" className="bg-stone-50 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900">{t.services.title}</h2>
          <p className="mt-3 text-stone-600">{t.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title.es}
              className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="font-semibold text-stone-900">{service.title[lang]}</h3>
              <p className="mt-2 text-sm text-stone-600">{service.description[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
