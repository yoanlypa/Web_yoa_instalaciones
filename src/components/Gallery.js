import Image from "next/image";
import { gallery } from "@/lib/site-config";

export default function Gallery() {
  return (
    <section id="trabajos" className="mx-auto max-w-6xl px-5 py-20">
      <div className="mb-10 max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-stone-900">Trabajos realizados</h2>
        <p className="mt-3 text-stone-600">
          Una muestra de instalaciones y piezas a medida hechas con cuidado y atención al detalle.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((item) => (
          <figure
            key={item.src}
            className="group overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 shadow-sm"
          >
            {item.type === "image" ? (
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ) : (
              <video
                className="aspect-[4/3] w-full object-cover"
                controls
                preload="none"
                playsInline
              >
                <source src={item.src} />
                Tu navegador no puede reproducir este vídeo.
              </video>
            )}
            <figcaption className="px-4 py-3 text-sm font-medium text-stone-700">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
