import { Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-slate-600">
              © {new Date().getFullYear()} Flames ICT. All rights reserved.
            </p>
            <nav className="mt-3 flex gap-4 text-sm">
              <a href="#solutions" className="hover:text-slate-900">Solutions</a>
              <a href="#about" className="hover:text-slate-900">About</a>
              <a href="#contact" className="hover:text-slate-900">Contact</a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 hover:bg-slate-50">
              <Linkedin size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 hover:bg-slate-50">
              <Twitter size={18} />
            </a>
            <a href="mailto:hello@flames-ict.example" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 hover:bg-slate-50" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
