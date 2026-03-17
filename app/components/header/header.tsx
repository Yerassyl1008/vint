 "use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Услуги", href: "/services" },
  { label: "Проекты", href: "/projects" },
  { label: "Контакты", href: "/contacts" },
];

function TelegramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-white"
    >
      <path d="M20.67 3.61a1.5 1.5 0 0 0-1.55-.2L3.95 9.87a1.5 1.5 0 0 0 .08 2.8l3.8 1.36 1.36 4.53a1.5 1.5 0 0 0 2.62.55l2.31-2.79 3.97 2.94a1.5 1.5 0 0 0 2.36-.9l2.23-13.1a1.5 1.5 0 0 0-.61-1.65Zm-2.69 3.59-8.46 7.94-.84-2.81 9.3-5.13Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 stroke-zinc-400"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.11 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.77.65 2.61a2 2 0 0 1-.45 2.11L8.06 9.69a16 16 0 0 0 6.25 6.25l1.25-1.25a2 2 0 0 1 2.11-.45c.84.31 1.71.53 2.61.65A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 stroke-white"
      fill="none"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <path d="M4 7h16M4 12h16M4 17h10" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 stroke-white"
      fill="none"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/10 bg-[#04070d]/95 text-white backdrop-blur-md"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.14) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="mx-auto flex h-[84px] w-full max-w-[1360px] items-center gap-8 px-6 lg:px-8">
        <Link
          href="/"
          className="shrink-0 text-3xl leading-none font-black items-center tracking-tight text-[#89ff1a]" 
        >
         Bas Team
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-7 text-[18px] font-semibold lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="whitespace-nowrap text-white/95 transition hover:text-[#89ff1a]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-4 lg:flex">
          <Link
            href="tel:+79651177403"
            className="whitespace-nowrap text-[18px] font-semibold leading-none text-white/95 transition hover:text-[#89ff1a]"
          >
            +7 (952) 539-49-71
          </Link>
          <Link
            href="#"
            aria-label="Telegram"
            className="flex items-center justify-center rounded-full bg-[#34a9df] transition hover:scale-105"
          >
            <Image src="/Telegram_2019_Logo.svg.png" alt="Telegram" width={34} height={34} />
          </Link>
          <button
            type="button"
            className="rounded-full bg-[#89ff1a] px-8 py-3 text-[18px] font-bold text-black transition hover:bg-[#9dff46]"
          >
            Обсудить проект
          </button>
        </div>

        <div className="ml-auto flex items-center gap-3 lg:hidden">
          <Link
            href="#"
            aria-label="Telegram"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#34a9df]"
          >
            <TelegramIcon />
          </Link>
          <Link
            href="tel:+79525394971"
            aria-label="Телефон"
            className="flex h-9 w-9 items-center justify-center"
          >
            <PhoneIcon />
          </Link>
          <button
            type="button"
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#050910] px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-4 text-lg font-semibold">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="text-white/95 transition hover:text-[#89ff1a]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-6 flex flex-col gap-4">
            <Link
              href="tel:+79525394971"
              onClick={closeMenu}
              className="text-lg font-semibold text-white/95 transition hover:text-[#89ff1a]"
            >
              +7 (952) 539-49-71
            </Link>
            <button
              type="button"
              onClick={closeMenu}
              className="w-full rounded-full bg-[#89ff1a] px-6 py-3 text-base font-bold text-black transition hover:bg-[#9dff46]"
            >
              Обсудить проект
            </button>
          </div>
        </div>
      )}
    </header>
  );
}