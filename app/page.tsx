import Hero from "@/components/hero";
// import Experience from "@/components/experience";
// import Education from "@/components/education";
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
        {/* <section id="education" className="scroll-mt-16">
          <Education />
        </section>
        <section id="experience" className="scroll-mt-16">
          <Experience />
        </section> */}
        <section
          className="px-6 sm:px-10 md:px-16 py-20 md:py-32 border-t border-border relative overflow-hidden bg-muted/50"
          id="projects"
        >
          <div className="relative">
            <div className="flex items-center gap-4 mb-16">
              <span className="w-12 h-[1px] bg-accent" />
              <p className="text-xs font-medium text-accent uppercase tracking-[0.2em]">
                Featured Work
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              <Link href="/projects/osteo" className="group block relative">
                <div className="relative p-6 md:p-10 rounded-2xl border border-border bg-card/80 backdrop-blur-sm transition-all duration-500 hover:border-accent/30 hover:bg-card hover:shadow-[0_0_60px_-15px] hover:shadow-accent/20">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-baseline gap-4 mb-3">
                        <span className="text-6xl md:text-7xl font-extralight text-accent/40 group-hover:text-accent transition-colors duration-500 leading-none">
                          01
                        </span>
                        <h3 className="text-2xl md:text-4xl font-light text-foreground group-hover:text-accent transition-colors duration-300">
                          Osteo AI
                        </h3>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground/80 max-w-xl leading-relaxed pl-0 md:pl-[4.5rem]">
                        An intelligent bone analysis system that leverages AI to
                        examine X-ray imagery, detecting potential skeletal
                        deformities and anomalies with precision.
                      </p>
                    </div>
                    <div className="flex items-center gap-3 self-end md:self-center">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Project
                      </span>
                      <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                href="/projects/towcester-health-profile"
                className="group block relative"
              >
                <div className="relative p-6 md:p-10 rounded-2xl border border-border bg-card/80 backdrop-blur-sm transition-all duration-500 hover:border-accent/30 hover:bg-card hover:shadow-[0_0_60px_-15px] hover:shadow-accent/20">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-baseline gap-4 mb-3">
                        <span className="text-6xl md:text-7xl font-extralight text-accent/40 group-hover:text-accent transition-colors duration-500 leading-none">
                          02
                        </span>
                        <h3 className="text-2xl md:text-4xl font-light text-foreground group-hover:text-accent transition-colors duration-300">
                          Towcester Health Profile
                        </h3>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground/80 max-w-xl leading-relaxed pl-0 md:pl-[4.5rem]">
                        A comprehensive community health diagnosis identifying
                        healthcare inequalities and proposing targeted
                        interventions for improved public health outcomes.
                      </p>
                    </div>
                    <div className="flex items-center gap-3 self-end md:self-center">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Project
                      </span>
                      <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="px-6 sm:px-10 md:px-16 py-16 md:py-24 border-t border-border">
          <p className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-12">
            Continue Exploring
          </p>

          <div className="space-y-0">
            <Link
              href="/gallery"
              className="group flex items-center justify-between py-8 border-t border-border"
            >
              <span className="text-2xl md:text-4xl font-light group-hover:text-accent transition-colors">
                Gallery
              </span>
              <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </Link>
            <Link
              href="/projects"
              className="group flex items-center justify-between py-8 border-t border-border"
            >
              <span className="text-2xl md:text-4xl font-light group-hover:text-accent transition-colors">
                Projects
              </span>
              <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
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
