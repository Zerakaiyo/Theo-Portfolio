import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { portfolioCategories } from '../data/projects';

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-40 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="#top" className="flex items-center gap-3 text-xs font-bold uppercase tracking-cinema text-white sm:text-sm">
          <span className="hidden h-8 w-8 overflow-hidden rounded-full border border-white/20 bg-white/10 sm:block">
            <img src="/profile.jpg" alt="Theo Majer" className="h-full w-full object-cover" />
          </span>
          <span>THEO MAJER</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <div className="group relative py-2">
            <button className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-cinema text-white/65 transition hover:text-white">
              Portfolio <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" />
            </button>
            <div className="pointer-events-none absolute right-0 top-full w-72 translate-y-2 rounded-2xl border border-white/10 bg-[#070707]/95 p-2 opacity-0 shadow-2xl shadow-black/50 backdrop-blur-xl transition group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
              {portfolioCategories.map((item) => (
                <Link key={item.id} href={`#${item.id}`} className="block rounded-xl px-4 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/55 transition hover:bg-white/10 hover:text-white">
                  {item.nav}
                </Link>
              ))}
            </div>
          </div>
          <Link href="#about" className="text-[11px] font-bold uppercase tracking-cinema text-white/60 transition hover:text-white">About</Link>
          <Link href="#contact" className="text-[11px] font-bold uppercase tracking-cinema text-white/60 transition hover:text-white">Contact</Link>
        </div>

        <Link href="#portfolio" className="rounded-full border border-white/15 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-white/80 transition hover:border-white/45 hover:text-white md:hidden">
          Portfolio
        </Link>
      </nav>
    </header>
  );
}
