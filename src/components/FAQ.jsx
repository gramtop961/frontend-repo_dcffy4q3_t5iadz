export default function FAQ() {
  const faqs = [
    { q: 'What industries do you serve?', a: 'We partner with enterprises across finance, retail, manufacturing, healthcare, startups, and the public sector.' },
    { q: 'Do you provide 24/7 support?', a: 'Yes. Our managed services include round-the-clock monitoring, incident response, and on-call engineering.' },
    { q: 'How do you ensure data security?', a: 'We implement ISO 27001-aligned controls, zero-trust architectures, encryption at rest/in transit, and regular security audits.' },
    { q: 'Can you help with digital transformation?', a: 'Absolutely. We provide strategy, implementation, and change enablement to modernize legacy systems and processes.' },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Frequently Asked Questions</h2>
          <p className="mt-4 text-slate-700">Answers to common questions about our services and engagement model.</p>
        </div>

        <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {faqs.map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="cursor-pointer select-none list-none font-medium text-slate-900">
                {f.q}
              </summary>
              <p className="mt-2 text-slate-700">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
