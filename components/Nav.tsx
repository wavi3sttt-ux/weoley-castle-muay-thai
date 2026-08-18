"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const WHATSAPP_URL = "https://wa.me/447487639360";

const links = [
  { href: "#timetable", label: "Timetable" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const onScroll = () => {
      const heroHeight = hero?.offsetHeight ?? window.innerHeight;
      setScrolled(window.scrollY > heroHeight - 100);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-6 md:px-8 py-4 border-b transition-colors duration-300 ${
          scrolled
            ? "bg-bg border-green"
            : "bg-transparent border-transparent"
        }`}
      >
        <a href="#hero" className="block">
          <Image
            src="/logo.png"
            alt="Weoley Castle Muay Thai"
            width={160}
            height={44}
            className="h-11 w-auto"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
            priority
          />
        </a>

        <div className="hidden md:flex items-center gap-9">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-anchor text-sm uppercase tracking-wider font-semibold"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-glow bg-green text-offwhite border border-green px-5 py-2.5 text-xs uppercase tracking-wider font-bold transition-all duration-300 hover:bg-transparent hover:text-green-bright hover:scale-[1.02] whitespace-nowrap"
          >
            WhatsApp
          </a>
        </div>

        <button
          aria-label="Open menu"
          className="md:hidden flex flex-col gap-[5px] z-[1100] bg-transparent border-0 p-2"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`w-[26px] h-[2px] bg-offwhite block transition-all duration-300 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`w-[26px] h-[2px] bg-offwhite block transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-[26px] h-[2px] bg-offwhite block transition-all duration-300 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`fixed inset-0 bg-bg z-[1050] flex flex-col items-center justify-center gap-9 transition-transform duration-400 ease-in-out md:hidden ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <a
          href="#hero"
          className="font-display text-3xl tracking-wide"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </a>
        <a
          href="#about"
          className="font-display text-3xl tracking-wide"
          onClick={() => setMenuOpen(false)}
        >
          The Coach
        </a>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-display text-3xl tracking-wide"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green text-offwhite border border-green px-5 py-2.5 text-xs uppercase tracking-wider font-bold"
          onClick={() => setMenuOpen(false)}
        >
          WhatsApp
        </a>
      </div>
    </>
  );
}
