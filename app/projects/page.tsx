import type { Metadata } from "next";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import ProjectsSection from "../components/projects/projects-section";

export const metadata: Metadata = {
  title: "Проекты — Портфолио IT-компании Bas Team",
  description:
    "Портфолио Bas Team: 30+ реализованных проектов. Автоматизация ЖКХ, доставка питания, оптимизация маршрутов, Telegram-сервисы. IT-решения из Бишкека.",
  alternates: {
    canonical: "https://bas-team.online/projects",
  },
  openGraph: {
    title: "Проекты Bas Team — 30+ digital-продуктов",
    description:
      "Примеры наших работ: от корпоративных сайтов до сложных веб-приложений. IT-компания в Бишкеке.",
    url: "https://bas-team.online/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}