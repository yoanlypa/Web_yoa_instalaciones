import { siteConfig } from "@/lib/site-config";
import { cities } from "@/lib/cities";
import { whatsappLink } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function CityIntro({ city }) {
  const otherCities = cities.filter((c) => c.slug !== city.slug);

  return (
    <section className="bg-stone-900 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-4xl px-5">
        <span className="rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1 text-xs font-semibold tracking-wide text-amber-300 uppercase">
          Montador de muebles en {city.name}
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
          Montador de muebles e instalaciones en {city.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-stone-300">{city.intro}</p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={whatsappLink(
              `Hola ${siteConfig.businessName}, necesito un montador de muebles en ${city.name}.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Pedir presupuesto en {city.name}
          </a>
          <a
            href="#trabajos"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Ver trabajos realizados
          </a>
        </div>

        <p className="mt-10 text-sm text-stone-400">
          También trabajo en{" "}
          {otherCities.map((c, i) => (
            <span key={c.slug}>
              <a href={`/montador-de-muebles-${c.slug}`} className="underline hover:text-white">
                {c.name}
              </a>
              {i < otherCities.length - 1 ? ", " : "."}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
