const quotes = [
  {
    name: "Alex M.",
    text: "Switched to FitPrime and hit a PR in 3 weeks. The grip and stability are unmatched.",
    avatar: "https://i.pravatar.cc/100?img=5",
    metric: "+18% strength",
  },
  {
    name: "Jenna K.",
    text: "Comfortable and reliable. My recovery time improved thanks to the foam roller.",
    avatar: "https://i.pravatar.cc/100?img=15",
    metric: "-22% soreness",
  },
  {
    name: "Marco D.",
    text: "Fast shipping, quality gear, and noticeable performance gains.",
    avatar: "https://i.pravatar.cc/100?img=23",
    metric: "+25% endurance",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Real Results. Real People.</h2>
        <p className="text-slate-300 text-center mt-3 max-w-2xl mx-auto">Social proof that builds trust and drives conversions.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <div key={q.name} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-slate-200">
              <div className="flex items-center gap-4">
                <img src={q.avatar} alt={q.name} className="w-12 h-12 rounded-full" />
                <div>
                  <p className="text-white font-semibold">{q.name}</p>
                  <p className="text-emerald-400 text-sm">{q.metric}</p>
                </div>
              </div>
              <p className="mt-4 text-slate-300/90">“{q.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
