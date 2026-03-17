This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Contact form backend (Node.js + Telegram)

The project has a backend handler at `app/api/contact/route.ts` that receives form data and sends it to Telegram Bot API.

### 1) Configure environment variables

Copy `.env.example` to `.env.local` and set real values:

```bash
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
```

### 2) How to get credentials

- Create bot in Telegram via [@BotFather](https://t.me/BotFather) and copy token.
- Open chat with your bot (or add bot to a group/channel).
- Get chat id by calling:

```bash
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
```

Find `chat.id` in the response JSON and place it into `TELEGRAM_CHAT_ID`.

### 3) Run project

```bash
npm run dev
```

Now the form in `Контакты` sends submissions to `/api/contact`, and backend forwards them to Telegram.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
