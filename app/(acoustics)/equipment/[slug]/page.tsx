import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getEquipmentBySlug, getAllEquipmentSlugs } from "@/lib/data";

// ── Static params generation ──────────────────────────────────────────────
export function generateStaticParams() {
  return getAllEquipmentSlugs().map((slug) => ({ slug }));
}

// ── Dynamic metadata ───────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getEquipmentBySlug(slug);
  if (!item) return { title: "Акустика не найдена" };
  return {
    title: `${item.name} | Профессиональный звук | TourMedia`,
    description: `Характеристики: ${item.specs.power}, SPL: ${item.specs.spl}, частоты: ${item.specs.frequency}. ${item.shortDescription}`,
    openGraph: {
      title: `${item.name} | Профессиональный звук | TourMedia`,
      description: `Характеристики: ${item.specs.power}, SPL: ${item.specs.spl}, частоты: ${item.specs.frequency}. ${item.shortDescription}`,
      images: [{ url: item.image }],
    },
  };
}

export default async function EquipmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getEquipmentBySlug(slug);
  if (!item) notFound();

  return (
    <section className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* ── Breadcrumb / Back ── */}
        <div className="mb-12">
          <Link
            href="/equipment"
            id="equipment-detail-back"
            className="inline-flex items-center gap-2 text-sm font-mono text-text-secondary hover:text-accent-gold transition-colors"
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
            Назад в каталог
          </Link>
        </div>

        {/* ── Main Two-Column Layout ── */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ── Left Column: Product Visual ── */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative aspect-video lg:aspect-square w-full bg-bg-card border border-border overflow-hidden flex items-center justify-center">
              {/* Image */}
              <Image
                src={item.image}
                alt={item.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover opacity-85"
              />
              
              {/* Industrial overlay brackets */}
              <div className="absolute top-6 left-6 w-6 h-6 border-t border-l border-white/20" />
              <div className="absolute top-6 right-6 w-6 h-6 border-t border-r border-white/20" />
              <div className="absolute bottom-6 left-6 w-6 h-6 border-b border-l border-white/20" />
              <div className="absolute bottom-6 right-6 w-6 h-6 border-b border-r border-white/20" />
              
              {/* Holographic grid watermark overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
            </div>
            
            {/* Engineering Note */}
            <div className="border-l-2 border-accent-gold/40 pl-4 py-1">
              <span className="font-mono text-[10px] uppercase text-text-muted">Инженерный сертификат</span>
              <p className="text-xs text-text-secondary mt-0.5">
                Все компоненты протестированы и откалиброваны в лаборатории TourMedia Acoustics. Соответствует стандартам AES2.
              </p>
            </div>
          </div>

          {/* ── Right Column: Info & Specs ── */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Header info */}
            <div>
              <span className="font-mono text-xs text-accent-gold uppercase tracking-widest">
                {item.category}
              </span>
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.name}
              </h1>
              <div className="w-12 h-1 bg-accent-gold mt-6" />
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg text-text-secondary leading-relaxed font-light">
                {item.shortDescription}
              </p>
              <p className="text-base text-text-muted leading-relaxed">
                {item.fullDescription}
              </p>
            </div>

            {/* Specs Table */}
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-text-primary mb-4 pb-2 border-b border-border">
                Технические характеристики
              </h3>
              
              <div className="border border-border divide-y divide-border font-mono text-xs">
                <div className="grid grid-cols-2 p-3.5 bg-bg-card/30">
                  <span className="text-text-muted">Мощность (RMS)</span>
                  <span className="text-text-primary text-right font-medium">{item.specs.power}</span>
                </div>
                <div className="grid grid-cols-2 p-3.5">
                  <span className="text-text-muted">Частотный диапазон</span>
                  <span className="text-text-primary text-right font-medium">{item.specs.frequency}</span>
                </div>
                <div className="grid grid-cols-2 p-3.5 bg-bg-card/30">
                  <span className="text-text-muted">Макс. звуковое давление (SPL)</span>
                  <span className="text-text-primary text-right font-medium">{item.specs.spl}</span>
                </div>
                <div className="grid grid-cols-2 p-3.5">
                  <span className="text-text-muted">Вес системы</span>
                  <span className="text-text-primary text-right font-medium">{item.specs.weight}</span>
                </div>
                {item.specs.dimensions && (
                  <div className="grid grid-cols-2 p-3.5 bg-bg-card/30">
                    <span className="text-text-muted">Габариты (Ш×В×Г)</span>
                    <span className="text-text-primary text-right font-medium">{item.specs.dimensions}</span>
                  </div>
                )}
                {item.specs.dispersion && (
                  <div className="grid grid-cols-2 p-3.5">
                    <span className="text-text-muted">Дисперсия</span>
                    <span className="text-text-primary text-right font-medium">{item.specs.dispersion}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4">
              <Link
                href={`/contact?type=equipment&item=${item.slug}`}
                id={`equipment-detail-request-${item.slug}`}
                className="w-full text-center block px-8 py-4 bg-accent-gold text-bg-primary hover:bg-white hover:text-bg-primary font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300"
              >
                Запросить расчет проекта
              </Link>
              <span className="block text-center text-[10px] text-text-muted font-mono mt-3">
                Инсталляционный расчет EASE Focus предоставляется бесплатно.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
