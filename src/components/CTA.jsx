export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-emerald-600 to-teal-600">
      <div className="max-w-7xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-extrabold">Ready to Transform Your Training?</h2>
        <p className="mt-2 text-white/90 max-w-2xl mx-auto">Order today and get free shipping plus a 30-day money-back guarantee. No risk, all reward.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#" className="px-8 py-3 rounded-lg bg-black/20 backdrop-blur border border-white/20 font-semibold hover:bg-black/30 transition">Claim Limited Offer</a>
          <a href="#products" className="px-8 py-3 rounded-lg bg-white text-emerald-700 font-semibold hover:opacity-90 transition">Browse Gear</a>
        </div>
        <p className="mt-4 text-emerald-50/90 text-sm">Secure checkout • Fast shipping • Hassle-free returns</p>
      </div>
    </section>
  );
}
