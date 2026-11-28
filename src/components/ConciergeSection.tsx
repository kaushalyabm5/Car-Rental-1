"use client";

import { useState } from "react";
import {
  Sparkles,
  ShieldCheck,
  Flower2,
  MessageCircle,
  CarFront,
} from "lucide-react";
import {
  WEDDING_THEMES,
  BRIDE_GROOM_ATTIRE_OPTIONS,
  VEHICLE_TYPE_OPTIONS,
  SUBCATEGORY_BY_VEHICLE_TYPE,
  CAR_COLOR_OPTIONS,
  VEHICLE_SPEC_OPTIONS,
  DURATION_OPTIONS,
  type VehicleType,
} from "@/data/fleetData";

interface RecommendationResponse {
  recommendedCar: string;
  backupCar: string;
  recommendedPackage: string;
  estimatedPrice: string;
  whyItFits: string;
  comfortAndAttireNote: string;
  floralDecorationIdea: string;
  ownerChecklistQuestions: string[];
  source: "ai" | "fallback";
}

// Replace with Master Car Rental owner's real WhatsApp number (947XXXXXXXX)
const OWNER_WHATSAPP_NUMBER = "94770000000";

const BUDGET_OPTIONS = [
  "Under LKR 50,000",
  "LKR 50,000 - 75,000",
  "LKR 75,000 - 100,000",
  "Above LKR 100,000 (VIP)",
];

const JOURNEY_PLAN_OPTIONS = [
  "Ceremony + Outdoor Photo Shoot + Reception",
  "Direct Ceremony to Reception Transfer",
  "Full Day — Poruwa, Homecoming & Hotel Transfers",
];

