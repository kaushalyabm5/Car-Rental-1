"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

interface LoadingScreenProps {
  onFinish?: () => void;
}

export default function LoadingScreen({ onFinish }: LoadingScreenProps) {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  const [entered, setEntered] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setEntered(false);
    setLeaving(false);
    setDone(false);

    const enterFrame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setEntered(true);
      });
    });

    let exitTimer: number | undefined;
    let finishTimer: number | undefined;

    const completeTransition = (holdMs: number) => {
      exitTimer = window.setTimeout(() => {
        setLeaving(true);
        finishTimer = window.setTimeout(() => {
          setDone(true);
          onFinish?.();
        }, 500);
      }, holdMs);
    };

    const handleWindowLoad = () => {
      completeTransition(350);
    };

    if (isFirstRender.current) {
      isFirstRender.current = false;
      if (document.readyState === "complete") {
        completeTransition(650);
      } else {
        window.addEventListener("load", handleWindowLoad, { once: true });
      }
    } else {
      // Runs on route changes across pages
      completeTransition(600);
    }

    const fallbackTimer = window.setTimeout(() => {
      completeTransition(0);
    }, 3000);

    return () => {
      window.cancelAnimationFrame(enterFrame);
      window.removeEventListener("load", handleWindowLoad);
      window.clearTimeout(fallbackTimer);
      if (exitTimer) window.clearTimeout(exitTimer);
      if (finishTimer) window.clearTimeout(finishTimer);
    };
  }, [pathname, onFinish]);

  if (done) return null;

  return (
    <>
      <style jsx>{`
        @keyframes mirrorFlipLoop {
          0%,
          35% {
            transform: scaleX(1);
          }
          50%,
          85% {
            transform: scaleX(-1);
          }
          100% {
            transform: scaleX(1);
          }
        }

        .mirror-text-loop {
          display: inline-block;
          transform-origin: center;
          animation: mirrorFlipLoop 2.2s cubic-bezier(0.45, 0, 0.2, 1) infinite;
          will-change: transform;
        }
      `}</style>

      <div
        aria-hidden="true"
        className={`fixed inset-0 z-50 flex items-center justify-center bg-white px-6 select-none transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          leaving
            ? "opacity-0 -translate-y-3 pointer-events-none"
            : "opacity-100 translate-y-0"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`text-2xl sm:text-4xl md:text-5xl font-semibold uppercase tracking-[0.2em] whitespace-nowrap text-[#0A0A0A] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              entered
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-5 scale-[0.98]"
            }`}
          >
            <span className="mirror-text-loop">
              Master{" "}
              <span className="font-normal text-neutral-600">Car Rental</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}