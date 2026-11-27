"use client";

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

function ReviewCard({ review }: { review: ReviewItem }) {
  return (
    <div className="w-[88vw] sm:w-[360px] lg:w-[390px] shrink-0 px-3">
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
  );
}

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      aria-label="Client Reviews"
      className="py-24 md:py-32 bg-white text-[#0A0A0A] border-b border-neutral-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 mb-14">
        <div className="max-w-2xl">
          <p className="text-neutral-500 text-xs font-medium uppercase tracking-[0.25em] mb-3">
            Client Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-[1.1] text-[#0A0A0A]">
            Words From Our Couples
          </h2>
        </div>
      </div>

      {/* Continuous Seamless Marquee Track */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-[marquee-scroll_36s_linear_infinite]">
          {/* Set 1 */}
          <div className="flex items-stretch">
            {REVIEWS.map((review) => (
              <ReviewCard key={`set-1-${review.id}`} review={review} />
            ))}
          </div>

          {/* Duplicate Set for Seamless Loop */}
          <div className="flex items-stretch" aria-hidden="true">
            {REVIEWS.map((review) => (
              <ReviewCard key={`set-2-${review.id}`} review={review} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}