import type { Metadata } from "next";
import Header from "../components/header/header";
import Work from "../components/work/work";
import Footer from "../components/footer/footer";

export const metadata: Metadata = {
  title: "Услуги — Веб-разработка, дизайн, SEO в Бишкеке",
  description:
    "Услуги IT-компании Bas Team в Бишкеке: разработка сайтов, UX/UI дизайн, SEO-продвижение, веб-аналитика. Полный цикл от идеи до запуска за 14 дней.",
  alternates: {
    canonical: "https://bas-team.online/services",
  },
  openGraph: {
    title: "Услуги Bas Team — Веб-разработка, дизайн, SEO",
    description:
      "Разработка и дизайн сайтов, SEO-продвижение и аналитика. IT-компания в Бишкеке с 8-летним опытом.",
    url: "https://bas-team.online/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Work />
      </main>
      <Footer />
    </div>
  );
}