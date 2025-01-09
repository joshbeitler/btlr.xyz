import Link from "next/link";

export const Nav = () => (
  <nav className="flex items-center space-x-2 text-gray-500 text-sm mb-16">
    <span>@beitler</span>
    <span>/</span>
    <Link href="/about">About</Link>
    <span>/</span>
    <Link href="/thoughts">Thoughts</Link>
    <span>/</span>
    <Link href="/bookshelf">Bookshelf</Link>
    <span>/</span>
    <Link href="/music">Music</Link>
    <span>/</span>
    <Link href="/photos">Photos</Link>
    <span>/</span>
    <Link href="/projects">Projects</Link>
    <span>/</span>
    <Link href="/now">Now</Link>
  </nav>
);
