import { reviews, siteConfig } from "@/lib/site-config";

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5 text-amber-500" aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" fill={i < rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1">
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.9l-5.2 2.61.99-5.79-4.21-4.1 5.82-.85L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="resenas" className="bg-stone-50 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-stone-900">Reseñas de clientes</h2>
            <p className="mt-3 text-stone-600">Opiniones reales de trabajos realizados a través de Taskia.</p>
          </div>
          <a
            href={siteConfig.taskiaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-5 py-2.5 text-sm font-semibold text-stone-700 transition-colors hover:border-amber-600 hover:text-amber-700"
          >
            Ver más reseñas en Taskia
          </a>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.author}
              className="flex flex-col gap-3 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
            >
              <Stars rating={review.rating} />
              <p className="text-sm text-stone-600">&ldquo;{review.text}&rdquo;</p>
              <p className="mt-auto text-sm font-semibold text-stone-900">{review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
