"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isFloating = scrolled || !isHome;
  const textColor = isFloating ? "text-[#3d2b1a]" : "text-white";
  const hoverColor = isFloating
    ? "hover:text-[#664930]"
    : "hover:text-[#FFDBBB]";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isFloating
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_24px_rgba(0,0,0,0.07)] border-b border-white/50"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-18 py-4">
        {/* Logo + Company Name */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <Image
            src="/Transparent Logo.png"
            alt="Sunflower Landscaping KC"
            width={44}
            height={44}
            className="h-11 w-auto"
            priority
          />
          <div className="flex flex-col leading-tight">
            <span className={`text-base font-bold tracking-tight transition-colors ${isFloating ? "text-[#3d2b1a]" : "text-white"}`}>
              Sunflower Landscaping
            </span>
            <span className={`text-xs font-semibold tracking-widest uppercase transition-colors ${isFloating ? "text-[#997E67]" : "text-[#FFDBBB]/80"}`}>
              Kansas City
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium tracking-wide transition-colors ${textColor} ${hoverColor} ${
                pathname === href ? "opacity-100" : "opacity-80"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/quote"
            className="bg-[#664930] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#3d2b1a] transition-colors"
          >
            Free Quote
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 ${textColor}`}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-current transition-all duration-200 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-current transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-current transition-all duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-white/95 backdrop-blur-xl border-t border-stone-100`}
      >
        <div className="px-6 py-5 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`text-[#3d2b1a] font-medium py-2.5 border-b border-stone-100 last:border-0 ${
                pathname === href ? "text-[#664930]" : ""
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="pt-3 flex flex-col gap-3">
            <Link
              href="/quote"
              onClick={() => setMenuOpen(false)}
              className="bg-[#664930] text-white text-sm font-semibold px-5 py-3 rounded-full text-center"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
