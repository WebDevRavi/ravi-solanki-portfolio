import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProjectHeroMedia } from '@/components/canvas/ProjectHeroMedia';
import { TypeRushShowcase } from '@/components/sections/TypeRushShowcase';
import { PROJECTS } from '@/data/projects';
import type { Metadata } from 'next';

interface GamePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} — Ravi Solanki`,
    description: project.overview,
  };
}

export default async function GameCaseStudyPage({ params }: GamePageProps) {
  const { slug } = await params;
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);
  if (projectIndex === -1) notFound();

  const project = PROJECTS[projectIndex];
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  return (
    <div className="flex min-h-screen flex-col bg-[#0a0a0b] text-[var(--text)]">
      <Header />

      <main className="flex-1 px-6 py-12 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          {/* Back Action */}
          <Link
            href="/#games"
            className="inline-flex items-center gap-2 font-mono text-xs text-[var(--muted)] transition-colors hover:text-[var(--text)]"
          >
            ← BACK TO WORK
          </Link>

          {/* Project Title & Direct Links */}
          <div className="mt-8 mb-12 flex flex-col justify-between gap-6 border-b border-[var(--border)] pb-8 md:flex-row md:items-end">
            <div>
              <span className="font-mono text-xs font-semibold tracking-widest text-[var(--blue)] uppercase">
                {project.category} · {project.snapshot.platform}
              </span>
              <h1 className="mt-2 font-sans text-5xl font-black tracking-tight text-[var(--text)] sm:text-7xl md:text-8xl">
                {project.title}
              </h1>
              <p className="mt-3 font-mono text-sm tracking-wide text-[var(--muted)]">
                {project.tagline}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 font-mono text-xs">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[var(--text)] transition-colors hover:text-[var(--blue)]"
                >
                  PLAY GAME ↗
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--muted)] transition-colors hover:text-[var(--text)]"
                >
                  SOURCE CODE ↗
                </a>
              )}
            </div>
          </div>

          {/* Large Visual Proof / Interactive Simulation */}
          <div className="mb-14">
            <ProjectHeroMedia project={project} />
          </div>

          {/* Editorial Description & Highlights */}
          <div className="mb-20 grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="font-mono text-xs font-semibold tracking-widest text-[var(--muted)] uppercase">
                Architecture & Engineering
              </h2>
              <p className="mt-4 font-sans text-lg leading-relaxed text-[var(--text)] sm:text-xl">
                {project.overview}
              </p>

              <div className="mt-10 space-y-4">
                <span className="font-mono text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">
                  Technical Specifications
                </span>
                <ul className="space-y-3 font-mono text-xs text-[var(--muted)] sm:text-sm">
                  {project.whatIBuilt.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[var(--blue)]">/</span>
                      <span className="leading-relaxed text-[var(--text)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8 lg:col-span-5 lg:border-l lg:border-[var(--border)] lg:pl-10">
              <div>
                <span className="font-mono text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">
                  Technology Stack
                </span>
                <p className="mt-2 font-mono text-sm font-bold text-[var(--text)]">
                  {project.snapshot.tech}
                </p>
              </div>

              <div>
                <span className="font-mono text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">
                  Platform Verification
                </span>
                <p className="mt-2 font-mono text-sm text-[var(--text)]">
                  {project.snapshot.platform} · {project.status}
                </p>
              </div>

              {project.challenge && (
                <div className="border-t border-[var(--border)] pt-6">
                  <span className="font-mono text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">
                    Core Technical Challenge
                  </span>
                  <h3 className="mt-2 font-mono text-xs font-bold text-[var(--text)]">
                    {project.challenge.title}
                  </h3>
                  <p className="mt-2 font-sans text-xs leading-relaxed text-[var(--muted)]">
                    {project.challenge.description}
                  </p>
                  <p className="mt-3 font-mono text-xs text-[var(--blue)]">
                    → {project.decision.title}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Interactive Arcade Playable Simulation for TypeRush */}
          {project.slug === 'typerush' && (
            <div className="mb-20">
              <TypeRushShowcase />
            </div>
          )}

          {/* Next Project Nav */}
          <div className="flex items-center justify-between border-t border-[var(--border)] pt-8 font-mono text-xs">
            <Link href="/#games" className="text-[var(--muted)] hover:text-[var(--text)]">
              ← ALL PROJECTS
            </Link>
            <Link
              href={`/games/${nextProject.slug}`}
              className="flex items-center gap-2 font-bold text-[var(--text)] hover:text-[var(--blue)]"
            >
              <span>NEXT PROJECT: {nextProject.title}</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
