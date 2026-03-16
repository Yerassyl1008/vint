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
        <div className="hero-mesh absolute right-[8%] top-[18%] h-64 w-64 rounded-full bg-white/35" />
        <div className="hero-mesh hero-mesh-delay absolute right-[2%] top-[35%] h-72 w-72 rounded-full bg-[#b9cbff]/30" />
        <div className="hero-mesh hero-mesh-slow absolute right-[15%] top-[48%] h-64 w-64 rounded-full bg-[#ddd1ff]/22" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-84px)] w-full max-w-[1360px] items-center gap-10 px-6 py-14 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-20">
        <div className="max-w-[680px]">
          <h1 className="text-4xl leading-[1.1] font-extrabold text-white sm:text-5xl lg:text-5xl">
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
          <div className="hero-float absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#89ff1a]/25 via-[#8dcfff]/12 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-[#0b111a]/70 p-6 backdrop-blur-md sm:p-8">
            <div className="mb-5 flex items-center gap-2 border-b border-white/10 pb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="ml-3 h-2 w-24 rounded-full bg-white/10" />
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <div className="mb-3 h-2 w-24 rounded-full bg-white/15" />
                <svg viewBox="0 0 320 96" aria-hidden="true" className="h-24 w-full">
                  <path
                    d="M0 72 C30 65 40 30 70 38 C98 45 106 86 140 68 C170 52 175 20 208 25 C236 29 248 58 278 56 C300 54 310 44 320 32"
                    fill="none"
                    stroke="rgba(149, 255, 70, 0.9)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0 88 L320 88"
                    fill="none"
                    stroke="rgba(255,255,255,0.18)"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="space-y-2.5">
                    <div className="h-2 w-16 rounded-full bg-white/20" />
                    <div className="h-2 w-full rounded-full bg-white/10" />
                    <div className="h-2 w-4/5 rounded-full bg-white/10" />
                    <div className="h-2 w-3/5 rounded-full bg-white/10" />
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="space-y-2.5">
                    <div className="h-2 w-14 rounded-full bg-white/20" />
                    <div className="h-2 w-full rounded-full bg-white/10" />
                    <div className="h-2 w-2/3 rounded-full bg-white/10" />
                    <div className="h-2 w-5/6 rounded-full bg-white/10" />
                  </div>
                </div>
              </div>

              <div className="h-12 rounded-2xl border border-[#89ff1a]/25 bg-gradient-to-r from-[#89ff1a]/20 to-[#8dcfff]/15" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}