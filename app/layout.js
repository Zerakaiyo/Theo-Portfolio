import './globals.css';

export const metadata = {
  title: 'Theo Majer | DOP / Photography / Lighting',
  description: 'Selected work by Theo Majer.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-stone-100 antialiased">
        {children}
      </body>
    </html>
  );
}
