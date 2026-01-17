import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Gallery from "@/components/gallery"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <main className="flex-1 overflow-auto">
        <Hero />
        <section id="about" className="scroll-mt-0">
          <About />
        </section>
        <section id="education" className="scroll-mt-0">
          <Education />
        </section>
        <section id="experience" className="scroll-mt-0">
          <Experience />
        </section>
        <section id="gallery" className="scroll-mt-0">
          <Gallery />
        </section>
        <section id="contact" className="scroll-mt-0">
          <Contact />
        </section>
      </main>
    </div>
  )
}
