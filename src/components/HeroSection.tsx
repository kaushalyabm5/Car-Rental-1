import heroDesktopBg from "@/assets/home/home-hero-3.png";
import heroMobileBg from "@/assets/home/home-hero-mobile.png";

export default function HeroSection() {
  return (
    <section className="min-h-screen relative py-24 md:py-32 px-6 bg-[#050505] text-white border-b border-neutral-200 overflow-hidden flex items-center">
      {/* Mobile Background Image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundImage: `url(${heroMobileBg.src})` }}
      />

      {/* Desktop / Tablet Background Image */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroDesktopBg.src})` }}
      />

      {/* Dark atmospheric overlay to let the image shine while keeping white text crisp */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80 pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h1 className="text-4xl sm:text-6xl md:text-[5rem] font-normal tracking-tight leading-[1.15] text-white">
          Arrive in Timeless Luxury
        </h1>

        <p className="text-neutral-200 max-w-2xl mx-auto mt-5 text-base md:text-lg leading-relaxed">
          Chauffeur-driven Mercedes-Benz, BMW, and Audi wedding cars tailored for
          unforgettable entrances.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#concierge"
            className="bg-transparent border border-white/40 hover:border-white hover:bg-white/10 text-white text-xs tracking-wide font-normal px-6 py-3 rounded-lg transition"
          >
            Try AI Ride Concierge
          </a>

          <a
            href="/fleet"
            className="bg-white border border-white hover:bg-neutral-100 text-black text-xs tracking-wide font-medium px-6 py-3 rounded-lg transition"
          >
            View Luxury Fleet
          </a>
        </div>
      </div>
    </section>
  );
}