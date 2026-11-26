import { WEDDING_PACKAGES } from "@/data/fleetData";

export default function PackagesSection() {
  return (
    <section id="packages" className="py-20 px-6 bg-[#050505] text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-amber-400 text-xs uppercase tracking-widest">Transparent Plans</p>
          <h2 className="text-3xl font-bold mt-1">Wedding Rental Packages</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WEDDING_PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl p-6 border ${
                pkg.popular
                  ? "border-amber-400/60 bg-amber-500/[0.06]"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              <h3 className="text-xl font-bold">{pkg.name}</h3>
              <p className="text-xs text-gray-400 mt-1">{pkg.duration}</p>
              <p className="text-2xl font-bold text-amber-400 mt-4">{pkg.price}</p>
              <ul className="mt-5 space-y-2 text-sm text-gray-300">
                {pkg.features.map((feat) => (
                  <li key={feat}>• {feat}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}