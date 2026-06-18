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
      <div className="h-[92px] sm:h-[104px]" />

      {sections.map((section, index) => (
        section.type === 'photo'
          ? <PhotoSection key={section.slug} section={section} index={index} />
          : <PortfolioSection key={section.slug} section={section} index={index} />
      ))}
      <ContactBlock />
    </main>
  );
}
