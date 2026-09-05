'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const isClickScrollingRef = useRef<boolean>(false);
  const scrollTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];

    const handleScroll = () => {
      // Ignore scroll updates while programmatic smooth scroll is active from tab click
      if (isClickScrollingRef.current) return;

      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
      }
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();

    // Lock scroll listener to prevent intermediate flickering during smooth scroll animation
    isClickScrollingRef.current = true;
    setActiveSection(id);

    if (scrollTimerRef.current) {
      clearTimeout(scrollTimerRef.current);
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = `#${id}`;
    }

    // Release lock once smooth scroll completes
    scrollTimerRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 850);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-12 lg:px-16 py-6 bg-gradient-to-b from-black/80 via-black/40 to-transparent transition-all duration-300 font-[family-name:var(--font-montserrat)]">
      {/* Brand Logo */}
      <Link
        href="#home"
        onClick={(e) => handleNavClick(e, 'home')}
        className="relative z-10 group flex items-center gap-1"
      >
        <span className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-zinc-300 transition-colors drop-shadow">
          abdulnafeh
        </span>
      </Link>

      {/* Navigation Links */}
      <nav className="relative z-10 hidden md:flex items-center gap-8 lg:gap-10">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`text-sm transition-colors duration-200 drop-shadow ${
                isActive
                  ? 'text-amber-400 font-bold'
                  : 'text-zinc-300 font-medium hover:text-white'
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>

      {/* Right Solid White Rounded Rectangle Button */}
      <div className="relative z-10 flex items-center">
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, 'contact')}
          className="px-5 py-2 sm:px-6 sm:py-2.5 rounded-xl text-sm font-semibold text-black bg-white hover:bg-zinc-200 active:bg-zinc-300 shadow-lg hover:shadow-white/20 transition-all duration-200 transform hover:-translate-y-0.5"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
