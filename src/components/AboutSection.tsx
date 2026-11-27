"use client";

import { useEffect, useRef, useState } from "react";
import aboutImg from "@/assets/home/home-hero-2.png";

interface StatItem {
  target: number;
  suffix: string;
  label: string;
}

const STATS: StatItem[] = [
  { target: 500, suffix: "+", label: "Weddings Served" },
  { target: 100, suffix: "%", label: "On-Time Arrival" },
  { target: 24, suffix: "/7", label: "Concierge Care" },
];

function AnimatedNumber({
  target,
  suffix,
  start,
}: {
  target: number;
  suffix: string;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let animationFrameId: number;
    const duration = 1600;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(easedProgress * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [start, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const node = statsRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="w-full bg-[#0A0A0A] text-white py-16 md:py-24 px-6 border-y border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Row: Image + Title & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Editorial Luxury Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full rounded-[.8rem] overflow-hidden bg-neutral-900 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
              <img
                src={aboutImg.src}
                alt="Master Car Rental Luxury Chauffeur Service"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right: Title & Short Description */}
          <div className="lg:col-span-7">
            <p className="text-neutral-400 text-xs font-medium uppercase tracking-[0.25em] mb-3">
              About Master Car Rental
            </p>

            <h2 className="text-3xl md:text-5xl font-normal tracking-tight leading-[1.1] text-white">
              Crafted for Unforgettable Arrivals
            </h2>

            <p className="text-neutral-300 mt-5 text-[.9rem] font-light leading-relaxed max-w-2xl">
              At Master Car Rental, we specialize in late-model Mercedes-Benz,
              BMW, and Audi wedding cars across Sri Lanka—pairing
              showroom-condition sedans with uniformed, protocol-trained
              chauffeurs so every entrance feels effortless and punctual.
            </p>
          </div>
        </div>

        {/* Bottom Row: Full-Width Large Count-Up Numbers */}
        <div
          ref={statsRef}
          className="mt-14 pt-12 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/15 text-center"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="py-5 sm:py-2 px-6">
              <p className="text-4xl md:text-6xl font-normal tracking-tight text-white tabular-nums">
                <AnimatedNumber
                  target={stat.target}
                  suffix={stat.suffix}
                  start={hasEntered}
                />
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 mt-2.5">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}