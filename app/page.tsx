import { ArrowUpRight, GithubLogo, LinkedinLogo, InstagramLogo, Globe, EnvelopeSimple } from "@phosphor-icons/react/ssr";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { FadeIn } from "./components/FadeIn";
import { About } from "./components/About";
import { fetchRecentPosts, fetchProjects, fetchTalks } from "./lib/graphql";
import { fetchPublications } from "./lib/scholar";
import type { IPost, IProject, ITalk, TArticle } from "./lib/types";
import { ProjectsSection } from "./components/ProjectsSection";
import { TalksSection } from "./components/TalksSection";

// ─── Blog helpers ──────────────────────────────────────────────────────────────

function unescapeHtml(text: string): string {
  return text
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
    .replace(/&rdquo;/g, "”");
}

function stripHtml(html: string): string {
  return unescapeHtml(html.replace(/<[^>]*>/g, "").trim());
}

function estimateReadTime(text: string): string {
  const words = text.split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getPostMeta(post: IPost): string {
  const category = post.categories?.edges?.[0]?.node?.name;
  const date = formatDate(post.date);
  return category ? `${category} · ${date}` : date;
}


const services = [
  {
    title: "Fractional CTO",
    description:
      "Strategic technical leadership without the full-time overhead. Architecture decisions, team structure, and technology roadmap for early-stage and scaling companies.",
  },
  {
    title: "Product Consulting",
    description:
      "From napkin sketch to shipped product. User research, scoping, prototyping, and go-to-market strategy for SaaS and consumer products.",
  },
  {
    title: "Full-Stack Development",
    description:
      "End-to-end web applications, APIs, and platforms built for scale. TypeScript, React, NestJS, PHP, Python, Postgres, MongoDB — from greenfield to enterprise migration.",
  },
  {
    title: "WordPress Development",
    description:
      "Enterprise WordPress at scale. Former Engineering Lead at rtCamp, one of the world's leading WordPress agencies. Custom themes, plugins, Gutenberg blocks, and headless WP with Next.js.",
  },
  {
    title: "AI Integration",
    description:
      "Practical AI that ships. LLM-powered features, RAG pipelines, agentic workflows, and internal tooling — no hype, just working software.",
  },
  {
    title: "Growth Engineering",
    description:
      "Data-driven experimentation and conversion optimization. A/B testing infrastructure, analytics pipelines, and SEO-driven content engineering.",
  },
  {
    title: "IT Consulting",
    description:
      "Stack assessments, infrastructure audits, cloud architecture reviews, and vendor selection for teams that need an outside perspective before committing.",
  },
];


// ─── Shared section classes ────────────────────────────────────────────────────

const sectionBase =
  "scroll-mt-16 py-24 md:py-32 border-t border-zinc-200 dark:border-zinc-800";

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function Page() {
  const data = await fetchRecentPosts();
  const blogPosts: IPost[] = data?.posts?.nodes ?? [];

  const pubData = await fetchPublications();
  const articles: TArticle[] = (pubData?.articles ?? []).filter((a) =>
    /^(D Shakeel|Danish Shakeel)/i.test(a.authors)
  );

  const projectData = await fetchProjects();
  const projects: IProject[] = projectData?.projects?.nodes ?? [];

  const talkData = await fetchTalks();
  const talks: ITalk[] = talkData?.talks?.nodes ?? [];

  return (
    <>
      <Nav />
      <Hero />

      <main>
        {/* ── Blog ── */}
        <section id="blog" className={sectionBase}>
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <FadeIn>
              <div className="flex items-end justify-between mb-12 md:mb-16">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50">
                  Blog.
                </h2>
                <a
                  href="https://danishshakeel.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                >
                  View All
                  <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {blogPosts.length > 0 && (
                <>
                  {/* Featured post */}
                  <a
                    href={blogPosts[0].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 md:p-10 mb-5 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
                  >
                    <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">
                      {estimateReadTime(stripHtml(blogPosts[0].content))}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3 group-hover:opacity-60 transition-opacity">
                      {stripHtml(blogPosts[0].title)}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                      {stripHtml(blogPosts[0].excerpt)}
                    </p>
                  </a>

                  {/* Two smaller posts */}
                  {blogPosts.length > 1 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {blogPosts.slice(1).map((post) => (
                        <a
                          key={post.date}
                          href={post.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 md:p-8 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
                        >
                          <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">
                            {estimateReadTime(stripHtml(post.content))}
                          </p>
                          <h3 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2 group-hover:opacity-60 transition-opacity">
                            {stripHtml(post.title)}
                          </h3>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            {stripHtml(post.excerpt)}
                          </p>
                        </a>
                      ))}
                    </div>
                  )}
                </>
              )}
            </FadeIn>
          </div>
        </section>

        {/* ── Work ── */}
        <section id="work" className={sectionBase}>
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-12 md:mb-16">
                Work.
              </h2>
              <ProjectsSection projects={projects} />
            </FadeIn>
          </div>
        </section>

        {/* ── Services ── */}
        <section id="services" className={`${sectionBase} pb-0!`}>
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-12 md:mb-16">
                Services.
              </h2>
              <div className="flex flex-col">
                {services.map((service, i) => (
                  <div
                    key={service.title}
                    className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 py-8 md:py-10 ${
                      i !== 0 ? "border-t border-zinc-200 dark:border-zinc-800" : ""
                    }`}
                  >
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                      {service.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── CTA ── */}
        <div className="border-t border-zinc-200 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
            <a
              href="#contact"
              className="text-3xl md:text-4xl font-bold tracking-tighter text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors underline decoration-dotted underline-offset-[6px]"
            >
              Let&apos;s talk.
            </a>
          </div>
        </div>

        {/* ── Research ── */}
        <section id="research" className={sectionBase}>
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-12 md:mb-16">
                Research.
              </h2>
              <ul className="flex flex-col">
                {articles.map((article, i) => (
                  <li
                    key={article.citation_id}
                    className={i !== 0 ? "border-t border-zinc-200 dark:border-zinc-800" : ""}
                  >
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col md:flex-row md:items-center justify-between gap-3 py-7 md:py-8"
                    >
                      <div>
                        <p className="font-semibold text-zinc-900 dark:text-zinc-50 group-hover:opacity-60 transition-opacity leading-snug">
                          {article.title}
                        </p>
                        <p className="text-sm text-zinc-500 mt-1.5 font-mono">
                          {article.authors} &middot; {article.year}
                        </p>
                      </div>
                      <ArrowUpRight
                        size={18}
                        className="shrink-0 text-zinc-400 dark:text-zinc-700 group-hover:text-zinc-900 dark:group-hover:text-zinc-50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                      />
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href="https://scholar.google.com/citations?user=QnC8JDQAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                >
                  View Google Scholar
                  <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── Talks ── */}
        <section id="talks" className={sectionBase}>
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-12 md:mb-16">
                Talks.
              </h2>
              <TalksSection talks={talks} />
            </FadeIn>
          </div>
        </section>

        {/* ── About Me ── */}
        <About />

        {/* ── Contact ── */}
        <section id="contact" className={sectionBase}>
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <FadeIn>
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 leading-[0.95]">
                  Let&apos;s work
                  <br />
                  together.
                </h2>
                <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-md">
                  Open to freelance projects, collaborations, and
                  speaking engagements.
                </p>
                <a
                  href="mailto:hi@danishshakeel.me"
                  className="mt-8 inline-flex items-center gap-2 text-xl md:text-2xl font-medium text-zinc-900 dark:text-zinc-50 hover:opacity-50 transition-opacity group"
                >
                  hi@danishshakeel.me
                  <ArrowUpRight
                    size={24}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-zinc-500">
          <span>Danish Shakeel, 2026</span>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/danish17"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
              aria-label="GitHub"
            >
              <GithubLogo size={18} />
            </a>
            <a
              href="https://linkedin.com/in/danishshakeel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinLogo size={18} />
            </a>
            <a
              href="https://instagram.com/iamdanish17"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
              aria-label="Instagram"
            >
              <InstagramLogo size={18} />
            </a>
            <a
              href="https://danishshakeel.me"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
              aria-label="Blog"
            >
              <Globe size={18} />
            </a>
            <a
              href="mailto:hi@danishshakeel.me"
              className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
              aria-label="Email"
            >
              <EnvelopeSimple size={18} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
