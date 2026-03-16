const steps = [
  {
    title: "Погружение",
    description: "Изучаем вашу нишу и цели",
  },
  {
    title: "Прототип",
    description: "Продумываем структуру сайта",
  },
  {
    title: "Воплощение",
    description: "Делаем дизайн и пишем код",
  },
  {
    title: "Результат",
    description: "Тестируем и запускаем",
  },
];

export default function Work() {
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
        <div className="absolute left-1/3 top-0 h-60 w-60 rounded-full bg-[#89ff1a]/10 blur-3xl" />
        <div className="absolute right-0 bottom-8 h-64 w-64 rounded-full bg-[#34a9df]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1360px] px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold sm:text-4xl lg:text-5xl">
          Путь от идеи до запуска
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
            >
              <p className="text-sm font-semibold tracking-wide text-[#89ff1a]">
                {index + 1}.
              </p>
              <h3 className="mt-2 text-xl font-bold text-white">{step.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-zinc-300">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}