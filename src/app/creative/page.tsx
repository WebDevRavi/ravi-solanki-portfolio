import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Blue3DSection } from '@/components/sections/Blue3DSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blue3D · Visual Archive — Ravi Solanki',
  description:
    '3D modeling, spatial animation, VFX, cinematic films, and photography by Ravi Solanki.',
};

export default function CreativePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0a0b] text-[var(--text)]">
      <Header />
      <main className="flex-1">
        <Blue3DSection />
      </main>
      <Footer />
    </div>
  );
}
