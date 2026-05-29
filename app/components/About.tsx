import Image from "next/image";
import { GithubLogo, LinkedinLogo, InstagramLogo, Link as LinkIcon, FileText, EnvelopeSimple } from "./Icons";
import { FadeIn } from "./FadeIn";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://linkedin.com/in/danishshakeel",
    icon: LinkedinLogo,
    label: "LinkedIn",
  },
  {
    href: "/cv.pdf",
    icon: FileText,
    label: "CV",
  },
  {
    href: "https://github.com/danish17",
    icon: GithubLogo,
    label: "GitHub",
  },
  {
    href: "https://danishshakeel.me",
    icon: LinkIcon,
    label: "Blog",
  },
  {
    href: "mailto:hi@danishshakeel.me",
    icon: EnvelopeSimple,
    label: "Email",
  },
  {
    href: "https://instagram.com/iamdanish17",
    icon: InstagramLogo,
    label: "Instagram",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-16 py-24 md:py-32 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50">
                About Me.
              </h2>
              <div className="flex flex-col gap-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  As the Co-Founder and CTO{" "}
                  <Link
                    href="https://seatbase.io"
                    target="_blank"
                    className="text-zinc-800 dark:text-zinc-200 underline decoration-dotted underline-offset-2 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                  >
                    @seatbase.io
                  </Link>{" "}
                  and Lead Engineer{" "}
                  <Link
                    href="https://rtcamp.com"
                    target="_blank"
                    className="text-zinc-800 dark:text-zinc-200 underline decoration-dotted underline-offset-2 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                  >
                    @rtCamp
                  </Link>
                  , I bring 7+ years of full-stack engineering excellence to the
                  table. I specialize in architecting scalable enterprise solutions
                  that currently serve millions of users worldwide.
                </p>
                <p>
                  From my roots in{" "}
                  <Link
                    href="https://en.wikipedia.org/wiki/Kashmir"
                    target="_blank"
                    className="text-zinc-800 dark:text-zinc-200 underline decoration-dotted underline-offset-2 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                  >
                    Kashmir
                  </Link>{" "}
                  to my current base in Saarbrücken, my philosophy remains the same:
                  build software that is fast, accessible, and maintainable. I sit
                  at the intersection of engineering and business, helping companies
                  achieve exceptional results through strategic technology.
                </p>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2 mt-2 text-sm text-zinc-500">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                  >
                    <Icon size={16} weight="fill" />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 max-w-sm w-full">
              <Image
                src="/profile.png"
                alt="Danish Shakeel"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
