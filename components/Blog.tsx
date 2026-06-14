'use client';

const POSTS = [
  {
    date:    'Coming soon',
    title:   'Post coming soon',
    excerpt: 'Check back later',
    slug:    '1',
    mins:    0,
    tags:    [],
  },
  {
    date:    'Coming soon',
    title:   'Post coming soon',
    excerpt: 'Check back later',
    slug:    '2',
    mins:    0,
    tags:    [],
  },
  {
    date:    'Coming soon',
    title:   'Post coming soon',
    excerpt: 'Check back later',
    slug:    '3',
    mins:    0,
    tags:    [],
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-32 px-6" style={{ background: '#0D1120' }}>
      <div className="max-w-5xl mx-auto">
        <p className="section-label">Blog</p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <h2
            className="font-display font-bold text-4xl md:text-5xl leading-tight"
            style={{ color: '#E2E8F0' }}
          >
            Writing.
          </h2>
          <a
            href="/blog"
            className="font-mono text-xs flex items-center gap-2 transition-colors"
            style={{ color: '#475569' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#2DD4BF')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#475569')}
          >
            all posts ↗
          </a>
        </div>

        {/* Post list */}
        <div>
          {POSTS.map((post, i) => (
            <a
              key={post.slug}
              href={`#`}
              className="blog-card flex flex-col md:flex-row md:items-start gap-4 md:gap-10 group block"
              style={{
                borderTop: i === 0 ? '1px solid #1C2337' : undefined,
                opacity: 0.5,
              }}
            >
              {/* Date + time */}
              <div className="shrink-0 md:w-28">
                <p className="font-mono text-xs" style={{ color: '#2DD4BF' }}>
                  {post.date}
                </p>
                <p className="font-mono text-xs mt-1" style={{ color: '#1C2337' }}>
                  {post.mins} min read
                </p>
              </div>

              {/* Body */}
              <div className="flex-1">
                <h3
                  className="font-display font-semibold text-lg leading-snug mb-2 transition-colors duration-200"
                  style={{ color: '#94A3B8' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#E2E8F0')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#94A3B8')}
                >
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed mb-3" style={{ color: '#475569' }}>
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((t) => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div
                className="shrink-0 hidden md:flex items-start pt-1 transition-all duration-200"
                style={{ color: '#1C2337' }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M4 14L14 4M14 4H6M14 4V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
