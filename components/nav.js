import Link from "next/link";

export const Nav = () => (
  <nav className="flex items-center space-x-2 text-gray-500 text-sm mb-12">
    <span>@beitler</span>
    <span>/</span>
    <Link href="/about">About</Link>
    <span>/</span>
    <Link href="/thoughts">Thoughts</Link>
    <span>/</span>
    <span>Bookshelf</span>
    <span>/</span>
    <span>Music</span>
    <span>/</span>
    <span>Photos</span>
    <span>/</span>
    <span>Projects</span>
    <span>/</span>
    <span>Now</span>
  </nav>
);
