"use client";

import { useEffect, useState, type FormEvent } from "react";

const EXIT_DURATION_MS = 280;

export default function CtaSection() {
  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Trigger butter-smooth enter transition right after mount
  useEffect(() => {
    if (!isRendered) return;

    const frame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setIsVisible(true);
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [isRendered]);

  const handleClose = () => {
    setIsVisible(false);
    window.setTimeout(() => {
      setIsRendered(false);
    }, EXIT_DURATION_MS);
  };

  // Close on Escape while keeping page scrollbar visible
  useEffect(() => {
    if (!isRendered) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isRendered]);

  const handleOpen = () => {
    setSubmitted(false);
    setIsRendered(true);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Message inquiry:", { name, email, message });

    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section
      id="cta"
      className="py-24 md:py-32 px-6 bg-white text-[#0A0A0A] border-b border-neutral-200"
    >
      {/* Centered CTA Content */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-[1.1] text-[#0A0A0A]">
          Reserve Your Arrival in Style
        </h2>
        <p className="mt-4 text-sm md:text-base text-neutral-600 max-w-xl mx-auto leading-relaxed">
          Planning a wedding entrance, VIP transfer, or special event across Sri
          Lanka? Reach out directly and our team will assist you with fleet
          availability and tailored packages.
        </p>

        <div className="mt-8">
          <button
            type="button"
            onClick={handleOpen}
            className="inline-flex items-center justify-center rounded-full bg-[#0A0A0A] hover:bg-neutral-800 text-white text-xs md:text-sm font-medium px-8 py-3.5 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.98] cursor-pointer"
          >
            Send a Message
          </button>
        </div>
      </div>

      {/* Floating Right-Side Card Modal With Top, Bottom & Right Margins */}
      {isRendered && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-end p-4 sm:p-6 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="message-card-title"
        >
          {/* Smooth Fade Backdrop */}
          <div
            onClick={handleClose}
            aria-hidden="true"
            className={`fixed inset-0 bg-black/35 backdrop-blur-[3px] transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Floating Card Container (No Internal Scrollbar) */}
          <aside
            className={`relative z-10 w-full max-w-md rounded-3xl bg-white text-[#0A0A0A] border border-neutral-200/90 shadow-[0_24px_70px_rgba(0,0,0,0.16)] p-5 sm:p-6 flex flex-col justify-between overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isVisible
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 translate-x-8 scale-[0.97]"
            }`}
          >
            <div>
              {/* Card Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-neutral-200">
                <div>
                  <h3
                    id="message-card-title"
                    className="text-xl sm:text-2xl font-medium tracking-tight text-[#0A0A0A]"
                  >
                    Send a Message
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-neutral-500 leading-relaxed">
                    Share your event date, preferred car, or inquiry and we will
                    respond promptly.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleClose}
                  aria-label="Close message card"
                  className="w-9 h-9 rounded-full border border-neutral-200 hover:border-[#0A0A0A] hover:bg-[#0A0A0A] text-[#0A0A0A] hover:text-white flex items-center justify-center transition-colors duration-200 cursor-pointer shrink-0"
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
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>

              {/* Confirmation View or Form */}
              {submitted ? (
                <div className="mt-5 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                  <h4 className="text-base font-medium text-[#0A0A0A]">
                    Message Sent
                  </h4>
                  <p className="mt-1.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    Thank you for contacting Master Car Rental. We have received
                    your message and will get back to you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 inline-flex items-center justify-center rounded-full border border-neutral-300 hover:border-[#0A0A0A] hover:bg-[#0A0A0A] text-xs font-medium text-[#0A0A0A] hover:text-white px-5 py-2.5 transition-colors duration-200 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
                  <div>
                    <label
                      htmlFor="cta-card-name"
                      className="block text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      id="cta-card-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm text-[#0A0A0A] placeholder:text-neutral-400 focus:border-[#0A0A0A] focus:outline-none transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="cta-card-email"
                      className="block text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      id="cta-card-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm text-[#0A0A0A] placeholder:text-neutral-400 focus:border-[#0A0A0A] focus:outline-none transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="cta-card-message"
                      className="block text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="cta-card-message"
                      rows={3}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your event date, location, or preferred car..."
                      className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm text-[#0A0A0A] placeholder:text-neutral-400 focus:border-[#0A0A0A] focus:outline-none transition-colors duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#0A0A0A] hover:bg-neutral-800 text-white text-xs sm:text-sm font-medium px-6 py-3 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.99] cursor-pointer"
                  >
                    <span>Send</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 2 11 13" />
                      <path d="m22 2-7 20-4-9-9-4 20-7z" />
                    </svg>
                  </button>
                </form>
              )}
            </div>

            {/* Subtle Card Footer */}
            <p className="pt-4 mt-5 border-t border-neutral-200 text-[11px] text-neutral-500">
              Master Car Rental · Chauffeur &amp; Wedding Fleet Across Sri Lanka
            </p>
          </aside>
        </div>
      )}
    </section>
  );
}