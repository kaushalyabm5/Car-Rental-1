export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#050505]/85 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-bold tracking-wider text-white">
          MASTER <span className="text-amber-400">CAR RENTAL</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#fleet" className="hover:text-amber-400 transition">Fleet</a>
          <a href="#packages" className="hover:text-amber-400 transition">Packages</a>
          <a href="#concierge" className="hover:text-amber-400 transition">AI Concierge</a>
        </nav>

        <a
          href="#concierge"
          className="bg-amber-500 hover:bg-amber-400 text-black text-xs font-semibold px-4 py-2 rounded-full transition"
        >
          Match My Ride
        </a>
      </div>
    </header>
  );
}