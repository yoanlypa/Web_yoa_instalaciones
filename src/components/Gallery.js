"use client";

import Image from "next/image";
import { gallery } from "@/lib/site-config";
import { useLanguage } from "@/lib/language-context";
import Reveal3D from "@/components/fx/Reveal3D";
import Tilt from "@/components/fx/Tilt";

export default function Gallery() {
  const { t, lang } = useLanguage();

  return (
    <section id="trabajos" className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal3D tilt={10} className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-amber-700 uppercase">Portfolio</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">{t.gallery.title}</h2>
          <p className="mt-4 text-lg text-stone-600">{t.gallery.subtitle}</p>
        </Reveal3D>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {gallery.map((item, i) => (
            <Reveal3D key={item.src} tilt={i % 2 ? 22 : 18} className={i % 2 ? "md:mt-20" : ""}>
              <Tilt as="figure" max={7} className="group overflow-hidden rounded-3xl bg-stone-100 shadow-2xl shadow-stone-900/15">
                {item.type === "image" ? (
                  <div className="relative aspect-[4/5] w-full sm:aspect-[4/3] md:aspect-[4/5]">
                    <Image
                      src={item.src}
                      alt={item.alt[lang]}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/80 to-transparent p-6 pt-20">
                      <figcaption className="text-base font-semibold text-white">{item.caption[lang]}</figcaption>
                    </div>
                  </div>
                ) : (
                  <>
                    <video className="aspect-[4/3] w-full object-cover" controls preload="none" playsInline>
                      <source src={item.src} />
                    </video>
                    <figcaption className="px-5 py-4 text-sm font-medium text-stone-700">{item.caption[lang]}</figcaption>
                  </>
                )}
              </Tilt>
            </Reveal3D>
          ))}
        </div>
      </div>
    </section>
  );
}
