'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { sections } from '@/data/videos';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openPortfolio = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setPortfolioOpen(true);
  };

  const closePortfolio = () => {
    closeTimer.current = setTimeout(() => setPortfolioOpen(false), 180);
  };

  const jumpLinks = sections.map((section) => ({ label: section.title, href: `#${section.slug}` }));

  return (
    <header className={`fixed top-0 z-50 w-full border-b border-white/10 transition duration-500 ${scrolled ? 'bg-black/85 backdrop-blur-xl' : 'bg-black/45 backdrop-blur-md'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <Image
            src="/profile.jpg"
            alt="Theo Majer"
            width={44}
            height={44}
            priority
            className="h-10 w-10 rounded-full border border-white/20 object-cover transition duration-500 group-hover:scale-105 sm:h-11 sm:w-11"
          />
          <div className="leading-none">
            <div className="text-[13px] font-semibold uppercase tracking-[.34em] sm:text-[15px]">Theo Majer</div>
            <div className="mt-1 text-[8px] uppercase tracking-[.25em] text-white/45 sm:text-[9px]">DOP / Photography / Lighting</div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-[10px] uppercase tracking-[.32em] text-white/65 md:flex">
          <div className="relative pb-3 pt-3" onMouseEnter={openPortfolio} onMouseLeave={closePortfolio}>
            <a href="#fashion-films" className="transition hover:text-white" onFocus={openPortfolio}>Portfolio ▾</a>
            <div className={`absolute right-0 top-full w-72 overflow-hidden rounded-3xl border border-white/10 bg-black/90 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl transition duration-200 ${portfolioOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'}`}>
              {jumpLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block rounded-2xl px-4 py-3 text-[10px] uppercase tracking-[.26em] text-white/55 transition hover:bg-white/[.06] hover:text-white"
                  onClick={() => setPortfolioOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <a href="#services" className="transition hover:text-white">Services</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </nav>

        <button
          onClick={() => setMobileOpen((value) => !value)}
          className="rounded-full border border-white/15 px-4 py-3 text-[10px] uppercase tracking-[.25em] text-white/80 md:hidden"
          aria-label="Open menu"
        >
          {mobileOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-black/95 px-4 py-6 md:hidden">
          <div className="mb-4 text-[9px] uppercase tracking-[.35em] text-white/35">Portfolio</div>
          <div className="grid gap-2 text-[12px] uppercase tracking-[.24em] text-white/75">
            {jumpLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="rounded-2xl border border-white/10 px-4 py-3">
                {link.label}
              </a>
            ))}
            <a href="#services" onClick={() => setMobileOpen(false)} className="rounded-2xl border border-white/10 px-4 py-3">Services</a>
            <a href="#contact" onClick={() => setMobileOpen(false)} className="rounded-2xl border border-white/10 px-4 py-3">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
