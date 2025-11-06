import { Shield, Cloud, Cpu, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  {
    icon: Shield,
    title: 'Cybersecurity & Zero Trust',
    desc:
      'Comprehensive security programs with continuous monitoring, threat modeling, SOC integration, and zero-trust access controls.',
  },
  {
    icon: Cloud,
    title: 'Cloud & Platform Engineering',
    desc:
      'Cloud-native architectures, Kubernetes, platform SRE, and cost-efficient multi-cloud strategies designed for scale and reliability.',
  },
  {
    icon: Cpu,
    title: 'AI, Data & Automation',
    desc:
      'Intelligent data pipelines, MLOps, and automation frameworks that accelerate decisions and improve operational efficiency.',
  },
  {
    icon: BarChart3,
    title: 'Digital Transformation',
    desc:
      'Service design, product acceleration, and change enablement that modernizes legacy stacks and unlocks new growth channels.',
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Our Solutions
          </h2>
          <p className="mt-4 text-slate-700">
            We partner with leading enterprises to architect secure, intelligent systems that deliver real business outcomes.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
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
              <a href="#contact" className="mt-4 inline-block text-sm font-medium text-indigo-700 hover:text-indigo-900">Learn more →</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
