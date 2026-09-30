'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CREATIVE_BLUE3D, InstagramChannel } from '@/data/projects';

export function InstagramLivePlayer() {
  const [selectedChannel, setSelectedChannel] = useState<InstagramChannel>(
    CREATIVE_BLUE3D.instagramChannels[0]
  );
  const [customReelUrl, setCustomReelUrl] = useState('');
  const [activeEmbedUrl, setActiveEmbedUrl] = useState<string | null>(null);

  // Helper to extract reel or post ID from an Instagram URL
  const extractInstagramEmbed = (url: string) => {
    const trimmed = url.trim();
    if (!trimmed) return null;
    // Match /reel/CODE or /p/CODE
    const match = trimmed.match(/instagram\.com\/(?:reel|p)\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return `https://www.instagram.com/reel/${match[1]}/embed/`;
    }
    return null;
  };

  const handleLoadCustomReel = (e: React.FormEvent) => {
    e.preventDefault();
    const embed = extractInstagramEmbed(customReelUrl);
    if (embed) {
      setActiveEmbedUrl(embed);
    }
  };

  return (
    <div className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
      {/* Header Banner */}
      <div className="flex flex-col justify-between gap-4 border-b border-[var(--border)] pb-6 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[var(--yellow)]" />
            <span className="font-mono text-xs font-bold tracking-widest text-[var(--yellow)]">
              LIVE INSTAGRAM INTEGRATION
            </span>
          </div>
          <h3 className="mt-1 font-sans text-2xl font-bold text-[var(--text)]">
            Connect & Stream from Instagram Channels
          </h3>
          <p className="mt-1 font-mono text-xs text-[var(--muted)]">
            Stream live reels, view original posts, or browse direct feeds from both verified handles.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {CREATIVE_BLUE3D.instagramChannels.map((channel) => (
            <button
              key={channel.handle}
              onClick={() => {
                setSelectedChannel(channel);
                setActiveEmbedUrl(null);
              }}
              className={`flex items-center gap-2 rounded-lg border px-3.5 py-2 font-mono text-xs transition-all ${
                selectedChannel.handle === channel.handle
                  ? 'border-[var(--yellow)] bg-[var(--surface-elevated)] text-[var(--yellow)] font-bold'
                  : 'border-[var(--border)] bg-[#0B0B0C] text-[var(--muted)] hover:border-[var(--border-hover)] hover:text-[var(--text)]'
              }`}
            >
              <span>{channel.handle}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Channel Showcase */}
      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Channel Details Card */}
        <div className="flex flex-col justify-between rounded-xl border border-[var(--border)] bg-[#0B0B0C] p-6 lg:col-span-5">
          <div>
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-[var(--yellow)]">
                <Image
                  src={
                    selectedChannel.handle === '@blue3d_'
                      ? '/brand/blue-logo.jpg'
                      : '/brand/character.png'
                  }
                  alt={selectedChannel.name}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-sans text-lg font-bold text-[var(--text)]">
                    {selectedChannel.name}
                  </h4>
                  <span className="text-xs text-[var(--yellow)]" title="Verified Creator">
                    ✓
                  </span>
                </div>
                <span className="font-mono text-xs font-semibold text-[var(--yellow)]">
                  {selectedChannel.handle}
                </span>
              </div>
            </div>

            <p className="mt-4 font-mono text-xs leading-relaxed text-[var(--muted)]">
              {selectedChannel.bio}
            </p>

            <div className="mt-6 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2">
                <span className="text-[var(--muted-dark)]">Creative Focus</span>
                <span className="text-[var(--text)]">{selectedChannel.focus}</span>
              </div>
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2">
                <span className="text-[var(--muted-dark)]">Catalog Status</span>
                <span className="text-[var(--yellow)]">{selectedChannel.badge}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[var(--muted-dark)]">Platform</span>
                <span className="text-[var(--text)]">Instagram Verified Feed</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={selectedChannel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-[var(--yellow)] px-4 py-2.5 font-mono text-xs font-bold text-black transition-all hover:bg-[var(--accent-hover)]"
            >
              <span>OPEN {selectedChannel.handle} ON INSTAGRAM</span>
              <span>↗</span>
            </a>
            <a
              href={`${selectedChannel.url}reels/`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-2 font-mono text-xs text-[var(--text)] transition-all hover:border-[var(--yellow)] hover:text-[var(--yellow)]"
            >
              <span>WATCH ALL LIVE REELS</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Live Stream / Embed Player */}
        <div className="flex flex-col rounded-xl border border-[var(--border)] bg-[#0B0B0C] p-6 lg:col-span-7">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono text-xs font-semibold text-[var(--text)]">
              LIVE EMBED PLAYER / REEL TESTER
            </span>
            <span className="font-mono text-[10px] text-[var(--muted-dark)]">
              RESPONSIVE REEL FRAMEWORK
            </span>
          </div>

          {activeEmbedUrl ? (
            <div className="relative mx-auto aspect-[9/16] w-full max-w-[360px] overflow-hidden rounded-xl border border-[var(--border)] bg-black shadow-2xl">
              <iframe
                src={activeEmbedUrl}
                className="h-full w-full border-0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Live Instagram Reel"
              />
              <button
                onClick={() => setActiveEmbedUrl(null)}
                className="absolute top-2 right-2 rounded-full bg-black/80 px-2 py-1 font-mono text-[10px] text-[var(--text)] hover:text-[var(--yellow)]"
              >
                CLOSE EMBED ✕
              </button>
            </div>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center rounded-xl border border-dashed border-[var(--border)] p-8 text-center">
              <div className="mb-3 rounded-full border border-[var(--border)] bg-[var(--surface)] p-3 text-2xl">
                🎬
              </div>
              <h5 className="font-sans text-base font-bold text-[var(--text)]">
                Stream Direct from {selectedChannel.handle}
              </h5>
              <p className="mt-1 max-w-md font-mono text-xs text-[var(--muted)]">
                You can play native master clips with high definition in the player above, or paste any reel URL from {selectedChannel.handle} to embed the live post here.
              </p>

              <form onSubmit={handleLoadCustomReel} className="mt-6 flex w-full max-w-md gap-2">
                <input
                  type="url"
                  placeholder="https://www.instagram.com/reel/..."
                  value={customReelUrl}
                  onChange={(e) => setCustomReelUrl(e.target.value)}
                  className="flex-1 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 font-mono text-xs text-[var(--text)] placeholder:text-[var(--muted-dark)] focus:border-[var(--yellow)] focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={!customReelUrl.trim()}
                  className="rounded-lg bg-[var(--yellow)] px-4 py-2 font-mono text-xs font-bold text-black transition-all hover:bg-[var(--accent-hover)] disabled:opacity-40"
                >
                  LOAD REEL
                </button>
              </form>

              <div className="mt-4 flex items-center gap-2 font-mono text-[11px] text-[var(--muted)]">
                <span>Or visit:</span>
                <a
                  href={selectedChannel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--yellow)] hover:underline"
                >
                  {selectedChannel.url}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
