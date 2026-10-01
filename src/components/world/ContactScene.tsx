'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PROFILE_DATA } from '@/data/profile';

export const ContactScene: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ravisolanki969197@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    const mailto = `mailto:ravisolanki969197@gmail.com?subject=Project Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nSender Email: ' + formData.email)}`;
    window.location.href = mailto;
    setFormSent(true);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto px-4 py-16 flex flex-col items-center select-none text-center">
      {/* Background Atmosphere */}
      <div
        className="absolute inset-0 rounded-3xl blur-[70px] opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #00d4ff 0%, #a855f7 40%, transparent 75%)',
        }}
      />

      {/* 1. Floating Pixel Mail Logo Badge */}
      <div className="relative mb-3 flex items-center justify-center">
        <div
          className="relative w-16 h-16 md:w-20 md:h-20 animate-node-float cursor-pointer select-none"
          style={{ '--float-duration': '4s' } as React.CSSProperties}
        >
          <div
            className="absolute -inset-2 rounded-full blur-[14px] pointer-events-none"
            style={{
              background: 'radial-gradient(circle, #00d4ff 0%, #38bdf8 50%, transparent 75%)',
              opacity: 0.5,
            }}
          />
          <Image
            src="/assets/nodes/node-contact.png"
            alt="Mail / Transmission"
            width={80}
            height={80}
            className="w-full h-full object-contain relative z-10 filter drop-shadow-[0_4px_10px_rgba(0,212,255,0.35)]"
            style={{ imageRendering: 'pixelated' }}
            unoptimized
          />
        </div>
      </div>

      {/* 2. Heading & Subtitle */}
      <h2 className="font-pixel text-lg md:text-2xl text-white tracking-wider mb-1.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
        LET’S MAKE SOMETHING.
      </h2>

      <p className="font-mono text-xs text-[#00d4ff] mb-6 tracking-wider">
        SEND A MESSAGE · COLLABORATE · GET IN TOUCH
      </p>

      {/* 3. Verified Social Links */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8 w-full max-w-md">
        {PROFILE_DATA.socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-btn text-[8.5px] bg-[#080618] hover:bg-[#00d4ff] hover:text-black border border-[#00d4ff]/40 shadow-[0_0_8px_rgba(0,212,255,0.15)] transition-all hover:scale-105"
          >
            {social.name}
          </a>
        ))}
        <button
          onClick={handleCopyEmail}
          className="pixel-btn text-[8.5px] bg-[#080618] hover:bg-[#fbbf24] hover:text-black border border-[#fbbf24]/50 text-[#fbbf24] transition-all hover:scale-105"
        >
          {copied ? '✓ COPIED' : 'COPY EMAIL'}
        </button>
      </div>

      {/* 4. Transmission Form */}
      <div className="w-full max-w-md p-5 rounded-xl bg-[#070518]/95 border border-[#00d4ff]/30 shadow-[0_0_24px_rgba(0,0,0,0.85)] text-left">
        <div className="flex items-center justify-between pb-2.5 mb-3.5 border-b border-white/10">
          <span className="font-pixel text-[8px] text-[#00d4ff] tracking-wider">
            DIRECT MESSAGE TERMINAL
          </span>
          <span className="font-mono text-[8px] text-zinc-400">
            ravisolanki969197@gmail.com
          </span>
        </div>

        {formSent ? (
          <div className="p-4 bg-emerald-950/40 border border-emerald-500/50 rounded text-center space-y-1">
            <p className="font-pixel text-[10px] text-emerald-400">
              MESSAGE DISPATCHED!
            </p>
            <p className="font-sans text-zinc-300 text-xs">
              Opening your default email app to transmit directly to Ravi.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSendMessage} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="contact-name" className="block font-pixel text-[7.5px] text-zinc-400 mb-1">
                  NAME / HANDLE
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name..."
                  className="w-full px-3 py-2 bg-[#04020c] border border-white/15 rounded text-xs text-white font-sans focus:border-[#00d4ff] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block font-pixel text-[7.5px] text-zinc-400 mb-1">
                  EMAIL
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@domain.com"
                  className="w-full px-3 py-2 bg-[#04020c] border border-white/15 rounded text-xs text-white font-sans focus:border-[#00d4ff] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="block font-pixel text-[7.5px] text-zinc-400 mb-1">
                MESSAGE
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Let's build something together..."
                className="w-full px-3 py-2 bg-[#04020c] border border-white/15 rounded text-xs text-white font-sans focus:border-[#00d4ff] focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full pixel-btn bg-[#070518] border border-[#00d4ff] text-white hover:bg-[#00d4ff] hover:text-black font-pixel text-[9px] py-2.5 mt-2 shadow-[0_0_12px_rgba(0,212,255,0.25)]"
            >
              TRANSMIT TO RAVI
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