export default function ConciergeSection() {
  // 6 Practical Couple Inputs (Desires + Comfort + Schedule + Budget)
  const [theme, setTheme] = useState<string>(WEDDING_THEMES[0]);
  const [attire, setAttire] = useState<string>(BRIDE_GROOM_ATTIRE_OPTIONS[0]);
  const [vehicleType, setVehicleType] = useState<VehicleType>("Luxury Sedan");
  const [carColor, setCarColor] = useState<string>(CAR_COLOR_OPTIONS[0]);
  const [duration, setDuration] = useState<string>(DURATION_OPTIONS[2]);
  const [budget, setBudget] = useState<string>(BUDGET_OPTIONS[1]);
  const [location, setLocation] = useState("Colombo");
  const [journeyPlan, setJourneyPlan] = useState<string>(
    JOURNEY_PLAN_OPTIONS[0]
  );

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [result, setResult] = useState<RecommendationResponse | null>(null);

  const handleRecommend = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    setResult(null);

    const defaultSubCategory =
      SUBCATEGORY_BY_VEHICLE_TYPE[vehicleType]?.[0] || "";

    try {
      const res = await fetch("/api/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          theme,
          attire,
          vehicleType,
          subCategory: defaultSubCategory,
          carColor,
          vehicleSpec: VEHICLE_SPEC_OPTIONS[0],
          duration,
          photoStop: journeyPlan,
          location: location.trim(),
          budget,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Unable to generate recommendation.");
        return;
      }

      setResult(data);
    } catch {
      setErrorMsg("Network error. Please check your connection and retry.");
    } finally {
      setLoading(false);
    }
  };

  const buildWhatsAppAutoMessage = (rec: RecommendationResponse) => {
    const checklistText = rec.ownerChecklistQuestions
      ?.map((q, idx) => `${idx + 1}. ${q}`)
      .join("\n");

    return [
      `Hello Master Car Rental, we would like to inquire about a wedding car booking:`,
      ``,
      `• Wedding Style: ${theme}`,
      `• Couple Attire: ${attire}`,
      `• Preferred Vehicle & Color: ${vehicleType} (${carColor})`,
      `• Schedule & Duration: ${journeyPlan} (${duration})`,
      `• Location: ${location}`,
      `• Budget Range: ${budget}`,
      ``,
      `AI Recommended Car: ${rec.recommendedCar} (Backup: ${rec.backupCar}) — ${rec.recommendedPackage} (${rec.estimatedPrice})`,
      checklistText ? `\nDetails to confirm:\n${checklistText}` : null,
    ]
      .filter((line): line is string => line !== null)
      .join("\n");
  };

  return (
    <section
      id="concierge"
      className="py-24 md:py-32 px-6 bg-white text-[#0A0A0A] border-b border-neutral-200"
    >
      <div className="max-w-4xl mx-auto">
        {/* Centered Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-700 bg-neutral-100 border border-neutral-200 px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#0A0A0A]" /> AI Wedding Car
            Matchmaker
          </span>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-[1.1] text-[#0A0A0A] mt-4">
            Find the Perfect Car for Your Day
          </h2>
          <p className="text-neutral-600 mt-4 text-sm md:text-base leading-relaxed">
            Tell us about your wedding style, outfits, schedule, and budget. Our
            AI concierge recommends the ideal chauffeur-driven car tailored to
            your celebration.
          </p>
        </div>

        {/* Couple-Focused 8-Field Form Card */}
        <form
          onSubmit={handleRecommend}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-white p-6 sm:p-8 md:p-10 rounded-3xl border border-neutral-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.04)]"
        >
          {/* 1. Wedding Theme / Vibe */}
          <div>
            <label
              htmlFor="concierge-theme"
              className="block text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-700 mb-2"
            >
              Wedding Style &amp; Vibe
            </label>
            <select
              id="concierge-theme"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-[#0A0A0A] focus:border-[#0A0A0A] focus:outline-none transition-colors"
            >
              {WEDDING_THEMES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* 2. Couple Attire (Determines Rear Cabin & Door Space) */}
          <div>
            <label
              htmlFor="concierge-attire"
              className="block text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-700 mb-2"
            >
              Bride &amp; Groom Attire
            </label>
            <select
              id="concierge-attire"
              value={attire}
              onChange={(e) => setAttire(e.target.value)}
              className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-[#0A0A0A] focus:border-[#0A0A0A] focus:outline-none transition-colors"
            >
              {BRIDE_GROOM_ATTIRE_OPTIONS.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* 3. Preferred Body Style */}
          <div>
            <label
              htmlFor="concierge-vehicle-type"
              className="block text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-700 mb-2"
            >
              Preferred Car Style
            </label>
            <select
              id="concierge-vehicle-type"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value as VehicleType)}
              className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-[#0A0A0A] focus:border-[#0A0A0A] focus:outline-none transition-colors"
            >
              {VEHICLE_TYPE_OPTIONS.map((vType) => (
                <option key={vType} value={vType}>
                  {vType}
                </option>
              ))}
            </select>
          </div>

          {/* 4. Exterior Color */}
          <div>
            <label
              htmlFor="concierge-color"
              className="block text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-700 mb-2"
            >
              Preferred Car Color
            </label>
            <select
              id="concierge-color"
              value={carColor}
              onChange={(e) => setCarColor(e.target.value)}
              className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-[#0A0A0A] focus:border-[#0A0A0A] focus:outline-none transition-colors"
            >
              {CAR_COLOR_OPTIONS.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>

          {/* 5. Day Schedule / Stops */}
          <div>
            <label
              htmlFor="concierge-journey"
              className="block text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-700 mb-2"
            >
              Wedding Day Schedule
            </label>
            <select
              id="concierge-journey"
              value={journeyPlan}
              onChange={(e) => setJourneyPlan(e.target.value)}
              className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-[#0A0A0A] focus:border-[#0A0A0A] focus:outline-none transition-colors"
            >
              {JOURNEY_PLAN_OPTIONS.map((plan) => (
                <option key={plan} value={plan}>
                  {plan}
                </option>
              ))}
            </select>
          </div>

          {/* 6. Hours Needed */}
          <div>
            <label
              htmlFor="concierge-duration"
              className="block text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-700 mb-2"
            >
              Hours Needed
            </label>
            <select
              id="concierge-duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-[#0A0A0A] focus:border-[#0A0A0A] focus:outline-none transition-colors"
            >
              {DURATION_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* 7. Wedding Location */}
          <div>
            <label
              htmlFor="concierge-location"
              className="block text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-700 mb-2"
            >
              Ceremony &amp; Reception Area
            </label>
            <input
              id="concierge-location"
              type="text"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Colombo, Kandy, Galle, Negombo"
              className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-[#0A0A0A] placeholder:text-neutral-400 focus:border-[#0A0A0A] focus:outline-none transition-colors"
            />
          </div>

          {/* 8. Estimated Budget */}
          <div>
            <label
              htmlFor="concierge-budget"
              className="block text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-700 mb-2"
            >
              Your Budget Range
            </label>
            <select
              id="concierge-budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-[#0A0A0A] focus:border-[#0A0A0A] focus:outline-none transition-colors"
            >
              {BUDGET_OPTIONS.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#0A0A0A] hover:bg-neutral-800 disabled:opacity-60 text-white text-xs sm:text-sm font-medium px-8 py-4 transition-colors cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              {loading
                ? "Finding Your Best Wedding Car Match..."
                : "Find Our Ideal Wedding Car"}
            </button>
          </div>
        </form>

        {/* Error Banner */}
        {errorMsg && (
          <div className="mt-6 p-4 rounded-2xl bg-neutral-100 border border-neutral-300 text-[#0A0A0A] text-sm">
            {errorMsg}
          </div>
        )}

        {/* AI Recommendation Output Card */}
        {result && (
          <div className="mt-8 bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 md:p-10 space-y-6 shadow-[0_16px_50px_rgba(0,0,0,0.06)]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200 pb-6">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">
                  Recommended Match for Your Wedding
                </p>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-[#0A0A0A] mt-1">
                  {result.recommendedCar}
                </h3>
                <p className="text-xs text-neutral-500 mt-2 flex items-center gap-1.5">
                  <CarFront className="w-3.5 h-3.5 text-[#0A0A0A]" />
                  Alternative Option:{" "}
                  <span className="text-[#0A0A0A] font-medium">
                    {result.backupCar}
                  </span>
                </p>
              </div>

              <div className="md:text-right">
                <span className="inline-block bg-neutral-100 border border-neutral-200 text-[#0A0A0A] text-xs font-medium px-3.5 py-1 rounded-full">
                  {result.recommendedPackage}
                </span>
                <p className="text-xl font-semibold text-[#0A0A0A] mt-2">
                  {result.estimatedPrice}
                </p>
              </div>
            </div>

            <p className="text-neutral-700 text-sm md:text-[15px] leading-relaxed">
              {result.whyItFits}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-neutral-50/80 p-5 rounded-2xl border border-neutral-200/80">
                <p className="flex items-center gap-2 text-[11px] text-[#0A0A0A] uppercase tracking-[0.14em] font-medium mb-2">
                  <ShieldCheck className="w-4 h-4" /> Bridal Outfit &amp; Cabin
                  Fit
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {result.comfortAndAttireNote}
                </p>
              </div>

              <div className="bg-neutral-50/80 p-5 rounded-2xl border border-neutral-200/80">
                <p className="flex items-center gap-2 text-[11px] text-[#0A0A0A] uppercase tracking-[0.14em] font-medium mb-2">
                  <Flower2 className="w-4 h-4" /> Floral Styling Suggestion
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {result.floralDecorationIdea}
                </p>
              </div>
            </div>

            <a
              href={`https://wa.me/${OWNER_WHATSAPP_NUMBER}?text=${encodeURIComponent(
                buildWhatsAppAutoMessage(result)
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full rounded-full bg-[#0A0A0A] hover:bg-neutral-800 text-white text-xs sm:text-sm font-medium py-4 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              Inquire &amp; Reserve on WhatsApp
            </a>
          </div>
        )}
      </div>
    </section>
  );
}