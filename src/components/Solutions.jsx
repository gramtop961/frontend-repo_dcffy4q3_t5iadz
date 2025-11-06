import { Shield, Cloud, Cpu, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Cpu,
    title: 'Enterprise Network & ICT Infrastructure',
    desc:
      'Robust networking solutions, data centers, and ICT infrastructure designed for scalability and reliability.',
    bullets: ['Network Design', 'Data Centers', 'Infrastructure Setup'],
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions & Hosting',
    desc:
      'Comprehensive cloud migration, hosting services, and multi-cloud strategies for modern businesses.',
    bullets: ['Cloud Migration', 'Multi-Cloud Strategy', 'Hosting Services'],
  },
  {
    icon: Shield,
    title: 'Cybersecurity & Ethical Hacking',
    desc:
      'Advanced security auditing, penetration testing, and comprehensive cybersecurity solutions.',
    bullets: ['Security Auditing', 'Penetration Testing', 'Threat Assessment'],
  },
  {
    icon: BarChart3,
    title: 'Web & Mobile App Development',
    desc:
      'Custom web applications, mobile apps, and digital platforms built with cutting-edge technologies.',
    bullets: ['Custom Web Apps', 'Mobile Development', 'Digital Platforms'],
  },
  {
    icon: BarChart3,
    title: 'Data Analytics & ERP/CRM Solutions',
    desc:
      'Business intelligence, data analytics, and integrated ERP/CRM systems for data-driven decisions.',
    bullets: ['Business Intelligence', 'Data Analytics', 'ERP/CRM Integration'],
  },
  {
    icon: Cpu,
    title: 'Managed IT Services & Consultancy',
    desc:
      '24/7 IT support, strategic consultancy, and managed services to optimize your technology infrastructure.',
    bullets: ['24/7 IT Support', 'Strategic Consulting', 'Infrastructure Management'],
  },
];

export default function Solutions() {
  return (
    <section id="services" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Comprehensive Digital Solutions
          </h2>
          <p className="mt-4 text-slate-700">
            From infrastructure to applications, we provide end-to-end technology solutions that drive innovation and business growth.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 text-white shadow-md group-hover:scale-105 transition-transform">
                {<item.icon size={20} />}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
              <ul className="mt-4 space-y-1 text-sm text-slate-700">
                {item.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-600" /> {b}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-4 inline-block text-sm font-medium text-indigo-700 hover:text-indigo-900">Learn More →</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
