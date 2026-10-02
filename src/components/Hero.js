"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { siteConfig } from "@/lib/site-config";
import { whatsappLink } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/language-context";
import WhatsAppIcon from "@/components/WhatsAppIcon";

// La escena 3D solo se carga en el navegador y en un bloque aparte (no frena la carga inicial)
const AssemblyScene = dynamic(() => import("@/components/three/AssemblyScene"), { ssr: false });

export default function Hero() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const progressRef = useRef(0);
  const barRef = useRef(null);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = Math.max(1, rect.height - window.innerHeight);
      const p = Math.min(1, Math.max(0, -rect.top / total));
      progressRef.current = p;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
      const s = p < 0.34 ? 0 : p < 0.8 ? 1 : 2;
      setStage((prev) => (prev === s ? prev : s));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="top" ref={sectionRef} className="relative h-[200vh] bg-stone-950 text-white">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* Fondo: brillo cálido + rejilla de "plano técnico" */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_35%,rgba(133,160,119,0.24),transparent_60%)]" />
        <div className="blueprint absolute inset-0 opacity-[0.07]" />

        <AssemblyScene
          progressRef={progressRef}
          className="absolute inset-x-0 top-[8%] h-[52%] lg:inset-y-0 lg:top-0 lg:left-[36%] lg:h-full"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent lg:hidden" />

        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-5 pb-14 lg:justify-center lg:pb-0">
          <div className="max-w-xl">
            <span className="inline-block rounded-full border border-brand-400/40 bg-brand-400/10 px-4 py-1 text-xs font-semibold tracking-wide text-brand-300 uppercase">
              {t.hero.badge}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-balance sm:text-6xl">
              {t.hero.title}
            </h1>
            <p className="mt-5 max-w-lg text-base text-stone-300 sm:text-lg">{t.hero.subtitle}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={whatsappLink(t.hero.whatsappMessage(siteConfig.businessName))}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-900/30 transition-transform hover:scale-105"
              >
                <WhatsAppIcon className="h-5 w-5" />
                {t.hero.ctaPrimary}
              </a>
              <a
                href="#trabajos"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
            <a
              href="/webs-para-negocios"
              className="mt-5 inline-block text-sm font-medium text-brand-300 underline-offset-4 hover:underline"
            >
              {t.hero.digitalLink}
            </a>
          </div>

          {/* Fases del montaje, ligadas al scroll */}
          <div className="mt-8 max-w-xl lg:absolute lg:bottom-10 lg:left-5 lg:mt-0">
            <ol className="flex gap-5 text-xs font-semibold tracking-wide uppercase">
              {t.hero.stages.map((label, i) => (
                <li
                  key={label}
                  className={`transition-colors duration-500 ${i <= stage ? "text-brand-300" : "text-stone-500"}`}
                >
                  <span className="mr-1.5 tabular-nums">0{i + 1}</span>
                  {label}
                </li>
              ))}
            </ol>
            <div className="mt-3 h-px w-full max-w-xs overflow-hidden bg-white/10">
              <div ref={barRef} className="h-full origin-left bg-brand-400" style={{ transform: "scaleX(0)" }} />
            </div>
            <p className={`mt-3 text-xs text-stone-400 transition-opacity duration-500 ${stage === 0 ? "opacity-100" : "opacity-0"}`}>
              {t.hero.scrollHint} ↓
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
