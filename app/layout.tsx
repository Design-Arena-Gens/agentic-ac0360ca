import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';

const plexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '700'] });

export const metadata: Metadata = {
  title: 'Studio Anchor Showcase',
  description: 'Ultra realistic male news presenter with cinematic studio lighting and 4K fidelity.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${plexSans.className} bg-studio-grid`}>{children}</body>
    </html>
  );
}
