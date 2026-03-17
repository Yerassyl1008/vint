import Link from "next/link";

const navItems = [
  { label: "Главная", href: "/" },
  { label: "Проекты", href: "/projects" },
  { label: "Контакты", href: "/contacts" },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden border-t border-white/10 bg-[#04070d] py-10 text-white"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.14) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-12 bottom-0 h-44 w-44 rounded-full bg-[#89ff1a]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1360px] px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8">
          <div className="grid gap-8 md:grid-cols-[1.3fr_0.8fr_1fr]">
            <div className="rounded-2xl border border-white/10 bg-[#0b111a]/50 p-5">
              <h2 className="text-3xl font-extrabold text-[#89ff1a] sm:text-4xl">
                Bas Team
              </h2>
              <p className="mt-3 max-w-[380px] text-zinc-300">
                Разработка цифровых продуктов: от идеи и дизайна до релиза и
                роста.
              </p>
            </div>

            <nav className="rounded-2xl border border-white/10 bg-[#0b111a]/40 p-5">
              <p className="text-sm font-semibold tracking-wide text-zinc-400 uppercase">
                Навигация
              </p>
              <div className="mt-3 flex flex-col gap-2 text-zinc-200">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="transition hover:text-[#89ff1a]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="rounded-2xl border border-white/10 bg-[#0b111a]/40 p-5 text-zinc-200">
              <p className="text-sm font-semibold tracking-wide text-zinc-400 uppercase">
                Контакты
              </p>
              <div className="mt-3 space-y-2">
                <p>
                  <span className="text-zinc-400">Email:</span>{" "}
                  <a
                    href="mailto:basteam@gmail.com"
                    className="transition hover:text-[#89ff1a]"
                  >
                    basteam@gmail.com
                  </a>
                </p>
                <p>
                  <span className="text-zinc-400">Телефон:</span>{" "}
                  <a
                    href="tel:+79525394971"
                    className="transition hover:text-[#89ff1a]"
                  >
                    +7 952 539 49 71
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-[#0a0f18]/70 px-4 py-3 text-sm text-zinc-400">
            © 2026 Bas Team
          </div>
        </div>
      </div>
    </footer>
  );
}