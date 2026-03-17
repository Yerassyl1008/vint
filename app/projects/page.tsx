import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import ProjectsSection from "../components/projects/projects-section";

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