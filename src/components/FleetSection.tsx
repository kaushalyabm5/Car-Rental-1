import { FLEET_CARS } from "@/data/fleetData";

export default function FleetSection() {
  return (
    <section id="fleet" className="py-20 px-6 bg-[#09090b] text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-amber-400 text-xs uppercase tracking-widest">Signature Collection</p>
          <h2 className="text-3xl font-bold mt-1">Featured Wedding Fleet</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FLEET_CARS.map((car) => (
            <div
              key={car.id}
              className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden flex flex-col"
            >
              <img
                src={car.image}
                alt={car.name}
                className="h-52 w-full object-cover bg-zinc-900"
              />
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs text-amber-400 uppercase">{car.styleTag}</span>
                  <h3 className="text-xl font-semibold mt-1">{car.name}</h3>
                  <p className="text-sm text-gray-400 mt-1">{car.color} • {car.packageSummary}</p>
                </div>
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="font-semibold text-white">{car.priceLabel}</span>
                  <a href="#concierge" className="text-xs text-amber-400 hover:underline">
                    Check Fit →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}