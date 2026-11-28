"use client";

import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onFinish?: () => void;
}

export default function LoadingScreen({ onFinish }: LoadingScreenProps) {
  const [entered, setEntered] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const enterFrame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setEntered(true);
      });
    });

    const startExitTimer = window.setTimeout(() => {
      setLeaving(true);
    }, 1050);

    const finishTimer = window.setTimeout(() => {
      setDone(true);
      onFinish?.();
    }, 1600);

    return () => {
      window.cancelAnimationFrame(enterFrame);
      window.clearTimeout(startExitTimer);
      window.clearTimeout(finishTimer);
    };
  }, [onFinish]);

  if (done) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white px-6 select-none transition-all duration-550 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        leaving
          ? "opacity-0 -translate-y-3 pointer-events-none"
          : "opacity-100 translate-y-0"
      }`}
    >
      <div className="overflow-hidden">
        <div
          className={`text-2xl sm:text-4xl md:text-5xl font-semibold uppercase tracking-[0.2em] whitespace-nowrap text-[#0A0A0A] transition-all duration-750 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            entered
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-5 scale-[0.98]"
          }`}
        >
          Master <span className="font-normal text-neutral-600">Car Rental</span>
        </div>
      </div>
    </div>
  );
}