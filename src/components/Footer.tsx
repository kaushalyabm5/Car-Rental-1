"use client";

import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Fleet", href: "/fleet" },
  { label: "packages", href: "/packages" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
];

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.925 1.35a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.5 22v-8.2h2.75l.41-3.2H13.5V8.56c0-.93.26-1.56 1.59-1.56h1.7V4.14A22.7 22.7 0 0 0 14.31 4c-2.45 0-4.13 1.5-4.13 4.24v2.36H7.4v3.2h2.78V22h3.32Z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://tiktok.com",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.13V9.4a6.33 6.33 0 0 0-.86-.06A6.34 6.34 0 0 0 3.14 15.7 6.34 6.34 0 0 0 9.48 22a6.34 6.34 0 0 0 6.34-6.34V8.75a8.26 8.26 0 0 0 4.83 1.56V6.86a4.85 4.85 0 0 1-1.06-.17Z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/94770000000",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.52 3.48A11.82 11.82 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.31-1.66a11.86 11.86 0 0 0 5.75 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.43ZM12.07 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.38a9.85 9.85 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 7c0 5.45-4.44 9.89-9.89 9.89Zm5.42-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.11 3.22 5.11 4.52.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.41.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-[#050505] text-white border-t border-white/10 pt-20 pb-10 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Logo, Summary & Social Links */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="#hero" className="inline-flex flex-col group">
              <span className="text-xl md:text-2xl font-medium uppercase tracking-[0.22em] text-white">
                Master Car Rental
              </span>
              <span className="text-[10px] uppercase tracking-[0.32em] text-neutral-400 mt-1">
                Chauffeur &amp; Wedding Fleet
              </span>
            </Link>

            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Bespoke wedding sedans, executive transfers, and uniformed
              chauffeur hospitality across Sri Lanka with punctual coordination
              and showroom presentation.
            </p>

            {/* Social Media Icon Links */}
            <div className="flex items-center gap-3 pt-1">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full border border-white/15 hover:border-white hover:bg-white text-neutral-300 hover:text-[#050505] flex items-center justify-center transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-neutral-400 mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-neutral-300 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="h-px w-0 bg-white group-hover:w-3 transition-all duration-300" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Address */}
          <div className="lg:col-span-2 space-y-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-neutral-400 mb-5">
              Contact
            </p>

            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                Address
              </p>
              <p className="text-sm text-neutral-300 mt-1 leading-relaxed">
                42 Galle Face Terrace,
                <br />
                Colombo 03, Sri Lanka
              </p>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                Phone &amp; Concierge
              </p>
              <a
                href="tel:+94770000000"
                className="block text-sm text-neutral-300 hover:text-white mt-1 transition-colors"
              >
                +94 77 000 0000
              </a>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                Email
              </p>
              <a
                href="mailto:reservations@mastercarrental.lk"
                className="block text-sm text-neutral-300 hover:text-white mt-1 break-all transition-colors"
              >
                reservations@mastercarrental.lk
              </a>
            </div>
          </div>

          {/* Embedded Location Map */}
          <div className="lg:col-span-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-neutral-400 mb-5">
              Location Map
            </p>
            <div className="relative h-52 w-full rounded-2xl overflow-hidden border border-white/15 bg-neutral-900">
              <iframe
                title="Master Car Rental Colombo Location"
                src="https://www.google.com/maps?q=Galle+Face,+Colombo,+Sri+Lanka&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0 contrast-125 opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <p className="text-xs text-neutral-500 mt-2.5">
              Colombo dispatch &amp; viewing by appointment.
            </p>
          </div>
        </div>

        {/* Bottom Copyright & Credit Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            &copy; {currentYear} Master Car Rental. All rights reserved.
          </p>
          <p className="text-neutral-400">
            Designed and developed by{" "}
            <a
              href="https://kaushalya-cloud.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors"
            >
              Kaushalya
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}