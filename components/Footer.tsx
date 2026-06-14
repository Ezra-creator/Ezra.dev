export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="py-8 px-6 text-center"
      style={{ borderTop: '1px solid #1C2337' }}
    >
      <p className="font-mono text-xs" style={{ color: '#1C2337' }}>
        <span style={{ color: '#2DD4BF22' }}>// </span>
        Designed &amp; built by{' '}
        <span style={{ color: '#2DD4BF44' }}>Ezra Appiah Gyamerah</span>
        {' · '}
        <span style={{ color: '#1C2337' }}>{year}</span>
        {' · '}
        <span style={{ color: '#1C233799' }}>Next.js + Tailwind</span>
      </p>
    </footer>
  );
}
