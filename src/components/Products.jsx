const products = [
  {
    id: 1,
    name: "Elite Adjustable Dumbbells",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1470&auto=format&fit=crop",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Pro Resistance Band Set",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=1470&auto=format&fit=crop",
    badge: "New",
  },
  {
    id: 3,
    name: "Athlete Foam Roller",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1596357395104-5c2b1c3bb7ff?q=80&w=1470&auto=format&fit=crop",
    badge: "Popular",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Handpicked for Results</h2>
            <p className="text-slate-300 mt-2">Curated essentials that help customers reach goals faster.</p>
          </div>
          <a href="#cta" className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-white text-slate-900 font-semibold hover:opacity-90 transition">View Offer</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition">
              <div className="relative">
                <img src={p.image} alt={p.name} className="w-full h-64 object-cover" />
                <span className="absolute top-4 left-4 px-2 py-1 text-xs rounded bg-emerald-500 text-white">{p.badge}</span>
              </div>
              <div className="p-5">
                <p className="text-white font-semibold">{p.name}</p>
                <p className="text-emerald-400 font-bold mt-1">${p.price.toFixed(2)}</p>
                <a href="#cta" className="inline-flex mt-4 px-4 py-2 rounded-lg bg-emerald-500 text-white font-semibold group-hover:translate-y-[-2px] transition">Add to Cart</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
