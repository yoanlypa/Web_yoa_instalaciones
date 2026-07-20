"use client";

import { useEffect, useRef } from "react";
import QRCode from "qrcode";
import { siteConfig } from "@/lib/site-config";

export default function QrPage() {
  const canvasRef = useRef(null);
  const urlRef = useRef(null);

  useEffect(() => {
    const origin = window.location.origin;
    if (urlRef.current) urlRef.current.textContent = origin;
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, origin, {
        width: 480,
        margin: 2,
        color: { dark: "#1c1917", light: "#ffffff" },
      });
    }
  }, []);

  function handleDownload() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "qr-yoa-instalaciones.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center justify-center gap-6 px-5 py-16 text-center">
      <h1 className="w-full min-w-0 text-2xl font-bold text-stone-900">
        Código QR — {siteConfig.businessName}
      </h1>
      <p className="w-full min-w-0 text-stone-600">
        Este QR lleva directamente a esta web. Descárgalo e imprímelo en tu
        tarjeta de presentación.
      </p>

      <canvas
        ref={canvasRef}
        className="h-auto w-full max-w-[320px] rounded-xl border border-stone-200 shadow-sm"
      />

      <p ref={urlRef} className="w-full min-w-0 text-sm break-all text-stone-500" />

      <button
        onClick={handleDownload}
        className="rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
      >
        Descargar PNG
      </button>
    </main>
  );
}
