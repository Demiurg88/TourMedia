"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { artists } from "@/lib/data";

export default function ArtistsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Page Header ── */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-primary/[0.08] border border-accent-primary/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
            <span className="text-xs font-medium text-accent-primary tracking-wide uppercase">
              Лейбл &amp; Букинг
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-text-primary">Наши </span>
            <span className="gradient-text">артисты</span>
          </h1>
          <p className="mt-6 text-lg text-text-secondary leading-relaxed">
            Ростер TourMedia — тщательно отобранные DJ и продюсеры,
            объединённые страстью к качественному звуку и незабываемым
            живым выступлениям.
          </p>
        </div>

        {/* ── Artists Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {artists.map((artist) => (
            <motion.div key={artist.id} variants={cardVariants}>
              <Link
                href={`/artists/${artist.slug}`}
                id={`artist-card-${artist.slug}`}
                className="group relative rounded-2xl border border-border bg-bg-card overflow-hidden
                           hover:border-accent-primary/40 transition-all duration-500
                           hover:shadow-2xl hover:shadow-accent-primary/10 block h-full"
              >
                {/* ── Photo ── */}
                <div className="relative h-56 bg-gradient-to-br from-bg-tertiary to-bg-primary overflow-hidden">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Dark vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/30 to-transparent" />

                  {/* Neon glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      boxShadow: "inset 0 0 60px rgba(0,240,255,0.08)",
                    }}
                  />

                  {/* Waveform bar */}
                  <div className="absolute bottom-0 left-0 right-0 flex items-end gap-[2px] h-10 px-4 pb-2">
                    {Array.from({ length: 28 }).map((_, j) => (
                      <div
                        key={j}
                        className="flex-1 bg-accent-primary/20 rounded-sm group-hover:bg-accent-primary/50 transition-colors duration-300"
                        style={{
                          height: `${Math.abs(Math.sin((j + artist.id) * 0.7)) * 100}%`,
                          minHeight: "3px",
                          transitionDelay: `${j * 5}ms`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Tag badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-bg-primary/70 backdrop-blur-sm border border-border text-text-secondary">
                      {artist.tag}
                    </span>
                  </div>

                  {/* Availability indicator */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          artist.available
                            ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                            : "bg-text-muted"
                        }`}
                      />
                      <span className="text-[10px] text-text-secondary/80 backdrop-blur-sm">
                        {artist.available ? "Доступен" : "Занят"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* ── Content ── */}
                <div className="p-6">
                  <h2
                    className="text-xl font-bold text-text-primary group-hover:text-accent-primary transition-colors duration-300"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {artist.name}
                  </h2>
                  <p className="mt-1 text-xs font-medium text-accent-secondary uppercase tracking-wider">
                    {artist.genre}
                  </p>
                  <p className="mt-3 text-sm text-text-secondary leading-relaxed line-clamp-2">
                    {artist.bio}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs text-text-muted">
                      Открыть профиль
                    </span>
                    <span className="w-8 h-8 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary group-hover:bg-accent-primary group-hover:text-bg-primary transition-all duration-300 group-hover:scale-110">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Bottom border glow on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Booking CTA ── */}
        <div className="mt-20 relative rounded-2xl border border-border bg-bg-card/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/5 via-transparent to-accent-secondary/5" />
          <div className="relative px-8 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold text-text-primary"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Нужен артист для вашего события?
              </h2>
              <p className="mt-2 text-text-secondary">
                Оставьте заявку — наш букинг-менеджер свяжется с вами в течение 24 часов.
              </p>
            </div>
            <Link
              href="/contact"
              id="artists-booking-cta"
              className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm
                         bg-accent-primary text-bg-primary hover:shadow-xl hover:shadow-accent-primary/30
                         hover:scale-105 active:scale-[0.98] transition-all duration-300"
            >
              Оставить заявку
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
