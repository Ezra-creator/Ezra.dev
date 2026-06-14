'use client';

import { useState } from 'react';

const SOCIALS = [
  {
    label: 'GitHub',
    href:  'https://github.com/Ezra-creator',
    icon:  (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href:  'https://www.linkedin.com/in/ezra-gyamerah-98091a305',
    icon:  (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href:  'mailto:ezragyamerah17@gmail.com',
    icon:  (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Portfolio',
    href:  'https://ezra-dev-psi.vercel.app',
    icon:  (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Wire up your preferred form handler (Formspree, Resend, etc.)
    setSent(true);
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="section-label">Contact</p>
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <h2
              className="font-display font-bold text-4xl md:text-5xl leading-tight mb-5"
              style={{ color: '#E2E8F0' }}
            >
              Let&apos;s build
              <br />
              <span style={{ color: '#8B5CF6' }}>something.</span>
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#64748B' }}>
              Feel free to reach out if you have a project in mind, need technical consultation, or just want to connect. I welcome all kinds of messages and look forward to collaborating!
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color: '#E2E8F0' }}>
              📱 WhatsApp / Phone: 0537372876
              <br />
              ✈️  Telegram: Hughes
            </p>

            {/* Socials */}
            <div className="space-y-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group transition-colors duration-200"
                  style={{ color: '#475569' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#E2E8F0')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#475569')}
                >
                  <span
                    className="flex items-center justify-center w-8 h-8 rounded transition-all duration-200"
                    style={{ border: '1px solid #1C2337' }}
                  >
                    {s.icon}
                  </span>
                  <span className="font-mono text-xs">{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div
            className="p-7 rounded-xl"
            style={{ background: '#0D1120', border: '1px solid #1C2337' }}
          >
            {sent ? (
              <div className="text-center py-10">
                <span
                  className="font-mono text-3xl block mb-4"
                  style={{ color: '#2DD4BF' }}
                >
                  ✓
                </span>
                <p className="font-display font-semibold text-lg mb-2" style={{ color: '#E2E8F0' }}>
                  Message sent!
                </p>
                <p className="text-sm" style={{ color: '#475569' }}>
                  I&apos;ll get back to you within a day or two.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-xs block mb-1.5" style={{ color: '#475569' }}>
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Smith"
                      className="field"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs block mb-1.5" style={{ color: '#475569' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@co.com"
                      className="field"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-mono text-xs block mb-1.5" style={{ color: '#475569' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="What's this about?"
                    className="field"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs block mb-1.5" style={{ color: '#475569' }}>
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about the project..."
                    className="field resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  Send Message
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1.5 7h11M7 1.5L12.5 7 7 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
