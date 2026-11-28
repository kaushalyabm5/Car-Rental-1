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
      <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://tiktok.com",
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/94770000000",
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
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
            <span className="text-white font-medium">Kaushalya</span>
          </p>
        </div>
      </div>
    </footer>
  );
}