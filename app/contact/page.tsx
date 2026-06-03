import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Свяжитесь с TourMedia: букинг артистов, заказ акустического оборудования, сотрудничество и партнёрство.",
};

const contactChannels = [
  {
    title: "Букинг артистов",
    email: "booking@tourmedia.pro",
    description: "Для заказа DJ на мероприятие или фестиваль.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
      </svg>
    ),
    accent: "primary",
  },
  {
    title: "Продажи акустики",
    email: "sales@tourmedia.pro",
    description: "Каталог, цены и индивидуальные проекты.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
    ),
    accent: "secondary",
  },
  {
    title: "Общие вопросы",
    email: "info@tourmedia.pro",
    description: "Партнёрство, пресса и другие запросы.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    accent: "primary",
  },
];

export default function ContactPage() {
  return (
    <section className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-[var(--font-display)]">
            <span className="gradient-text">Связаться</span>
            <span className="text-text-primary"> с нами</span>
          </h1>
          <p className="mt-6 text-lg text-text-secondary leading-relaxed">
            Есть вопрос, идея или предложение? Мы всегда на связи. 
            Выберите нужный отдел или заполните форму ниже.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Channels */}
          <div className="lg:col-span-2 space-y-6">
            {contactChannels.map((channel) => (
              <div
                key={channel.title}
                id={`contact-${channel.title.toLowerCase().replace(/\s+/g, "-")}`}
                className={`group rounded-2xl border border-border bg-bg-card p-6 hover:shadow-xl transition-all duration-500 ${
                  channel.accent === "primary"
                    ? "hover:border-accent-primary/20 hover:shadow-accent-primary/5"
                    : "hover:border-accent-secondary/20 hover:shadow-accent-secondary/5"
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                  channel.accent === "primary"
                    ? "bg-accent-primary/10 text-accent-primary"
                    : "bg-accent-secondary/10 text-accent-secondary"
                }`}>
                  {channel.icon}
                </div>
                <h3 className="text-base font-bold text-text-primary mb-1">
                  {channel.title}
                </h3>
                <p className="text-sm text-text-secondary mb-3">
                  {channel.description}
                </p>
                <a
                  href={`mailto:${channel.email}`}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    channel.accent === "primary"
                      ? "text-accent-primary hover:text-accent-primary/80"
                      : "text-accent-secondary hover:text-accent-secondary/80"
                  }`}
                >
                  {channel.email}
                </a>
              </div>
            ))}

            {/* Location */}
            <div className="rounded-2xl border border-border bg-bg-card p-6">
              <h3 className="text-base font-bold text-text-primary mb-2">
                Адрес
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Москва, Россия
                <br />
                ул. Звуковая, 42
                <br />
                Бизнес-центр «Resonance»
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
