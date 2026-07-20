"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { whatsappLink } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const initialForm = {
  nombre: "",
  telefono: "",
  servicio: "",
  fecha: "",
  detalles: "",
};

function buildMessage(form) {
  const lines = [
    `Hola ${siteConfig.businessName}, quiero pedir un presupuesto.`,
    `Nombre: ${form.nombre}`,
  ];
  if (form.telefono) lines.push(`Teléfono: ${form.telefono}`);
  if (form.servicio) lines.push(`Servicio: ${form.servicio}`);
  if (form.fecha) lines.push(`Fecha deseada: ${form.fecha}`);
  lines.push(`Detalles: ${form.detalles}`);
  return lines.join("\n");
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.nombre.trim() || !form.detalles.trim()) {
      setError("Por favor, indica al menos tu nombre y los detalles del servicio.");
      return;
    }

    setError("");
    const url = whatsappLink(buildMessage(form));
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label htmlFor="nombre" className="mb-1 block text-sm font-medium text-stone-700">
          Nombre *
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          value={form.nombre}
          onChange={handleChange}
          className="w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
          placeholder="Tu nombre"
        />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="telefono" className="mb-1 block text-sm font-medium text-stone-700">
          Teléfono
        </label>
        <input
          id="telefono"
          name="telefono"
          type="tel"
          value={form.telefono}
          onChange={handleChange}
          className="w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
          placeholder="600 000 000"
        />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="servicio" className="mb-1 block text-sm font-medium text-stone-700">
          Tipo de servicio
        </label>
        <input
          id="servicio"
          name="servicio"
          type="text"
          value={form.servicio}
          onChange={handleChange}
          className="w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
          placeholder="Ej. Montaje de mueble"
        />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="fecha" className="mb-1 block text-sm font-medium text-stone-700">
          Fecha deseada
        </label>
        <input
          id="fecha"
          name="fecha"
          type="date"
          value={form.fecha}
          onChange={handleChange}
          className="w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="detalles" className="mb-1 block text-sm font-medium text-stone-700">
          Detalles *
        </label>
        <textarea
          id="detalles"
          name="detalles"
          rows={4}
          value={form.detalles}
          onChange={handleChange}
          className="w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
          placeholder="Cuéntame qué necesitas..."
        />
      </div>

      {error && <p className="sm:col-span-2 text-sm text-red-600">{error}</p>}

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Enviar por WhatsApp
        </button>
      </div>
    </form>
  );
}
