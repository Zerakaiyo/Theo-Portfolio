import "./globals.css";
import { Inter, Cormorant_Garamond } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"]
});

export const metadata = {
  title: "Theo Majer | DoP / Photography / Lighting",
  description: "A cinematic portfolio for DoP, photography and lighting work."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} font-sans`}>
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
