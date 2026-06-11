'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { categories } from '@/data/portfolio';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const closeTimer = useRef(null);

  function openPortfolio() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setPortfolioOpen(true);
  }

  function closePortfolioSoon() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setPortfolioOpen(false), 180);
  }

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const closeAll = () => {
    setMenuOpen(false);
    setPortfolioOpen(false);
  };

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="logo-lockup" onClick={closeAll} aria-label="Theo Majer home">
          <span className="nav-avatar-wrap">
            <Image className="nav-avatar" src="/profile.jpg" width={52} height={52} alt="Theo Majer" priority />
          </span>
          <span className="logo-text">THEO MAJER</span>
        </Link>

        <button
          className="mobile-menu-button"
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>

        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <div
            className={`dropdown ${portfolioOpen ? 'is-open' : ''}`}
            onMouseEnter={openPortfolio}
            onMouseLeave={closePortfolioSoon}
          >
            <button className="nav-link dropdown-trigger" type="button" onClick={() => setPortfolioOpen((value) => !value)}>
              Portfolio <span>▾</span>
            </button>
            <div className="dropdown-menu">
              <Link href="/#portfolio" onClick={closeAll}>Portfolio Overview</Link>
              {categories.map((category) => (
                <Link key={category.slug} href={category.href} onClick={closeAll}>{category.title}</Link>
              ))}
            </div>
          </div>
          <Link className="nav-link" href="/#about" onClick={closeAll}>About</Link>
          <Link className="nav-link" href="/#contact" onClick={closeAll}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
