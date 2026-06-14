'use client';

const PROJECTS = [
  {
    name:    'Dev Portfolio',
    tagline: 'Personal portfolio website',
    desc:    'My personal developer portfolio showcasing my projects, skills, and experience. Built with a dark techy aesthetic featuring animated code tokens, a terminal-style about card, and smooth scroll navigation.',
    stack:   ['Next.js', 'TypeScript', 'TailwindCSS'],
    accent:  '#2DD4BF',
    glyph:   '◇',
    github:  'https://github.com/Ezra-creator',
    demo:    'https://ezra-dev-psi.vercel.app',
  },
  {
    name:    'Soul Restaurant',
    tagline: 'Restaurant website',
    desc:    'A beautiful and responsive restaurant website to showcase menus, reservations, and location details.',
    stack:   ['HTML', 'CSS', 'JavaScript', 'Python'],
    accent:  '#2DD4BF',
    glyph:   '◈',
    github:  'https://github.com/Ezra-creator/Soul-Restaurant',
    demo:    'https://soul-restaurant.vercel.app',
  },
  {
    name:    'Fruitelli',
    tagline: 'Fruit e-commerce store',
    desc:    'An online store for buying fresh fruits, featuring a modern shopping cart and checkout experience.',
    stack:   ['Next.js', 'TypeScript', 'TailwindCSS'],
    accent:  '#8B5CF6',
    glyph:   '⬡',
    github:  'https://github.com/Ezra-creator/fruitelli',
    demo:    'https://fruitelli.vercel.app',
  },
  {
    name:    'Creator Ledger',
    tagline: 'Financial tracker for creators',
    desc:    'A financial tracking application designed for creators to monitor their income, expenses, and analytics.',
    stack:   ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL'],
    accent:  '#F59E0B',
    glyph:   '⟁',
    github:  'https://github.com/Ezra-creator/creator-ledger',
    demo:    'https://creator-ledger-eight.vercel.app',
  },
  {
    name:    'Fieldos Survey',
    tagline: 'Survey tool for field contractors',
    desc:    'A data collection tool designed to gather on-site information, laying the groundwork for specialized software for construction workers.',
    stack:   ['HTML', 'JavaScript', 'Supabase'],
    accent:  '#10B981',
    glyph:   '≋',
    github:  'https://github.com/Ezra-creator/fieldos-survey',
    demo:    'https://fieldos-survey.vercel.app',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6" style={{ background: '#0D1120' }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <p className="section-label">Projects</p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <h2
            className="font-display font-bold text-4xl md:text-5xl leading-tight"
            style={{ color: '#E2E8F0' }}
          >
            Things I&apos;ve
            <br />
            shipped.
          </h2>
          <a
            href="https://github.com/Ezra-creator"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-mono flex items-center gap-2 transition-colors"
            style={{ color: '#475569' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#2DD4BF')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#475569')}
          >
            all repos ↗
          </a>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {PROJECTS.map((p) => (
            <div key={p.name} className="project-card flex flex-col">
              {/* Top band */}
              <div
                className="h-1 w-full"
                style={{ background: p.accent }}
              />

              <div className="p-6 flex flex-col flex-1">
                {/* Glyph + name */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="font-mono text-2xl"
                    style={{ color: p.accent }}
                  >
                    {p.glyph}
                  </span>
                  <div>
                    <h3
                      className="font-display font-semibold text-base leading-tight"
                      style={{ color: '#E2E8F0' }}
                    >
                      {p.name}
                    </h3>
                    <p className="font-mono text-xs" style={{ color: '#475569' }}>
                      {p.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: '#64748B' }}>
                  {p.desc}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.stack.map((t) => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 border-t pt-4" style={{ borderColor: '#1C2337' }}>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs flex items-center gap-1.5 transition-colors"
                    style={{ color: '#475569' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#E2E8F0')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#475569')}
                  >
                    <GitHubIcon /> GitHub
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs flex items-center gap-1.5 transition-colors"
                      style={{ color: '#475569' }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#2DD4BF')}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#475569')}
                    >
                      Live ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}
