import './globals.css';

export const metadata = {
  title: 'Theo Majer | DOP / Photography / Lighting',
  description: 'Cinematic portfolio for Theo Majer, featuring fashion films, clothing work, music videos, assisting credits and photography.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
