interface BrandItem {
  id: string;
  name: string;
  mark: React.ReactNode;
}

const CAR_BRANDS: BrandItem[] = [
  {
    id: "bmw",
    name: "BMW",
    mark: (
      <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="24" cy="24" r="13.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 10.5V24H37.5A13.5 13.5 0 0 0 24 10.5Z" fill="currentColor" />
        <path d="M10.5 24H24V37.5A13.5 13.5 0 0 1 10.5 24Z" fill="currentColor" />
        <line x1="24" y1="4" x2="24" y2="10.5" stroke="currentColor" strokeWidth="1.6" />
        <line x1="24" y1="37.5" x2="24" y2="44" stroke="currentColor" strokeWidth="1.6" />
        <line x1="4" y1="24" x2="10.5" y2="24" stroke="currentColor" strokeWidth="1.6" />
        <line x1="37.5" y1="24" x2="44" y2="24" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    id: "audi",
    name: "Audi",
    mark: (
      <svg viewBox="0 0 76 32" className="w-16 h-8" fill="none">
        <circle cx="15" cy="16" r="10.5" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="27" cy="16" r="10.5" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="39" cy="16" r="10.5" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="51" cy="16" r="10.5" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="61" cy="16" r="10.5" stroke="currentColor" strokeWidth="2.2" />
      </svg>
    ),
  },
  {
    id: "mercedes-benz",
    name: "Mercedes-Benz",
    mark: (
      <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2.2" />
        <path
          d="M24 4.5V24M24 24L7.2 33.8M24 24L40.8 33.8"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "toyota",
    name: "Toyota",
    mark: (
      <svg viewBox="0 0 64 44" className="w-12 h-8" fill="none">
        <ellipse cx="32" cy="22" rx="27" ry="17.5" stroke="currentColor" strokeWidth="2.2" />
        <ellipse cx="32" cy="17.5" rx="20" ry="7.5" stroke="currentColor" strokeWidth="2" />
        <ellipse cx="32" cy="22" rx="8.5" ry="17.5" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: "nissan",
    name: "Nissan",
    mark: (
      <svg viewBox="0 0 72 44" className="w-14 h-8" fill="none">
        <circle cx="36" cy="22" r="15.5" stroke="currentColor" strokeWidth="2.2" />
        <rect
          x="10"
          y="16.5"
          width="52"
          height="11"
          rx="2"
          fill="white"
          stroke="currentColor"
          strokeWidth="2.2"
        />
        <text
          x="36"
          y="24.2"
          textAnchor="middle"
          fill="currentColor"
          fontSize="6.8"
          fontWeight="600"
          letterSpacing="2.2"
        >
          NISSAN
        </text>
      </svg>
    ),
  },
  {
    id: "porsche",
    name: "Porsche",
    mark: (
      <svg viewBox="0 0 44 52" className="w-8 h-10" fill="none">
        <path
          d="M7 5H37V28C37 38.5 22 47.5 22 47.5C22 47.5 7 38.5 7 28V5Z"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path d="M7 26.5H37" stroke="currentColor" strokeWidth="1.6" />
        <path d="M22 5V47.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 11L17 16M17 11L12 16" stroke="currentColor" strokeWidth="1.6" />
        <path d="M27 32L32 37M32 32L27 37" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    id: "land-rover",
    name: "Land Rover",
    mark: (
      <svg viewBox="0 0 68 38" className="w-14 h-8" fill="none">
        <ellipse cx="34" cy="19" rx="30" ry="15" stroke="currentColor" strokeWidth="2.2" />
        <text
          x="34"
          y="17.5"
          textAnchor="middle"
          fill="currentColor"
          fontSize="6.4"
          fontWeight="600"
          letterSpacing="1.8"
        >
          LAND
        </text>
        <text
          x="34"
          y="25.2"
          textAnchor="middle"
          fill="currentColor"
          fontSize="6.4"
          fontWeight="600"
          letterSpacing="1.8"
        >
          ROVER
        </text>
      </svg>
    ),
  },
];

export default function CarBrandsSection() {
  return (
    <section
      id="brands"
      className="py-20 md:py-28 px-6 bg-white text-[#0A0A0A] border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto">
        {/* Centered Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500 mb-3">
            Marques We Represent
          </p>
          <h2 className="text-3xl md:text-5xl font-medium  tracking-tight leading-[1.1] text-[#0A0A0A]">
            Brands We Offer
          </h2>
          <p className="mt-4 text-sm md:text-base text-neutral-600 leading-relaxed">
            Distinguished European and Japanese automotive marques curated for
            weddings, VIP arrivals, and executive charters.
          </p>
        </div>

        {/* Monochrome Brand Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 border-t border-l border-neutral-200">
          {CAR_BRANDS.map((brand) => (
            <div
              key={brand.id}
              className="group bg-white border-r border-b border-neutral-200 py-9 px-4 flex flex-col items-center justify-center gap-3.5 text-neutral-500 hover:text-[#0A0A0A] hover:bg-neutral-50/70 transition-colors duration-300"
            >
              <div className="h-11 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                {brand.mark}
              </div>
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-600 group-hover:text-[#0A0A0A] transition-colors text-center">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}