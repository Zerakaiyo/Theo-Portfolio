import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Theo Majer | DOP / Photography / Lighting',
  description: 'Portfolio of Theo Majer, DOP, photography and lighting.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
