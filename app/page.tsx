import Hero from "@/components/hero";
// import Experience from "@/components/experience";
// import Education from "@/components/education";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ProjectsSection, ExploreSection } from "@/components/home-sections";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-16">
        <Hero />
        {/* <section id="education" className="scroll-mt-16">
          <Education />
        </section>
        <section id="experience" className="scroll-mt-16">
          <Experience />
        </section> */}
        <ProjectsSection />
        <ExploreSection />
        <section id="footer" className="scroll-mt-16">
          <Footer />
        </section>
      </main>
    </div>
  );
}
