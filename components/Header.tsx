"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/artists", label: "Наши диджеи" },
  { href: "/about", label: "О продюсере" },
  { href: "/contact", label: "Контакты" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-primary/80 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            id="logo-link"
            className="group flex items-center gap-3 relative"
          >
            {/* Logo icon — stylized sound wave */}
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              <svg
                viewBox="0 0 32 32"
                className="w-6 h-6 text-accent-primary relative z-10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 16 L4 12 M8 16 L8 8 M12 16 L12 4 M16 16 L16 6 M20 16 L20 10 M24 16 L24 12 M28 16 L28 14" />
                <path d="M4 16 L4 20 M8 16 L8 24 M12 16 L12 28 M16 16 L16 26 M20 16 L20 22 M24 16 L24 20 M28 16 L28 18" />
              </svg>
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight font-[var(--font-display)]">
                <span className="text-text-primary group-hover:text-accent-primary transition-colors duration-300">
                  Александр
                </span>
                <span className="gradient-text"> Турло</span>
              </span>
              <div className="text-[10px] uppercase tracking-[0.25em] text-text-muted font-medium">
                DJ Agency & Production
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                id={`nav-${link.href.replace("/", "")}`}
                className="relative px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-accent-primary to-accent-secondary group-hover:w-3/4 transition-all duration-300" />
              </Link>
            ))}
            <Link
              href="/contact"
              id="nav-cta"
              className="ml-4 px-5 py-2.5 text-sm font-semibold rounded-full bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/30 text-accent-primary hover:border-accent-primary/60 hover:shadow-lg hover:shadow-accent-primary/10 transition-all duration-300"
            >
              Связаться
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Меню навигации"
          >
            <div className="flex flex-col gap-1.5 w-5">
              <span
                className={`block h-[2px] bg-current transition-all duration-300 origin-center ${
                  mobileMenuOpen
                    ? "rotate-45 translate-y-[4px]"
                    : ""
                }`}
              />
              <span
                className={`block h-[2px] bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] bg-current transition-all duration-300 origin-center ${
                  mobileMenuOpen
                    ? "-rotate-45 -translate-y-[4px]"
                    : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileMenuOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1 pt-2 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base text-text-secondary hover:text-accent-primary hover:bg-accent-primary/5 rounded-lg transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
