export default function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="mb-9 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="mb-4 text-[11px] uppercase tracking-cinema text-white/45">{eyebrow}</p>
        <h2 className="font-serif text-4xl leading-none text-[#f6f0e7] md:text-6xl">{title}</h2>
      </div>
      {children && <p className="max-w-xl text-sm leading-6 text-white/55 md:text-right">{children}</p>}
    </div>
  );
}
