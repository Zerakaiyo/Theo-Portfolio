import Link from 'next/link';

const navItems = [
  ['Work', '#work'],
  ['Assisting', '#assisting'],
  ['Social', '#social'],
  ['Film', '#film'],
  ['Photography', '#photography'],
  ['Contact', '#contact'],
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-40 w-full border-b border-white/10 bg-black/55 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="#top" className="text-xs font-bold uppercase tracking-cinema text-white sm:text-sm">
          Theo Majer
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map(([label, href]) => (
            <Link key={label} href={href} className="text-[11px] uppercase tracking-cinema text-white/60 transition hover:text-white">
              {label}
            </Link>
          ))}
        </div>
        <Link href="#contact" className="rounded-full border border-white/15 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-white/80 transition hover:border-white/45 hover:text-white md:hidden">
          Contact
        </Link>
      </nav>
    </header>
  );
}
