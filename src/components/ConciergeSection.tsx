"use client";

import { useState } from "react";
import {
  Sparkles,
  ShieldCheck,
  Flower2,
  MessageCircle,
  CarFront,
  Crown,
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

export default function ConciergeSection() {
  const [theme, setTheme] = useState<string>(WEDDING_THEMES[0]);
  const [attire, setAttire] = useState<string>(BRIDE_GROOM_ATTIRE_OPTIONS[0]);
  const [vehicleType, setVehicleType] = useState<VehicleType>("Luxury Sedan");
  const [subCategory, setSubCategory] = useState<string>(
    SUBCATEGORY_BY_VEHICLE_TYPE["Luxury Sedan"][0]
  );
  const [carColor, setCarColor] = useState<string>(CAR_COLOR_OPTIONS[0]);
  const [vehicleSpec, setVehicleSpec] = useState<string>(
    VEHICLE_SPEC_OPTIONS[0]
  );
  const [duration, setDuration] = useState<string>(DURATION_OPTIONS[2]);
  const [photoStop, setPhotoStop] = useState(
    "Yes — Outdoor / Hotel Photo Session"
  );
  const [location, setLocation] = useState("Colombo");
  const [budget, setBudget] = useState("LKR 50,000 - 75,000");
  const [weddingDate, setWeddingDate] = useState("");
  const [specialNotes, setSpecialNotes] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [result, setResult] = useState<RecommendationResponse | null>(null);

  const handleVehicleTypeChange = (nextType: VehicleType) => {
    setVehicleType(nextType);
    const firstSub = SUBCATEGORY_BY_VEHICLE_TYPE[nextType]?.[0] || "";
    setSubCategory(firstSub);
  };

  const handleRecommend = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    setResult(null);

    try {
      const res = await fetch("/api/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          theme,
          attire,
          vehicleType,
          subCategory,
          carColor,
          vehicleSpec,
          duration,
          photoStop,
          location,
          budget,
          weddingDate,
          specialNotes,
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
      .map((q, idx) => `${idx + 1}. ${q}`)
      .join("\n");

    return [
      `Hello Master Car Rental, I would like to inquire about a wedding ride:`,
      ``,
      `• Wedding Date: ${weddingDate || "To be confirmed"}`,
      `• Theme: ${theme}`,
      `• Bride & Groom Attire: ${attire}`,
      `• Vehicle Type & Style: ${vehicleType} (${subCategory})`,
      `• Preferred Color & Spec: ${carColor} | ${vehicleSpec}`,
      `• Duration Needed: ${duration}`,
      `• Photo Session / Stops: ${photoStop}`,
      `• Location: ${location}`,
      `• Budget: ${budget}`,
      specialNotes ? `• Notes: ${specialNotes}` : null,
      ``,
      `Recommended Match: ${rec.recommendedCar} (Backup: ${rec.backupCar}) — ${rec.recommendedPackage} (${rec.estimatedPrice})`,
      ``,
      `Questions to confirm:`,
      checklistText,
    ]
      .filter((line): line is string => line !== null)
      .join("\n");
  };

  const subCategories = SUBCATEGORY_BY_VEHICLE_TYPE[vehicleType] || [];

  return (
    <section
      id="concierge"
      className="py-24 px-6 bg-[#050505] text-white border-t border-white/10 relative overflow-hidden"
    >
      {/* Subtle Ambient Luxury Glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[540px] h-[260px] rounded-full bg-amber-500/10 blur-[120px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 text-amber-400 text-xs tracking-[0.22em] uppercase bg-amber-500/10 border border-amber-400/20 px-3.5 py-1.5 rounded-full">
            <Crown className="w-3.5 h-3.5" /> Master AI Ride Concierge
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-4">
            Bespoke Wedding Fleet Advisor
          </h2>
          <p className="text-zinc-400 mt-3 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            ඔබේ wedding theme එක, ඇඳුම, වාහන වර්ගය, පාට සහ අවශ්‍ය පැය ගණන තෝරා ගැළපෙනම luxury රථය සොයාගන්න.
          </p>
        </div>

        <form
          onSubmit={handleRecommend}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-zinc-950/90 backdrop-blur-xl p-6 md:p-9 rounded-3xl border border-white/10 shadow-[0_20px_70px_rgba(0,0,0,0.65)]"
        >
          {/* Theme */}
          <div>
            <label className="block text-[11px] font-medium text-zinc-400 uppercase tracking-wider mb-2">
              Wedding Theme
            </label>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="w-full bg-zinc-900/90 border border-white/10 rounded-xl px-3.5 py-3 text-sm text-white focus:border-amber-400/80 outline-none transition"
            >
              {WEDDING_THEMES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Attire */}
          <div>
            <label className="block text-[11px] font-medium text-zinc-400 uppercase tracking-wider mb-2">
              Bride & Groom Attire
            </label>
            <select
              value={attire}
              onChange={(e) => setAttire(e.target.value)}
              className="w-full bg-zinc-900/90 border border-white/10 rounded-xl px-3.5 py-3 text-sm text-white focus:border-amber-400/80 outline-none transition"
            >
              {BRIDE_GROOM_ATTIRE_OPTIONS.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Vehicle Type */}
          <div>
            <label className="block text-[11px] font-medium text-zinc-400 uppercase tracking-wider mb-2">
              Vehicle Type
            </label>
            <select
              value={vehicleType}
              onChange={(e) =>
                handleVehicleTypeChange(e.target.value as VehicleType)
              }
              className="w-full bg-zinc-900/90 border border-white/10 rounded-xl px-3.5 py-3 text-sm text-white focus:border-amber-400/80 outline-none transition"
            >
              {VEHICLE_TYPE_OPTIONS.map((vType) => (
                <option key={vType} value={vType}>
                  {vType}
                </option>
              ))}
            </select>
          </div>

          {/* Dynamic Sub-Category based on Vehicle Type */}
          <div>
            <label className="block text-[11px] font-medium text-zinc-400 uppercase tracking-wider mb-2">
              {vehicleType} Category
            </label>
            <select
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              className="w-full bg-zinc-900/90 border border-white/10 rounded-xl px-3.5 py-3 text-sm text-white focus:border-amber-400/80 outline-none transition"
            >
              {subCategories.map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>

          {/* Color */}
          <div>
            <label className="block text-[11px] font-medium text-zinc-400 uppercase tracking-wider mb-2">
              Preferred Car Color
            </label>
            <select
              value={carColor}
              onChange={(e) => setCarColor(e.target.value)}
              className="w-full bg-zinc-900/90 border border-white/10 rounded-xl px-3.5 py-3 text-sm text-white focus:border-amber-400/80 outline-none transition"
            >
              {CAR_COLOR_OPTIONS.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>

          {/* Stock vs Sport / Modified */}
          <div>
            <label className="block text-[11px] font-medium text-zinc-400 uppercase tracking-wider mb-2">
              Vehicle Trim / Styling
            </label>
            <select
              value={vehicleSpec}
              onChange={(e) => setVehicleSpec(e.target.value)}
              className="w-full bg-zinc-900/90 border border-white/10 rounded-xl px-3.5 py-3 text-sm text-white focus:border-amber-400/80 outline-none transition"
            >
              {VEHICLE_SPEC_OPTIONS.map((spec) => (
                <option key={spec} value={spec}>
                  {spec}
                </option>
              ))}
            </select>
          </div>

          {/* Duration (Hours only) */}
          <div>
            <label className="block text-[11px] font-medium text-zinc-400 uppercase tracking-wider mb-2">
              Time Duration Needed
            </label>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full bg-zinc-900/90 border border-white/10 rounded-xl px-3.5 py-3 text-sm text-white focus:border-amber-400/80 outline-none transition"
            >
              {DURATION_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Photo Shoot / Schedule */}
          <div>
            <label className="block text-[11px] font-medium text-zinc-400 uppercase tracking-wider mb-2">
              Photo Session / Schedule Flow
            </label>
            <select
              value={photoStop}
              onChange={(e) => setPhotoStop(e.target.value)}
              className="w-full bg-zinc-900/90 border border-white/10 rounded-xl px-3.5 py-3 text-sm text-white focus:border-amber-400/80 outline-none transition"
            >
              <option>Yes — Outdoor / Hotel Photo Session</option>
              <option>Direct Ceremony to Reception Only</option>
              <option>Ceremony + Photo Shoot + Reception</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block text-[11px] font-medium text-zinc-400 uppercase tracking-wider mb-2">
              Wedding Location / Area
            </label>
            <input
              type="text"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Colombo, Kandy, Galle, Negombo"
              className="w-full bg-zinc-900/90 border border-white/10 rounded-xl px-3.5 py-3 text-sm text-white focus:border-amber-400/80 outline-none transition"
            />
          </div>

          {/* Budget */}
          <div>
            <label className="block text-[11px] font-medium text-zinc-400 uppercase tracking-wider mb-2">
              Estimated Budget
            </label>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full bg-zinc-900/90 border border-white/10 rounded-xl px-3.5 py-3 text-sm text-white focus:border-amber-400/80 outline-none transition"
            >
              <option>Under LKR 50,000</option>
              <option>LKR 50,000 - 75,000</option>
              <option>LKR 75,000 - 100,000</option>
              <option>Above LKR 100,000 (VIP)</option>
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="block text-[11px] font-medium text-zinc-400 uppercase tracking-wider mb-2">
              Wedding Date (Optional)
            </label>
            <input
              type="date"
              value={weddingDate}
              onChange={(e) => setWeddingDate(e.target.value)}
              className="w-full bg-zinc-900/90 border border-white/10 rounded-xl px-3.5 py-3 text-sm text-white focus:border-amber-400/80 outline-none transition"
            />
          </div>

          {/* Special Notes */}
          <div>
            <label className="block text-[11px] font-medium text-zinc-400 uppercase tracking-wider mb-2">
              Additional Request (Optional)
            </label>
            <input
              type="text"
              value={specialNotes}
              onChange={(e) => setSpecialNotes(e.target.value)}
              placeholder="e.g. Extra chauffeur time or specific flowers"
              className="w-full bg-zinc-900/90 border border-white/10 rounded-xl px-3.5 py-3 text-sm text-white focus:border-amber-400/80 outline-none transition"
            />
          </div>

          <div className="md:col-span-2 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:brightness-105 disabled:opacity-60 text-black font-semibold py-4 rounded-xl transition cursor-pointer shadow-[0_10px_30px_rgba(245,158,11,0.22)]"
            >
              <Sparkles className="w-4 h-4" />
              {loading
                ? "Curating Your Personalized Recommendation..."
                : "Get My Tailored Ride Recommendation"}
            </button>
          </div>
        </form>

        {errorMsg && (
          <div className="mt-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
            {errorMsg}
          </div>
        )}

        {result && (
          <div className="mt-8 bg-gradient-to-b from-zinc-900/95 to-zinc-950 border border-amber-400/30 rounded-3xl p-6 md:p-9 space-y-6 shadow-[0_24px_80px_rgba(0,0,0,0.75)]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="text-amber-400 text-xs uppercase tracking-[0.2em]">
                  Curated Primary Match
                </p>
                <h3 className="text-2xl md:text-3xl font-bold mt-1">
                  {result.recommendedCar}
                </h3>
                <p className="text-xs text-zinc-400 mt-1.5 flex items-center gap-1.5">
                  <CarFront className="w-3.5 h-3.5 text-amber-400" />
                  Alternative Backup:{" "}
                  <span className="text-zinc-200 font-medium">
                    {result.backupCar}
                  </span>
                </p>
              </div>
              <div className="md:text-right">
                <span className="inline-block bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-medium px-3.5 py-1 rounded-full">
                  {result.recommendedPackage}
                </span>
                <p className="text-xl font-semibold text-white mt-1.5">
                  {result.estimatedPrice}
                </p>
              </div>
            </div>

            <p className="text-zinc-200 text-sm md:text-[15px] leading-relaxed">
              {result.whyItFits}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black/50 p-5 rounded-2xl border border-white/10">
                <p className="flex items-center gap-2 text-xs text-amber-400 uppercase tracking-wider font-semibold mb-2">
                  <ShieldCheck className="w-4 h-4" /> Attire & Cabin Comfort
                </p>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {result.comfortAndAttireNote}
                </p>
              </div>

              <div className="bg-black/50 p-5 rounded-2xl border border-white/10">
                <p className="flex items-center gap-2 text-xs text-amber-400 uppercase tracking-wider font-semibold mb-2">
                  <Flower2 className="w-4 h-4" /> Floral & Styling Concept
                </p>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {result.floralDecorationIdea}
                </p>
              </div>
            </div>

            {/* Direct WhatsApp Button with Auto-Typed Full Message (No preview box on page) */}
            <a
              href={`https://wa.me/${OWNER_WHATSAPP_NUMBER}?text=${encodeURIComponent(
                buildWhatsAppAutoMessage(result)
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full bg-white hover:bg-zinc-200 text-black font-semibold py-4 rounded-xl transition cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              Send WhatsApp Message
            </a>
          </div>
        )}
      </div>
    </section>
  );
}