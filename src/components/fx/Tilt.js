"use client";

import { useRef } from "react";

/* Inclinación 3D que sigue al ratón (solo con ratón; en móvil no hace nada). */
export default function Tilt({ children, className = "", max = 9, as: Tag = "div", ...rest }) {
  const ref = useRef(null);

  const onMove = (e) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * max}deg) rotateY(${x * max}deg) translateZ(0)`;
    el.style.setProperty("--gx", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--gy", `${(y + 0.5) * 100}%`);
  };
  const onLeave = () => {
    const el = ref.current;
    el.style.transform = "";
  };

  return (
    <Tag
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`tilt ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
