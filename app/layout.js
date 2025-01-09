import { Instrument_Serif } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className={`antialiased`}>
        <div className="min-h-screen bg-white text-black">
          <div className="max-w-2xl mx-auto px-6 py-8">
            <Nav />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
