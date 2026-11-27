import type { StaticImageData } from "next/image";
import logo1 from "@/assets/car-logos/bmw.png";
import logo2 from "@/assets/car-logos/audi.png";
import logo3 from "@/assets/car-logos/mercedes.png";
import logo4 from "@/assets/car-logos/toyota.png";
import logo5 from "@/assets/car-logos/nissan.png";
import logo6 from "@/assets/car-logos/porsche.png";
import logo7 from "@/assets/car-logos/land-rover.png";

interface BrandItem {
  id: string;
  name: string;
  logo: StaticImageData;
}

const CAR_BRANDS: BrandItem[] = [
  {
    id: "bmw",
    name: "BMW",
    logo: logo1,
  },
  {
    id: "audi",
    name: "Audi",
    logo: logo2,
  },
  {
    id: "mercedes-benz",
    name: "Mercedes-Benz",
    logo: logo3,
  },
  {
    id: "toyota",
    name: "Toyota",
    logo: logo4,
  },
  {
    id: "nissan",
    name: "Nissan",
    logo: logo5,
  },
  {
    id: "porsche",
    name: "Porsche",
    logo: logo6,
  },
  {
    id: "land-rover",
    name: "Land Rover",
    logo: logo7,
  },
];

function BrandCard({ brand }: { brand: BrandItem }) {
  return (
    <div className="group bg-white border border-neutral-200 rounded-2xl py-9 px-4 flex flex-col items-center justify-center gap-3.5 hover:border-neutral-300 hover:bg-neutral-50/70 transition-all duration-300">
      <div className="h-12 w-24 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <img
          src={brand.logo.src}
          alt={`${brand.name} logo`}
          className="max-h-11 max-w-full w-auto h-auto object-contain"
        />
      </div>
      <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-600 group-hover:text-[#0A0A0A] transition-colors text-center">
        {brand.name}
      </span>
    </div>
  );
}

export default function CarBrandsSection() {
  const firstRowBrands = CAR_BRANDS.slice(0, 4);
  const secondRowBrands = CAR_BRANDS.slice(4, 7);

  return (
    <section
      id="brands"
      className="py-20 md:py-28 px-6 bg-white text-[#0A0A0A] border-b border-neutral-200"
    >
      <div className="max-w-5xl mx-auto">
        {/* Centered Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-[1.1] text-[#0A0A0A]">
            Car Brands in Our Collection
          </h2>
          <p className="mt-4 text-sm md:text-base text-neutral-600 leading-relaxed">
            Select from celebrated global car manufacturers known for refined
            design, smooth performance, and unmistakable presence.
          </p>
        </div>

        {/* 4-Card First Row + Centered 3-Card Second Row */}
        <div className="space-y-4">
          {/* Row 1: 4 Brand Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {firstRowBrands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>

          {/* Row 2: 3 Brand Cards Centered */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:max-w-[74.5%] md:mx-auto">
            {secondRowBrands.map((brand, index) => (
              <div
                key={brand.id}
                className={
                  index === 2 ? "col-span-2 md:col-span-1" : "col-span-1"
                }
              >
                <BrandCard brand={brand} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}