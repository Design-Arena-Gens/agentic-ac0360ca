'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useMemo } from 'react';

const heroImageSrc =
  'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=1600&q=80';

const lightingStrips = Array.from({ length: 14 }, (_, index) => index);

export function PresenterShowcase() {
  const floatingMetrics = useMemo(
    () => [
      { label: 'Studio Ready', value: '4K HDR' },
      { label: 'Lens', value: 'Canon EF 70-200mm f/2.8L' },
      { label: 'Camera', value: 'EOS-1D X Mark III' }
    ],
    []
  );

  return (
    <section className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden px-6 py-16 sm:px-12 lg:px-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(31,111,235,0.28),_transparent_55%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.1fr,0.9fr]">
        <article className="space-y-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium tracking-wide text-white/80 shadow-spotlight backdrop-blur-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-studioHighlight" />
              Ultra realistic studio anchor capture
            </div>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Professional News Presenter in Cinematic Studio Lighting
            </h1>
            <p className="text-balance text-lg leading-relaxed text-white/70">
              Medium-shot framing with impeccably sharp focus, lifelike skin texture, and balanced symmetry. The
              lighting grid sculpts true-to-life contours, delivering a broadcast-ready frame fit for YouTube studios.
            </p>
          </div>
          <motion.ul
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {floatingMetrics.map((metric) => (
              <li
                key={metric.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center shadow-lg shadow-blue-900/40 backdrop-blur-sm"
              >
                <p className="text-sm uppercase tracking-wide text-white/50">{metric.label}</p>
                <p className="mt-2 text-2xl font-semibold text-white">{metric.value}</p>
              </li>
            ))}
          </motion.ul>
        </article>

        <div className="relative">
          <div className="absolute -inset-x-8 -inset-y-10 rounded-[2.5rem] bg-gradient-to-br from-white/15 via-white/5 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 shadow-[0_35px_80px_-30px_rgba(7,35,94,0.9)] backdrop-blur-md">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30" />
              <div className="absolute inset-0">
                {lightingStrips.map((strip) => (
                  <span
                    key={strip}
                    className="absolute h-full w-[2px] bg-gradient-to-b from-white/5 via-white/15 to-transparent"
                    style={{ left: `${6 + strip * 6}%`, opacity: 0.35 }}
                  />
                ))}
              </div>
            </div>
            <Image
              src={heroImageSrc}
              alt="Ultra realistic male news presenter in a modern studio setting"
              width={1600}
              height={2000}
              priority
              className="relative aspect-[4/5] w-full object-cover object-center"
            />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-5 py-4 text-white/90 backdrop-blur">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Studio Lighting Setup</p>
                <p className="text-sm font-medium">Three-point cinematic rig with key-fill ratio 3:1</p>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Focal Plane</p>
                <p className="text-sm font-semibold">Flawless facial symmetry</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
