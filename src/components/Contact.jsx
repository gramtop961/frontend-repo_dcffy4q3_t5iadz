import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple mailto fallback to ensure button is functional without backend
    const subject = encodeURIComponent('Demo Request from ' + form.name);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:hello@flames-ict.example?subject=${subject}&body=${body}`;
    setStatus('We opened your email client. If it did not open, please email us at hello@flames-ict.example');
  };

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Request a Demo</h2>
          <p className="mt-4 text-slate-700">
            Tell us about your objectives. Our experts will reach out with a tailored walkthrough.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
                  placeholder="jane@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
                  placeholder="What challenges can we help you solve?"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-indigo-600 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow hover:opacity-95 active:opacity-90 transition"
              >
                <Send size={16} /> Send Request
              </button>
              {status && <p className="text-sm text-slate-600">{status}</p>}
            </div>
          </form>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="prose prose-slate max-w-none">
              <h3>Engagement Approach</h3>
              <p>
                Strategy workshops, architecture assessments, proof-of-value pilots, and enterprise-scale delivery led by senior practitioners.
              </p>
              <h3>Compliance</h3>
              <p>
                ISO 27001-aligned controls, data residency planning, and governance that meets enterprise and regulatory requirements.
              </p>
              <h3>Response Times</h3>
              <p>We respond within one business day.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
