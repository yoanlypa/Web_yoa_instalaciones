import { services } from "@/lib/site-config";

export default function Services() {
  return (
    <section id="servicios" className="bg-stone-50 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900">Servicios</h2>
          <p className="mt-3 text-stone-600">
            Del pequeño arreglo a la instalación a medida. Esto es lo que puedo hacer por ti.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="font-semibold text-stone-900">{service.title}</h3>
              <p className="mt-2 text-sm text-stone-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
