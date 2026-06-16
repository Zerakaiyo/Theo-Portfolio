'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { sections } from '@/data/videos';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [...sections.map(s => ({ label: s.title, href: `#${s.slug}` })), { label: 'Services', href: '#services' }, { label: 'Contact', href: '#contact' }];
  return (
    <header className={`fixed top-0 z-40 w-full border-b border-white/10 transition ${scrolled ? 'bg-black/80 backdrop-blur-xl' : 'bg-black/35 backdrop-blur-md'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <Image src="/profile.jpg" alt="Theo Majer" width={42} height={42} className="h-10 w-10 rounded-full border border-white/20 object-cover" />
          <div className="leading-none">
            <div className="text-sm font-semibold uppercase tracking-[.34em] sm:text-base">Theo Majer</div>
            <div className="mt-1 text-[9px] uppercase tracking-[.26em] text-white/45 sm:text-[10px]">DOP / Photography / Lighting</div>
          </div>
        </a>
        <nav className="hidden items-center gap-7 text-[11px] uppercase tracking-[.32em] text-white/65 md:flex">
          {links.map(l => <a key={l.href} href={l.href} className="transition hover:text-white">{l.label}</a>)}
        </nav>
        <button onClick={() => setOpen(!open)} className="rounded-full border border-white/15 px-4 py-3 text-xs uppercase tracking-[.25em] md:hidden" aria-label="Open menu">Menu</button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-black/95 px-4 py-6 md:hidden">
          <div className="grid gap-4 text-sm uppercase tracking-[.24em] text-white/75">
            {links.map(l => <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
          </div>
        </div>
      )}
    </header>
  );
}
