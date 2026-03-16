"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Введите имя (минимум 2 символа)."),
  contact: z
    .string()
    .trim()
    .min(4, "Введите телефон или Telegram.")
    .refine((value) => {
      const normalized = value.replace(/\s+/g, "");
      const phoneDigits = normalized.replace(/\D/g, "");
      const isPhone = phoneDigits.length >= 10;
      const isTelegram = /^@?[a-zA-Z0-9_]{5,}$/.test(normalized);
      return isPhone || isTelegram;
    }, "Укажите корректный телефон или Telegram."),
  task: z
    .string()
    .trim()
    .min(10, "Опишите задачу подробнее (минимум 10 символов)."),
});

type ContactFormData = z.infer<typeof contactSchema>;
type FormErrors = Partial<Record<keyof ContactFormData, string>>;

export default function Contacts() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(false);

    const formData = new FormData(event.currentTarget);
    const values: ContactFormData = {
      name: String(formData.get("name") ?? ""),
      contact: String(formData.get("contact") ?? ""),
      task: String(formData.get("task") ?? ""),
    };

    const result = contactSchema.safeParse(values);

    if (!result.success) {
      const nextErrors: FormErrors = {};
      const fieldErrors = result.error.flatten().fieldErrors;
      if (fieldErrors.name?.[0]) nextErrors.name = fieldErrors.name[0];
      if (fieldErrors.contact?.[0]) nextErrors.contact = fieldErrors.contact[0];
      if (fieldErrors.task?.[0]) nextErrors.task = fieldErrors.task[0];
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <section
      id="contacts"
      className="relative overflow-hidden bg-[#04070d] py-16 text-white lg:py-20"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.14) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-12 h-72 w-72 rounded-full bg-[#89ff1a]/10 blur-3xl" />
        <div className="absolute right-0 bottom-6 h-72 w-72 rounded-full bg-[#34a9df]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1360px] items-start gap-8 px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-10 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm sm:p-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Контакты</h2>
          <p className="mt-4 max-w-[420px] text-zinc-300">
            Расскажите о задаче, а мы предложим решение и план запуска.
          </p>

          <Link
            href="https://t.me/username"
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#89ff1a] px-8 py-4 text-base font-bold text-black transition hover:bg-[#9dff46]"
          >
            Написать в Telegram
            <span aria-hidden="true">→</span>
          </Link>

          <div className="mt-9 space-y-3 text-base sm:text-lg">
            <p>
              <span className="text-zinc-400">Email:</span>{" "}
              <a
                href="mailto:basteam@gmail.com"
                className="text-white transition hover:text-[#89ff1a]"
              >
                basteam@gmail.com
              </a>
            </p>
            <p>
              <span className="text-zinc-400">Телефон:</span>{" "}
              <a
                href="tel:+79525394971"
                className="text-white transition hover:text-[#89ff1a]"
              >
                +7 952 539 49 71
              </a>
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm sm:p-8"
          noValidate
        >
          <h3 className="text-2xl font-bold sm:text-3xl">Форма заявки</h3>

          <div className="mt-6 space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-zinc-300 sm:text-base">
                Ваше имя
              </span>
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                aria-invalid={Boolean(errors.name)}
                className={`w-full rounded-2xl border bg-[#0b0f16] px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-[#89ff1a] ${
                  errors.name ? "border-red-400/80" : "border-white/15"
                }`}
              />
              {errors.name ? (
                <span className="mt-2 block text-sm text-red-300">{errors.name}</span>
              ) : null}
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-zinc-300 sm:text-base">
                Телефон или Telegram
              </span>
              <input
                type="text"
                name="contact"
                placeholder="+7 (___) ___-__-__ или @username"
                aria-invalid={Boolean(errors.contact)}
                className={`w-full rounded-2xl border bg-[#0b0f16] px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-[#89ff1a] ${
                  errors.contact ? "border-red-400/80" : "border-white/15"
                }`}
              />
              {errors.contact ? (
                <span className="mt-2 block text-sm text-red-300">
                  {errors.contact}
                </span>
              ) : null}
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-zinc-300 sm:text-base">
                Кратко о задаче
              </span>
              <textarea
                name="task"
                rows={5}
                placeholder="Кратко опишите задачу"
                aria-invalid={Boolean(errors.task)}
                className={`w-full resize-none rounded-2xl border bg-[#0b0f16] px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-[#89ff1a] ${
                  errors.task ? "border-red-400/80" : "border-white/15"
                }`}
              />
              {errors.task ? (
                <span className="mt-2 block text-sm text-red-300">{errors.task}</span>
              ) : null}
            </label>
          </div>

          <button
            type="submit"
            className="mt-7 rounded-full bg-[#89ff1a] px-8 py-3 text-base font-bold text-black transition hover:bg-[#9dff46]"
          >
            Отправить
          </button>
          {isSubmitted ? (
            <p className="mt-3 text-sm text-[#89ff1a]">
              Спасибо! Заявка прошла валидацию.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}