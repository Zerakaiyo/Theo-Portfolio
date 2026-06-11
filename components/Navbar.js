'use client';
import { useState } from 'react';
import { portfolioSections } from '@/data/projects';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed left-0 top-0 z-40 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#home" className="text-sm tracking-[0.34em]">THEO MAJER</a>
        <nav className="hidden items-center gap-8 text-xs tracking-[0.24em] md:flex">
          <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <button onClick={() => setOpen(!open)} className="hover:text-white/70">PORTFOLIO</button>
            {open && (
              <div className="absolute right-0 top-6 w-72 border border-white/10 bg-black/95 p-3 shadow-2xl">
                {portfolioSections.map((section) => (
                  <a key={section.id} href={`#${section.id}`} className="block px-3 py-3 text-[11px] hover:bg-white/10">{section.label}</a>
                ))}
              </div>
            )}
          </div>
          <a href="#about" className="hover:text-white/70">ABOUT</a>
          <a href="#contact" className="hover:text-white/70">CONTACT</a>
        </nav>
      </div>
    </header>
  );
}
