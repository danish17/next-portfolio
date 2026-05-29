"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const MARQUEE_TEXT =
  " Danish Shakeel · Danish Shakeel · Danish Shakeel · Danish Shakeel · Danish Shakeel · Danish Shakeel · Danish Shakeel · Danish Shakeel · Danish Shakeel · Danish Shakeel · Danish Shakeel ·";

export function Hero() {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 1, delay, ease: [0.25, 0.1, 0.25, 1] as const },
        };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const span = track.firstElementChild as HTMLElement;
    if (!span) return;

    let pos = 0;
    const speed = 1; // px per frame at ~60fps
    let raf: number;

    const animate = () => {
      pos -= speed;
      const spanWidth = span.offsetWidth;
      if (pos <= -spanWidth) pos += spanWidth;
      track.style.transform = `translate3d(${pos}px, 0, 0)`;
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] overflow-hidden bg-[#FAFDF6] dark:bg-black pt-16"
    >
      {/* Full-bleed background photo */}
      <Image
        src="/hero-photo.webp"
        alt=""
        fill
        loading="eager"
        className="object-cover"
        style={{ objectPosition: "center 30%", zIndex: 1 }}
      />

      {/* Overlay — heavy light wash in light mode, dark tint in dark mode */}
      <div
        className="absolute inset-0 bg-[#FAFDF6]/45 dark:bg-black/35"
        style={{ zIndex: 2 }}
      />

      {/*
        Marquee — must be a plain div, NOT a motion.div.
        Motion's opacity animation creates an isolated stacking context
        that breaks mix-blend-mode. Static div = blend mode works correctly.
      */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "60%",
          left: 0,
          transform: "translateY(-50%)",
          width: "100%",
          overflow: "hidden",
          zIndex: 4,
          pointerEvents: "none",
          mixBlendMode: "difference",
        }}
      >
        <div
          ref={trackRef}
          className="flex whitespace-nowrap will-change-transform"
          style={{
            fontSize: "clamp(80px, 18vw, 200px)",
            fontWeight: 500,
            lineHeight: 0.88,
            letterSpacing: "-0.06em",
            color: "rgb(255, 255, 255)",
            userSelect: "none",
          }}
        >
          <span className="shrink-0">{MARQUEE_TEXT}</span>
          <span className="shrink-0">{MARQUEE_TEXT}</span>
        </div>
      </div>

      {/* Hidden h1 for screen readers */}
      <h1 className="sr-only">
        Danish Shakeel - Co-Founder &amp; CTO at seatbase.io, Engineer and Educator
      </h1>

      {/* Bottom text — stacked on mobile, split on desktop */}
      <motion.div
        {...fade(0.5)}
        className="absolute z-10 inset-x-0 bottom-5 md:bottom-8 px-5 md:px-6 flex flex-col md:flex-row md:justify-between md:items-end gap-4 md:gap-0"
      >
        <span
          className="text-zinc-800 dark:text-white"
          style={{
            fontSize: "11px",
            fontWeight: 400,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Web // AI // SaaS // Product // Consulting
        </span>

        <div className="md:text-right">
          <div
            className="text-zinc-800 dark:text-white"
            style={{
              fontSize: "clamp(22px, 3.5vw, 42px)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
            }}
          >
            Entreprenuer & Engineer
          </div>
          <div
            className="text-zinc-800 dark:text-white"
            style={{
              fontSize: "clamp(22px, 3.5vw, 42px)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
            }}
          >
            Co-Founder{" "}
            <a
              href="https://seatbase.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity inline-flex items-baseline gap-1"
            >
              @seatbase.io
              <Image
                src="/seatbase-logo.svg"
                alt="Seatbase logo"
                width={12}
                height={12}
                className="h-[0.6em] w-auto align-middle dark:invert"
              />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
