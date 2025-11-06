import { Linkedin, Twitter, Facebook, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold text-slate-900">Insyver Technologies (OPC) Pvt. Ltd.</h4>
            <p className="mt-2 text-sm text-slate-600 max-w-md">
              Delivering integrated, intelligent, and secure digital solutions for modern enterprises.
            </p>
            <div className="mt-4 space-y-1 text-sm text-slate-700">
              <p>📍 P. NO-02 Laxman Vihar, Phase II, New Colony (Gurgaon), New Colony, Gurgaon- 122001, Haryana</p>
              <p>📞 +91 98992 13865</p>
              <p>✉️ info@insyvertechnologies.com</p>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 hover:bg-slate-50">
                <Twitter size={18} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 hover:bg-slate-50">
                <Linkedin size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 hover:bg-slate-50">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 hover:bg-slate-50">
                <Instagram size={18} />
              </a>
              <a href="mailto:info@insyvertechnologies.com" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 hover:bg-slate-50" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-sm font-semibold text-slate-900">Services</h5>
            <nav className="mt-3 grid gap-2 text-sm">
              <a href="#services" className="hover:text-slate-900">Enterprise Network</a>
              <a href="#services" className="hover:text-slate-900">Cloud Solutions</a>
              <a href="#services" className="hover:text-slate-900">Cybersecurity</a>
              <a href="#services" className="hover:text-slate-900">Web Development</a>
              <a href="#services" className="hover:text-slate-900">Data Analytics</a>
              <a href="#services" className="hover:text-slate-900">Managed IT</a>
            </nav>
          </div>

          <div>
            <h5 className="text-sm font-semibold text-slate-900">Quick Links</h5>
            <nav className="mt-3 grid gap-2 text-sm">
              <a href="#about" className="hover:text-slate-900">About Us</a>
              <a href="#services" className="hover:text-slate-900">Our Services</a>
              <a href="#mission" className="hover:text-slate-900">Mission & Vision</a>
              <a href="#contact" className="hover:text-slate-900">Contact</a>
            </nav>
            <div className="mt-6 text-xs text-slate-500 space-x-3">
              <a href="#privacy" className="hover:text-slate-700">Privacy Policy</a>
              <a href="#terms" className="hover:text-slate-700">Terms of Service</a>
              <a href="#cookies" className="hover:text-slate-700">Cookie Policy</a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-600">
          © {new Date().getFullYear()} Insyver Technologies (OPC) Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
