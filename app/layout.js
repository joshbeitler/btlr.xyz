import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
    <html
      lang="en"
      className={`bg-neutral-50 dark:!bg-neutral-950 h-full ${MaisonNeue.className}`}
    >
      <head>
        {/* /**
         * @license
         * MyFonts Webfont Build ID 296848
         *
         * The fonts listed in this notice are subject to the End User License
         * Agreement(s) entered into by the website owner. All other parties are
         * explicitly restricted from using the Licensed Webfonts(s).
         *
         * You may obtain a valid license from one of MyFonts official sites.
         * http://www.fonts.com
         * http://www.myfonts.com
         * http://www.linotype.com
         *
         */}
      </head>
      <body className="antialiased h-full">
        <div className="h-full bg-neutral-50 text-neutral-800 dark:bg-neutral-950 dark:text-white w-full transition-all ease-in-out duration-200">
          <div className="mx-auto py-4 w-full px-4 md:px-0 max-w-[95%] md:max-w-[600px]">
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
