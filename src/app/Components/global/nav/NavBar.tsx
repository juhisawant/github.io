import React from "react";
import Link from "next/link";

const NavBar: React.FC = () => (
  <nav
    className="w-full flex px-6 items-center color-color-accent gap-nav-gap"
  >
    <Link href="/" className="hover:underline">Home</Link>
    <Link href="/about" className="hover:underline">About</Link>
    <Link href="/projects" className="hover:underline">Projects</Link>
  </nav>
);

export default NavBar;
