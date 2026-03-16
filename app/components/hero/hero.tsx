import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[#04070d] text-white"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 15%, rgba(255,255,255,0.14) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#89ff1a]/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#34a9df]/15 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-84px)] w-full max-w-[1360px] items-center gap-10 px-6 py-14 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-20">
        <div className="max-w-[680px]">
          <h1 className="text-4xl leading-[1.1] font-extrabold text-white sm:text-5xl lg:text-6xl">
            Создаем цифровые решения для роста вашего бизнеса
          </h1>

          <p className="mt-6 max-w-[620px] text-base leading-relaxed text-zinc-300 sm:text-lg">
            Берем на себя весь цикл: от проектирования и дизайна
            <br />
            до технической реализации и вывода сайта
            <br />в топ поисковых систем
          </p>

          <Link
            href="#"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#89ff1a] px-8 py-4 text-base font-bold text-black transition hover:bg-[#9dff46]"
          >
            Начать проект
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] lg:mx-0">
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#89ff1a]/25 via-[#34a9df]/10 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 h-32 rounded-2xl bg-gradient-to-r from-[#89ff1a]/25 to-[#34a9df]/15" />
              <div className="h-24 rounded-2xl bg-white/5" />
              <div className="h-24 rounded-2xl bg-white/5" />
              <div className="col-span-2 h-16 rounded-2xl bg-[#89ff1a]/15" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}