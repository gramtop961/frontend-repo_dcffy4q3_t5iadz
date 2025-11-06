export default function CTA() {
  return (
    <section id="cta" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Ready to Transform Your Business?</h2>
        <p className="mt-4 text-slate-700 max-w-2xl mx-auto">
          Quick Response: Get a detailed project proposal within 24 hours. Expert Team: Certified professionals. Proven Results: Track record across multiple industries.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow hover:opacity-95">Start Your Digital Transformation</a>
          <a href="#services" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50">Explore Services</a>
        </div>
      </div>
    </section>
  );
}
