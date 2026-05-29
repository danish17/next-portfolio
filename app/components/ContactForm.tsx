"use client";
import { useState, useEffect, useRef, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PaperPlaneTilt, Check } from "@phosphor-icons/react";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!;

declare global {
  interface Window {
    turnstile: {
      render: (el: string | HTMLElement, opts: Record<string, unknown>) => string;
      reset: (id: string) => void;
      remove: (id: string) => void;
    };
    __turnstileToken: string;
  }
}

function loadTurnstile(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.turnstile) { resolve(); return; }
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

function Spinner() {
  return (
    <motion.svg
      width="16" height="16" viewBox="0 0 16 16" fill="none"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1, rotate: 360 }}
      transition={{ rotate: { duration: 0.8, repeat: Infinity, ease: "linear" } }}
    >
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" opacity="0.2" />
      <path d="M8 2a6 6 0 0 1 5.2 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </motion.svg>
  );
}

const btnBase =
  "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 dark:bg-zinc-50 text-white dark:text-black text-sm font-medium";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const widgetRef = useRef<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return;
    let widgetId: string | null = null;

    loadTurnstile().then(() => {
      if (!containerRef.current) return;
      // Remove any existing widget on this element first
      const existing = containerRef.current.querySelector("iframe");
      if (existing) return; // already rendered
      window.__turnstileToken = "";
      widgetId = window.turnstile.render(containerRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        appearance: "interaction-only",
        callback: (t: string) => { window.__turnstileToken = t; },
      });
    });

    return () => {
      if (widgetId) {
        window.turnstile?.remove(widgetId);
        widgetId = null;
      }
    };
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const token = window.__turnstileToken || "";

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, token }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setStatus("idle"), 2500);
    } catch {
      setStatus("error");
    } finally {
      if (widgetRef.current) window.turnstile?.reset(widgetRef.current);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-name" className="text-xs font-mono uppercase tracking-widest text-zinc-500">Name</label>
        <input
          id="cf-name" type="text" required value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 text-sm placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition-colors"
          placeholder="Your name"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-email" className="text-xs font-mono uppercase tracking-widest text-zinc-500">Email</label>
        <input
          id="cf-email" type="email" required value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 text-sm placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition-colors"
          placeholder="you@example.com"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-message" className="text-xs font-mono uppercase tracking-widest text-zinc-500">Message</label>
        <textarea
          id="cf-message" required rows={4} value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 text-sm placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition-colors resize-none"
          placeholder="What are you reaching out about?"
        />
      </div>

      {/* Turnstile */}
      <div ref={containerRef} />

      <div className="relative">
        <AnimatePresence mode="wait">
          {status === "sending" ? (
            <motion.button
              key="sending" type="button" disabled
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={btnBase}
            >
              Sending <Spinner />
            </motion.button>
          ) : status === "sent" ? (
            <motion.button
              key="sent" type="button" disabled
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={btnBase}
            >
              Sent <Check size={16} weight="bold" />
            </motion.button>
          ) : (
            <motion.button
              key="idle" type="submit"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`${btnBase} hover:opacity-80 transition-opacity`}
            >
              {status === "error" ? "Try Again" : "Send Message"}
              <PaperPlaneTilt size={16} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500">
          Something went wrong. Please try again or email me directly.
        </p>
      )}

      <p className="text-[11px] text-zinc-400 leading-relaxed">
        This site is protected by Cloudflare Turnstile.{" "}
        <a
          href="https://www.cloudflare.com/cloudflare-turnstile-privacy/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
        >
          Privacy
        </a>
        {" · "}
        <a
          href="https://www.cloudflare.com/application/terms/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
        >
          Terms
        </a>
      </p>
    </form>
  );
}
