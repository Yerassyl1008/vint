import Link from "next/link";

export default function Contacts() {
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

        <form className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm sm:p-8">
          <h3 className="text-2xl font-bold sm:text-3xl">Форма заявки</h3>

          <div className="mt-6 space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-zinc-300 sm:text-base">
                Имя
              </span>
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                className="w-full rounded-2xl border border-white/15 bg-[#0b0f16] px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-[#89ff1a]"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-zinc-300 sm:text-base">
                Суть задачи
              </span>
              <textarea
                name="task"
                rows={5}
                placeholder="Кратко опишите задачу"
                className="w-full resize-none rounded-2xl border border-white/15 bg-[#0b0f16] px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-[#89ff1a]"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-7 rounded-full bg-[#89ff1a] px-8 py-3 text-base font-bold text-black transition hover:bg-[#9dff46]"
          >
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
}