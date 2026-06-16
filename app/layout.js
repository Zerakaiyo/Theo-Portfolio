import './globals.css';

export const metadata = {
  title: 'Theo Majer | DOP / Photography / Lighting',
  description: 'Selected moving image, photography and lighting work by Theo Majer.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
