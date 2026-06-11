import './globals.css';

export const metadata = {
  title: 'Theo Majer | DOP / Photography / Lighting',
  description: 'Cinematic portfolio for Theo Majer.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
