import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Rocket, Phone, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, []);

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
    >
      {children}
    </a>
  );

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-indigo-600 to-blue-600 text-white shadow-sm group-hover:scale-105 transition-transform">
            <Rocket size={18} />
          </span>
          <span className="font-semibold tracking-tight text-slate-800">Insyver Technologies</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>

          <div className="relative" ref={servicesRef}>
            <button
              onClick={() => setServicesOpen((v) => !v)}
              className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-md"
            >
              Services <ChevronDown size={16} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 mt-2 w-[360px] rounded-lg border border-slate-200 bg-white p-3 shadow-xl">
                <div className="grid grid-cols-1 gap-1">
                  <a href="#services" className="rounded-md px-3 py-2 hover:bg-slate-50">
                    <div className="text-sm font-semibold text-slate-900">Enterprise Network & ICT</div>
                    <div className="text-xs text-slate-600">Network design & infrastructure</div>
                  </a>
                  <a href="#services" className="rounded-md px-3 py-2 hover:bg-slate-50">
                    <div className="text-sm font-semibold text-slate-900">Cloud Solutions & Hosting</div>
                    <div className="text-xs text-slate-600">Cloud migration & hosting</div>
                  </a>
                  <a href="#services" className="rounded-md px-3 py-2 hover:bg-slate-50">
                    <div className="text-sm font-semibold text-slate-900">Cybersecurity & Ethical Hacking</div>
                    <div className="text-xs text-slate-600">Security auditing & testing</div>
                  </a>
                  <a href="#services" className="rounded-md px-3 py-2 hover:bg-slate-50">
                    <div className="text-sm font-semibold text-slate-900">Web & Mobile Development</div>
                    <div className="text-xs text-slate-600">Custom applications & platforms</div>
                  </a>
                  <a href="#services" className="rounded-md px-3 py-2 hover:bg-slate-50">
                    <div className="text-sm font-semibold text-slate-900">Data Analytics & ERP/CRM</div>
                    <div className="text-xs text-slate-600">Business intelligence & ERP</div>
                  </a>
                  <a href="#services" className="rounded-md px-3 py-2 hover:bg-slate-50">
                    <div className="text-sm font-semibold text-slate-900">Managed IT Services</div>
                    <div className="text-xs text-slate-600">24/7 support & consultancy</div>
                  </a>
                </div>
              </div>
            )}
          </div>

          <NavLink href="#contact">Contact</NavLink>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:info@insyvertechnologies.com?subject=Request%20a%20Consultation"
            className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <Mail size={16} /> Email Us
          </a>
          <a
            href="tel:+919899213865"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-indigo-600 to-blue-600 px-3 py-2 text-sm font-semibold text-white shadow hover:opacity-95 active:opacity-90 transition"
          >
            <Phone size={16} /> Call
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col">
            <a href="#home" className="py-2" onClick={() => setOpen(false)}>Home</a>
            <a href="#about" className="py-2" onClick={() => setOpen(false)}>About</a>
            <details className="py-2">
              <summary className="cursor-pointer select-none">Services</summary>
              <div className="pl-4 pt-2 flex flex-col text-sm">
                <a href="#services" className="py-1" onClick={() => setOpen(false)}>Enterprise Network & ICT</a>
                <a href="#services" className="py-1" onClick={() => setOpen(false)}>Cloud Solutions & Hosting</a>
                <a href="#services" className="py-1" onClick={() => setOpen(false)}>Cybersecurity & Ethical Hacking</a>
                <a href="#services" className="py-1" onClick={() => setOpen(false)}>Web & Mobile Development</a>
                <a href="#services" className="py-1" onClick={() => setOpen(false)}>Data Analytics & ERP/CRM</a>
                <a href="#services" className="py-1" onClick={() => setOpen(false)}>Managed IT Services</a>
              </div>
            </details>
            <a href="#contact" className="py-2" onClick={() => setOpen(false)}>Contact</a>
            <div className="mt-3 flex gap-2">
              <a
                href="mailto:info@insyvertechnologies.com?subject=Request%20a%20Consultation"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                <Mail size={16} /> Email
              </a>
              <a
                href="tel:+919899213865"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-indigo-600 to-blue-600 px-3 py-2 text-sm font-semibold text-white shadow"
              >
                <Phone size={16} /> Call
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
