export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20">
      <div className="absolute -top-24 -right-24 w-[36rem] h-[36rem] bg-emerald-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-[36rem] h-[36rem] bg-indigo-500/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-sm border border-white/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Trusted by 50,000+ athletes
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Elevate Your Training with Premium Fitness Gear
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Build strength, endurance, and confidence with equipment engineered for results. Backed by science and tested by pros.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="px-6 py-3 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-400 transition shadow-lg shadow-emerald-500/30">
              Shop Bestsellers
            </a>
            <a href="#products" className="px-6 py-3 rounded-lg bg-white/10 text-white font-semibold hover:bg-white/20 transition border border-white/10">
              Explore Products
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-slate-300">
            <div>
              <p className="text-3xl font-bold text-white">98%</p>
              <p className="text-sm">Customer Satisfaction</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">+22%</p>
              <p className="text-sm">Performance Increase</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">30-day</p>
              <p className="text-sm">Money-Back Guarantee</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop" alt="Fitness Gear" className="w-full h-[420px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur border border-white/10 rounded-xl p-4 text-white">
            <p className="font-semibold">Pro-Grade Materials</p>
            <p className="text-sm text-slate-300">Built to last, designed to perform.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
