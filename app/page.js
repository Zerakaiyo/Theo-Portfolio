import Navbar from '@/components/Navbar';
import SectionTracker from '@/components/SectionTracker';
import PortfolioSection from '@/components/PortfolioSection';
import { sections } from '@/data/videos';

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <SectionTracker />

      <section className="flex min-h-[58vh] items-end border-b border-white/10 px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-8 h-px w-full bg-gradient-to-r from-white/10 via-white/30 to-white/10" />
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[.4em] text-white/35">Selected Work</div>
              <h1 className="mt-5 max-w-3xl text-4xl font-semibold uppercase tracking-[.22em] text-white sm:text-6xl lg:text-8xl">Film / Photo / Light</h1>
            </div>
            <a href="#fashion-films" className="w-fit rounded-full border border-white/15 px-6 py-4 text-[10px] uppercase tracking-[.28em] text-white/65 transition hover:border-white/35 hover:text-white">Scroll</a>
          </div>
        </div>
      </section>

      {sections.map((section, index) => <PortfolioSection key={section.slug} section={section} index={index} />)}

      <section id="services" data-section data-title="Services" className="border-t border-white/10 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-[10px] uppercase tracking-[.38em] text-white/35">Available Services</div>
          <div className="grid gap-4 md:grid-cols-4">
            {['Photography', 'Videography', 'Social Content', 'Production Support'].map((service) => (
              <div key={service} className="rounded-3xl border border-white/10 bg-white/[.025] p-7 transition hover:border-white/25 hover:bg-white/[.045]">
                <div className="text-lg uppercase tracking-[.22em] text-white">{service}</div>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-7 text-white/45">Rates and availability vary by project. For bookings, briefs and collaborations, get in touch directly.</p>
        </div>
      </section>

      <footer id="contact" data-section data-title="Contact" className="border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-2xl font-semibold uppercase tracking-[.32em]">Theo Majer</div>
            <div className="mt-3 text-[10px] uppercase tracking-[.3em] text-white/40">DOP / Photography / Lighting</div>
          </div>
          <div className="flex flex-wrap gap-3 text-[10px] uppercase tracking-[.25em] text-white/65">
            <a className="rounded-full border border-white/15 px-5 py-3 hover:text-white" href="https://www.instagram.com/theo.majer/" target="_blank">Instagram</a>
            <a className="rounded-full border border-white/15 px-5 py-3 hover:text-white" href="https://www.instagram.com/theomajer.filmcamera/" target="_blank">Film Instagram</a>
            <a className="rounded-full border border-white/15 px-5 py-3 hover:text-white" href="mailto:hello@theomajer.com">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
