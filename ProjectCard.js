export default function SectionHeading({ eyebrow, title, children, action }) {
  return (
    <div className="flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        <p className="mb-4 text-[10px] font-bold uppercase tracking-cinema text-white/40">{eyebrow}</p>
        <h2 className="text-4xl font-bold uppercase leading-none tracking-[0.18em] text-[#f6f0e7] md:text-6xl">{title}</h2>
        {children ? <p className="mt-6 max-w-2xl text-sm uppercase leading-7 tracking-[0.12em] text-white/50">{children}</p> : null}
      </div>
      {action}
    </div>
  );
}
