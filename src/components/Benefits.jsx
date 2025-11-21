import { ShieldCheck, Zap, HeartPulse, Trophy } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Built to Last",
    desc: "Durable, premium materials that withstand the toughest workouts.",
  },
  {
    icon: Zap,
    title: "Performance Boost",
    desc: "Engineered to help you lift more, run faster, and train smarter.",
  },
  {
    icon: HeartPulse,
    title: "Ergonomic Design",
    desc: "Comfort-first design that reduces strain and enhances form.",
  },
  {
    icon: Trophy,
    title: "Pro Approved",
    desc: "Trusted by coaches and athletes across 40+ countries.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Why Athletes Choose FitPrime</h2>
        <p className="text-slate-300 text-center mt-3 max-w-2xl mx-auto">Four reasons our customers convert — clear value, real outcomes, and risk-free purchase.</p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 transition">
              <Icon className="text-emerald-400" />
              <h3 className="mt-3 font-semibold text-white">{title}</h3>
              <p className="text-sm mt-1 text-slate-300/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
