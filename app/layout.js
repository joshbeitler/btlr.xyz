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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <body className={`antialiased`}>
        <div className="min-h-screen bg-white text-black w-full">
          <div className="mx-auto px-52 py-4 w-full">
            <Nav />
            <div className="prose max-w-full">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
