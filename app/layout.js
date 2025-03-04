import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Space_Grotesk } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";

const spaceGrotesk = Space_Grotesk({
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
  title: "Joshua Beitler",
  description: "Personal website of Joshua Beitler, a product manager, designer, and engineer with a great love of building beautiful software.",
  metadataBase: new URL('https://btlr.xyz'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <body className="antialiased">
        <div className="min-h-screen bg-slate-50 text-slate-800 w-full">
          <div className="mx-auto px-52 py-4 w-full">
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
