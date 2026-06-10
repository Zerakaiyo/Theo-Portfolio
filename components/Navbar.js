export default function Navbar() {
  const links = [
    { href: "#work", label: "Work" },
    { href: "#assisting", label: "Assisting" },
    { href: "#social", label: "Social" },
    { href: "#photography", label: "Photography" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-30 border-b border-white/10 bg-ink/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="text-sm font-medium uppercase tracking-[0.28em] text-bone">
          Theo Majer
        </a>
        <div className="hidden items-center gap-6 text-xs uppercase tracking-[0.22em] text-fog md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-bone">
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
