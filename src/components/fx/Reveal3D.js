"use client";

import { useEffect, useRef } from "react";

/*
  Envuelve un bloque y lo hace "entrar" en 3D al hacer scroll:
  llega inclinado hacia atrás y se endereza cuando ocupa su sitio en pantalla.
  Un único listener de scroll compartido para todos los bloques.
*/
const items = new Set();
let ticking = false;
let listening = false;

function update() {
  ticking = false;
  const vh = window.innerHeight;
  items.forEach((it) => {
    const r = it.el.getBoundingClientRect();
    if (r.bottom < -200 || r.top > vh + 200) return;
    const t = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.55)));
    const e = 1 - Math.pow(1 - t, 3);
    const rx = (1 - e) * it.tilt;
    const ty = (1 - e) * 70;
    const s = 0.93 + 0.07 * e;
    it.el.style.transform = `perspective(1400px) translate3d(0, ${ty}px, 0) rotateX(${rx}deg) scale(${s})`;
    it.el.style.opacity = String(0.15 + 0.85 * e);
  });
}

function onScroll() {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(update);
  }
}

export default function Reveal3D({ children, className = "", tilt = 16, as: Tag = "div", ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const it = { el, tilt };
    el.style.transformOrigin = "50% 100%";
    el.style.willChange = "transform, opacity";
    items.add(it);
    if (!listening) {
      listening = true;
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
    }
    update();
    return () => {
      items.delete(it);
      el.style.transform = "";
      el.style.opacity = "";
      if (items.size === 0 && listening) {
        listening = false;
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      }
    };
  }, [tilt]);

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}
