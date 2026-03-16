const services = [
  {
    title: "Разработка и дизайн",
    description:
      "Проектируем логику, создаем современный визуальный стиль и пишем чистый код",
    items: [
      "сложные интернет-проекты",
      "корпоративные сайты",
      "сервисы",
      "программное обеспечение",
    ],
  },
  {
    title: "Трафик и аналитика",
    description: "Не просто запускаем сайт, а делаем его видимым для клиентов",
    items: ["веб-аналитика", "SEO", "подготовка к трафику"],
  },
];

export default function About() {
  return (
    <section
      className="relative overflow-hidden border-t border-white/10 bg-[#04070d] py-16 text-white lg:py-20"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.14) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/3 h-64 w-64 rounded-full bg-[#89ff1a]/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#34a9df]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1360px] px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold sm:text-4xl lg:text-5xl">
          Комплексный подход
        </h2>

        <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm sm:p-8"
            >
              <h3 className="text-2xl font-bold text-[#89ff1a] sm:text-3xl">
                {service.title}
              </h3>
              <p className="mt-4 max-w-[560px] text-base leading-relaxed text-zinc-300 sm:text-lg">
                {service.description}
              </p>

              <ul className="mt-6 space-y-3 text-zinc-100">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base sm:text-lg">
                    <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#89ff1a]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}