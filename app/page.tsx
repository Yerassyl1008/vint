import Header from "./components/header/header";
import About from "./components/about/about";
import Contacts from "./components/contacts/contacts";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import Work from "./components/work/work";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Work />
      <Contacts />
      <Footer />
    </>
  );
}
