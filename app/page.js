import Navbar from '@/components/Navbar';
import SectionTracker from '@/components/SectionTracker';
import PortfolioSection from '@/components/PortfolioSection';
import { sections } from '@/data/videos';

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-black text-white">
      <Navbar />
      <SectionTracker />

      <div className="h-[84px] sm:h-[92px]" />

      {sections.map((section, index) => <PortfolioSection key={section.slug} section={section} index={index} />)}

      <section id="photography" data-section data-title="Photography" className="relative overflow-hidden border-t border-white/10 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="pointer-events-none sticky top-24 z-0 -mx-4 mb-[-2rem] overflow-hidden sm:-mx-6 lg:-mx-8">
          <div className="ghost-title whitespace-nowrap px-4 text-[clamp(3rem,12vw,11rem)] font-semibold uppercase leading-none tracking-[.18em] text-transparent opacity-40 sm:px-6 lg:px-8">
            Photography
          </div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl pt-8 sm:pt-16">
          <div className="mx-auto max-w-4xl rounded-[1.75rem] border border-white/10 bg-white/[.015] p-8 text-center sm:p-14">
            <div className="text-[10px] uppercase tracking-[.38em] text-white/35">Coming soon</div>
            <div className="mt-5 text-2xl font-semibold uppercase tracking-[.26em] text-white sm:text-4xl">Photography</div>
            <a className="mt-8 inline-flex rounded-full border border-white/15 px-6 py-3 text-[10px] uppercase tracking-[.25em] text-white/65 transition hover:border-white/30 hover:text-white" href="https://www.instagram.com/theomajer.filmcamera/" target="_blank">Film Instagram</a>
          </div>
        </div>
      </section>

      <section id="services" data-section data-title="Services" className="border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-[10px] uppercase tracking-[.38em] text-white/35">Services</div>
          <div className="grid gap-3 md:grid-cols-4">
            {['Photography', 'Videography', 'Social Content', 'Production Support'].map((service) => (
              <div key={service} className="rounded-3xl border border-white/10 bg-white/[.015] p-6 transition hover:border-white/25 hover:bg-white/[.035]">
                <div className="text-sm uppercase tracking-[.26em] text-white sm:text-base">{service}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" data-section data-title="Contact" className="border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xl font-semibold uppercase tracking-[.32em] sm:text-2xl">Theo Majer</div>
            <div className="mt-3 text-[9px] uppercase tracking-[.3em] text-white/40 sm:text-[10px]">DOP / Photography / Lighting</div>
          </div>
          <div className="flex flex-wrap gap-3 text-[10px] uppercase tracking-[.25em] text-white/65">
            <a className="rounded-full border border-white/15 px-5 py-3 transition hover:border-white/30 hover:text-white" href="https://www.instagram.com/theo.majer/" target="_blank">Instagram</a>
            <a className="rounded-full border border-white/15 px-5 py-3 transition hover:border-white/30 hover:text-white" href="https://www.instagram.com/theomajer.filmcamera/" target="_blank">Film Instagram</a>
            <a className="rounded-full border border-white/15 px-5 py-3 transition hover:border-white/30 hover:text-white" href="mailto:hello@theomajer.com">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
