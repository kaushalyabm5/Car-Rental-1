export interface CarItem {
  id: string;
  name: string;
  brand: "Mercedes-Benz" | "BMW" | "Audi" | "Toyota";
  vehicleType:
    | "Luxury Sedan"
    | "Luxury SUV"
    | "Executive & Sporty Sedan"
    | "Convertible / Grand Tourer";
  subCategory: string;
  color: string;
  trimType: "Stock Factory Spec" | "M-Sport / AMG / S-Line Trim" | "Subtle Custom / Modified Look";
  styleTag: string;
  rearComfortNote: string;
  priceLabel: string;
  image: string;
}

export interface PackageItem {
  name: string;
  durationHours: string;
  price: string;
  popular?: boolean;
  features: string[];
}

export const WEDDING_THEMES = [
  "Traditional Kandyan (Osariya / Nilame)",
  "Low-Country / Southern Traditional",
  "Christian / Church Classic",
  "Hindu / Tamil Royal Wedding",
  "Muslim / Nikah Grand Reception",
  "Modern & Luxury Minimalist",
  "Royal Vintage / Heritage Hotel",
  "Beach / Coastal Sunset Wedding",
  "Garden / Upcountry Estate Wedding",
  "Homecoming / Second-Day Celebration",
] as const;

export const BRIDE_GROOM_ATTIRE_OPTIONS = [
  "Kandyan Osariya & Nilame / Mul-Anduma",
  "Low-Country Saree & Barong / Suit",
  "Bridal Lehenga & Sherwani / Suit",
  "Western Bridal Gown & Classic Tuxedo",
  "Nikah Abaya / Bridal Dress & Sherwani",
  "Modern Cocktail / Minimalist Dress & Suit",
  "Resort / Outdoor Linen or Flowy Attire",
] as const;

export const VEHICLE_TYPE_OPTIONS = [
  "Luxury Sedan",
  "Luxury SUV",
  "Executive & Sporty Sedan",
  "Convertible / Grand Tourer",
] as const;

export type VehicleType = (typeof VEHICLE_TYPE_OPTIONS)[number];

export const SUBCATEGORY_BY_VEHICLE_TYPE: Record<VehicleType, string[]> = {
  "Luxury Sedan": [
    "Classic Chauffeur Sedan (e.g. Benz E-Class / Audi A6)",
    "Ultra-Luxury Flagship Sedan (e.g. Benz S-Class)",
    "Smooth Rear-Comfort Sedan",
  ],
  "Luxury SUV": [
    "Sporty Performance SUV (e.g. BMW X5 / X6)",
    "VIP Command SUV (e.g. Toyota Land Cruiser Prado)",
    "High-Ground-Clearance Luxury SUV",
  ],
  "Executive & Sporty Sedan": [
    "Sporty Executive Sedan (e.g. BMW 530i / 5 Series)",
    "Sharp Athletic Sedan",
  ],
  "Convertible / Grand Tourer": [
    "Open-Top / Convertible Luxury",
    "Grand Touring Statement Coupe / Sedan",
  ],
};

export const CAR_COLOR_OPTIONS = [
  "Pearl White",
  "Metallic / Jet Black",
  "Nardo / Graphite Grey",
  "Silver Metallic",
  "No Color Preference (Best Match)",
] as const;

export const VEHICLE_SPEC_OPTIONS = [
  "Stock Factory Spec",
  "Sport Trim (M-Sport / AMG / S-Line)",
  "Subtle Custom / Modified Styling",
] as const;

export const DURATION_OPTIONS = [
  "Up to 4 Hours",
  "6 Hours",
  "8 Hours",
  "10 Hours",
  "Full Day (12+ Hours)",
] as const;

