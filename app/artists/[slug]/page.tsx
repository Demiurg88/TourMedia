import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getArtistBySlug, getAllSlugs } from "@/lib/data";

// ── Static params for build-time generation ────────────────────────────────
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// ── Dynamic metadata ───────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);
  if (!artist) return { title: "Артист не найден" };
  return {
    title: `${artist.name} | Букинг | TourMedia`,
    description: `${artist.genre} — ${artist.bio}`,
    openGraph: {
      title: `${artist.name} | Букинг | TourMedia`,
      description: `${artist.genre} — ${artist.bio}`,
      images: [{ url: artist.image }],
    },
  };
}

// ── Social icon components ─────────────────────────────────────────────────
function SoundCloudIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M1.175 12.225c-.046 0-.094.013-.136.04a.192.192 0 00-.082.125l-.395 2.516.395 2.499a.19.19 0 00.082.123.192.192 0 00.274-.123l.447-2.499-.447-2.516a.192.192 0 00-.138-.165zM3.03 11.27a.215.215 0 00-.215.152l-.412 2.766.412 2.726a.215.215 0 00.43 0l.467-2.726-.467-2.766a.214.214 0 00-.215-.152zm1.874-.41a.24.24 0 00-.24.17l-.37 2.978.37 2.918a.24.24 0 00.48 0l.42-2.918-.42-2.978a.24.24 0 00-.24-.17zm1.899-.222a.265.265 0 00-.265.188l-.325 3.192.325 3.09a.266.266 0 00.531 0l.37-3.09-.37-3.192a.265.265 0 00-.266-.188zm1.899.017a.29.29 0 00-.29.208l-.278 3.175.278 3.05a.29.29 0 00.58 0l.317-3.05-.317-3.175a.29.29 0 00-.29-.208zm1.903-.042a.316.316 0 00-.316.225l-.233 3.217.233 3.01a.316.316 0 00.632 0l.265-3.01-.265-3.217a.316.316 0 00-.316-.225zm1.906.019a.341.341 0 00-.341.243l-.189 3.198.189 2.966a.342.342 0 00.683 0l.216-2.966-.216-3.198a.341.341 0 00-.342-.243zm1.914-.085a.365.365 0 00-.365.263l-.146 3.283.146 2.92a.366.366 0 00.73 0l.167-2.92-.167-3.283a.366.366 0 00-.365-.263zm1.898-.008a.39.39 0 00-.39.282l-.102 3.291.102 2.887a.391.391 0 00.781 0l.117-2.887-.117-3.291a.39.39 0 00-.39-.282zm1.876-.014a.414.414 0 00-.415.3l-.059 3.305.059 2.857a.415.415 0 00.83 0l.067-2.857-.067-3.305a.414.414 0 00-.415-.3zm1.869-.003a.44.44 0 00-.44.32l-.015 3.308.015 2.83a.44.44 0 00.88 0l.017-2.83-.017-3.308a.44.44 0 00-.44-.32zM21.5 10.5c-.112 0-.222.01-.33.028-.16-1.947-1.8-3.466-3.793-3.466-.52 0-1.015.102-1.467.285-.166.065-.21.133-.212.197v10.23a.21.21 0 00.2.21l5.602.005c1.105 0 2-.896 2-2 0-1.105-.895-2-2-2z" />
    </svg>
  );
}

function SpotifyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
      />
    </svg>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────
