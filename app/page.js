import Link from 'next/link';
import Navbar from '@/components/Navbar';
import SectionTracker from '@/components/SectionTracker';
import PortfolioSection from '@/components/PortfolioSection';
import PhotoSection from '@/components/PhotoSection';
import ContactBlock from '@/components/ContactBlock';
import { sections } from '@/data/videos';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <SectionTracker />
      <div className="h-[84px] sm:h-[92px]" />

      <section className="flex min-h-[38vh] items-end border-b border-white/10 px-4 pb-12 pt-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="text-[10px] uppercase tracking-[.38em] text-white/35">Portfolio</div>
          <div className="mt-5 flex flex-wrap gap-3 text-[10px] uppercase tracking-[.25em] text-white/65">
            {sections.map((section) => (
              <Link key={section.href} href={section.href} className="rounded-full border border-white/15 px-5 py-3 transition hover:border-white/30 hover:text-white">
                {section.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {sections.map((section, index) => (
        section.type === 'photo'
          ? <PhotoSection key={section.slug} section={section} index={index} />
          : <PortfolioSection key={section.slug} section={section} index={index} />
      ))}
      <ContactBlock />
    </main>
  );
}
