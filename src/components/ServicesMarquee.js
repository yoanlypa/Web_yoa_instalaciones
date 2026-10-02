"use client";

import { services } from "@/lib/site-config";
import { useLanguage } from "@/lib/language-context";

export default function ServicesMarquee() {
  const { lang } = useLanguage();
  const names = services.filter((s) => s.title.es !== "Presupuesto personalizado").map((s) => s.title[lang]);
  const row = [...names, ...names];

  return (
    <div className="overflow-hidden border-y border-stone-200 bg-brand-400 py-4" aria-hidden="true">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {row.map((n, i) => (
          <span key={i} className="flex items-center gap-10 text-lg font-bold tracking-tight text-stone-950">
            {n}
            <span className="text-stone-950/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
