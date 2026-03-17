import Contacts from "../components/contacts/contacts";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

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