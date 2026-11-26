"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface ReviewItem {
  id: number;
  name: string;
  event: string;
  car: string;
  avatar: string;
  quote: string;
}

const REVIEWS: ReviewItem[] = [
  {
    id: 1,
    name: "Kasun & Dilini Perera",
    event: "Colombo Wedding",
    car: "Mercedes-Benz S-Class",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote:
      "The S-Class arrived 20 minutes ahead of schedule in spotless showroom condition. Our chauffeur was courteous, dressed impeccably, and made the entire drive completely stress-free.",
  },
  {
    id: 2,
    name: "Shehan & Nethmi Silva",
    event: "Negombo Reception",
    car: "BMW 5 Series",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    quote:
      "Every detail from the fresh floral arrangement to the smooth route timing was handled effortlessly. Stepping out of the BMW at the hotel entrance felt truly unforgettable.",
  },
  {
    id: 3,
    name: "Ravindu & Tharushi Fernando",
    event: "Kandy Destination Wedding",
    car: "Audi A6 Executive",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    quote:
      "Master Car Rental delivered white-glove service from our first inquiry until the final drop-off. The car looked stunning in our wedding photographs.",
  },
  {
    id: 4,
    name: "Dinesh & Sachini Jayawardena",
    event: "Mount Lavinia Ceremony",
    car: "Mercedes-Benz E-Class",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    quote:
      "Punctual, refined, and genuinely reliable. Having a calm, protocol-trained chauffeur meant we never had to worry about traffic or parking on our big day.",
  },
  {
    id: 5,
    name: "Nuwan & Chamathka Wijesinghe",
    event: "Galle Fort Wedding",
    car: "Mercedes-Benz S-Class",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    quote:
      "The cabin comfort and spotless presentation exceeded every expectation. Easily the best luxury wedding car service in Sri Lanka.",
  },
];

export default function ReviewsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // Adjust visible cards responsively (1 mobile, 2 tablet, 3 desktop)
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, REVIEWS.length - visibleCards);

  // Keep index valid on resize
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  }, [maxIndex]);

  // Keyboard Left & Right Arrow support when section is in view
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }

      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!isInView) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  return (
    <section
      id="reviews"
      ref={sectionRef}
      tabIndex={0}
      aria-label="Client Reviews"
      className="py-24 md:py-32 px-6 bg-white text-[#0A0A0A] border-b border-neutral-200 overflow-hidden focus:outline-none"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Header + Left/Right Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-neutral-500 text-xs font-medium uppercase tracking-[0.25em] mb-3">
              Client Testimonials
            </p>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-[1.1] text-[#0A0A0A]">
              Words From Our Couples
            </h2>
          </div>

          {/* Minimalist Black & White Arrow Buttons */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous review"
              className="w-11 h-11 rounded-full border border-neutral-300 hover:border-[#0A0A0A] hover:bg-[#0A0A0A] text-[#0A0A0A] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5" />
                <path d="m12 19-7-7 7-7" />
              </svg>
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next review"
              className="w-11 h-11 rounded-full border border-neutral-300 hover:border-[#0A0A0A] hover:bg-[#0A0A0A] text-[#0A0A0A] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* 3-Card Desktop Carousel Track */}
        <div className="overflow-hidden">
          <div
            className="flex -mx-3 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {REVIEWS.map((review) => (
              <div
                key={review.id}
                className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-3"
              >
                <article className="h-full bg-white rounded-2xl border border-neutral-200/90 p-8 shadow-[0_6px_24px_rgba(0,0,0,0.03)] hover:border-neutral-400 transition-colors flex flex-col justify-between">
                  <div>
                    {/* Monochrome 5-Star Row */}
                    <div
                      className="flex items-center gap-1 text-[#0A0A0A] mb-6"
                      aria-label="5 out of 5 stars"
                    >
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <svg
                          key={idx}
                          className="w-3.5 h-3.5 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>

                    <p className="text-neutral-700 text-sm md:text-base leading-relaxed">
                      &ldquo;{review.quote}&rdquo;
                    </p>
                  </div>

                  {/* Author Avatar + Name & Vehicle Footer */}
                  <div className="mt-8 pt-5 border-t border-neutral-100 flex items-center gap-3.5">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-11 h-11 rounded-full object-cover object-top border border-neutral-200 shrink-0"
                    />
                    <div>
                      <p className="text-sm font-semibold text-[#0A0A0A]">
                        {review.name}
                      </p>
                      <p className="text-xs text-neutral-500 mt-0.5">
                        {review.event} • {review.car}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Minimalist Slide Indicators */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to review slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? "w-7 bg-[#0A0A0A]"
                  : "w-1.5 bg-neutral-300 hover:bg-neutral-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}