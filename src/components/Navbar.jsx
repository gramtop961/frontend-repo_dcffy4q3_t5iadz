import { useState, useEffect } from 'react';
import { Menu, X, Rocket, Phone, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLink = (
    href,
    label
  ) => (
    <a
      href={href}
      className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
    >
      {label}
    </a>
  );

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-indigo-600 to-blue-600 text-white shadow-sm group-hover:scale-105 transition-transform">
            <Rocket size={18} />
          </span>
          <span className="font-semibold tracking-tight text-slate-800">Flames ICT</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLink('#solutions', 'Solutions')}
          {navLink('#about', 'About')}
          {navLink('#contact', 'Contact')}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:hello@flames-ict.example?subject=Request%20a%20Demo"
            className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <Mail size={16} /> Email Us
          </a>
          <a
            href="tel:+10000000000"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-indigo-600 to-blue-600 px-3 py-2 text-sm font-semibold text-white shadow hover:opacity-95 active:opacity-90 transition"
          >
            <Phone size={16} /> Call
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col">
            <a href="#solutions" className="py-2" onClick={() => setOpen(false)}>Solutions</a>
            <a href="#about" className="py-2" onClick={() => setOpen(false)}>About</a>
            <a href="#contact" className="py-2" onClick={() => setOpen(false)}>Contact</a>
            <div className="mt-3 flex gap-2">
              <a
                href="mailto:hello@flames-ict.example?subject=Request%20a%20Demo"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                <Mail size={16} /> Email
              </a>
              <a
                href="tel:+10000000000"
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
