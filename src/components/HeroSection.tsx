export default function HeroSection() {
  return (
    <section className="relative py-24 md:py-32 px-6 bg-[#050505] text-white overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <p className="text-amber-400 text-xs uppercase tracking-[0.25em] mb-4">
          Master Car Rental • Sri Lanka
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          Arrive on Your Big Day in <span className="text-amber-400">Timeless Luxury</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mt-5 text-base md:text-lg">
          Chauffeur-driven Mercedes-Benz, BMW, and Audi wedding cars tailored for unforgettable entrances.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#concierge"
            className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 rounded-lg transition"
          >
            Try AI Ride Concierge
          </a>
          <a
            href="#fleet"
            className="border border-white/20 hover:border-amber-400/60 text-white font-medium px-6 py-3 rounded-lg transition"
          >
            View Luxury Fleet
          </a>
        </div>
      </div>
    </section>
  );
}