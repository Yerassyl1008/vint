"use client";

import Link from "next/link";
import type { MouseEvent } from "react";

const projects = [
  {
    title: "Doma.ai — автоматизация ЖКХ",
    description:
      "Платформа для управляющих компаний: биллинг, заявки, мобильное приложение жителей и интеграции с умным домом. Реализована админ-панель с аналитикой и автоматизация расчётов.",
    image: "/image (7).png",
  },
  {
    title: "HowToEat — доставка питания",
    description:
      "Сервис здорового питания с каталогом программ, онлайн-оплатой и CRM системой. Реализованы алгоритмы маршрутизации курьеров и аналитика заказов.",
    image: "/image (8).png",
  },
  {
    title: "Оптимизация маршрутов дронов",
    description:
      "Система расчёта оптимальных маршрутов сельскохозяйственных дронов с учётом топлива, конфигурации полей и логистики бригады.",
    image: "/image (9).png",
  },
  {
    title: "TGSuperStars — Telegram сервис",
    description:
      "Платформа для продажи Telegram Stars и Premium с интеграцией платежей, антифродом, реферальной системой и TON blockchain.",
    image: "/image (10).png",
  },
];

export default function ProjectsSection() {
  const handleContactsClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const contactsSection = document.getElementById("contacts");
    if (!contactsSection) return;

    event.preventDefault();
    contactsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", "#contacts");
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#04070d] py-16 text-white lg:py-20"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.14) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-10 h-64 w-64 rounded-full bg-[#89ff1a]/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-[#34a9df]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1360px] px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold sm:text-4xl lg:text-5xl">
          Проекты
        </h2>
        <p className="mx-auto mt-4 max-w-[760px] text-center text-zinc-300">
          Несколько примеров того, как мы превращаем идею в понятный и
          работающий digital-продукт.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-12">
          {projects.map((project) => (
            <Link
              key={project.title}
              href="/#contacts"
              onClick={handleContactsClick}
              aria-label={`${project.title} — обсудить проект, перейти к форме контактов`}
              className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm transition duration-300 hover:scale-[1.02] hover:border-[#89ff1a]/40 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#89ff1a]"
            >
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img
                  src={project.image}
                  alt=""
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#89ff1a]">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300 transition-colors duration-300 group-hover:text-zinc-200 sm:text-base">
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
