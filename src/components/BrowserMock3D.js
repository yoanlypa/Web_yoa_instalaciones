"use client";

import { useEffect, useRef } from "react";

/* Maqueta de navegador en 3D que gira con el scroll: representa "tu web nueva". */
export default function BrowserMock3D({ label = "tunegocio.com", googleLabel = "Visible en Google" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const t = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)));
      const ry = -32 + t * 44;
      const rx = 14 - t * 16;
      el.style.transform = `rotateY(${ry}deg) rotateX(${rx}deg) translateZ(0)`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="[perspective:1600px]" aria-hidden="true">
      <div
        ref={ref}
        className="relative mx-auto w-full max-w-md rounded-2xl border border-white/10 bg-stone-800 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)] [transform-style:preserve-3d]"
        style={{ transform: "rotateY(-20deg) rotateX(8deg)" }}
      >
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
          <span className="ml-3 flex-1 truncate rounded-md bg-white/10 px-3 py-1 text-[11px] text-stone-300">{label}</span>
        </div>
        <div className="space-y-3 p-5">
          <div className="rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 p-5 [transform:translateZ(40px)]">
            <div className="h-3 w-2/3 rounded bg-stone-950/70" />
            <div className="mt-2 h-2 w-1/2 rounded bg-stone-950/40" />
            <div className="mt-4 inline-block rounded-full bg-[#25D366] px-3 py-1 text-[10px] font-bold text-white">WhatsApp</div>
          </div>
          <div className="grid grid-cols-3 gap-3 [transform:translateZ(20px)]">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-lg bg-white/10 p-3">
                <div className="h-8 rounded bg-white/15" />
                <div className="mt-2 h-1.5 w-3/4 rounded bg-white/25" />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-white/5 p-3 [transform:translateZ(10px)]">
            <span className="text-xs text-amber-300">★★★★★</span>
            <div className="h-1.5 flex-1 rounded bg-white/15" />
          </div>
        </div>
        <div className="absolute -right-6 -bottom-6 rounded-2xl border border-white/10 bg-stone-900 px-4 py-3 text-xs font-semibold text-white shadow-xl [transform:translateZ(80px)]">
          <span className="text-brand-300">G</span> · {googleLabel}
        </div>
      </div>
    </div>
  );
}
