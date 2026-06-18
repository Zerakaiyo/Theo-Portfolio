import Navbar from '@/components/Navbar';
import ContactBlock from '@/components/ContactBlock';

export const metadata = { title: 'Contact | Theo Majer' };

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="h-[84px] sm:h-[92px]" />
      <ContactBlock />
    </main>
  );
}
