import car1 from "@/assets/cars/mercedes-s.jpg";
import car2 from "@/assets/cars/bmw-5.jpg";
import car3 from "@/assets/cars/audia6.jpg";
import car4 from "@/assets/cars/mercedes-e.jpg";


const FEATURED_CARS = [
  {
    id: 1,
    name: "Mercedes-Benz S-Class Wedding Rental",
    badge: "10% OFF",
    price: "LKR 45,000",
    originalPrice: "LKR 50,000",
    unit: "/day",
    image: car1,
  },
  {
    id: 2,
    name: "BMW 5 Series Chauffeur Wedding Car",
    badge: "10% OFF",
    price: "LKR 38,000",
    originalPrice: "LKR 42,000",
    unit: "/day",
    image: car2,
  },
  {
    id: 3,
    name: "Audi A6 Executive Bridal Ride",
    badge: "10% OFF",
    price: "LKR 35,000",
    originalPrice: "LKR 39,000",
    unit: "/day",
    image: car3,
  },
  {
    id: 4,
    name: "Mercedes-Benz E-Class Luxury Fleet",
    badge: "10% OFF",
    price: "LKR 40,000",
    originalPrice: "LKR 44,500",
    unit: "/day",
    image: car4,
  },
];

export default function FleetSection() {
  return (
    <section
      id="fleet"
      className="py-24 md:py-32 px-6 bg-white text-[#0A0A0A] border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-normal tracking-tight leading-[1.1] text-[#0A0A0A]">
            Signature Wedding Fleet
          </h2>
          <p className="text-neutral-600 mt-4 text-sm md:text-base leading-relaxed">
            Explore four of our most requested chauffeur-driven luxury cars,
            prepared immaculately for wedding arrivals across Sri Lanka.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_CARS.map((car) => (
            <article
              key={car.id}
              className="group bg-white rounded-2xl border border-neutral-200/90 p-3.5 shadow-[0_6px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Top-Right Tag */}
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-neutral-100">
                  <img
                    src={car.image.src}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {car.badge && (
                    <span className="absolute top-3 right-3 bg-[#0A0A0A]/90 text-white text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5 backdrop-blur-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      {car.badge}
                    </span>
                  )}
                </div>

                {/* Car Title */}
                <h3 className="mt-4 text-base font-medium text-[#0A0A0A] leading-snug">
                  {car.name}
                </h3>
              </div>

              {/* Pricing & Action */}
              <div className="mt-5">
                <div className="flex items-baseline justify-between gap-2 mb-4">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-lg font-semibold text-[#0A0A0A]">
                      {car.price}
                    </span>
                    <span className="text-xs text-neutral-500">{car.unit}</span>
                  </div>
                  {car.originalPrice && (
                    <span className="text-xs text-neutral-400 line-through">
                      {car.originalPrice}
                    </span>
                  )}
                </div>

                <a
                  href="#"
                  className="block w-full text-center py-2.5 px-4 rounded-full border border-neutral-300 text-xs font-medium text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white hover:border-[#0A0A0A] transition-colors"
                >
                  Rent Now
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA: See All Wedding Cars */}
        <div className="mt-14 text-center">
          <a
            href="/fleet"
            className="inline-flex items-center justify-center bg-[#0A0A0A] hover:bg-neutral-800 text-white text-xs font-medium uppercase tracking-[0.16em] px-8 py-3.5 rounded-full transition-colors"
          >
            See All Our Wedding Cars
          </a>
        </div>
      </div>
    </section>
  );
}