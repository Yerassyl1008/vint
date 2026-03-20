 "use client";

import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";

/** Одно превью для макета — файл в `public/5325910389830652808.jpg` */
const marketplaceMockupImage = {
  src: "/5325910389830652808.jpg",
  alt: "Интерфейс B2B-маркетплейса и ERP",
} as const;

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.813l1.048 1.381C6.402 7.723 5 10.5 5 13c0 1.5.5 2.5 1.5 3.5L4.583 17.321zm11.834 0C15.387 16.227 14.834 15 14.834 13.011c0-3.5 2.457-6.637 6.03-8.813l1.048 1.381C17.653 7.723 16.25 10.5 16.25 13c0 1.5.5 2.5 1.5 3.5l-1.667-1.179z" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" aria-hidden="true" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function ReviewPersonAvatar({ variant }: { variant: "lime" | "sky" }) {
  const styles =
    variant === "lime"
      ? "border-[#89ff1a]/35 bg-[#89ff1a]/12 text-[#cfff9f]"
      : "border-[#8dcfff]/40 bg-[#8dcfff]/12 text-[#bae6fd]";
  return (
    <div
      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${styles}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    </div>
  );
}

export default function Hero() {
  const handleContactsClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const contactsSection = document.getElementById("contacts");
    if (!contactsSection) return;

    event.preventDefault();
    contactsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", "#contacts");
  };

  return (
    <section
      className="relative overflow-x-hidden bg-[#04070d] text-white"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 15%, rgba(255,255,255,0.14) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#89ff1a]/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#34a9df]/15 blur-3xl" />
        <div className="hero-mesh absolute right-[8%] top-[18%] h-64 w-64 rounded-full bg-white/35" />
        <div className="hero-mesh hero-mesh-delay absolute right-[2%] top-[35%] h-72 w-72 rounded-full bg-[#b9cbff]/30" />
        <div className="hero-mesh hero-mesh-slow absolute right-[15%] top-[48%] h-64 w-64 rounded-full bg-[#ddd1ff]/22" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1360px] flex-col items-center gap-10 px-6 py-14 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-8 lg:py-16">
        <div className="mx-auto flex w-full min-w-0 max-w-[680px] flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left">
          <h1 className="text-4xl leading-[1.1] font-extrabold text-white sm:text-5xl lg:text-5xl">
            Создаем цифровые решения для роста вашего бизнеса
          </h1>

          <p className="mt-6 max-w-[620px] text-base leading-relaxed text-zinc-300 sm:text-lg">
            Берем на себя весь цикл: от проектирования и дизайна
            <br />
            до технической реализации и вывода сайта
            <br />в топ поисковых систем
          </p>

          <div className="mt-6 flex w-full flex-wrap justify-center gap-3 lg:justify-start">
            <Link
              href="#contacts"
              onClick={handleContactsClick}
              className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-medium text-zinc-200 transition-all duration-300 ease-out hover:scale-[1.04] hover:border-[#89ff1a]/50 hover:bg-[#89ff1a]/15 hover:text-[#cfff9f] hover:shadow-[0_0_24px_rgba(137,255,26,0.22)] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#89ff1a]"
            >
              Web-разработка
            </Link>
            <Link
              href="#contacts"
              onClick={handleContactsClick}
              className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-medium text-zinc-200 transition-all duration-300 ease-out hover:scale-[1.04] hover:border-[#89ff1a]/50 hover:bg-[#89ff1a]/15 hover:text-[#cfff9f] hover:shadow-[0_0_24px_rgba(137,255,26,0.22)] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#89ff1a]"
            >
              UX/UI дизайн
            </Link>
            <Link
              href="#contacts"
              onClick={handleContactsClick}
              className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-medium text-zinc-200 transition-all duration-300 ease-out hover:scale-[1.04] hover:border-[#89ff1a]/50 hover:bg-[#89ff1a]/15 hover:text-[#cfff9f] hover:shadow-[0_0_24px_rgba(137,255,26,0.22)] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#89ff1a]"
            >
              SEO и аналитика
            </Link>
          </div>

          <Link
            href="#contacts"
            onClick={handleContactsClick}
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#89ff1a] px-8 py-4 text-base font-bold text-black transition hover:bg-[#9dff46]"
          >
            Начать проект
            <span aria-hidden="true">→</span>
          </Link>

          <div className="mt-8 grid w-full max-w-[560px] grid-cols-3 gap-3 sm:gap-4 lg:mx-0">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center backdrop-blur-sm lg:text-left">
              <p className="text-2xl font-extrabold text-[#89ff1a]">30+</p>
              <p className="mt-1 text-xs text-zinc-300 sm:text-sm">проектов в портфеле</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center backdrop-blur-sm lg:text-left">
              <p className="text-2xl font-extrabold text-[#89ff1a]">8 лет</p>
              <p className="mt-1 text-xs text-zinc-300 sm:text-sm">в digital-разработке</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center backdrop-blur-sm lg:text-left">
              <p className="text-2xl font-extrabold text-[#89ff1a]">14 дней</p>
              <p className="mt-1 text-xs text-zinc-300 sm:text-sm">на первый релиз</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full min-w-0 max-w-[560px] lg:mx-0">
          <div className="absolute left-3 top-8 hidden rounded-2xl border border-white/10 bg-[#0b111a]/80 px-4 py-3 text-sm text-zinc-200 backdrop-blur-md xl:block">
            <p className="text-[#89ff1a]">+42%</p>
            <p className="mt-1">рост конверсии</p>
          </div>
          <div className="absolute right-3 bottom-8 hidden rounded-2xl border border-white/10 bg-[#0b111a]/80 px-4 py-3 text-sm text-zinc-200 backdrop-blur-md xl:block">
            <p className="text-[#8dcfff]">MVP за 3 недели</p>
            <p className="mt-1">быстрый запуск</p>
          </div>
          <div className="hero-float absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#89ff1a]/25 via-[#8dcfff]/12 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-[#0b111a]/70 p-4 backdrop-blur-md sm:p-5">
            <div className="mb-3 flex min-h-[2rem] flex-wrap items-center gap-2 border-b border-white/10 pb-2.5 sm:flex-nowrap">
              <div className="flex shrink-0 gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              </div>
              <div className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-3 w-3 shrink-0 text-zinc-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="5" y="11" width="14" height="10" rx="2" />
                  <path d="M8 11V8a4 4 0 0 1 8 0v3" />
                </svg>
                <span className="truncate text-[10px] text-zinc-400">
                  bas-team.online<span className="text-zinc-500">/projects</span>
                </span>
                <span className="ml-auto shrink-0 rounded bg-[#89ff1a]/15 px-1.5 py-0.5 text-[8px] font-medium text-[#cfff9f]">
                  Live
                </span>
              </div>
              <div className="ml-auto flex shrink-0 items-center gap-1.5 text-[9px] text-zinc-500">
                <span className="hidden sm:inline">Обновлено сейчас</span>
                <span className="h-2 w-8 rounded-full bg-white/10" />
                <span className="h-2 w-2 rounded-full bg-emerald-400/80" title="" />
              </div>
            </div>

            <div className="grid gap-2.5">
              <div className="flex aspect-[16/9] w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-1.5 sm:p-2">
                <div className="mb-1 shrink-0 flex flex-wrap items-center justify-between gap-1.5">
                  <span className="text-[9px] font-semibold uppercase tracking-wide text-zinc-500">
                    CRM · админ-панель
                  </span>
                  <div className="flex items-center gap-1.5 text-[8px] text-zinc-500">
                    <span>Next.js</span>
                    <span className="text-zinc-600">·</span>
                    <span>PostgreSQL</span>
                    <span className="rounded border border-[#89ff1a]/30 bg-[#89ff1a]/10 px-1 py-0.5 font-medium text-[#cfff9f]">
                      staging
                    </span>
                  </div>
                </div>
                <div className="flex min-h-0 flex-1 gap-1 sm:gap-1.5">
                  <div className="flex h-full min-h-0 w-[32%] shrink-0 flex-col overflow-hidden rounded-lg border border-white/12 bg-gradient-to-b from-[#0c121c] to-[#080c14] p-1 shadow-inner shadow-black/40 sm:p-1.5">
                    <div className="mb-1 flex items-center gap-1 border-b border-white/10 pb-1">
                      <span className="flex h-5 w-5 items-center justify-center rounded-md bg-[#89ff1a]/20 text-[9px] font-bold text-[#cfff9f]">
                        B
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[9px] font-semibold text-zinc-200">Bas CRM</p>
                        <p className="text-[7px] text-zinc-500">Панель менеджера</p>
                      </div>
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" title="" />
                    </div>
                    <div className="mb-1 flex items-center gap-1 rounded-md border border-white/10 bg-black/30 px-1 py-0.5">
                      <svg
                        className="h-2.5 w-2.5 shrink-0 text-zinc-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <circle cx="11" cy="11" r="7" />
                        <path d="M20 20l-3-3" strokeLinecap="round" />
                      </svg>
                      <span className="truncate text-[7px] text-zinc-500">Поиск по клиентам…</span>
                    </div>
                    <nav className="min-h-0 flex-1 space-y-px overflow-hidden" aria-hidden="true">
                      <div className="flex items-center gap-1 rounded-md border border-[#89ff1a]/25 bg-[#89ff1a]/10 px-1 py-0.5 text-[7px] font-medium leading-tight text-[#cfff9f]">
                        <svg className="h-2.5 w-2.5 shrink-0 opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                        </svg>
                        Дашборд
                      </div>
                      <div className="flex items-center gap-1 rounded-md px-1 py-0.5 text-[7px] leading-tight text-zinc-400">
                        <svg className="h-2.5 w-2.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Клиенты
                      </div>
                      <div className="flex items-center gap-1 rounded-md px-1 py-0.5 text-[7px] leading-tight text-zinc-400">
                        <svg className="h-2.5 w-2.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" />
                        </svg>
                        Сделки
                      </div>
                    </nav>
                    <div className="mt-auto grid grid-cols-2 gap-0.5 border-t border-white/10 pt-1">
                      <div className="rounded border border-white/8 bg-white/[0.04] px-0.5 py-1 text-center">
                        <p className="text-[9px] font-bold leading-none text-[#89ff1a]">1.2k</p>
                        <p className="text-[5px] uppercase tracking-wide text-zinc-500">лиды</p>
                      </div>
                      <div className="rounded border border-white/8 bg-white/[0.04] px-0.5 py-1 text-center">
                        <p className="text-[9px] font-bold leading-none text-[#8dcfff]">94%</p>
                        <p className="text-[5px] uppercase tracking-wide text-zinc-500">воронка</p>
                      </div>
                    </div>
                    <div className="mt-1 flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.04] p-1">
                      <div className="h-5 w-5 shrink-0 rounded-full bg-gradient-to-br from-[#89ff1a]/50 to-[#34a9df]/40 ring-1 ring-white/15" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[8px] font-medium text-zinc-300">Администратор</p>
                        <p className="text-[7px] text-emerald-400/90">● В сети</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-0.5 overflow-hidden sm:gap-1">
                    <div className="flex flex-wrap items-center gap-1">
                      <span className="text-[10px] font-semibold leading-tight text-white">B2B-маркетплейс</span>
                      <span className="rounded-full border border-[#8dcfff]/25 bg-[#8dcfff]/10 px-2 py-0.5 text-[8px] font-medium text-[#bae6fd]">
                        ERP
                      </span>
                      <span className="rounded-full bg-white/10 px-2 py-0.5 text-[8px] text-zinc-400">
                        RFQ · тендеры
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-0.5">
                      <span className="rounded border border-white/10 bg-white/[0.04] px-1 py-0.5 text-[6px] text-zinc-500">
                        Поставщики
                      </span>
                      <span className="rounded border border-white/10 bg-white/[0.04] px-1 py-0.5 text-[6px] text-zinc-500">
                        Закупки
                      </span>
                      <span className="rounded border border-white/10 bg-white/[0.04] px-1 py-0.5 text-[6px] text-zinc-500">
                        Логистика
                      </span>
                    </div>
                    <div className="relative min-h-0 flex-1 overflow-hidden rounded-lg border border-white/10">
                      <Image
                        src={marketplaceMockupImage.src}
                        alt={marketplaceMockupImage.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 320px"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b111a] via-[#0b111a]/45 to-[#0b111a]/20" />
                      <p className="absolute bottom-1 left-1.5 z-[1] max-w-[92%] text-[8px] font-medium leading-snug text-white drop-shadow">
                        Поставщики и заявки — одна площадка для закупок
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <QuoteIcon className="pointer-events-none absolute right-2 top-2 h-7 w-7 text-white/[0.08]" />
                  <div className="mb-3 flex items-center gap-2.5 pr-5">
                    <ReviewPersonAvatar variant="lime" />
                    <div className="min-w-0 text-left">
                      <p className="text-xs font-medium text-zinc-100">Алексей, eCom</p>
                      <p className="text-[11px] text-zinc-400">владелец магазина</p>
                    </div>
                  </div>
                  <p className="text-left text-[11px] leading-relaxed text-zinc-300">
                    &quot;Запустили сайт за 2 недели. Конверсии выросли, а заявки теперь
                    приходят стабильно каждый день.&quot;
                  </p>
                  <div className="mt-3 flex items-center gap-0.5 text-[#89ff1a]" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="h-3 w-3" />
                    ))}
                  </div>
                </div>
                <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <QuoteIcon className="pointer-events-none absolute right-2 top-2 h-7 w-7 text-white/[0.08]" />
                  <div className="mb-3 flex items-center gap-2.5 pr-5">
                    <ReviewPersonAvatar variant="sky" />
                    <div className="min-w-0 text-left">
                      <p className="text-xs font-medium text-zinc-100">Марина, SaaS</p>
                      <p className="text-[11px] text-zinc-400">продакт-менеджер</p>
                    </div>
                  </div>
                  <p className="text-left text-[11px] leading-relaxed text-zinc-300">
                    &quot;Сделали понятный UX и аккуратный дизайн. MVP собрали быстро,
                    команда всегда была на связи.&quot;
                  </p>
                  <div className="mt-3 flex items-center gap-0.5 text-[#8dcfff]" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="h-3 w-3" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[#89ff1a]/25 bg-gradient-to-r from-[#89ff1a]/20 to-[#8dcfff]/15 p-3">
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#89ff1a]" />
                    <span className="text-[10px] font-medium text-zinc-300">CI/CD pipeline</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="rounded border border-black/20 bg-black/15 px-1.5 py-0.5 text-[8px] text-zinc-400">
                      lint ✓
                    </span>
                    <span className="rounded border border-black/20 bg-black/15 px-1.5 py-0.5 text-[8px] text-zinc-400">
                      tests ✓
                    </span>
                    <span className="rounded border border-black/20 bg-black/15 px-1.5 py-0.5 text-[8px] text-zinc-400">
                      build
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-2 rounded-full bg-black/20" />
                  <div className="h-2 rounded-full bg-black/20" />
                  <div className="h-2 rounded-full bg-black/20" />
                </div>
                <div className="mt-2 flex flex-wrap items-center justify-between gap-2 border-t border-black/10 pt-2 text-[9px]">
                  <span className="text-zinc-500">Деплой на production · 2 мин назад</span>
                  <span className="font-semibold text-[#cfff9f]">Готово 100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}