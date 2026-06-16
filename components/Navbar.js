'use client';

import Image from 'next/image';
import { useState } from 'react';
import { sections } from '@/data/portfolio';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="site-nav">
      <a className="brand" href="#top" onClick={close}>
        <Image src="/theo-profile.jpg" alt="Theo Majer" width={42} height={42} className="brand-avatar" priority />
        <span>
          <strong>THEO MAJER</strong>
          <em>DOP / PHOTOGRAPHY / LIGHTING</em>
        </span>
      </a>

      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Open menu">
        <span />
        <span />
      </button>

      <nav className={open ? 'nav-links open' : 'nav-links'}>
        <div className="portfolio-menu">
          <a href="#portfolio" onClick={close}>Portfolio</a>
          <div className="drop-panel">
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`} onClick={close}>{section.title}</a>
            ))}
          </div>
        </div>
        <a href="#services" onClick={close}>Services</a>
        <a href="#contact" onClick={close}>Contact</a>
        <a href="https://www.instagram.com/theo.majer/" target="_blank" rel="noreferrer" onClick={close}>Instagram</a>
      </nav>
    </header>
  );
}
