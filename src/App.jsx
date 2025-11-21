import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Products />
        <Testimonials />
        <CTA />
      </main>
      <footer className="py-10 text-center text-slate-400 bg-slate-950 border-t border-white/10">
        <p>© {new Date().getFullYear()} FitPrime — Premium Fitness Gear</p>
      </footer>
    </div>
  );
}

export default App;
