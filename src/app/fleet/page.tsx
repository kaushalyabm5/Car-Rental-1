import Link from "next/link";

export default function FleetPage() {
  return (
    <main className="min-h-screen bg-white text-[#0A0A0A] px-6 flex flex-col items-center justify-center text-center">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500 mb-4">
          Fleet
        </p>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight leading-[1.05] text-[#0A0A0A]">
          This Page Is Not Built Yet
        </h1>

        <p className="mt-6 text-sm sm:text-base md:text-lg text-neutral-600 max-w-xl mx-auto leading-relaxed">
          We are still building the Fleet page for Master Car Rental. Check back
          soon or return to the home page.
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[#0A0A0A] hover:bg-neutral-800 text-white text-xs sm:text-sm font-medium px-8 py-3.5 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}