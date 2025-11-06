import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter text-slate-800 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <section id="about" className="py-24 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Why Flames ICT</h2>
                <p className="mt-4 text-slate-700 leading-7">
                  We combine deep engineering expertise with design thinking and rigorous delivery to build systems that are resilient, scalable, and secure. Our teams integrate seamlessly with your organization to accelerate outcomes.
                </p>
                <ul className="mt-6 grid gap-2 text-slate-700">
                  <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-600" /> Enterprise-grade security and governance</li>
                  <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-600" /> Measurable impact with clear success metrics</li>
                  <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-600" /> Transparent, collaborative delivery model</li>
                </ul>
                <div className="mt-8 flex gap-3">
                  <a href="#solutions" className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow hover:opacity-95">View Capabilities</a>
                  <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50">Talk to Us</a>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl bg-gradient-to-br from-indigo-600/10 to-blue-600/10 p-1">
                  <img src="https://images.unsplash.com/photo-1552422535-c45813c61732?q=80&w=1974&auto=format&fit=crop" alt="Technology" className="rounded-xl shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
