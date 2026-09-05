'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-12 lg:px-16 py-6 bg-gradient-to-b from-black/80 via-black/40 to-transparent transition-all duration-300 font-[family-name:var(--font-montserrat)]">
      {/* Brand Logo */}
      <Link href="/" className="relative z-10 group flex items-center gap-1">
        <span className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-zinc-300 transition-colors drop-shadow">
          abdulnafeh
        </span>
      </Link>

      {/* Navigation Links */}
      <nav className="relative z-10 hidden md:flex items-center gap-8 lg:gap-10">
        <Link
          href="#home"
          className="text-sm font-medium text-zinc-300 hover:text-white transition-colors duration-200 drop-shadow"
        >
          Home
        </Link>
        <Link
          href="#about"
          className="text-sm font-medium text-zinc-300 hover:text-white transition-colors duration-200 drop-shadow"
        >
          About Me
        </Link>
        <Link
          href="#skills"
          className="text-sm font-medium text-zinc-300 hover:text-white transition-colors duration-200 drop-shadow"
        >
          Skills
        </Link>
        <Link
          href="#projects"
          className="text-sm font-medium text-zinc-300 hover:text-white transition-colors duration-200 drop-shadow"
        >
          Projects
        </Link>
      </nav>

      {/* Right Solid White Rounded Rectangle Button */}
      <div className="relative z-10 flex items-center">
        <Link
          href="#contact"
          className="px-5 py-2 sm:px-6 sm:py-2.5 rounded-xl text-sm font-semibold text-black bg-white hover:bg-zinc-200 active:bg-zinc-300 shadow-lg hover:shadow-white/20 transition-all duration-200 transform hover:-translate-y-0.5"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
