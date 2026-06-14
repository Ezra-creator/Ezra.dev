import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ezra Appiah Gyamerah — Software Engineer',
  description:
    'I build Mobile applications and web apps',
  openGraph: {
    title: 'Ezra Appiah Gyamerah — Software Engineer',
    description: 'I build Mobile applications and web apps',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
