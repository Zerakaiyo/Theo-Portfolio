import Navbar from '@/components/Navbar';
import PhotoSection from '@/components/PhotoSection';

export const metadata = { title: 'Photography | Theo Majer' };

export default function PhotographyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="h-[84px] sm:h-[92px]" />
      <PhotoSection compact />
    </main>
  );
}
