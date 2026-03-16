import Link from "next/link";

const navItems = [
  { label: "Услуги", href: "#about" },
  { label: "Проекты", href: "#work" },
  { label: "Контакты", href: "#contacts" },
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

      <div className="relative mx-auto flex w-full max-w-[1360px] flex-col gap-8 px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold text-[#89ff1a] sm:text-4xl">
              Bas Team
            </h2>
            <p className="mt-3 text-zinc-300">
              Разработка цифровых продуктов
            </p>
          </div>

          <nav className="flex  flex-col flex-wrap items-center gap-x-6 gap-y-2 text-zinc-200">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="transition hover:text-[#89ff1a]">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="space-y-2 text-zinc-200">
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

        <div className="border-t border-white/10 pt-4 text-sm text-zinc-400">
          © 2026 Bas Team
        </div>
      </div>
    </footer>
  );
}