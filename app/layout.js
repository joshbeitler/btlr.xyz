import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
// import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import localFont from "next/font/local";

const MaisonNeue = localFont({
  src: [
    {
      path: "../fonts/MaisonNeueBook.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/MaisonNeueDemi.woff2",
      weight: "500",
      style: "semibold",
    },
  ],
  variable: "--font-maison-neue",
  display: "swap",
});

export const metadata = {
  title: "Joshua Beitler",
  description:
    "Personal website of Joshua Beitler, a product manager, designer, and engineer with a great love of building beautiful software.",
  metadataBase: new URL("https://btlr.xyz"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${MaisonNeue.className} bg-slate-50`}>
      <body className="antialiased">
        <div className="bg-slate-50 text-slate-800 w-full">
          <div className="mx-auto py-4 w-full max-w-[600px]">
            <Nav />
            <div className="prose max-w-full">{children}</div>
          </div>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
