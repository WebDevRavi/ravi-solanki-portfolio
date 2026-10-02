import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ravi Solanki — AI/ML · Game Development',
  description:
    'Portfolio and technical projects by Ravi Solanki — Game Development, AI/ML, and Creative 3D.',
  keywords: [
    'Ravi Solanki',
    'Game Development',
    'AI/ML',
    'Three.js',
    'WebGL',
    'Creative Developer',
    'CSE AIML',
    'Bhopal',
  ],
  authors: [{ name: 'Ravi Solanki' }],
  metadataBase: new URL('https://ravisolanki.dev'),
  openGraph: {
    title: 'Ravi Solanki — AI/ML · Game Development',
    description:
      'Portfolio and technical projects by Ravi Solanki — Game Development, AI/ML, and Creative 3D.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ravi Solanki — AI/ML · Game Development',
    description:
      'Portfolio and technical projects by Ravi Solanki — Game Development, AI/ML, and Creative 3D.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="h-full antialiased" suppressHydrationWarning>
      <body
        className="min-h-full bg-[#08070d] text-[#f8fafc] selection:bg-[#3b82f6] selection:text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
