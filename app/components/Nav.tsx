"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "./ThemeProvider";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { label: "Blog", href: "#blog" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Research", href: "#research" },
  { label: "Talks", href: "#talks" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const menuVariants = {
  closed: {
    x: "100%",
    transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] as const },
  },
  open: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.32, 0.72, 0, 1] as const,
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  closed: { opacity: 0, y: 20 },
  open: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] as const } },
};

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, setTheme, resolved } = useTheme();
  const navRef = useRef<HTMLElement>(null);

  function cycleTheme() {
    if (theme === "system") {
      setTheme(resolved === "light" ? "dark" : "light");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(systemPrefersDark ? "light" : "system");
    }
  }

  // Hero visibility
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

  // Active section tracking
  useEffect(() => {
    const ids = ["blog", "work", "services", "research", "talks", "about", "contact"];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    let observerActive = "";

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            observerActive = entry.target.id;
          }
        }
        // Check bottom-of-page AFTER processing observer entries
        const atBottom = document.documentElement.scrollHeight - (window.scrollY + window.innerHeight) < 80;
        setActiveSection(atBottom ? "contact" : observerActive);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    els.forEach((el) => observer.observe(el));

    function onScroll() {
      const atBottom = document.documentElement.scrollHeight - (window.scrollY + window.innerHeight) < 80;
      if (atBottom) {
        setActiveSection("contact");
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  function isActive(href: string) {
    return activeSection === href.slice(1);
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-[#FAFDF6]/80 dark:bg-black/50 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-full flex items-center justify-between">
          <a
            href="#hero"
            onClick={() => { setMenuOpen(false); setActiveSection(""); }}
            className={`text-[11px] uppercase tracking-[0.18em] font-medium transition-opacity hover:opacity-60 cursor-pointer ${
              scrolled || menuOpen
                ? "text-zinc-900 dark:text-zinc-50"
                : "text-zinc-800 dark:text-white"
            }`}
          >
            Danish Shakeel
          </a>

          {/* Desktop nav */}
          <nav ref={navRef} className="hidden min-[840px]:flex items-center gap-7 lg:gap-9">
            {navLinks.map(({ label, href }) => {
              const active = isActive(href);
              return (
                <a
                  key={label}
                  href={href}
                  className={`relative text-[11px] uppercase tracking-[0.18em] font-medium transition-colors ${
                    active
                      ? "text-zinc-900 dark:text-zinc-50"
                      : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
                  }`}
                >
                  {label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-zinc-900 dark:bg-zinc-50 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                </a>
              );
            })}
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

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`min-[840px]:hidden p-1 -mr-1 transition-colors ${
              scrolled || menuOpen
                ? "text-zinc-900 dark:text-zinc-50"
                : "text-zinc-800 dark:text-white"
            }`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <motion.line
                x1={2} y1={5}
                x2={18} y2={5}
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                animate={
                  menuOpen
                    ? { x1: 3.5, y1: 3.5, x2: 16.5, y2: 16.5 }
                    : { x1: 2, y1: 5, x2: 18, y2: 5 }
                }
                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] as const }}
              />
              <motion.line
                x1={2} y1={10}
                x2={18} y2={10}
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
              />
              <motion.line
                x1={2} y1={15}
                x2={18} y2={15}
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                animate={
                  menuOpen
                    ? { x1: 3.5, y1: 16.5, x2: 16.5, y2: 3.5 }
                    : { x1: 2, y1: 15, x2: 18, y2: 15 }
                }
                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] as const }}
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile full-page menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-[#FAFDF6] dark:bg-black flex flex-col items-center justify-center gap-8 min-[840px]:hidden"
          >
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map(({ label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  variants={itemVariants}
                  onClick={() => setMenuOpen(false)}
                  className="text-xl uppercase tracking-[0.18em] font-medium text-zinc-900 dark:text-zinc-50 hover:opacity-60 transition-opacity"
                >
                  {label}
                </motion.a>
              ))}
            </nav>
            <motion.div variants={itemVariants} className="mt-4">
              <ThemeToggle
                onClick={cycleTheme}
                duration={600}
                className="rounded cursor-pointer transition-colors text-2xl text-zinc-900 dark:text-zinc-50"
                aria-label={`Theme: ${theme}`}
              />
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
