export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">About Insyver Technologies</h2>
            <p className="mt-4 text-slate-700 leading-7">
              Based in Gurgaon, we've been at the forefront of India's digital transformation journey. Our team of certified professionals delivers end-to-end ICT solutions that bridge the gap between cutting-edge technology and business success.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-2xl bg-gradient-to-br from-indigo-600/10 to-blue-600/10 p-1">
              <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop" alt="Team collaborating" className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
