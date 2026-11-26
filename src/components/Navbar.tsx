"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white border-b border-neutral-200 shadow-sm text-[#0A0A0A]"
          : "bg-transparent border-b border-white/15 shadow-none text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between md:grid md:grid-cols-3">
        {/* Left: Logo */}
        <div className="flex items-center justify-start">
          <a
            href="#"
            className={`text-base md:text-lg font-semibold uppercase tracking-[0.2em] whitespace-nowrap transition-colors ${
              isScrolled ? "text-[#0A0A0A]" : "text-white"
            }`}
          >
            Master{" "}
            <span
              className={`font-normal transition-colors ${
                isScrolled ? "text-neutral-600" : "text-white/75"
              }`}
            >
              Car Rental
            </span>
          </a>
        </div>

        {/* Center: Navigation Links */}
        <nav
          className={`hidden md:flex items-center justify-center gap-8 text-sm font-normal tracking-wide whitespace-nowrap transition-colors ${
            isScrolled ? "text-neutral-700" : "text-white/85"
          }`}
        >
          <a
            href="#home"
            className={`transition-colors ${
              isScrolled ? "hover:text-[#0A0A0A]" : "hover:text-white"
            }`}
          >
            Home
          </a>
          <a
            href="#fleet"
            className={`transition-colors ${
              isScrolled ? "hover:text-[#0A0A0A]" : "hover:text-white"
            }`}
          >
            Our Fleet
          </a>
          <a
            href="#packages"
            className={`transition-colors ${
              isScrolled ? "hover:text-[#0A0A0A]" : "hover:text-white"
            }`}
          >
            Packages
          </a>
          <a
            href="#gallery"
            className={`transition-colors ${
              isScrolled ? "hover:text-[#0A0A0A]" : "hover:text-white"
            }`}
          >
            Gallery
          </a>
          <a
            href="#about"
            className={`transition-colors ${
              isScrolled ? "hover:text-[#0A0A0A]" : "hover:text-white"
            }`}
          >
            About Us
          </a>
        </nav>

        {/* Right: Rounded Social Icons */}
        <div className="flex items-center justify-end gap-2.5">
          {/* WhatsApp */}
          <a
            href="https://wa.me/94700000000"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className={`w-9 h-9 rounded-full bg-transparent border flex items-center justify-center transition-colors ${
              isScrolled
                ? "border-neutral-300 hover:border-[#0A0A0A] text-[#0A0A0A]"
                : "border-white/30 hover:border-white text-white"
            }`}
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className={`w-9 h-9 rounded-full bg-transparent border flex items-center justify-center transition-colors ${
              isScrolled
                ? "border-neutral-300 hover:border-[#0A0A0A] text-[#0A0A0A]"
                : "border-white/30 hover:border-white text-white"
            }`}
          >
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
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={`w-9 h-9 rounded-full bg-transparent border flex items-center justify-center transition-colors ${
              isScrolled
                ? "border-neutral-300 hover:border-[#0A0A0A] text-[#0A0A0A]"
                : "border-white/30 hover:border-white text-white"
            }`}
          >
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
          </a>
        </div>
      </div>
    </header>
  );
}