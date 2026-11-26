export default function WhyChooseUsSection() {
  const pillars = [
    {
      index: "01",
      tag: "Fleet Standard",
      title: "Showroom-Condition Sedans",
      detail:
        "Every Mercedes-Benz, BMW, and Audi is inspected, detailed, and cabin-sanitized before your ceremony—never rushed or half-prepared.",
    },
    {
      index: "02",
      tag: "Chauffeur Craft",
      title: "Composed, Protocol-Trained Drivers",
      detail:
        "Suit-clad chauffeurs who understand wedding timing, family etiquette, discreet photography angles, and Sri Lankan venue routes.",
    },
    {
      index: "03",
      tag: "Schedule Precision",
      title: "Early Arrival & Buffer Planning",
      detail:
        "We map pickup windows, traffic contingencies, and multi-stop transitions in advance so your timeline stays calm from start to finish.",
    },
    {
      index: "04",
      tag: "Direct Concierge",
      title: "Clear Terms & Bespoke Setup",
      detail:
        "Transparent packages with flexible hours, optional floral/ribbon styling, and direct WhatsApp coordination without confusing middlemen.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-24 md:py-32 px-6 bg-white text-[#0A0A0A] border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto">
        {/* Centered Editorial Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500 mb-3">
            Why Master Car Rental
          </p>
          <h2 className="text-3xl md:text-5xl font-medium  tracking-tight leading-[1.08] text-[#0A0A0A]">
            Why Choose Us
          </h2>
          <p className="mt-4 text-sm md:text-base text-neutral-600 leading-relaxed">
            Built for couples who value quiet confidence, spotless presentation,
            and punctual execution on the day that matters most.
          </p>
        </div>

        {/* Luxury Architectural Index Rows */}
        <div className="border-t border-neutral-200">
          {pillars.map((item) => (
            <div
              key={item.index}
              className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 border-b border-neutral-200 items-baseline transition-colors duration-300 hover:bg-neutral-50/80 px-2 md:px-4"
            >
              {/* Number & Pillar Tag */}
              <div className="md:col-span-3 flex items-center gap-4">
                <span className="text-xs font-medium tracking-[0.2em] text-neutral-400 group-hover:text-[#0A0A0A] transition-colors tabular-nums">
                  {item.index}
                </span>
                <span className="h-px w-6 bg-neutral-300 group-hover:w-10 group-hover:bg-[#0A0A0A] transition-all duration-300" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-neutral-500 group-hover:text-[#0A0A0A] transition-colors">
                  {item.tag}
                </span>
              </div>

              {/* Pillar Title */}
              <div className="md:col-span-4">
                <h3 className="text-lg md:text-xl font-medium tracking-tight text-[#0A0A0A] group-hover:translate-x-1 transition-transform duration-300">
                  {item.title}
                </h3>
              </div>

              {/* Pillar Description */}
              <div className="md:col-span-5">
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}