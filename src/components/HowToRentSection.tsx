import processDesktopBg from "@/assets/home/home-hero-2.png";
import processMobileBg from "@/assets/home/bg-img-mobile.png";

const RENTAL_STEPS = [
  {
    step: "01",
    label: "Selection",
    title: "Choose Your Wedding Sedan",
    description:
      "Select from our late-model Mercedes-Benz, BMW, and Audi fleet—or consult our AI Ride Concierge to match your ceremony style.",
  },
  {
    step: "02",
    label: "Tailoring",
    title: "Set Date, Route & Florals",
    description:
      "Share your wedding date, pickup schedule, destinations, and fresh ribbon or floral preferences for a custom itinerary.",
  },
  {
    step: "03",
    label: "Confirmation",
    title: "Lock In Your Reservation",
    description:
      "Review your transparent all-inclusive quote and confirm your booking instantly via direct WhatsApp or our concierge desk.",
  },
  {
    step: "04",
    label: "Arrival",
    title: "White-Glove Chauffeur Service",
    description:
      "Your uniformed chauffeur arrives early in a showroom-detailed vehicle, delivering a calm, punctual, and memorable entrance.",
  },
];

export default function HowToRentSection() {
  return (
    <section
      id="how-to-rent"
      className="relative py-24 md:py-32 px-6 bg-[#050505] text-white border-b border-white/10 overflow-hidden"
    >
      {/* Mobile Background Image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundImage: `url(${processMobileBg.src})` }}
      />

      {/* Desktop / Tablet Background Image */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${processDesktopBg.src})` }}
      />

      {/* Clean dark gradient overlay so the car photo reads clearly behind crisp editorial lines */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Editorial Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-white/15">
          <div className="max-w-2xl">
            <p className="text-neutral-400 text-xs font-medium uppercase tracking-[0.25em] mb-3">
              The Chauffeur Experience
            </p>
            <h2 className="text-3xl md:text-5xl font-medium uppercase tracking-tight leading-[1.1] text-white">
              How Do You Rent a Car?
            </h2>
          </div>

          <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-md">
            A streamlined, four-step concierge process built for effortless
            wedding day logistics across Sri Lanka.
          </p>
        </div>

        {/* Architectural Horizontal Timeline Grid (No Glass Boxes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-white/15 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
          {RENTAL_STEPS.map((item) => (
            <div
              key={item.step}
              className="group relative py-10 sm:px-7 first:sm:pl-0 last:sm:pr-0 transition-colors"
            >
              {/* Top Step Node + Label */}
              <div className="flex items-center justify-between mb-10">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/30 group-hover:bg-white group-hover:text-[#0A0A0A] group-hover:border-white text-xs font-medium tracking-wider transition-all duration-300 tabular-nums">
                  {item.step}
                </span>
                <span className="text-[11px] uppercase tracking-[0.22em] text-neutral-400 group-hover:text-white transition-colors">
                  {item.label}
                </span>
              </div>

              {/* Step Title & Description */}
              <h3 className="text-xl font-medium text-white tracking-tight leading-snug">
                {item.title}
              </h3>

              <p className="text-neutral-300 text-sm leading-relaxed mt-3.5">
                {item.description}
              </p>

              {/* Bottom Animated White Rule */}
              <div className="mt-8 h-px w-8 bg-white/25 group-hover:w-full group-hover:bg-white transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom Minimalist Action Bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
            Complimentary route &amp; floral consultation included
          </p>

          <a
            href="#concierge"
            className="inline-flex items-center gap-3 bg-white hover:bg-neutral-200 text-[#0A0A0A] text-xs font-medium uppercase tracking-[0.16em] px-7 py-3.5 rounded-full transition-colors"
          >
            <span>Reserve Your Chauffeur</span>
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}