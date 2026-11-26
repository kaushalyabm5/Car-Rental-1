import Groq from "groq-sdk";
import { NextResponse } from "next/server";
import { FLEET_CARS, WEDDING_PACKAGES } from "@/data/fleetData";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY || "",
});

export interface RecommendationResponse {
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

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 10;
const RATE_LIMIT_WINDOW_MS = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return true;
  }

  record.count += 1;
  return false;
}

function buildFallbackRecommendation(input: {
  theme: string;
  attire: string;
  vehicleType: string;
  subCategory: string;
  carColor: string;
  vehicleSpec: string;
  duration: string;
  location: string;
  budget: string;
}): RecommendationResponse {
  const typeMatch = FLEET_CARS.find(
    (c) => c.vehicleType.toLowerCase() === input.vehicleType.toLowerCase()
  );

  const primaryCar = typeMatch || FLEET_CARS[0];
  const backupCar =
    FLEET_CARS.find((c) => c.id !== primaryCar.id) || FLEET_CARS[1] || FLEET_CARS[0];

  const durationLower = input.duration.toLowerCase();
  const matchedPackage =
    durationLower.includes("10") || durationLower.includes("12")
      ? WEDDING_PACKAGES[2]
      : durationLower.includes("4")
        ? WEDDING_PACKAGES[0]
        : WEDDING_PACKAGES[1];

  return {
    recommendedCar: primaryCar.name,
    backupCar: backupCar.name,
    recommendedPackage: matchedPackage.name,
    estimatedPrice: matchedPackage.price,
    whyItFits: `${primaryCar.name} aligns with your ${input.vehicleType} (${input.subCategory}) preference and ${input.theme} celebration in ${input.location} over ${input.duration}.`,
    comfortAndAttireNote: `${primaryCar.rearComfortNote} Tailored for ${input.attire} with ${input.vehicleSpec} presentation.`,
    floralDecorationIdea: `Fresh white roses, orchids, and subtle greenery along the bonnet and handles matched to ${input.carColor} and ${primaryCar.color}.`,
    ownerChecklistQuestions: [
      `Is ${primaryCar.name} available on our wedding date (with ${backupCar.name} as backup)?`,
      `Can we confirm ${input.carColor} / ${input.vehicleSpec} availability and floral decor options under ${matchedPackage.name}?`,
      `What are the terms if our schedule extends past ${input.duration}?`,
    ],
    source: "fallback",
  };
}

function normalizeAndValidateAIResponse(
  raw: Record<string, unknown>,
  fallback: RecommendationResponse
): RecommendationResponse {
  const validCarNames = FLEET_CARS.map((c) => c.name);
  const validPackageNames = WEDDING_PACKAGES.map((p) => p.name);

  const recommendedCar =
    typeof raw.recommendedCar === "string" &&
    validCarNames.includes(raw.recommendedCar)
      ? raw.recommendedCar
      : fallback.recommendedCar;

  const backupCar =
    typeof raw.backupCar === "string" &&
    validCarNames.includes(raw.backupCar) &&
    raw.backupCar !== recommendedCar
      ? raw.backupCar
      : fallback.backupCar;

  const recommendedPackage =
    typeof raw.recommendedPackage === "string" &&
    validPackageNames.includes(raw.recommendedPackage)
      ? raw.recommendedPackage
      : fallback.recommendedPackage;

  const checklist = Array.isArray(raw.ownerChecklistQuestions)
    ? raw.ownerChecklistQuestions
        .filter((q): q is string => typeof q === "string" && q.trim().length > 0)
        .slice(0, 3)
    : [];

  return {
    recommendedCar,
    backupCar,
    recommendedPackage,
    estimatedPrice:
      typeof raw.estimatedPrice === "string" && raw.estimatedPrice.trim()
        ? raw.estimatedPrice.trim()
        : fallback.estimatedPrice,
    whyItFits:
      typeof raw.whyItFits === "string" && raw.whyItFits.trim()
        ? raw.whyItFits.trim()
        : fallback.whyItFits,
    comfortAndAttireNote:
      typeof raw.comfortAndAttireNote === "string" &&
      raw.comfortAndAttireNote.trim()
        ? raw.comfortAndAttireNote.trim()
        : fallback.comfortAndAttireNote,
    floralDecorationIdea:
      typeof raw.floralDecorationIdea === "string" &&
      raw.floralDecorationIdea.trim()
        ? raw.floralDecorationIdea.trim()
        : fallback.floralDecorationIdea,
    ownerChecklistQuestions:
      checklist.length > 0 ? checklist : fallback.ownerChecklistQuestions,
    source: "ai",
  };
}

