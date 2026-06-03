"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  const textRevealVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1, ease: "easeInOut" as const },
    },
  };

  return (
    <section className="pt-32 pb-24 min-h-screen bg-bg-primary overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-32">
        
        {/* ── Section 1: Intro ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textRevealVariants}
          className="text-left"
        >
          <div className="font-mono text-xs uppercase tracking-widest text-accent-gold mb-4">
            01 / Концепт
          </div>
          <h1
            className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            TourMedia — это <br />
            <span className="gradient-text-gold">полный цикл звука.</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-text-secondary leading-relaxed font-light max-w-4xl">
            От первого аналогового импульса в студии до мощной волны давления на заполненном стадионе. 
            Мы объединяем музыкальный менеджмент и точную акустическую инженерию под одним брендом.
          </p>
          
          <motion.div
            variants={lineVariants}
            className="h-px bg-border/80 mt-12 origin-left"
          />
        </motion.div>

        {/* ── Section 2: Label Philosophy ── */}
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4 font-mono text-xs uppercase tracking-widest text-accent-primary">
            02 / Лейбл &amp; A&amp;R
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textRevealVariants}
            className="md:col-span-8 space-y-6"
          >
            <h2
              className="text-2xl md:text-3xl font-bold text-text-primary"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Продюсирование артистов нового времени
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Мы не просто издаем треки. Мы создаем бренд-экосистему для наших резидентов. 
              Собственная студия сведения, букинг-агентство и кастомное сценическое оборудование 
              дают нашим диджеям возможность звучать именно так, как они задумали, без компромиссов на стороне площадок.
            </p>
            <div className="pt-4">
              <Link
                href="/artists"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-primary hover:text-white transition-colors"
              >
                Посмотреть ростер артистов
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ── Section 3: Acoustics R&D ── */}
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4 font-mono text-xs uppercase tracking-widest text-accent-gold">
            03 / Инжиниринг
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textRevealVariants}
            className="md:col-span-8 space-y-6"
          >
            <h2
              className="text-2xl md:text-3xl font-bold text-text-primary"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Физика звукового давления
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Акустические кабинеты TourMedia разрабатываются и собираются вручную на собственном производстве. 
              Мы используем отборную фанеру балтийской березы, неодимовые компоненты от лучших европейских брендов 
              и запатентованную геометрию рупоров. Каждый чертеж рассчитывается под задачи максимального SPL с минимальными фазовыми искажениями.
            </p>
            <div className="pt-4">
              <Link
                href="/equipment"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-gold hover:text-white transition-colors"
              >
                Каталог акустических решений
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ── Section 4: Showroom & Visit ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textRevealVariants}
          className="border border-border p-8 md:p-12 bg-bg-card/30 relative"
        >
          <div className="font-mono text-xs uppercase tracking-widest text-accent-gold mb-6">
            04 / Прослушивание
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2
                className="text-3xl font-bold text-text-primary"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Посетите шоурум в Москве
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                Звук невозможно оценить на графиках или в тексте. Мы приглашаем промоутеров, инженеров 
                и артистов лично протестировать наши системы TM-X1000 и TM-SUB18 в акустически подготовленном шоуруме. 
                Возьмите свои референсные треки и ощутите качество давления лично.
              </p>
              
              <div className="space-y-2 font-mono text-xs text-text-muted">
                <div>[АДРЕС]: г. Москва, ул. Звуковая, 42, БЦ «Resonance»</div>
                <div>[ВРЕМЯ]: Пн — Пт, с 11:00 до 20:00 (по записи)</div>
                <div>[ТЕЛЕФОН]: +7 (495) 000-00-00</div>
              </div>

              <div className="pt-4">
                <Link
                  href="/contact?type=equipment&item=showroom-visit"
                  id="showroom-booking"
                  className="inline-block text-center px-6 py-3.5 bg-accent-gold text-bg-primary hover:bg-white hover:text-bg-primary font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300"
                >
                  Записаться на прослушивание
                </Link>
              </div>
            </div>

            {/* Simulated showroom image using Unsplash */}
            <div className="relative aspect-video w-full bg-bg-primary overflow-hidden border border-border">
              <Image
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80&fit=crop"
                alt="Showroom TourMedia"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover opacity-70 hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 right-4 font-mono text-[9px] text-text-muted uppercase">
                TM Acoustics Lab / Москва
              </div>
            </div>
          </div>

          {/* Decorative Corner Brackets */}
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-border" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-border" />
        </motion.div>

      </div>
    </section>
  );
}
