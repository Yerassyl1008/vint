import Header from "../components/header/header";
import Work from "../components/work/work";
import Footer from "../components/footer/footer";

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