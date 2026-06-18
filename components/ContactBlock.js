export default function ContactBlock() {
  return (
    <section id="contact" data-section data-title="Contact" className="min-h-[70vh] border-t border-white/10 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-[10px] uppercase tracking-[.38em] text-white/35">Contact</div>
          <div className="mt-5 text-3xl font-semibold uppercase tracking-[.28em] text-white sm:text-5xl">Theo Majer</div>
          <div className="mt-4 text-[9px] uppercase tracking-[.3em] text-white/40 sm:text-[10px]">DOP / Photography / Lighting</div>
        </div>
        <div className="flex flex-wrap gap-3 text-[10px] uppercase tracking-[.25em] text-white/65">
          <a className="rounded-full border border-white/15 px-5 py-3 transition hover:border-white/30 hover:text-white" href="https://www.instagram.com/theo.majer/" target="_blank">Instagram</a>
          <a className="rounded-full border border-white/15 px-5 py-3 transition hover:border-white/30 hover:text-white" href="https://www.instagram.com/theomajer.filmcamera/" target="_blank">Film Instagram</a>
          <a className="rounded-full border border-white/15 px-5 py-3 transition hover:border-white/30 hover:text-white" href="mailto:hello@theomajer.com">Email</a>
        </div>
      </div>
    </section>
  );
}
