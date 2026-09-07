'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
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
    setMobileMenuOpen(false);

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
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-12 lg:px-16 py-4 sm:py-6 bg-gradient-to-b from-black/90 via-black/50 to-transparent transition-all duration-300 font-[family-name:var(--font-montserrat)]">
      {/* Brand Logo */}
      <Link
        href="#home"
        onClick={(e) => handleNavClick(e, 'home')}
        className="relative z-50 group flex items-center gap-1"
      >
        <span className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-zinc-300 transition-colors drop-shadow">
          abdulnafeh
        </span>
      </Link>

      {/* Desktop Navigation Links */}
      <nav className="relative z-10 hidden md:flex items-center gap-8 lg:gap-10">
        {navItems.slice(0, 4).map((item) => {
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

      {/* Right Desktop CTA Button & Mobile Menu Toggle */}
      <div className="relative z-50 flex items-center gap-3">
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, 'contact')}
          className="hidden sm:inline-flex px-5 py-2 sm:px-6 sm:py-2.5 rounded-xl text-sm font-semibold text-black bg-white hover:bg-zinc-200 active:bg-zinc-300 shadow-lg hover:shadow-white/20 transition-all duration-200 transform hover:-translate-y-0.5"
        >
          Contact
        </a>

        {/* Mobile Hamburger Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          aria-expanded={mobileMenuOpen}
          className="md:hidden relative z-50 p-2 rounded-xl bg-black/60 border border-white/20 text-white hover:bg-white/10 active:bg-white/20 backdrop-blur-md transition-all shadow-lg flex flex-col justify-center items-center gap-1 w-9 h-9"
        >
          <span
            className={`w-4.5 h-0.5 bg-white rounded-full transition-all duration-300 ${
              mobileMenuOpen ? 'rotate-45 translate-y-1' : ''
            }`}
          />
          <span
            className={`w-4.5 h-0.5 bg-white rounded-full transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0 scale-0' : ''
            }`}
          />
          <span
            className={`w-4.5 h-0.5 bg-white rounded-full transition-all duration-300 ${
              mobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Glassmorphic Overlay Drawer */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/85 backdrop-blur-xl transition-all duration-300 flex flex-col justify-center items-center px-6 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto scale-100'
            : 'opacity-0 pointer-events-none scale-95'
        }`}
      >
        <div className="w-full max-w-sm bg-zinc-950/90 border border-white/15 rounded-3xl p-6 shadow-2xl flex flex-col gap-3 text-center backdrop-blur-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
            Navigation Menu
          </span>

          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`py-3 px-5 rounded-xl text-base font-bold transition-all duration-200 flex items-center justify-between ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md'
                    : 'text-zinc-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="text-xs font-bold text-white">●</span>}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
}