export const FLEET_CARS: CarItem[] = [
  {
    id: "benz-e-class",
    name: "Mercedes-Benz E-Class",
    brand: "Mercedes-Benz",
    vehicleType: "Luxury Sedan",
    subCategory: "Classic Chauffeur Sedan (e.g. Benz E-Class / Audi A6)",
    color: "Pearl White",
    trimType: "Stock Factory Spec",
    styleTag: "Timeless Royal Chauffeur",
    rearComfortNote:
      "Generous rear cabin space and refined suspension for Kandyan Osariya, bridal gowns, and relaxed entry/exit.",
    priceLabel: "From LKR 65,000",
    image: "/cars/benz-e-class.jpg",
  },
  {
    id: "bmw-530i",
    name: "BMW 530i M-Sport",
    brand: "BMW",
    vehicleType: "Executive & Sporty Sedan",
    subCategory: "Sporty Executive Sedan (e.g. BMW 530i / 5 Series)",
    color: "Nardo / Graphite Grey",
    trimType: "Sport Trim (M-Sport / AMG / S-Line)",
    styleTag: "Sharp Executive & Sporty",
    rearComfortNote:
      "Dynamic stance with a composed luxury cabin, blending modern flair with comfortable rear seating.",
    priceLabel: "From LKR 68,000",
    image: "/cars/bmw-5-series.jpg",
  },
  {
    id: "audi-a6",
    name: "Audi A6",
    brand: "Audi",
    vehicleType: "Luxury Sedan",
    subCategory: "Smooth Rear-Comfort Sedan",
    color: "Pearl White",
    trimType: "Stock Factory Spec",
    styleTag: "Clean & Modern Elegance",
    rearComfortNote:
      "Quiet cabin and balanced rear legroom suited for both traditional drapes and contemporary reception arrivals.",
    priceLabel: "From LKR 55,000",
    image: "/cars/audi-a6.jpg",
  },
  {
    id: "bmw-x5",
    name: "BMW X5",
    brand: "BMW",
    vehicleType: "Luxury SUV",
    subCategory: "Sporty Performance SUV (e.g. BMW X5 / X6)",
    color: "Metallic / Jet Black",
    trimType: "Sport Trim (M-Sport / AMG / S-Line)",
    styleTag: "Sporty Luxury SUV",
    rearComfortNote:
      "High seating position and wide door openings make stepping in and out with voluminous attire effortless.",
    priceLabel: "From LKR 80,000",
    image: "/cars/hero-car.jpg",
  },
  {
    id: "prado-tx",
    name: "Toyota Land Cruiser Prado",
    brand: "Toyota",
    vehicleType: "Luxury SUV",
    subCategory: "VIP Command SUV (e.g. Toyota Land Cruiser Prado)",
    color: "Pearl White",
    trimType: "Subtle Custom / Modified Look",
    styleTag: "Commanding VIP SUV",
    rearComfortNote:
      "Tall upright cabin and plush ride comfort—ideal for uneven roads, estate venues, and grand presence.",
    priceLabel: "From LKR 70,000",
    image: "/cars/benz-e-class.jpg",
  },
];

export const WEDDING_PACKAGES: PackageItem[] = [
  {
    name: "Silver Ride",
    durationHours: "Up to 4 Hours",
    price: "LKR 38,000+",
    features: [
      "Uniformed Chauffeur",
      "Classic Ribbon Styling",
      "Punctual Arrival Guarantee",
    ],
  },
  {
    name: "Gold Royal",
    durationHours: "8 Hours",
    price: "LKR 60,000+",
    popular: true,
    features: [
      "Uniformed Chauffeur",
      "Fresh Floral Bonnet & Handle Decor",
      "Complimentary Refreshments & Red Carpet",
    ],
  },
  {
    name: "Platinum Full Day",
    durationHours: "12+ Hours (Full Day)",
    price: "LKR 85,000+",
    features: [
      "Dedicated Full-Day Chauffeur",
      "Bespoke Luxury Floral Arrangement",
      "Photo Shoot & Extended Schedule Flexibility",
    ],
  },
];