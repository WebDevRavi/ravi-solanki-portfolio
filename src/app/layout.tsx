import type { Metadata } from 'next';
import './globals.css';
import { CustomPixelCursor } from '@/components/world/CustomPixelCursor';

export const metadata: Metadata = {
  title: 'Blue 3D — Ravi Solanki',
  description:
    'Creative and technical experiments by Ravi Solanki — exploring 3D, games, film, photography, code, and AI/ML.',
  keywords: [
    'Ravi Solanki',
    'Blue 3D',
    'Creative Developer',
    'Blender 3D',
    'Game Development',
    'Pixel Art World',
    'CSE AIML',
  ],
  authors: [{ name: 'Ravi Solanki' }],
  metadataBase: new URL('https://ravisolanki.dev'),
  openGraph: {
    title: 'Blue 3D — Ravi Solanki',
    description:
      'Creative and technical experiments by Ravi Solanki — exploring 3D, games, film, photography, code, and AI/ML.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blue 3D — Ravi Solanki',
    description:
      'Creative and technical experiments by Ravi Solanki — exploring 3D, games, film, photography, code, and AI/ML.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="h-full antialiased">
      <body className="min-h-full bg-[#080614] text-[#f8fafc] selection:bg-[#00d4ff] selection:text-[#080614]">
        <CustomPixelCursor />
        {children}
      </body>
    </html>
  );
}
