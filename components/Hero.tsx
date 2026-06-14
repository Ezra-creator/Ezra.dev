'use client';

import { useEffect, useRef } from 'react';

const CODE_TOKENS = [
  'const', 'async', 'await', 'export default', '=>', '{}', '[]',
  'interface', 'type', 'fn()', 'import', 'return', 'class',
  'git push', 'docker run', 'kubectl', 'SELECT *', 'JOIN',
  '0xFF', 'null', 'Promise<T>', '...spread', 'O(log n)',
  'useEffect', 'useState', 'go func()', 'cargo build', 'npm run dev',
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    CODE_TOKENS.forEach((token, i) => {
      const span = document.createElement('span');
      span.textContent = token;
      span.className = 'float-token';
      const duration = 18 + (i % 7) * 4;
      const size = 0.55 + (i % 5) * 0.18;
      const opacity = 0.028 + (i % 4) * 0.008;
      span.style.cssText = `
        left: ${(i * 11.3 + 3) % 96}%;
        bottom: -3%;
        font-size: ${size}rem;
        opacity: ${opacity};
        animation-duration: ${duration}s;
        animation-delay: -${(i * 2.3) % duration}s;
      `;
      container.appendChild(span);
    });

    return () => {
      while (container.firstChild) container.removeChild(container.firstChild);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden dot-grid"
    >
      {/* Floating tokens */}
      <div ref={containerRef} className="absolute inset-0 overflow-hidden" />

      {/* Scanline */}
      <div className="scanline" />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, #080B14 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Eyebrow */}
        <p className="font-mono text-xs tracking-widest uppercase mb-6 flex items-center justify-center gap-3"
          style={{ color: '#2DD4BF' }}>
          <span style={{ color: '#8B5CF6' }}>{'>'}_</span>
          Software Developer
        </p>

        {/* Name */}
        <h1
          className="font-display font-bold leading-[1.04] mb-6 tracking-tight"
          style={{ fontSize: 'clamp(3rem, 9vw, 6.5rem)', color: '#E2E8F0' }}
        >
          Ezra{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #2DD4BF 0%, #8B5CF6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Gyamerah
          </span>
          .
        </h1>

        {/* Tagline */}
        <p
          className="text-lg leading-relaxed max-w-xl mx-auto mb-10"
          style={{ color: '#64748B' }}
        >
          I build{' '}
          <span style={{ color: '#94A3B8' }}>Mobile applications</span>,
          Web applications.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#projects" className="btn-primary">
            View Projects
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#contact" className="btn-ghost">
            Get in Touch
          </a>
        </div>

        {/* Scroll hint */}
        <div className="mt-20 flex flex-col items-center gap-2" style={{ color: '#1C2337' }}>
          <span className="font-mono text-xs tracking-widest" style={{ color: '#2DD4BF22' }}>scroll</span>
          <div
            className="w-px h-10"
            style={{
              background: 'linear-gradient(to bottom, #2DD4BF44, transparent)',
            }}
          />
        </div>
      </div>
    </section>
  );
}
