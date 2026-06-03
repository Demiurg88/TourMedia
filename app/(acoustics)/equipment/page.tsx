"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { equipment } from "@/lib/data";

export default function EquipmentPage() {
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
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-gold/[0.08] border border-accent-gold/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
            <span className="text-xs font-semibold text-accent-gold tracking-widest uppercase">
              Производство &amp; Инжиниринг
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Профессиональные <br className="hidden sm:inline" />
            <span className="gradient-text-gold">акустические системы</span>
          </h1>
          <p className="mt-6 text-lg text-text-secondary leading-relaxed">
            Акустика TourMedia — это бескомпромиссный инструмент для создания безупречного звукового поля. 
            Мы проектируем и производим премиальные кабинеты с высокой эффективностью, надежностью и исключительной точностью передачи.
          </p>
        </div>

        {/* ── Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {equipment.map((item) => (
            <motion.div key={item.id} variants={cardVariants}>
              <Link
                href={`/equipment/${item.slug}`}
                id={`equipment-card-${item.slug}`}
                className="group relative flex flex-col justify-between rounded-none border border-border bg-bg-card/40 transition-all duration-300 hover:border-accent-gold/30 hover:bg-bg-card/80 h-full"
              >
                {/* Product Visual Container */}
                <div className="relative h-64 w-full bg-bg-primary overflow-hidden flex items-center justify-center border-b border-border">
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-bg-tertiary via-transparent to-transparent pointer-events-none" />
                  
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/95 via-bg-primary/20 to-transparent" />

                  <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-text-muted/40 group-hover:border-accent-gold/60 transition-colors duration-300" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-[10px] tracking-wider uppercase text-text-secondary bg-bg-primary/80 border border-border px-2 py-1">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Technical Content */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h2
                      className="text-2xl font-bold text-text-primary group-hover:text-accent-gold transition-colors duration-300"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.name}
                    </h2>
                    
                    <p className="mt-3 text-sm text-text-secondary leading-relaxed line-clamp-3">
                      {item.shortDescription}
                    </p>
                  </div>

                  {/* Spec List */}
                  <div className="mt-8 pt-6 border-t border-border/60">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-2 font-mono">
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-text-muted">Мощность (RMS)</div>
                        <div className="text-sm font-medium text-text-secondary mt-0.5">{item.specs.power}</div>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-text-muted">SPL Max</div>
                        <div className="text-sm font-medium text-text-secondary mt-0.5">{item.specs.spl}</div>
                      </div>
                      <div className="col-span-2">
                        <div className="text-[10px] uppercase tracking-wider text-text-muted">Частоты</div>
                        <div className="text-sm font-medium text-text-secondary mt-0.5">{item.specs.frequency}</div>
                      </div>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="mt-8 flex items-center justify-between font-mono text-xs tracking-wider uppercase text-accent-gold group-hover:text-white transition-colors">
                    <span>Спецификация и чертеж</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                
                <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-accent-gold scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* ── B2B Installation Info Box ── */}
        <div className="mt-20 border border-border p-8 md:p-10 bg-bg-card/20 relative">
          <div className="absolute top-0 left-8 -translate-y-1/2 bg-bg-primary px-4 font-mono text-xs uppercase tracking-widest text-accent-gold">
            TourMedia Engineering
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-xl md:text-2xl font-bold text-text-primary" style={{ fontFamily: "var(--font-display)" }}>
                Проектирование и инсталляция звука «под ключ»
              </h3>
              <p className="mt-3 text-text-secondary text-sm md:text-base leading-relaxed">
                Мы осуществляем акустический расчет помещений в специализированном ПО, подбираем оптимальные конфигурации, производим инсталляцию, настройку систем и обучение персонала.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Link
                href="/contact"
                id="engineering-contact-cta"
                className="w-full md:w-auto text-center px-6 py-3.5 border border-accent-gold/40 text-accent-gold hover:bg-accent-gold hover:text-bg-primary transition-all duration-300 font-mono text-xs uppercase tracking-wider"
              >
                Связаться с инженером
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
