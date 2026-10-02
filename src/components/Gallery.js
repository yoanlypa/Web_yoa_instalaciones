"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import Reveal3D from "@/components/fx/Reveal3D";
import Tilt from "@/components/fx/Tilt";

const INITIAL = 9;

export default function Gallery({ items = [] }) {
  const { t, lang } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const [open, setOpen] = useState(-1);

  const visible = showAll ? items : items.slice(0, INITIAL);
  const close = useCallback(() => setOpen(-1), []);
  const move = useCallback((d) => setOpen((i) => (i + d + items.length) % items.length), [items.length]);

  useEffect(() => {
    if (open < 0) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, move]);

  const current = open >= 0 ? items[open] : null;

  return (
    <section id="trabajos" className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal3D tilt={10} className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-brand-700 uppercase">Portfolio</p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">{t.gallery.title}</h2>
            <p className="mt-4 text-lg text-stone-600">{t.gallery.subtitle}</p>
          </div>
          <p className="text-sm font-semibold text-stone-500 tabular-nums">
            {items.length} {t.gallery.count}
          </p>
        </Reveal3D>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, i) => (
            <Reveal3D key={item.src} tilt={14 + (i % 3) * 4}>
              <Tilt max={7} className="group h-full overflow-hidden rounded-3xl bg-stone-100 shadow-xl shadow-stone-900/10">
                {item.type === "image" ? (
                  <button
                    type="button"
                    onClick={() => setOpen(i)}
                    className="relative block aspect-[4/5] w-full cursor-zoom-in"
                    aria-label={`${t.gallery.open}: ${item.caption[lang]}`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt[lang]}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/85 to-transparent p-5 pt-16 text-left text-sm font-semibold text-white">
                      {item.caption[lang]}
                    </span>
                  </button>
                ) : (
                  <figure>
                    <video className="aspect-[4/5] w-full object-cover" controls preload="none" playsInline>
                      <source src={item.src} />
                    </video>
                    <figcaption className="px-5 py-4 text-sm font-medium text-stone-700">{item.caption[lang]}</figcaption>
                  </figure>
                )}
              </Tilt>
            </Reveal3D>
          ))}
        </div>

        {items.length > INITIAL && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll((s) => !s)}
              className="rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-800 transition-colors hover:border-brand-600 hover:text-brand-700"
            >
              {showAll ? t.gallery.less : `${t.gallery.more} (${items.length - INITIAL})`}
            </button>
          </div>
        )}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption[lang]}
          className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/95 p-4"
          onClick={close}
        >
          <div className="relative h-[80vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image src={current.src} alt={current.alt[lang]} fill sizes="100vw" className="object-contain" />
          </div>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-sm font-medium text-white">
            {current.caption[lang]} · {open + 1}/{items.length}
          </p>
          <button type="button" onClick={close} aria-label={t.gallery.close} className="absolute top-5 right-5 h-11 w-11 rounded-full bg-white text-xl text-stone-900">
            ✕
          </button>
          {items.length > 1 && (
            <>
              <button type="button" onClick={(e) => { e.stopPropagation(); move(-1); }} aria-label={t.gallery.prev} className="absolute top-1/2 left-4 h-12 w-12 -translate-y-1/2 rounded-full bg-white/15 text-2xl text-white hover:bg-white/25">
                ‹
              </button>
              <button type="button" onClick={(e) => { e.stopPropagation(); move(1); }} aria-label={t.gallery.next} className="absolute top-1/2 right-4 h-12 w-12 -translate-y-1/2 rounded-full bg-white/15 text-2xl text-white hover:bg-white/25">
                ›
              </button>
            </>
          )}
        </div>
      )}
    </section>
  );
}
