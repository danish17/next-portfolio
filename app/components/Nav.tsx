"use client";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { label: "Blog", href: "#blog", external: false },
  { label: "Work", href: "#work", external: false },
  { label: "Services", href: "#services", external: false },
  { label: "Research", href: "#research", external: false },
  { label: "Talks", href: "#talks", external: false },
  { label: "About", href: "#about", external: false },
  { label: "Contact", href: "#contact", external: false },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme, resolved } = useTheme();

  function cycleTheme() {
    if (theme === "system") {
      setTheme(resolved === "light" ? "dark" : "light");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      // theme = "dark" — if system also prefers dark, skip straight to light
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(systemPrefersDark ? "light" : "system");
    }
  }

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { rootMargin: "-25% 0px 0px 0px", threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-500 ${
        scrolled
          ? "bg-[#FAFDF6]/80 dark:bg-black/50 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-full flex items-center justify-between">
        <a
          href="#hero"
          className={`text-[11px] uppercase tracking-[0.18em] font-medium transition-opacity hover:opacity-60 cursor-pointer ${
            scrolled
              ? "text-zinc-900 dark:text-zinc-50"
              : "text-zinc-800 dark:text-white"
          }`}
        >
          Danish Shakeel
        </a>

        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {navLinks.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className={`text-[11px] uppercase tracking-[0.18em] font-medium transition-colors ${
                scrolled
                  ? "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
                  : "text-zinc-800 dark:text-white hover:opacity-70"
              }`}
            >
              {label}
            </a>
          ))}
          <ThemeToggle
            onClick={cycleTheme}
            duration={600}
            className={`rounded cursor-pointer transition-colors text-base ${
              scrolled
                ? "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
                : "text-zinc-800 dark:text-white hover:opacity-70"
            }`}
            aria-label={`Theme: ${theme}`}
            title={`${theme} → ${theme === "light" ? "dark" : theme === "dark" ? "system" : "light"}`}
          />
        </nav>

        <div className="md:hidden flex items-center gap-5">
          {[navLinks[0], navLinks[1], navLinks[6]].map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className={`text-[10px] uppercase tracking-[0.18em] font-medium transition-colors ${
                scrolled
                  ? "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
                  : "text-zinc-800 dark:text-white hover:opacity-70"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
