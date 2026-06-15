'use client';

import Link from 'next/link';
import { useState } from 'react';
import { categories } from '@/data/portfolio';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav-shell">
      <Link href="/" className="brand" aria-label="Theo Majer home">
        <img src="/profile.jpg" alt="Theo Majer" />
        <span>
          <strong>THEO MAJER</strong>
          <small>DOP / PHOTOGRAPHY / LIGHTING</small>
        </span>
      </Link>
      <nav className="desktop-nav">
        <div className="nav-drop" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
          <Link href="/portfolio" className="nav-link">PORTFOLIO</Link>
          <div className={`drop-menu ${open ? 'show' : ''}`}>
            {categories.map(c => <Link key={c.slug} href={`/portfolio/${c.slug}`}>{c.title}</Link>)}
          </div>
        </div>
        <Link href="/contact" className="nav-link">CONTACT</Link>
      </nav>
      <button className="mobile-toggle" onClick={() => setOpen(!open)}>MENU</button>
      <div className={`mobile-menu ${open ? 'show' : ''}`}>
        <Link href="/portfolio">Portfolio</Link>
        {categories.map(c => <Link key={c.slug} href={`/portfolio/${c.slug}`}>{c.title}</Link>)}
        <Link href="/contact">Contact</Link>
      </div>
    </header>
  );
}
