"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

type HoveredSide = "left" | "right" | null;

export default function HomePage() {
  const [hovered, setHovered] = useState<HoveredSide>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="hero-split"
      className="relative flex flex-col md:flex-row w-full overflow-hidden"
      style={{ minHeight: "calc(100vh - 5rem)" }}
    >
      {/* ═══════════════════════════════════════════
          LEFT PANEL — Label & Booking
          ═══════════════════════════════════════════ */}
      <div
        onMouseEnter={() => setHovered("left")}
        onMouseLeave={() => setHovered(null)}
        className="relative overflow-hidden cursor-pointer group flex-1"
        style={{
          flex:
            hovered === "left"
              ? "1.5 1 0%"
              : hovered === "right"
                ? "0.7 1 0%"
                : "1 1 0%",
          transition: "flex 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          minHeight: "50vh",
        }}
      >
        {/* Background base */}
        <div className="absolute inset-0 bg-bg-primary" />

        {/* Neon glow — pulsating radial gradients */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: hovered === "right" ? 0.3 : 1 }}
        >
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-primary/[0.06] blur-[100px] group-hover:bg-accent-primary/[0.12] group-hover:scale-110 transition-all duration-1000" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-accent-secondary/[0.04] blur-[80px] group-hover:bg-accent-secondary/[0.08] transition-all duration-1000" />
        </div>

        {/* Animated equalizer vertical lines */}
        <div
          className="absolute inset-0 overflow-hidden transition-opacity duration-700"
          style={{ opacity: hovered === "right" ? 0.15 : 0.4 }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute bottom-0 w-[1px] bg-gradient-to-t from-accent-primary/30 via-accent-primary/10 to-transparent group-hover:from-accent-primary/50 group-hover:via-accent-primary/20 transition-all duration-700"
              style={{
                left: `${8 + i * 8}%`,
                height: `${30 + Math.sin(i * 1.2) * 25}%`,
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
        </div>

        {/* Noise overlay */}
        <div className="noise-overlay absolute inset-0" />

        {/* Dimming overlay when OTHER side is hovered */}
        <div
          className="absolute inset-0 bg-black/0 transition-all duration-700 z-10"
          style={{
            backgroundColor:
              hovered === "right" ? "rgba(0,0,0,0.45)" : "rgba(0,0,0,0)",
          }}
        />

        {/* Divider accent glow on edge */}
        <div className="hidden md:block absolute top-0 right-0 w-[2px] h-full z-20">
          <div className="h-full w-full bg-gradient-to-b from-transparent via-accent-primary/20 to-transparent group-hover:via-accent-primary/50 transition-all duration-700" />
        </div>

        {/* Content Box */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-20 flex flex-col items-center justify-center h-full px-8 md:px-12 lg:px-16 py-16 text-center"
        >
          {/* Icon */}
          <motion.div
            variants={itemVariants}
            className="mb-8 w-16 h-16 rounded-2xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent-primary/15 group-hover:border-accent-primary/40 transition-all duration-500"
          >
            <svg
              className="w-8 h-8 text-accent-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
              />
            </svg>
          </motion.div>

          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-primary/[0.08] border border-accent-primary/20 mb-6 group-hover:bg-accent-primary/[0.12] group-hover:border-accent-primary/30 transition-all duration-500"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
            <span className="text-[11px] font-semibold text-accent-primary tracking-widest uppercase">
              Музыка
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight font-[var(--font-display)] leading-tight"
          >
            <span className="text-text-primary group-hover:text-white transition-colors duration-500">
              Лейбл
            </span>
            <br />
            <span className="gradient-text">&amp; Букинг</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-5 text-base md:text-lg text-text-secondary max-w-sm leading-relaxed group-hover:text-text-primary/80 transition-colors duration-500"
          >
            Эксклюзивные диджеи для ваших лучших событий
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <Link
              href="/artists"
              id="split-cta-artists"
              className="mt-8 group/btn relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm
                bg-accent-primary/10 text-accent-primary border border-accent-primary/30
                hover:bg-accent-primary hover:text-bg-primary hover:border-accent-primary
                hover:shadow-xl hover:shadow-accent-primary/25
                transition-all duration-400 hover:scale-105 active:scale-[0.98]"
            >
              Посмотреть ростер
              <svg
                className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>

          {/* Mini stats */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex gap-8 opacity-60 group-hover:opacity-100 transition-opacity duration-500"
          >
            <div className="text-center">
              <div className="text-xl font-bold text-text-primary">50+</div>
              <div className="text-[10px] uppercase tracking-wider text-text-muted mt-0.5">
                Артистов
              </div>
            </div>
            <div className="w-px bg-border" />
            <div className="text-center">
              <div className="text-xl font-bold text-text-primary">200+</div>
              <div className="text-[10px] uppercase tracking-wider text-text-muted mt-0.5">
                Событий / год
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════
          RIGHT PANEL — Hi-End Acoustics
          ═══════════════════════════════════════════ */}
      <div
        onMouseEnter={() => setHovered("right")}
        onMouseLeave={() => setHovered(null)}
        className="relative overflow-hidden cursor-pointer group flex-1"
        style={{
          flex:
            hovered === "right"
              ? "1.5 1 0%"
              : hovered === "left"
                ? "0.7 1 0%"
                : "1 1 0%",
          transition: "flex 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          minHeight: "50vh",
        }}
      >
        {/* Background base */}
        <div className="absolute inset-0 bg-[#0c0c12]" />

        {/* Metallic / industrial gradient */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: hovered === "left" ? 0.3 : 1 }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent-gold/[0.04] blur-[100px] group-hover:bg-accent-gold/[0.09] group-hover:scale-110 transition-all duration-1000" />
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-accent-secondary/[0.03] blur-[80px] group-hover:bg-accent-secondary/[0.06] transition-all duration-1000" />
        </div>

        {/* Geometric grid pattern */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: hovered === "left" ? 0.1 : 0.3 }}
        >
          {/* Horizontal lines */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent group-hover:via-accent-gold/[0.08] transition-all duration-700"
              style={{ top: `${12.5 * (i + 1)}%` }}
            />
          ))}
          {/* Vertical lines */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent group-hover:via-accent-gold/[0.08] transition-all duration-700"
              style={{ left: `${16.66 * (i + 1)}%` }}
            />
          ))}
          {/* Corner accent brackets */}
          <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-white/[0.06] group-hover:border-accent-gold/20 transition-colors duration-700" />
          <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-white/[0.06] group-hover:border-accent-gold/20 transition-colors duration-700" />
        </div>

        {/* Noise overlay */}
        <div className="noise-overlay absolute inset-0" />

        {/* Dimming overlay when OTHER side is hovered */}
        <div
          className="absolute inset-0 bg-black/0 transition-all duration-700 z-10"
          style={{
            backgroundColor:
              hovered === "left" ? "rgba(0,0,0,0.45)" : "rgba(0,0,0,0)",
          }}
        />

        {/* Divider accent glow on edge */}
        <div className="hidden md:block absolute top-0 left-0 w-[2px] h-full z-20">
          <div className="h-full w-full bg-gradient-to-b from-transparent via-accent-gold/20 to-transparent group-hover:via-accent-gold/50 transition-all duration-700" />
        </div>
        {/* Mobile divider */}
        <div className="md:hidden absolute top-0 left-0 right-0 h-[1px] z-20">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent" />
        </div>

        {/* Content Box */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-20 flex flex-col items-center justify-center h-full px-8 md:px-12 lg:px-16 py-16 text-center"
        >
          {/* Icon */}
          <motion.div
            variants={itemVariants}
            className="mb-8 w-16 h-16 rounded-2xl bg-accent-gold/[0.08] border border-accent-gold/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent-gold/[0.12] group-hover:border-accent-gold/40 transition-all duration-500"
          >
            <svg
              className="w-8 h-8 text-[var(--color-accent-gold)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
              />
            </svg>
          </motion.div>

          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-gold/[0.06] border border-accent-gold/20 mb-6 group-hover:bg-accent-gold/[0.10] group-hover:border-accent-gold/30 transition-all duration-500"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-gold)]" />
            <span className="text-[11px] font-semibold text-[var(--color-accent-gold)] tracking-widest uppercase">
              Оборудование
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight font-[var(--font-display)] leading-tight"
          >
            <span className="text-text-primary group-hover:text-white transition-colors duration-500">
              Hi-End
            </span>
            <br />
            <span className="gradient-text-gold">Акустика</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-5 text-base md:text-lg text-text-secondary max-w-sm leading-relaxed group-hover:text-text-primary/80 transition-colors duration-500"
          >
            Производство и инсталляция звука премиум-класса
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <Link
              href="/equipment"
              id="split-cta-equipment"
              className="mt-8 group/btn relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm
                bg-accent-gold/[0.08] text-[var(--color-accent-gold)] border border-accent-gold/30
                hover:bg-[var(--color-accent-gold)] hover:text-bg-primary hover:border-[var(--color-accent-gold)]
                hover:shadow-xl hover:shadow-accent-gold/25
                transition-all duration-400 hover:scale-105 active:scale-[0.98]"
            >
              Каталог решений
              <svg
                className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>

          {/* Mini stats */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex gap-8 opacity-60 group-hover:opacity-100 transition-opacity duration-500"
          >
            <div className="text-center">
              <div className="text-xl font-bold text-text-primary">15+</div>
              <div className="text-[10px] uppercase tracking-wider text-text-muted mt-0.5">
                Моделей
              </div>
            </div>
            <div className="w-px bg-border" />
            <div className="text-center">
              <div className="text-xl font-bold text-text-primary">12</div>
              <div className="text-[10px] uppercase tracking-wider text-text-muted mt-0.5">
                Стран
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════
          CENTER LOGO OVERLAY
          ═══════════════════════════════════════════ */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none hidden md:flex flex-col items-center">
        <div
          className="relative w-24 h-24 rounded-full flex items-center justify-center transition-all duration-700"
          style={{
            background: "rgba(10, 10, 15, 0.85)",
            boxShadow:
              hovered === "left"
                ? "0 0 40px rgba(0,240,255,0.2), 0 0 80px rgba(0,240,255,0.05), inset 0 0 20px rgba(0,240,255,0.05)"
                : hovered === "right"
                  ? "0 0 40px rgba(212,168,83,0.2), 0 0 80px rgba(212,168,83,0.05), inset 0 0 20px rgba(212,168,83,0.05)"
                  : "0 0 30px rgba(255,255,255,0.05), inset 0 0 15px rgba(255,255,255,0.02)",
            border: "1px solid",
            borderColor:
              hovered === "left"
                ? "rgba(0,240,255,0.3)"
                : hovered === "right"
                  ? "rgba(212,168,83,0.3)"
                  : "rgba(255,255,255,0.08)",
          }}
        >
          <div className="text-center">
            <div className="text-[11px] font-bold tracking-tight leading-none">
              <span className="text-text-primary">T</span>
              <span
                className="transition-colors duration-500"
                style={{
                  color:
                    hovered === "left"
                      ? "var(--color-accent-primary)"
                      : hovered === "right"
                        ? "var(--color-accent-gold)"
                        : "var(--color-text-secondary)",
                }}
              >
                M
              </span>
            </div>
            <div className="text-[6px] uppercase tracking-[0.2em] text-text-muted mt-0.5">
              Tour Media
            </div>
          </div>
        </div>

        {/* Vertical lines */}
        <div
          className="absolute bottom-full mb-0 w-px h-16 transition-all duration-700"
          style={{
            background:
              hovered === "left"
                ? "linear-gradient(to top, rgba(0,240,255,0.3), transparent)"
                : hovered === "right"
                  ? "linear-gradient(to top, rgba(212,168,83,0.3), transparent)"
                  : "linear-gradient(to top, rgba(255,255,255,0.06), transparent)",
          }}
        />
        <div
          className="absolute top-full mt-0 w-px h-16 transition-all duration-700"
          style={{
            background:
              hovered === "left"
                ? "linear-gradient(to bottom, rgba(0,240,255,0.3), transparent)"
                : hovered === "right"
                  ? "linear-gradient(to bottom, rgba(212,168,83,0.3), transparent)"
                  : "linear-gradient(to bottom, rgba(255,255,255,0.06), transparent)",
          }}
        />
      </div>
    </section>
  );
}
