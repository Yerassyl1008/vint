# Bas Team Website

Сайт студии Bas Team на Next.js (App Router) с адаптивным интерфейсом и backend-обработчиком формы в Telegram.

## Технологический стек

- **Frontend:** Next.js 16, React 19, TypeScript
- **UI:** Tailwind CSS 4
- **Backend:** Next.js Route Handlers (Node.js runtime)
- **Валидация формы:** Zod
- **Деплой:** Vercel

## Что реализовано

- Главная страница с секциями:
  - Hero
  - Услуги
  - Проекты
  - Контакты
- Отдельные страницы:
  - `/services`
  - `/projects`
  - `/contacts`
- Header + mobile burger меню
- Footer с навигацией, контактами и WhatsApp-иконкой
- Форма обратной связи с отправкой данных в Telegram

## Структура проекта

```txt
app/
  api/contact/route.ts            # backend endpoint формы
  components/
    header/
    hero/
    about/
    work/
    projects/
    contacts/
    footer/
  main-page/page.tsx              # композиция главной страницы
  services/page.tsx
  projects/page.tsx
  contacts/page.tsx
  page.tsx                        # корневой роут, рендерит main-page
```

## Локальный запуск

1. Установить зависимости:

```bash
npm install
```

2. Создать файл `.env.local` на основе `.env.example`:

```bash
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
```

3. Запустить проект:

```bash
npm run dev
```

4. Открыть:

```txt
http://localhost:3000
```

## Backend формы (Telegram)

Эндпоинт: `POST /api/contact`  
Файл: `app/api/contact/route.ts`

Что делает:
- принимает JSON с полями `name`, `contact`, `task`
- валидирует payload
- отправляет сообщение через Telegram Bot API `sendMessage`

### Как получить Telegram данные

1. Создать бота через [@BotFather](https://t.me/BotFather)
2. Взять токен и записать в `TELEGRAM_BOT_TOKEN`
3. Написать боту `/start`
4. Открыть:

```txt
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
```

5. В JSON найти `message.chat.id` и записать в `TELEGRAM_CHAT_ID`

## Деплой на Vercel

1. Подключить Git-репозиторий к Vercel
2. В `Project Settings -> Environment Variables` добавить:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
3. Сделать redeploy проекта

### Важно

- `.env.local` не коммитится в Git
- если токен был опубликован, его нужно перевыпустить в `@BotFather`

## Полезные команды

```bash
npm run dev      # локальная разработка
npm run build    # production build
npm run start    # запуск production-сборки
npm run lint     # eslint
```

## Частые проблемы

### Форма не работает на Vercel

Обычно причина в env-переменных:
- не добавлены `TELEGRAM_BOT_TOKEN`/`TELEGRAM_CHAT_ID`
- не выполнен redeploy после добавления env
- бот не получил `/start`, поэтому chat id невалиден

Проверяйте логи функции `/api/contact` в Vercel.
