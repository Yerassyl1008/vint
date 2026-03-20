import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().trim().min(2),
  contact: z.string().trim().min(4),
  task: z.string().trim().min(10),
});

type ContactPayload = z.infer<typeof contactSchema>;

function formatTelegramMessage(payload: ContactPayload) {
  return [
    "New contact request",
    "",
    `Name: ${payload.name}`,
    `Contact: ${payload.contact}`,
    `Task: ${payload.task}`,
    "",
    `Sent at: ${new Date().toISOString()}`,
  ].join("\n");
}

export async function POST(request: Request) {
  const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
  const telegramChatIds = process.env.TELEGRAM_CHAT_ID;

  if (!telegramToken || !telegramChatIds) {
    return NextResponse.json(
      { error: "Server is not configured." },
      { status: 500 },
    );
  }

  let payload: ContactPayload;

  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data." },
        { status: 400 },
      );
    }

    payload = parsed.data;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const chatIds = telegramChatIds.split(",").map((id) => id.trim()).filter(Boolean);
  const message = formatTelegramMessage(payload);

  const results = await Promise.allSettled(
    chatIds.map((chatId) =>
      fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: message }),
        cache: "no-store",
      }),
    ),
  );

  const allFailed = results.every(
    (r) => r.status === "rejected" || (r.status === "fulfilled" && !r.value.ok),
  );

  if (allFailed) {
    return NextResponse.json(
      { error: "Failed to send message to Telegram." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
