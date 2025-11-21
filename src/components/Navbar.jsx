import { Menu, Dumbbell } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 grid place-items-center shadow-lg shadow-emerald-500/30">
            <Dumbbell className="text-white" size={22} />
          </div>
          <div>
            <p className="text-white font-semibold leading-tight">FitPrime</p>
            <p className="text-xs text-slate-300/70 -mt-0.5">Premium Fitness Gear</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-slate-300">
          <a href="#benefits" className="hover:text-white transition">Benefits</a>
          <a href="#products" className="hover:text-white transition">Products</a>
          <a href="#testimonials" className="hover:text-white transition">Results</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#cta" className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-white text-slate-900 font-semibold hover:opacity-90 transition">Shop Now</a>
          <button className="md:hidden p-2 rounded-lg border border-white/10 text-white">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
