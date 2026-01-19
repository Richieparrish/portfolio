import Hero from "@/components/hero";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-16">
        <Hero />
        <section id="education" className="scroll-mt-16">
          <Education />
        </section>
        <section id="experience" className="scroll-mt-16">
          <Experience />
        </section>
        <section className="px-6 sm:px-10 md:px-16 py-16 md:py-24 border-t border-border">
          <p className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-12">
            Continue Exploring
          </p>

          <div className="space-y-0">
            <Link
              href="/gallery"
              className="group grid grid-cols-12 gap-4 py-8 border-t border-border items-center"
            >
              <span className="col-span-2 md:col-span-1 text-4xl md:text-5xl font-light text-muted-foreground/30 group-hover:text-accent transition-colors">
                01
              </span>
              <span className="col-span-8 md:col-span-9 text-2xl md:text-4xl font-light group-hover:text-accent transition-colors">
                Gallery
              </span>
              <span className="col-span-2 flex justify-end">
                <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </span>
            </Link>

            <Link
              href="/projects/towcester-health-profile"
              className="group grid grid-cols-12 gap-4 py-8 border-t border-border items-center"
            >
              <span className="col-span-2 md:col-span-1 text-4xl md:text-5xl font-light text-muted-foreground/30 group-hover:text-accent transition-colors">
                02
              </span>
              <span className="col-span-8 md:col-span-9 text-2xl md:text-4xl font-light group-hover:text-accent transition-colors">
                Projects
              </span>
              <span className="col-span-2 flex justify-end">
                <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </span>
            </Link>
          </div>
        </section>
        <section id="footer" className="scroll-mt-16">
          <Footer />
        </section>
      </main>
    </div>
  );
}
