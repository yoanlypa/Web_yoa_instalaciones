"use client";

import { cities } from "@/lib/cities";
import { useLanguage } from "@/lib/language-context";

// Enlaces a las otras zonas (ayudan a Google a descubrir todas las páginas)
export default function CityLinks({ city }) {
  const { t } = useLanguage();
  const otherCities = cities.filter((c) => c.slug !== city.slug);

  return (
    <section className="bg-stone-950 py-6 text-center text-sm text-stone-400">
      <div className="mx-auto max-w-4xl px-5">
        {t.cityIntro.tambienTrabajoEn}{" "}
        {otherCities.map((c, i) => (
          <span key={c.slug}>
            <a href={`/montador-de-muebles-${c.slug}`} className="underline hover:text-white">
              {c.name}
            </a>
            {i < otherCities.length - 1 ? ", " : "."}
          </span>
        ))}
      </div>
    </section>
  );
}
