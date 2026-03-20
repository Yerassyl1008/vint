import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"],
});

const siteUrl = "https://bas-team.online";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bas Team — IT-компания в Бишкеке | Веб-разработка, дизайн, SEO",
    template: "%s | Bas Team",
  },
  description:
    "Bas Team — IT-компания в Бишкеке, Кыргызстан. Разработка сайтов, UX/UI дизайн, SEO-продвижение и аналитика. Полный цикл: от идеи до запуска. 30+ проектов, 8 лет в digital.",
  keywords: [
    "веб-разработка Бишкек",
    "IT-компания Бишкек",
    "создание сайтов Кыргызстан",
    "разработка сайтов Бишкек",
    "UX/UI дизайн Бишкек",
    "SEO продвижение Бишкек",
    "SEO Кыргызстан",
    "digital-агентство Бишкек",
    "Bas Team",
    "разработка веб-приложений",
    "корпоративный сайт Бишкек",
    "мобильная разработка Кыргызстан",
  ],
  authors: [{ name: "Bas Team" }],
  creator: "Bas Team",
  publisher: "Bas Team",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ru_KG",
    url: siteUrl,
    siteName: "Bas Team",
    title: "Bas Team — IT-компания в Бишкеке | Веб-разработка, дизайн, SEO",
    description:
      "Создаём цифровые решения для роста вашего бизнеса. Полный цикл разработки: проектирование, дизайн, код, SEO. 30+ проектов за 8 лет.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bas Team — IT-компания в Бишкеке",
    description:
      "Веб-разработка, UX/UI дизайн, SEO-продвижение. Полный цикл от идеи до запуска.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
