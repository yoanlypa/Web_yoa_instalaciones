import { siteConfig } from "@/lib/site-config";

export default function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl px-5 py-20">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-stone-900">Sobre mí</h2>
          <p className="mt-4 text-stone-600">
            Soy la persona detrás de {siteConfig.businessName}. Me dedico a hacer
            reparaciones e instalaciones cuidando cada detalle, desde el primer
            contacto hasta el acabado final. Cada trabajo se hace a medida de
            lo que necesita el cliente, con materiales de calidad y buena
            comunicación en todo momento.
          </p>
          <p className="mt-4 text-stone-600">
            Si tienes un proyecto en mente, por pequeño o grande que sea,
            hablamos por WhatsApp y te preparo un presupuesto claro y sin
            sorpresas.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 text-center">
            <p className="text-3xl font-extrabold text-amber-700">100%</p>
            <p className="mt-1 text-sm text-stone-600">Trabajos a medida</p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 text-center">
            <p className="text-3xl font-extrabold text-amber-700">24h</p>
            <p className="mt-1 text-sm text-stone-600">Respuesta por WhatsApp</p>
          </div>
        </div>
      </div>
    </section>
  );
}
