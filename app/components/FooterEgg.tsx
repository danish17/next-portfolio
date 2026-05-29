"use client";
import { useState, useEffect, useCallback } from "react";

const titles = [
  "Danish Shakeel · Professional Googler",
  "Danish Shakeel · Debugging Life Since 1997",
  "Danish Shakeel · Ctrl+C, Ctrl+V Engineer",
  "Danish Shakeel · It Works, Don't Touch It",
  "Danish Shakeel · FC Barcelona Fan",
  "Danish Shakeel · Kashmiri Chai Enthusiast",
  "Danish Shakeel · Sometimes a Sketch Artist",
  "Danish Shakeel · Failed Poet",
  "Danish Shakeel · Full-Stack in This Economy",
  "Danish Shakeel · 404: Sleep Not Found",
];

export function FooterEgg() {
  const [index, setIndex] = useState(
    Math.floor(Math.random() * titles.length)
  );

  const cycle = useCallback(() => {
    setIndex((i) => {
      let next = Math.floor(Math.random() * titles.length);
      // Avoid repeating the same title
      if (next === i) next = (next + 1) % titles.length;
      return next;
    });
  }, []);

  useEffect(() => {
    const id = setInterval(cycle, 5000);
    return () => clearInterval(id);
  }, [cycle]);

  return (
    <button
      type="button"
      onClick={cycle}
      className="text-left hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors cursor-pointer select-none"
    >
      {titles[index]}
    </button>
  );
}
