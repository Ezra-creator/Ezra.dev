export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Text column */}
        <div>
          <p className="section-label">About me</p>
          <h2
            className="font-display font-bold text-4xl md:text-5xl leading-tight mb-6"
            style={{ color: '#E2E8F0' }}
          >
            Code that
            <br />
            <span style={{ color: '#2DD4BF' }}>scales.</span> Systems
            <br />
            that last.
          </h2>
          <div className="space-y-4 text-sm leading-relaxed" style={{ color: '#64748B' }}>
            <p>
              I am a software engineer, I build distributed systems, developer tooling, and the occasional interface that makes engineers lives quietly better.
            </p>
            <p>
              I am focused on building mobile applications and web applications.
            </p>
            <p>
              I love to play the piano.
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <a href="#projects" className="btn-primary" style={{ fontSize: '0.8rem', padding: '9px 20px' }}>
              See my work
            </a>
            <a
              href="https://github.com/Ezra-creator"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{ fontSize: '0.8rem', padding: '9px 20px' }}
            >
              GitHub ↗
            </a>
          </div>
        </div>

        {/* Terminal card */}
        <div className="terminal">
          <div className="terminal-bar">
            <span className="terminal-dot" style={{ background: '#FF5F57' }} />
            <span className="terminal-dot" style={{ background: '#FEBC2E' }} />
            <span className="terminal-dot" style={{ background: '#28C840' }} />
            <span
              className="ml-4 font-mono text-xs"
              style={{ color: '#475569' }}
            >
              ~/ezra — whoami
            </span>
          </div>
          <div className="terminal-body">
            <Line prompt="$" cmd="whoami" />
            <Line value="ezra_gyamerah" color="#2DD4BF" />
            <br />
            <Line prompt="$" cmd="cat about.json" />
            <Line value="{" />
            <Line indent value={`"role":      "Software Engineer",`} />
            <Line indent value={`"location":  "Accra, Ghana",`} />
            <Line indent value={`"focus":     ["Cross-platform mobile application development", "Web Applications"],`} />
            <Line indent value={`"available": true,`} />
            <Line indent value={`"coffee":    "black coffee"`} />
            <Line value="}" />
            <br />
            <Line prompt="$" cmd="echo $PASSIONS" />
            <Line value="mobile apps, web development, piano" color="#94A3B8" />
            <br />
            <span style={{ color: '#475569' }}>$ </span>
            <span className="cursor" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Line({
  prompt,
  cmd,
  value,
  color,
  indent,
}: {
  prompt?: string;
  cmd?: string;
  value?: string;
  color?: string;
  indent?: boolean;
}) {
  return (
    <div style={{ paddingLeft: indent ? '1rem' : undefined }}>
      {prompt && <span style={{ color: '#2DD4BF' }}>{prompt} </span>}
      {cmd    && <span style={{ color: '#E2E8F0' }}>{cmd}</span>}
      {value  && <span style={{ color: color ?? '#475569' }}>{value}</span>}
    </div>
  );
}
