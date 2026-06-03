import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, contact, type, details } = body;

    // Validation
    if (!name || !contact || !type) {
      return NextResponse.json(
        { error: "Поля Имя, Контактные данные и Направление запроса обязательны." },
        { status: 400 }
      );
    }

    // Map request type to Russian human-readable label
    const typeLabels: Record<string, string> = {
      booking: "Букинг диджея (Label & Booking)",
      equipment: "Инсталляция акустики (Acoustics & Hardware)",
      demo: "Отправить демо (A&R лейбла)",
      partnership: "Сотрудничество / Коллаборация",
    };

    const typeLabel = typeLabels[type] || type;

    // Check SMTP configurations
    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT || "465", 10);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASSWORD;
    const toEmail = process.env.CONTACT_EMAIL || "leads@tourmedia.pro";

    if (!host || !user || !pass) {
      console.warn("SMTP credentials are not configured in environment variables. Falling back to console log.");
      return NextResponse.json(
        { 
          success: true, 
          message: "Заявка принята! (Режим отладки: SMTP не настроен в .env.local)" 
        },
        { status: 200 }
      );
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for port 465, false for other ports
      auth: {
        user,
        pass,
      },
    });

    // Formatting nice HTML Email template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: #0a0a0f;
            color: #f0f0f5;
            padding: 30px 15px;
            margin: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #111118;
            border: 1px solid rgba(255, 255, 255, 0.06);
            padding: 40px;
            border-radius: 12px;
          }
          .header {
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding-bottom: 20px;
            margin-bottom: 30px;
          }
          .title {
            color: #d4a853;
            font-size: 24px;
            font-weight: 700;
            margin: 0 0 10px 0;
            letter-spacing: -0.02em;
          }
          .badge {
            display: inline-block;
            background-color: rgba(212, 168, 83, 0.1);
            border: 1px solid rgba(212, 168, 83, 0.2);
            color: #d4a853;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            padding: 4px 12px;
            border-radius: 20px;
            font-weight: 600;
          }
          .field-group {
            margin-bottom: 20px;
          }
          .field-label {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: #5a5a72;
            margin-bottom: 4px;
            font-weight: 600;
          }
          .field-value {
            font-size: 15px;
            color: #f0f0f5;
            line-height: 1.5;
          }
          .details-box {
            background-color: #0a0a0f;
            border: 1px solid rgba(255, 255, 255, 0.04);
            padding: 20px;
            border-radius: 8px;
            white-space: pre-wrap;
            color: #9c9cb0;
          }
          .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.06);
            font-size: 11px;
            color: #5a5a72;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="title">Новая заявка TourMedia</h1>
            <span class="badge">${typeLabel}</span>
          </div>

          <div class="field-group">
            <div class="field-label">Имя / Компания</div>
            <div class="field-value" style="font-weight: bold; color: #ffffff;">${name}</div>
          </div>

          <div class="field-group">
            <div class="field-label">Контакты для связи</div>
            <div class="field-value" style="color: #00f0ff; font-weight: 600;">${contact}</div>
          </div>

          ${
            details
              ? `
          <div class="field-group">
            <div class="field-label">Детали и сообщение</div>
            <div class="details-box">${details}</div>
          </div>
          `
              : ""
          }

          <div class="footer">
            Это автоматическое уведомление системы лидогенерации сайта tourmedia.pro
          </div>
        </div>
      </body>
      </html>
    `;

    // Send the mail
    await transporter.sendMail({
      from: `"TourMedia Leads" <${user}>`,
      to: toEmail,
      subject: `[Лид] ${typeLabel} — ${name}`,
      text: `Новая заявка с сайта TourMedia\n\nТип запроса: ${typeLabel}\nИмя: ${name}\nКонтакты: ${contact}\n\nСообщение:\n${details || "Без деталей"}`,
      html: htmlContent,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: "Ваш запрос успешно отправлен! Наши специалисты свяжутся с вами в ближайшее время." 
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Nodemailer SMTP error:", error);
    return NextResponse.json(
      { 
        error: "Не удалось отправить заявку через почтовый шлюз (ошибка конфигурации SMTP или авторизации). Пожалуйста, свяжитесь с нами напрямую." 
      },
      { status: 500 }
    );
  }
}
