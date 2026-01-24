import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const projects = [
  {
    number: "01",
    title: "Osteo AI",
    href: "/projects/osteo",
    description:
      "An intelligent bone analysis system that leverages AI to examine X-ray imagery, detecting potential skeletal deformities and anomalies with precision.",
    tags: ["AI/ML", "Healthcare", "Computer Vision"],
  },
  {
    number: "02",
    title: "Towcester Health Profile",
    href: "/projects/towcester-health-profile",
    description:
      "A comprehensive community health diagnosis identifying healthcare inequalities and proposing targeted interventions for improved public health outcomes.",
    tags: ["Research", "Public Health", "Data Analysis"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="flex-1 pt-20">
        <div className="px-6 sm:px-10 md:px-16 pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>
        </div>

        <section className="px-6 sm:px-10 md:px-16 pt-12 pb-16 md:pt-16 md:pb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[1px] bg-accent" />
            <span className="text-xs font-medium text-accent uppercase tracking-[0.2em]">
              Portfolio
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight mb-6">
            Projects
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            A collection of work spanning healthcare technology, public health
            research, and software development.
          </p>
        </section>

        <section className="px-6 sm:px-10 md:px-16 pb-20 md:pb-32">
          <div className="space-y-6 md:space-y-8">
            {projects.map((project) => (
              <Link
                key={project.number}
                href={project.href}
                className="group block relative"
              >
                <div className="relative p-6 md:p-10 rounded-2xl border border-border bg-card/80 backdrop-blur-sm transition-all duration-500 hover:border-accent/30 hover:bg-card hover:shadow-[0_0_60px_-15px] hover:shadow-accent/20">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-baseline gap-4 mb-3">
                        <span className="text-6xl md:text-7xl font-extralight text-accent/40 group-hover:text-accent transition-colors duration-500 leading-none">
                          {project.number}
                        </span>
                        <h2 className="text-2xl md:text-4xl font-light text-foreground group-hover:text-accent transition-colors duration-300">
                          {project.title}
                        </h2>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground/80 max-w-xl leading-relaxed pl-0 md:pl-[4.5rem] mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pl-0 md:pl-[4.5rem]">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
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
            ))}
          </div>
        </section>

        <section className="px-6 sm:px-10 md:px-16 py-20 md:py-28 border-t border-border bg-muted/50">
          <Link
            href="/gallery"
            className="group flex items-center justify-between"
          >
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                Continue Exploring
              </p>
              <p className="text-2xl md:text-3xl font-light group-hover:text-accent transition-colors">
                View Gallery
              </p>
            </div>
            <ArrowUpRight className="w-8 h-8 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
