'use client';

import { useEffect, useState } from 'react';

const links = [
  { label: 'About',    href: '#about'    },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Blog',     href: '#blog'     },
  { label: 'Contact',  href: '#contact'  },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(8,11,20,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #1C2337' : '1px solid transparent',
      }}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="font-mono text-sm font-medium"
          style={{ color: '#2DD4BF' }}
        >
          <span style={{ color: '#8B5CF6' }}>{'>'}</span> ezra.dev
        </a>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: '#64748B' }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = '#E2E8F0')
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = '#64748B')
                }
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 font-mono text-xs px-4 py-2 rounded transition-all duration-200"
          style={{
            border: '1px solid #1C2337',
            color: '#2DD4BF',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = '#2DD4BF55';
            (e.currentTarget as HTMLElement).style.background = '#2DD4BF0A';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = '#1C2337';
            (e.currentTarget as HTMLElement).style.background = 'transparent';
          }}
        >
          resume.pdf
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </nav>
    </header>
  );
}
