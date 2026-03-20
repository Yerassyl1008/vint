import MainPage from "./main-page/page";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bas Team",
  url: "https://bas-team.online",
  logo: "https://bas-team.online/logo.png",
  description:
    "IT-компания в Бишкеке. Веб-разработка, UX/UI дизайн, SEO-продвижение и аналитика.",
  foundingDate: "2018",
  areaServed: {
    "@type": "City",
    name: "Бишкек",
    containedInPlace: {
      "@type": "Country",
      name: "Кыргызстан",
    },
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+7-952-539-49-71",
    email: "basteam@gmail.com",
    contactType: "customer service",
    availableLanguage: ["Russian", "Kyrgyz"],
  },
  sameAs: ["https://t.me/Startup0916"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MainPage />
    </>
  );
}
