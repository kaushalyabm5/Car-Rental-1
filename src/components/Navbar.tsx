"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Our Fleet", href: "/fleet" },
  { label: "Packages", href: "/packages" },
  { label: "Gallery", href: "/gallery" },
  { label: "About Us", href: "/about" },
];

function SocialIcons({
  variant = "header",
  isScrolled = false,
  isMenuOpen = false,
}: {
  variant?: "header" | "overlay";
  isScrolled?: boolean;
  isMenuOpen?: boolean;
}) {
  const buttonStyles =
    variant === "overlay"
      ? "w-11 h-11 rounded-full bg-white border border-neutral-300 hover:border-[#0A0A0A] hover:bg-neutral-100 text-[#0A0A0A] flex items-center justify-center transition-colors duration-200"
      : `w-9 h-9 rounded-full bg-transparent border flex items-center justify-center transition-colors duration-200 ${
          isScrolled
            ? "border-neutral-300 hover:border-[#0A0A0A] text-[#0A0A0A]"
            : "border-white/30 hover:border-white text-white"
        }`;

  return (
    <div
      className={`flex items-center gap-3 ${
        variant === "overlay"
          ? `transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isMenuOpen
                ? "opacity-100 translate-y-0 delay-300"
                : "opacity-0 translate-y-4 delay-0"
            }`
          : ""
      }`}
    >
      {/* WhatsApp */}
      <a
        href="https://wa.me/94700000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className={buttonStyles}
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
        className={buttonStyles}
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
        className={buttonStyles}
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
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isMenuOpen
            ? "bg-white border-b border-neutral-200 text-[#0A0A0A]"
            : isScrolled
              ? "bg-white border-b border-neutral-200 shadow-sm text-[#0A0A0A]"
              : "bg-transparent border-b border-white/15 shadow-none text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between lg:grid lg:grid-cols-3">
          {/* Left: Logo */}
          <div className="flex items-center justify-start min-w-0">
            <Link
              href="/"
              onClick={closeMenu}
              className={`text-sm sm:text-base lg:text-lg font-semibold uppercase tracking-[0.18em] sm:tracking-[0.2em] whitespace-nowrap transition-colors duration-300 ${
                isMenuOpen || isScrolled ? "text-[#0A0A0A]" : "text-white"
              }`}
            >
              Master{" "}
              <span
                className={`font-normal transition-colors duration-300 ${
                  isMenuOpen || isScrolled
                    ? "text-neutral-600"
                    : "text-white/75"
                }`}
              >
                Car Rental
              </span>
            </Link>
          </div>

          {/* Center: Navigation Links (Tablet & Desktop) */}
          <nav
            aria-label="Primary Navigation"
            className={`hidden md:flex items-center justify-center gap-5 lg:gap-8 text-xs lg:text-sm font-normal tracking-wide whitespace-nowrap transition-colors duration-300 ${
              isScrolled ? "text-neutral-700" : "text-white/85"
            }`}
          >
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors duration-200 ${
                  isScrolled ? "hover:text-[#0A0A0A]" : "hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right: Social Icons on Tablet/Desktop, Menu Toggle on Mobile */}
          <div className="flex items-center justify-end">
            <div className="hidden md:flex">
              <SocialIcons variant="header" isScrolled={isScrolled} />
            </div>

            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-fullscreen-menu"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className={`md:hidden w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-300 cursor-pointer ${
                isMenuOpen || isScrolled
                  ? "border-neutral-300 text-[#0A0A0A] hover:border-[#0A0A0A]"
                  : "border-white/30 text-white hover:border-white"
              }`}
            >
              <span className="relative w-4 h-3.5 flex flex-col justify-between items-center">
                <span
                  className={`block h-[1.5px] w-4 rounded-full bg-current transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] origin-center ${
                    isMenuOpen ? "translate-y-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-4 rounded-full bg-current transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isMenuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-4 rounded-full bg-current transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] origin-center ${
                    isMenuOpen ? "-translate-y-[6px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Menu Overlay */}
      <div
        id="mobile-fullscreen-menu"
        className={`md:hidden fixed inset-0 z-40 bg-white text-[#0A0A0A] flex flex-col justify-between pt-24 pb-10 px-6 transition-[opacity,transform,visibility] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isMenuOpen
            ? "opacity-100 translate-y-0 visible pointer-events-auto"
            : "opacity-0 -translate-y-4 invisible pointer-events-none"
        }`}
      >
        <div className="flex-1 flex items-center justify-center">
          <nav
            aria-label="Mobile Navigation"
            className="flex flex-col items-center justify-center gap-6 text-center"
          >
            {NAV_LINKS.map((item, index) => {
              const openDelayMs = 100 + index * 55;
              const closeDelayMs = (NAV_LINKS.length - 1 - index) * 30;

              return (
                <div key={item.href} className="overflow-hidden py-0.5">
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    style={{
                      transitionDelay: `${isMenuOpen ? openDelayMs : closeDelayMs}ms`,
                    }}
                    className={`block text-3xl sm:text-4xl font-medium tracking-tight text-[#0A0A0A] hover:text-neutral-500 transition-[transform,opacity,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isMenuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-7"
                    }`}
                  >
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </nav>
        </div>

        <div
          className={`pt-6 border-t border-neutral-200 flex items-center justify-center transition-opacity duration-400 ${
            isMenuOpen ? "opacity-100 delay-250" : "opacity-0 delay-0"
          }`}
        >
          <SocialIcons variant="overlay" isMenuOpen={isMenuOpen} />
        </div>
      </div>
    </>
  );
}