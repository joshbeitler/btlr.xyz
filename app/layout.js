import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "400",
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
    <html lang="en" className={`${spaceGrotesk.className} bg-slate-50`}>
      <body className="antialiased">
        <div className="bg-slate-50 text-slate-800 w-full">
          {/* <div className="mx-auto px-52 py-4 w-full"> */}
          <div className="mx-auto h-full lg:w-1/2 md:w-3/4 py-4">
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
