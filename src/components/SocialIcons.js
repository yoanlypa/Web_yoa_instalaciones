export function InstagramIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-8.4h2.8l.4-3.3h-3.2V7.1c0-.95.26-1.6 1.63-1.6h1.74V2.55C16.5 2.5 15.5 2.4 14.35 2.4c-2.4 0-4.05 1.47-4.05 4.16v2.75H7.5v3.3h2.8V21h3.2Z" />
    </svg>
  );
}