export default async function ArtistEPKPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);
  if (!artist) notFound();

  const paragraphs = artist.bioFull
    .split("\n\n")
    .filter((p) => p.trim().length > 0);

  return (
    <div className="min-h-screen">

      {/* ═══════════════════════════════════════════════════════════════
          HERO — Full-width banner with photo
          ═══════════════════════════════════════════════════════════════ */}
      <section
        id="epk-hero"
        className="relative w-full overflow-hidden"
        style={{ minHeight: "90vh" }}
      >
        {/* Cover Image */}
        <Image
          src={artist.coverImage}
          alt={`${artist.name} — cover`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/60 to-bg-primary/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/50 via-transparent to-transparent" />

        {/* Noise */}
        <div className="noise-overlay absolute inset-0" />

        {/* Back button */}
        <div className="absolute top-28 left-6 lg:left-12 z-10">
          <Link
            href="/artists"
            id="epk-back"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-text-secondary hover:text-text-primary text-sm transition-all duration-200 hover:border-border-hover"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Все артисты
          </Link>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-16 pb-16 z-10">
          {/* Genre badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-primary/[0.10] border border-accent-primary/25 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
            <span className="text-[11px] font-semibold text-accent-primary tracking-widest uppercase">
              {artist.genre}
            </span>
          </div>

          {/* Artist name */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {artist.name}
          </h1>

          {/* Sub-genre & tag */}
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {artist.subGenre && (
              <span className="text-text-secondary text-sm">{artist.subGenre}</span>
            )}
            <span className="w-1 h-1 rounded-full bg-text-muted" />
            <span className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-full bg-bg-card/70 backdrop-blur-sm border border-border text-text-secondary">
              {artist.tag}
            </span>
            {artist.available ? (
              <span className="flex items-center gap-1.5 text-sm text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                Доступен для букинга
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-sm text-text-muted">
                <span className="w-2 h-2 rounded-full bg-text-muted" />
                Занят
              </span>
            )}
          </div>

          {/* Social links + CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {/* Social buttons */}
            <div className="flex items-center gap-3">
              {artist.soundcloud && (
                <a
                  href={artist.soundcloud}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`epk-soundcloud-${artist.slug}`}
                  className="w-11 h-11 rounded-full glass flex items-center justify-center text-text-secondary hover:text-[#ff5500] hover:border-[#ff5500]/30 transition-all duration-300"
                  aria-label="SoundCloud"
                >
                  <SoundCloudIcon />
                </a>
              )}
              {artist.spotify && (
                <a
                  href={artist.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`epk-spotify-${artist.slug}`}
                  className="w-11 h-11 rounded-full glass flex items-center justify-center text-text-secondary hover:text-[#1db954] hover:border-[#1db954]/30 transition-all duration-300"
                  aria-label="Spotify"
                >
                  <SpotifyIcon />
                </a>
              )}
              {artist.instagram && (
                <a
                  href={artist.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`epk-instagram-${artist.slug}`}
                  className="w-11 h-11 rounded-full glass flex items-center justify-center text-text-secondary hover:text-[#e1306c] hover:border-[#e1306c]/30 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
              )}
            </div>

            {/* Booking CTA */}
            <Link
              href={`/contact?type=booking&item=${artist.slug}`}
              id={`epk-booking-cta-${artist.slug}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm
                         bg-accent-primary text-bg-primary
                         hover:shadow-xl hover:shadow-accent-primary/30
                         hover:scale-105 active:scale-[0.98] transition-all duration-300"
            >
              Забронировать выступление
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
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          MAIN CONTENT — Bio / Music / Rider
          ═══════════════════════════════════════════════════════════════ */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20 space-y-24">

        {/* ── Biography ── */}
        <section id="epk-bio">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-8 rounded-lg bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <h2
              className="text-2xl font-bold text-text-primary"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Биография
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="space-y-5 pl-0 md:pl-12">
            {paragraphs.map((para, i) => (
              <p key={i} className="text-text-secondary leading-relaxed text-base md:text-lg">
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* ── Music Player Placeholder ── */}
        <section id="epk-music">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-8 rounded-lg bg-accent-secondary/10 border border-accent-secondary/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-accent-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
              </svg>
            </div>
            <h2
              className="text-2xl font-bold text-text-primary"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Музыка
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="pl-0 md:pl-12 space-y-4">
            {/* SoundCloud placeholder */}
            <div
              className="relative rounded-2xl border border-border bg-bg-card overflow-hidden"
              style={{ height: "166px" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff5500]/5 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="flex items-center gap-2 text-[#ff5500]/60">
                  <SoundCloudIcon />
                  <span className="text-sm font-medium">SoundCloud Player</span>
                </div>
                <p className="text-xs text-text-muted">Iframe плеера будет вставлен здесь</p>
                <div className="flex items-end gap-[3px] h-8 mt-1">
                  {Array.from({ length: 32 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-[#ff5500]/20 rounded-sm"
                      style={{ height: `${20 + Math.abs(Math.sin(i * 0.5)) * 80}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Spotify placeholder */}
            <div
              className="relative rounded-2xl border border-border bg-bg-card overflow-hidden"
              style={{ height: "152px" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1db954]/5 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="flex items-center gap-2 text-[#1db954]/60">
                  <SpotifyIcon />
                  <span className="text-sm font-medium">Spotify Player</span>
                </div>
                <p className="text-xs text-text-muted">Iframe плеера будет вставлен здесь</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── For Organizers — Rider Downloads ── */}
        <section id="epk-riders">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-8 rounded-lg bg-accent-gold/[0.08] border border-accent-gold/20 flex items-center justify-center">
              <svg
                className="w-4 h-4"
                style={{ color: "var(--color-accent-gold)" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <h2
              className="text-2xl font-bold text-text-primary"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Для организаторов
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="pl-0 md:pl-12">
            <p className="text-text-secondary mb-8 leading-relaxed">
              Скачайте технические документы для подготовки мероприятия.
              По всем вопросам обращайтесь к нашему букинг-менеджеру.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {/* Technical rider */}
              <button
                id={`epk-tech-rider-${artist.slug}`}
                className="group relative flex items-center gap-5 p-6 rounded-2xl border border-border bg-bg-card text-left
                           hover:border-accent-primary/40 hover:bg-accent-primary/[0.03]
                           hover:shadow-xl hover:shadow-accent-primary/5
                           transition-all duration-300"
              >
                <div className="shrink-0 w-14 h-14 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary group-hover:scale-110 group-hover:bg-accent-primary/15 transition-all duration-300">
                  <DownloadIcon />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-text-primary group-hover:text-accent-primary transition-colors duration-300">
                    Технический райдер
                  </div>
                  <div className="text-sm text-text-muted mt-0.5">PDF · Звук, свет, сцена</div>
                </div>
                <svg
                  className="w-4 h-4 text-text-muted group-hover:text-accent-primary group-hover:translate-y-0.5 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </button>

              {/* Hospitality rider */}
              <button
                id={`epk-hosp-rider-${artist.slug}`}
                className="group relative flex items-center gap-5 p-6 rounded-2xl border border-border bg-bg-card text-left
                           hover:border-accent-gold/40 hover:bg-accent-gold/[0.03]
                           hover:shadow-xl hover:shadow-accent-gold/5
                           transition-all duration-300"
              >
                <div
                  className="shrink-0 w-14 h-14 rounded-xl border flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                  style={{
                    background: "rgba(212,168,83,0.08)",
                    borderColor: "rgba(212,168,83,0.2)",
                    color: "var(--color-accent-gold)",
                  }}
                >
                  <DownloadIcon />
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className="font-semibold text-text-primary transition-colors duration-300"
                    style={{ "--tw-text-opacity": "1" } as React.CSSProperties}
                  >
                    Бытовой райдер
                  </div>
                  <div className="text-sm text-text-muted mt-0.5">PDF · Проживание, питание, трансфер</div>
                </div>
                <svg
                  className="w-4 h-4 text-text-muted group-hover:translate-y-0.5 transition-all duration-300"
                  style={{ color: "inherit" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </button>
            </div>

            {/* Contact block */}
            <div className="mt-8 p-6 rounded-2xl border border-border bg-bg-card/50">
              <p className="text-sm text-text-secondary leading-relaxed">
                <span className="text-text-primary font-medium">Нужна помощь с организацией? </span>
                Наш менеджер ответит на все вопросы по букингу, технике и логистике.
              </p>
              <Link
                href="/contact"
                id={`epk-contact-link-${artist.slug}`}
                className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-accent-primary hover:text-white transition-colors duration-200"
              >
                Написать менеджеру
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
