"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { artists } from "@/lib/data";

export default function HomePage() {
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

  const features = [
    {
      icon: (
        <svg className="w-6 h-6 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      title: "Постоянный штат диджеев",
      desc: "Только проверенные профессионалы с многолетним опытом клубных выступлений и масштабных ивентов.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
        </svg>
      ),
      title: "Контроль музыкального материала",
      desc: "Трепетно относимся к музыкальному формату вашего бренда и целевой аудитории. Никакого случайного плейлиста.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      title: "Продюсерский контроль",
      desc: "Наши продюсеры постоянно контролируют работу персонала и находятся на площадке для координации.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
        </svg>
      ),
      title: "Связь 24/7",
      desc: "Быстро реагируем на любые изменения в тайминге, райдере или программе. Мы на связи круглосуточно.",
    },
  ];

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-accent-primary/[0.04] blur-[140px]" />
        <div className="absolute bottom-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-accent-secondary/[0.03] blur-[120px]" />
        <div className="noise-overlay absolute inset-0" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-32 flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-primary/[0.08] border border-accent-primary/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
            <span className="text-[11px] font-semibold text-accent-primary tracking-widest uppercase">
              Мы на связи 24/7
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold tracking-tight font-[var(--font-display)] leading-[1.1]"
          >
            Эксклюзивный ростер <br />
            <span className="gradient-text">профессиональных диджеев</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            Продюсерский центр Александра Турло. Качественный саунд-дизайн, 
            авторская музыкальная селекция и полный контроль работы персонала на площадке.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/artists"
              id="hero-cta-artists"
              className="px-8 py-4 rounded-full font-semibold text-sm bg-gradient-to-r from-accent-primary to-accent-secondary text-bg-primary hover:shadow-lg hover:shadow-accent-primary/25 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Наши диджеи
            </Link>
            <Link
              href="/contact"
              id="hero-cta-contact"
              className="px-8 py-4 rounded-full font-semibold text-sm bg-bg-secondary border border-border text-text-primary hover:bg-bg-tertiary hover:border-text-secondary/30 transition-all duration-300 active:scale-95"
            >
              Заказать букинг
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Trust & UTP Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 border-t border-border/40 bg-bg-secondary/40 backdrop-blur-md rounded-3xl mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-display)]">Почему доверяют нам</h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">Четыре столпа безупречного качества проведения событий от TourMedia</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feat, index) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex gap-5 p-6 rounded-2xl bg-bg-card/40 border border-border hover:border-accent-primary/30 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center">
                {feat.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary font-[var(--font-display)]">{feat.title}</h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Artists Grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 mb-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-display)]">Резиденты агентства</h2>
            <p className="mt-4 text-text-secondary">Флагманские артисты нашего продюсерского центра</p>
          </div>
          <Link
            href="/artists"
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-accent-primary hover:text-accent-secondary transition-colors"
          >
            Все артисты
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artists.slice(0, 3).map((artist, i) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl bg-bg-card border border-border hover:border-accent-primary/30 transition-all duration-300"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/20 to-transparent" />

                {/* Badge tags */}
                {artist.tag && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-accent-primary/20 border border-accent-primary/30 text-accent-primary backdrop-blur-md">
                    {artist.tag}
                  </span>
                )}
              </div>

              <div className="p-6 relative z-10 -mt-10">
                <span className="text-[11px] font-bold uppercase tracking-wider text-accent-secondary">{artist.genre}</span>
                <h3 className="text-2xl font-bold font-[var(--font-display)] text-text-primary mt-1 group-hover:text-accent-primary transition-colors">
                  {artist.name}
                </h3>
                <p className="mt-3 text-sm text-text-secondary line-clamp-2 leading-relaxed">
                  {artist.bio}
                </p>
                <div className="mt-5 pt-5 border-t border-border flex items-center justify-between">
                  <Link
                    href={`/artists/${artist.slug}`}
                    className="text-xs font-bold uppercase tracking-widest text-text-primary group-hover:text-accent-primary transition-colors flex items-center gap-1.5"
                  >
                    EPK & Треки
                    <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <span className={`w-2.5 h-2.5 rounded-full ${artist.available ? "bg-emerald-500" : "bg-red-500"}`} title={artist.available ? "Доступен для букинга" : "Занят"} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Live Status 24/7 Interactive Block */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 mb-24">
        <div className="relative overflow-hidden rounded-3xl border border-accent-primary/20 bg-gradient-to-br from-bg-secondary via-bg-card to-[#0e0a1b] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent-primary/[0.03] blur-[80px] pointer-events-none" />

          <div className="max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Онлайн прямо сейчас</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-display)] leading-tight">
              Срочный букинг или изменение райдера?
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Наш продюсерский штаб дежурит круглосуточно. Любые технические вопросы, согласование сет-листа или форс-мажорные замены решаются за считанные минуты.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0 w-full md:w-auto justify-center">
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-semibold text-sm bg-accent-primary/10 border border-accent-primary/30 text-accent-primary hover:bg-accent-primary hover:text-bg-primary transition-all duration-300 text-center"
            >
              Написать в Telegram
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full font-semibold text-sm bg-bg-tertiary hover:bg-bg-secondary text-text-primary transition-all duration-300 text-center"
            >
              Заполнить бриф
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
