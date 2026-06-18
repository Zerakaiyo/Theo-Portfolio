'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { sections } from '@/data/videos';

const navLinks = [
  ...sections.map((section) => ({ label: section.title, href: section.href })),
  { label: 'Contact', href: '/contact' },
];

function MenuIcon({ open }) {
  return (
    <span className="relative block h-4 w-6" aria-hidden="true">
      <span className={`absolute left-0 top-0 h-px w-6 bg-current transition ${open ? 'top-2 rotate-45' : ''}`} />
      <span className={`absolute left-0 top-2 h-px w-6 bg-current transition ${open ? 'opacity-0' : ''}`} />
      <span className={`absolute left-0 top-4 h-px w-6 bg-current transition ${open ? 'top-2 -rotate-45' : ''}`} />
    </span>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openPortfolio = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setPortfolioOpen(true);
  };

  const closePortfolio = () => {
    closeTimer.current = setTimeout(() => setPortfolioOpen(false), 190);
  };

  return (
    <header className={`fixed top-0 z-50 w-full border-b border-white/10 bg-black transition duration-500 ${scrolled ? 'shadow-2xl shadow-black/40' : ''}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/profile.jpg"
            alt="Theo Majer"
            width={44}
            height={44}
            priority
            className="h-10 w-10 rounded-full border border-white/20 object-cover transition duration-500 group-hover:scale-105 sm:h-11 sm:w-11"
          />
          <div className="leading-none">
            <div className="text-[12px] font-semibold uppercase tracking-[.34em] text-white sm:text-[15px]">Theo Majer</div>
            <div className="mt-1.5 text-[7px] uppercase tracking-[.25em] text-white/45 sm:text-[9px]">DOP / Photography / Lighting</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-[10px] uppercase tracking-[.32em] text-white/65 md:flex">
          <div className="relative pb-3 pt-3" onMouseEnter={openPortfolio} onMouseLeave={closePortfolio}>
            <Link href="/fashion-films" className="transition hover:text-white" onFocus={openPortfolio}>Portfolio ▾</Link>
            <div className={`absolute right-0 top-full w-72 overflow-hidden rounded-3xl border border-white/10 bg-black p-2 shadow-2xl shadow-black/60 transition duration-200 ${portfolioOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'}`}>
              {sections.map((section) => (
                <Link
                  key={section.href}
                  href={section.href}
                  className="block rounded-2xl px-4 py-3 text-[10px] uppercase tracking-[.26em] text-white/55 transition hover:bg-white/[.06] hover:text-white"
                  onClick={() => setPortfolioOpen(false)}
                >
                  {section.title}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/contact" className="transition hover:text-white">Contact</Link>
        </nav>

        <button
          onClick={() => setMobileOpen((value) => !value)}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white/80 md:hidden"
          aria-label="Open menu"
        >
          <MenuIcon open={mobileOpen} />
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-black px-4 py-6 md:hidden">
          <div className="grid gap-2 text-[11px] uppercase tracking-[.24em] text-white/75">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="rounded-2xl border border-white/10 px-4 py-3 transition hover:bg-white/[.04]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
