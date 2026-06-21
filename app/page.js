import Link from 'next/link';
import Navbar from '@/components/Navbar';
import PortfolioSection from '@/components/PortfolioSection';
import ContactBlock from '@/components/ContactBlock';
import PhotoSection from '@/components/PhotoSection';
import { sections } from '@/data/videos';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="h-[84px] sm:h-[92px]" /> 

      {sections.map((section, index) => <PortfolioSection key={section.slug} section={section} index={index} />)}
      <PhotoSection />
      <ContactBlock />
    </main>
  );
}
