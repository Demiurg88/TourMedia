"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

// Sub-component that reads params using useSearchParams (requires Suspense wrap in App Router)
function ContactFormContent() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    contact: "", // handles Phone or Email as a single general field
    type: "partnership", // default select value
    details: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const queryType = searchParams.get("type");
    const queryItem = searchParams.get("item");

    if (queryType && ["booking", "equipment", "demo", "partnership"].includes(queryType)) {
      setFormData((prev) => ({
        ...prev,
        type: queryType,
        details: queryItem
          ? `Запрос по объекту: ${queryItem.toUpperCase()}.\nПожалуйста, опишите детали здесь...`
          : prev.details,
      }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    if (!formData.name || !formData.contact) {
      setErrorMsg("Пожалуйста, заполните имя и контактные данные.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMsg(result.message || "Запрос успешно отправлен!");
        setFormData({
          name: "",
          contact: "",
          type: "partnership",
          details: "",
        });
      } else {
        setErrorMsg(result.error || "Произошла ошибка при отправке.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Не удалось подключиться к серверу. Попробуйте позже.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative rounded-none border border-border bg-bg-card/40 p-8 md:p-10">
      {successMsg ? (
        <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <svg className="w-8 h-8 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-text-primary" style={{ fontFamily: "var(--font-display)" }}>
            Заявка отправлена
          </h3>
          <p className="text-text-secondary text-sm max-w-sm leading-relaxed">
            {successMsg}
          </p>
          <button
            onClick={() => setSuccessMsg("")}
            className="mt-6 px-6 py-2.5 border border-border text-xs font-mono uppercase tracking-widest text-text-secondary hover:text-white hover:border-text-primary/60 transition-colors"
          >
            Отправить еще одну
          </button>
        </div>
      ) : (
        <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
          <div className="border-b border-border/60 pb-4">
            <h2 className="text-2xl font-bold text-text-primary" style={{ fontFamily: "var(--font-display)" }}>
              Оставить запрос
            </h2>
            <p className="text-xs text-text-muted mt-1 font-mono uppercase tracking-wider">
              Форма обратной связи TourMedia lead capture
            </p>
          </div>

          {errorMsg && (
            <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-mono">
              [ОШИБКА]: {errorMsg}
            </div>
          )}

          {/* Name Field */}
          <div>
            <label
              htmlFor="contact-name"
              className="block font-mono text-[10px] font-medium text-text-muted uppercase tracking-wider mb-2"
            >
              Ваше имя / Компания *
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Алексей / Nightclub LLC"
              className="w-full px-4 py-3 rounded-none bg-bg-primary/60 border border-border text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-gold/50 focus:ring-0 transition-colors duration-200"
            />
          </div>

          {/* Contact Details Field */}
          <div>
            <label
              htmlFor="contact-details-field"
              className="block font-mono text-[10px] font-medium text-text-muted uppercase tracking-wider mb-2"
            >
              Контактные данные * (Телефон / Telegram / Email)
            </label>
            <input
              type="text"
              id="contact-details-field"
              name="contact"
              required
              value={formData.contact}
              onChange={handleChange}
              placeholder="+7 (999) 000-00-00 or @username / email"
              className="w-full px-4 py-3 rounded-none bg-bg-primary/60 border border-border text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-gold/50 focus:ring-0 transition-colors duration-200"
            />
          </div>

          {/* Request Type Selector */}
          <div>
            <label
              htmlFor="contact-subject"
              className="block font-mono text-[10px] font-medium text-text-muted uppercase tracking-wider mb-2"
            >
              Направление запроса *
            </label>
            <div className="relative">
              <select
                id="contact-subject"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-none bg-bg-primary/60 border border-border text-sm text-text-primary focus:outline-none focus:border-accent-gold/50 focus:ring-0 transition-colors duration-200 appearance-none cursor-pointer"
              >
                <option value="booking">Букинг диджея (Label &amp; Booking)</option>
                <option value="equipment">Инсталляция акустики (Acoustics &amp; Hardware)</option>
                <option value="demo">Отправить демо (A&amp;R лейбла)</option>
                <option value="partnership">Сотрудничество / Коллаборация</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-text-muted">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Message / Details Field */}
          <div>
            <label
              htmlFor="contact-message"
              className="block font-mono text-[10px] font-medium text-text-muted uppercase tracking-wider mb-2"
            >
              Дополнительные детали проекта
            </label>
            <textarea
              id="contact-message"
              name="details"
              rows={4}
              value={formData.details}
              onChange={handleChange}
              placeholder="Опишите ваши задачи, дату события или желаемый состав оборудования..."
              className="w-full px-4 py-3 rounded-none bg-bg-primary/60 border border-border text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-gold/50 focus:ring-0 transition-colors duration-200 resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            id="contact-submit"
            disabled={loading}
            className="w-full text-center block px-8 py-4 bg-accent-gold text-bg-primary hover:bg-white hover:text-bg-primary font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Отправка Lead данных..." : "Отправить спецификацию"}
          </button>
        </form>
      )}

      {/* Decorative corner brackets */}
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-border" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-border" />
    </div>
  );
}

// Wrapper to prevent Hydration & App router suspense boundaries issue
export default function ContactForm() {
  return (
    <Suspense fallback={<div className="text-sm font-mono text-text-muted py-10">Загрузка формы...</div>}>
      <ContactFormContent />
    </Suspense>
  );
}