export async function POST(req: Request) {
  const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "local-client";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a minute and try again." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }

  const theme =
    typeof body.theme === "string" && body.theme.trim()
      ? body.theme.trim().slice(0, 100)
      : "";
  const attire =
    typeof body.attire === "string" && body.attire.trim()
      ? body.attire.trim().slice(0, 120)
      : "Kandyan Osariya & Nilame / Mul-Anduma";
  const vehicleType =
    typeof body.vehicleType === "string" && body.vehicleType.trim()
      ? body.vehicleType.trim().slice(0, 80)
      : "Luxury Sedan";
  const subCategory =
    typeof body.subCategory === "string" && body.subCategory.trim()
      ? body.subCategory.trim().slice(0, 120)
      : "";
  const carColor =
    typeof body.carColor === "string" && body.carColor.trim()
      ? body.carColor.trim().slice(0, 80)
      : "Pearl White";
  const vehicleSpec =
    typeof body.vehicleSpec === "string" && body.vehicleSpec.trim()
      ? body.vehicleSpec.trim().slice(0, 80)
      : "Stock Factory Spec";
  const duration =
    typeof body.duration === "string" && body.duration.trim()
      ? body.duration.trim().slice(0, 100)
      : "8 Hours";
  const location =
    typeof body.location === "string" && body.location.trim()
      ? body.location.trim().slice(0, 120)
      : "";
  const budget =
    typeof body.budget === "string" && body.budget.trim()
      ? body.budget.trim().slice(0, 80)
      : "LKR 50,000 - 75,000";
  const weddingDate =
    typeof body.weddingDate === "string" ? body.weddingDate.trim().slice(0, 40) : "";
  const photoStop =
    typeof body.photoStop === "string" ? body.photoStop.trim().slice(0, 80) : "Yes";
  const specialNotes =
    typeof body.specialNotes === "string"
      ? body.specialNotes.trim().slice(0, 200)
      : "";

  if (!theme || !location) {
    return NextResponse.json(
      { error: "Please select a wedding theme and enter your wedding location." },
      { status: 400 }
    );
  }

  const fallback = buildFallbackRecommendation({
    theme,
    attire,
    vehicleType,
    subCategory,
    carColor,
    vehicleSpec,
    duration,
    location,
    budget,
  });

  if (!process.env.GROQ_API_KEY) {
    return NextResponse.json(fallback);
  }

  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      temperature: 0.65,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: `You are the Senior Wedding Ride Concierge for "Master Car Rental" in Sri Lanka.
Recommend the best primary car, a distinct backup car, and the right time-based package using ONLY the fleet and packages below. Base package selection strictly on hours and event flow (never mention kilometers). Respect the couple's vehicle type, sub-category, color preference, trim/stock preference, and attire comfort.

Available Cars:
${JSON.stringify(FLEET_CARS, null, 2)}

Available Packages:
${JSON.stringify(WEDDING_PACKAGES, null, 2)}

Return ONLY valid JSON with these exact keys:
{
  "recommendedCar": "Exact name from Available Cars",
  "backupCar": "Different exact name from Available Cars",
  "recommendedPackage": "Exact name from Available Packages",
  "estimatedPrice": "Price string in LKR",
  "whyItFits": "2 concise sentences explaining why this car and package fit their theme, vehicle style, color/spec preference, location, and time duration",
  "comfortAndAttireNote": "1-2 sentences on entry/exit comfort for their specific attire and vehicle style",
  "floralDecorationIdea": "Specific flower and color pairing suited to the theme, car color, and attire",
  "ownerChecklistQuestions": [
    "Question 1 to confirm vehicle availability and date booking",
    "Question 2 to confirm color, trim/spec, or floral styling details",
    "Question 3 to confirm overtime hourly charges if needed"
  ]
}`,
        },
        {
          role: "user",
          content: `Couple Plan:
- Wedding Theme: ${theme}
- Bride & Groom Attire: ${attire}
- Preferred Vehicle Type: ${vehicleType}
- Vehicle Sub-Category: ${subCategory || "Any"}
- Preferred Color: ${carColor}
- Vehicle Specification / Trim: ${vehicleSpec}
- Time Duration Needed: ${duration}
- Location / Area: ${location}
- Budget Range: ${budget}
- Photo Shoot / Stops: ${photoStop}
- Wedding Date: ${weddingDate || "Not specified yet"}
- Extra Notes: ${specialNotes || "None"}`,
        },
      ],
    });

    const content = completion.choices[0]?.message?.content || "{}";
    const parsed = JSON.parse(content) as Record<string, unknown>;
    const validated = normalizeAndValidateAIResponse(parsed, fallback);

    return NextResponse.json(validated);
  } catch (error) {
    console.warn("Groq unavailable, serving structured fallback:", error);
    return NextResponse.json(fallback);
  }
}