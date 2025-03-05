import Link from "next/link";

export const Nav = () => (
  <nav className="no-underline flex justify-center flex-1 items-center flex-wrap gap-y-2 space-x-2 text-gray-500 text-sm mb-8 md:mb-16">
    <Link href="/">@beitler</Link>
    <span>/</span>
    <Link href="/now">Now</Link>
    <span>/</span>
    <Link href="/work">Work</Link>
    <span>/</span>
    <a
      href="https://twitter.com/joshbeitler"
      target="_blank"
      title="Follow me on X (formerly known as Twitter)"
    >
      X
    </a>
    <span>/</span>
    <a
      href="https://linkedin.com/in/joshbeitler"
      target="_blank"
      title="Find me on LinkedIn"
    >
      LI
    </a>
    <span>/</span>
    <a
      href="https://github.com/joshbeitler"
      target="_blank"
      title="Find me on GitHub"
    >
      GH
    </a>
    <span>/</span>
    <a
      href="https://instagram.com/joshbeitler"
      target="_blank"
      title="Find me on Instagram"
    >
      IG
    </a>
  </nav>
);
