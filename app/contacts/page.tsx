import type { Metadata } from "next";
import Contacts from "../components/contacts/contacts";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export const metadata: Metadata = {
  title: "Контакты — Связаться с Bas Team в Бишкеке",
  description:
    "Свяжитесь с IT-компанией Bas Team в Бишкеке. Телефон: +7 952 539 49 71, email: basteam@gmail.com, Telegram. Обсудим ваш проект.",
  alternates: {
    canonical: "https://bas-team.online/contacts",
  },
  openGraph: {
    title: "Контакты Bas Team — IT-компания в Бишкеке",
    description:
      "Свяжитесь с нами для обсуждения вашего проекта. Телефон, email, Telegram.",
    url: "https://bas-team.online/contacts",
  },
};

export default function ContactsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}