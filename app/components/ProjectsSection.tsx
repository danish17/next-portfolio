"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ArrowUpRight } from "@phosphor-icons/react";
import { FadeIn } from "./FadeIn";
import type { IProject } from "../lib/types";

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&#(\d+);/g, (_, d) => String.fromCharCode(Number(d)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCharCode(parseInt(h, 16)))
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&hellip;/g, "…")
    .replace(/&lsquo;/g, "‘")
    .replace(/&rsquo;/g, "’")
    .replace(/&ldquo;/g, "“")
    .replace(/&rdquo;/g, "”")
    .trim();
}

export function ProjectsSection({ projects }: { projects: IProject[] }) {
  const [selected, setSelected] = useState<IProject | null>(null);

  const onClose = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  if (!projects.length) return null;

  const [featured, ...rest] = projects;

  return (
    <>
      {/* ── Grid ── */}
      <div className="flex flex-col gap-5">
        {/* Featured */}
        <button
          type="button"
          onClick={() => setSelected(featured)}
          className="text-left rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 grid grid-cols-1 md:grid-cols-5 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors cursor-pointer"
        >
          <div className="relative h-60 md:h-auto md:col-span-3 bg-white dark:bg-zinc-900">
            {featured.featuredImage?.node && (
              <Image
                src={featured.featuredImage.node.sourceUrl}
                alt={featured.featuredImage.node.altText || stripHtml(featured.title)}
                fill
                className="object-cover"
              />
            )}
          </div>
          <div className="md:col-span-2 p-8 md:p-10 flex flex-col gap-5 bg-white dark:bg-zinc-900">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3">
                {stripHtml(featured.title)}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
                {stripHtml(featured.excerpt)}
              </p>
            </div>
            {featured.projectUrl?.projectLink && (
              <a
                href={featured.projectUrl?.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-zinc-50 hover:opacity-60 transition-opacity mt-auto"
              >
                View Project
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            )}
          </div>
        </button>

        {/* Rest */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {rest.map((project) => (
              <button
                key={project.link}
                type="button"
                onClick={() => setSelected(project)}
                className="text-left rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 flex flex-col bg-white dark:bg-zinc-900 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors cursor-pointer"
              >
                <div className="relative h-36 bg-zinc-100 dark:bg-zinc-800">
                  {project.featuredImage?.node && (
                    <Image
                      src={project.featuredImage.node.sourceUrl}
                      alt={
                        project.featuredImage.node.altText ||
                        stripHtml(project.title)
                      }
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div>
                    <h3 className="text-base font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-1.5">
                      {stripHtml(project.title)}
                    </h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2">
                      {stripHtml(project.excerpt)}
                    </p>
                  </div>
                  {project.projectUrl?.projectLink && (
                    <a
                      href={project.projectUrl?.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="group inline-flex items-center gap-1 text-xs font-medium text-zinc-900 dark:text-zinc-50 hover:opacity-60 transition-opacity mt-auto"
                    >
                      View Project
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── Modal ── */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 pb-20"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <div className="relative z-10 w-full max-w-3xl max-h-full overflow-y-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-2xl">
            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-1.5 rounded-full bg-white dark:bg-zinc-900/80 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Featured image */}
            {selected.featuredImage?.node && (
              <div className="relative w-full h-56 sm:h-72">
                <Image
                  src={selected.featuredImage.node.sourceUrl}
                  alt={
                    selected.featuredImage.node.altText ||
                    stripHtml(selected.title)
                  }
                  fill
                  className="object-cover rounded-t-2xl"
                />
              </div>
            )}

            {/* Content */}
            <div className="p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3">
                {stripHtml(selected.title)}
              </h2>

              {(selected.categories?.edges?.length > 0 ||
                selected.tags?.nodes?.length > 0) && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {selected.categories?.edges?.map(({ node }) => (
                    <span
                      key={node.name}
                      className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-300 dark:border-zinc-700"
                    >
                      {node.name}
                    </span>
                  ))}
                  {selected.tags?.nodes?.map((tag) => (
                    <span
                      key={tag.name}
                      className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              )}

              {selected.projectUrl?.projectLink && (
                <div className="mb-6">
                  <a
                    href={selected.projectUrl?.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium px-5 py-2.5 rounded-full bg-zinc-900 dark:bg-zinc-50 text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-300 transition-colors"
                  >
                    View Project
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              )}

              <div
                className="prose prose-zinc max-w-none
                  prose-headings:text-zinc-900 dark:prose-headings:text-zinc-50 prose-headings:font-bold
                  prose-p:text-zinc-600 dark:prose-p:text-zinc-400 prose-p:leading-relaxed
                  prose-a:text-zinc-700 dark:prose-a:text-zinc-300 prose-a:underline
                  prose-strong:text-zinc-800 dark:prose-strong:text-zinc-200
                  prose-code:text-zinc-700 dark:prose-code:text-zinc-300 prose-code:bg-zinc-100 dark:prose-code:bg-zinc-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                  prose-pre:bg-zinc-50 dark:prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-200 dark:prose-pre:border-zinc-800
                  prose-img:rounded-xl
                  prose-li:text-zinc-600 dark:prose-li:text-zinc-400
                  prose-hr:border-zinc-200 dark:prose-hr:border-zinc-800"
                dangerouslySetInnerHTML={{ __html: selected.content }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
