"use client";

import Link from "next/link";
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
      <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-24">
        
        {/* Intro */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textRevealVariants}
          className="text-left"
        >
          <div className="font-mono text-xs uppercase tracking-widest text-accent-primary mb-4">
            01 / Продюсер
          </div>
          <h1
            className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Александр Турло <br />
            <span className="gradient-text">Искусство саунд-дизайна.</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-text-secondary leading-relaxed font-light max-w-4xl">
            Музыкальный продюсер, основатель TourMedia DJ Agency. 
            Более 15 лет опыта управления клубными проектами и создания музыкальной атмосферы для премиальных брендов.
          </p>
          
          <motion.div
            variants={lineVariants}
            className="h-px bg-border/80 mt-12 origin-left"
          />
        </motion.div>

        {/* Philosophy */}
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4 font-mono text-xs uppercase tracking-widest text-accent-secondary">
            02 / Философия
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
              Ответственность за каждый бит
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Музыка на мероприятии — это не просто фоновый шум. Это мощный инструмент влияния на настроение, эмоции и восприятие бренда вашими гостями. 
              Мы подходим к каждому событию с позиции музыкальной режиссуры, скрупулезно прорабатывая плейлист и контролируя техническое исполнение.
            </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4 font-mono text-xs uppercase tracking-widest text-accent-primary">
            03 / Стандарты
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textRevealVariants}
            className="md:col-span-8 space-y-8"
          >
            <div>
              <h3 className="text-lg font-bold text-text-primary font-[var(--font-display)]">1. Постоянный штат диджеев</h3>
              <p className="mt-2 text-text-secondary leading-relaxed text-sm">
                Мы не работаем со случайными фрилансерами. В нашем агентстве — постоянная команда квалифицированных диджеев, которые прошли строгий отбор, регулярно повышают квалификацию и разделяют наши ценности гостеприимства и качества.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-text-primary font-[var(--font-display)]">2. Контроль музыкального материала</h3>
              <p className="mt-2 text-text-secondary leading-relaxed text-sm">
                Никакой пошлости и банальных плейлистов. Каждый трек отбирается с учетом формата мероприятия, концепции бренда и пожеланий заказчика. Мы строго следим за динамикой танцпола.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-text-primary font-[var(--font-display)]">3. Продюсерский контроль</h3>
              <p className="mt-2 text-text-secondary leading-relaxed text-sm">
                Наши кураторы и продюсеры всегда координируют работу диджеев на площадке. Мы следим за таймингом, работой оборудования и готовы оперативно вносить коррективы в программу.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-text-primary font-[var(--font-display)]">4. Связь 24/7</h3>
              <p className="mt-2 text-text-secondary leading-relaxed text-sm">
                Мы понимаем специфику ивент-индустрии, где изменения происходят мгновенно. Мы на связи в любое время суток для оперативного решения любых задач.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textRevealVariants}
          className="border border-border p-8 md:p-12 bg-bg-card/30 relative rounded-2xl"
        >
          <div className="font-mono text-xs uppercase tracking-widest text-accent-secondary mb-6">
            04 / Сотрудничество
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2
                className="text-3xl font-bold text-text-primary"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Создадим атмосферу вместе
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                Обсудим концепцию вашего следующего мероприятия. Мы подберем идеальный состав диджеев, проработаем сценарий звука и гарантируем безупречное проведение праздника.
              </p>
              
              <div className="pt-4">
                <Link
                  href="/contact"
                  id="about-contact-btn"
                  className="inline-block text-center px-8 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-bg-primary font-bold text-sm rounded-full hover:shadow-lg hover:shadow-accent-primary/20 transition-all duration-300 hover:scale-105"
                >
                  Связаться с продюсером
                </Link>
              </div>
            </div>

            <div className="relative aspect-video w-full bg-bg-primary overflow-hidden border border-border rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80&fit=crop"
                alt="Alexander Turlo Production"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 right-4 font-mono text-[9px] text-text-muted uppercase">
                TourMedia Agency
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
