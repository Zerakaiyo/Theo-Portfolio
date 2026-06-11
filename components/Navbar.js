import Link from 'next/link';
import { categories } from '@/data/portfolio';

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="logo">THEO MAJER</Link>
        <nav className="nav-links">
          <div className="dropdown">
            <span>Portfolio ▾</span>
            <div className="dropdown-menu">
              {categories.map((category) => (
                <Link key={category.slug} href={category.href}>{category.title}</Link>
              ))}
            </div>
          </div>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
