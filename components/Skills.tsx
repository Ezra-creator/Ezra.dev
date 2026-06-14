const SKILLS = [
  {
    category: 'Languages',
    icon: '{}',
    items: ['JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS', 'SQL'],
  },
  {
    category: 'Frontend',
    icon: '◻',
    items: ['React', 'Next.js', 'TailwindCSS', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    icon: '⊗',
    items: ['Node.js', 'Supabase', 'Firebase', 'Express'],
  },
  {
    category: 'Infrastructure',
    icon: '⬡',
    items: ['Vercel', 'Docker', 'GitHub Actions', 'Netlify'],
  },
  {
    category: 'Data',
    icon: '≋',
    items: ['PostgreSQL', 'Supabase', 'Firebase'],
  },
  {
    category: 'Tooling',
    icon: '⚙',
    items: ['Git', 'VS Code', 'Figma', 'Postman'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="section-label">Skills</p>
        <h2
          className="font-display font-bold text-4xl md:text-5xl leading-tight mb-14"
          style={{ color: '#E2E8F0' }}
        >
          Stack &amp;
          <br />
          <span style={{ color: '#2DD4BF' }}>expertise.</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((group) => (
            <div
              key={group.category}
              className="gradient-border p-5"
              style={{ background: '#0D1120' }}
            >
              {/* Category header */}
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="font-mono text-base"
                  style={{ color: '#2DD4BF' }}
                >
                  {group.icon}
                </span>
                <span
                  className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: '#475569' }}
                >
                  {group.category}
                </span>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <span key={skill} className="tech-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency bar section */}
        <div className="mt-16 pt-12" style={{ borderTop: '1px solid #1C2337' }}>
          <p
            className="font-mono text-xs tracking-widest uppercase mb-8"
            style={{ color: '#2DD4BF' }}
          >
            // Proficiency highlights
          </p>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-5">
            {[
              { label: 'TypeScript / React',          level: 90 },
              { label: 'Mobile App Development',      level: 85 },
              { label: 'Frontend / UI Design',        level: 88 },
              { label: 'Backend / Databases',         level: 75 },
            ].map(({ label, level }) => (
              <div key={label}>
                <div className="flex justify-between mb-1.5">
                  <span className="font-mono text-xs" style={{ color: '#64748B' }}>
                    {label}
                  </span>
                  <span className="font-mono text-xs" style={{ color: '#2DD4BF' }}>
                    {level}%
                  </span>
                </div>
                <div
                  className="h-px w-full rounded"
                  style={{ background: '#1C2337' }}
                >
                  <div
                    className="h-px rounded transition-all"
                    style={{
                      width: `${level}%`,
                      background:
                        'linear-gradient(90deg, #2DD4BF, #8B5CF6)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
