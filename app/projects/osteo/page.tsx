import Link from "next/link";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Code2,
  Cpu,
  Scan,
  Target,
  Zap,
  Brain,
  CheckCircle2,
  Github,
  ExternalLink,
} from "lucide-react";

const techStack = [
  { name: "TypeScript ", category: "Language" },
  { name: "Next.js", category: "Framework" },
  { name: "Gemini", category: "AI" },
  { name: "Vercel", category: "Hosting" },
];

const features = [
  {
    icon: Scan,
    title: "X-Ray Analysis",
    description:
      "Processes medical X-ray images to identify areas of concern in bone structure.",
  },
  {
    icon: Brain,
    title: "AI Detection",
    description:
      "Large Language models helping to recognize patterns associated with skeletal abnormalities.",
  },
  {
    icon: Target,
    title: "Precision Feedback",
    description:
      "Generates detailed reports highlighting potential deformities with confidence scores.",
  },
  {
    icon: Zap,
    title: "Fast Processing",
    description:
      "Optimized pipeline delivers analysis results within seconds of image upload.",
  },
];

const capabilities = [
  "Fracture detection and classification",
  "Bone density anomaly identification",
  "Joint alignment assessment",
  "Growth plate analysis",
  "Comparative analysis with healthy baselines",
  "Export detailed diagnostic reports",
];

export default function OsteoAIPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="flex-1 pt-20">
        <div className="px-6 sm:px-10 md:px-16 pt-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Projects</span>
          </Link>
        </div>

        <section className="px-6 sm:px-10 md:px-16 pt-12 pb-16 md:pt-16 md:pb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[1px] bg-accent" />
            <span className="text-xs font-medium text-accent uppercase tracking-[0.2em]">
              Technical Project
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight mb-8">
            Osteo AI
          </h1>

          <div className="flex flex-wrap gap-6 md:gap-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-accent" />
              <span>2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-accent" />
              <span>Next.js / TypeScript</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-accent" />
              <span>Applied AI / Gemini</span>
            </div>
          </div>
        </section>

        {/* <section className="px-6 sm:px-10 md:px-16 pb-20 md:pb-32">
          <div className="relative aspect-[16/9] rounded-2xl bg-gradient-to-br from-muted/80 via-muted/50 to-accent/10 border border-border overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Scan className="w-12 h-12 md:w-16 md:h-16 text-accent" />
                </div>
                <p className="text-muted-foreground text-sm md:text-base">
                  AI-Powered Bone Analysis System
                </p>
              </div>
            </div>
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>
        </section> */}

        <section className="px-6 sm:px-10 md:px-16 py-20 md:py-28 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <h2 className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-4">
                Overview
              </h2>
              <div className="w-16 h-[1px] bg-border" />
            </div>
            <div className="lg:col-span-8">
              <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground/90">
                Osteo AI is an intelligent bone analysis system designed to
                assist healthcare professionals in evaluating X-ray imagery. By
                leveraging machine learning algorithms, the system can identify
                potential skeletal deformities, fractures, and other anomalies
                with high precision, providing valuable diagnostic support.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 sm:px-10 md:px-16 py-20 md:py-28 bg-muted/50">
          <h2 className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-12">
            Core Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 sm:px-10 md:px-16 py-20 md:py-28 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <h2 className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-4">
                Capabilities
              </h2>
              <div className="w-16 h-[1px] bg-border" />
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {capabilities.map((capability) => (
                  <div key={capability} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 sm:px-10 md:px-16 py-20 md:py-28 bg-primary text-primary-foreground">
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] mb-4 opacity-60">
            Technology Stack
          </h2>
          <p className="text-lg md:text-xl font-light mb-12 max-w-2xl opacity-80">
            Built with modern tools and frameworks for reliable, scalable AI
            processing.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="border-t border-primary-foreground/20 pt-6"
              >
                <p className="text-xs opacity-50 mb-2">{tech.category}</p>
                <h3 className="text-lg font-medium">{tech.name}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 sm:px-10 md:px-16 py-20 md:py-28 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <h2 className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-4">
                Project Status
              </h2>
              <div className="w-16 h-[1px] bg-border" />
            </div>
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                In Beta
              </div>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground/90">
                Osteo AI is currently in active beta, undergoing rigorous
                validation across diverse clinical datasets to refine its
                predictive accuracy and ensure robust performance across varying
                bone structures and imaging environments.
              </p>
              <div className="flex gap-4">
                <Link href="https://github.com/Richieparrish" target="_blank">
                  <Button className="mt-6">
                    <Github className="w-4 h-4" />
                    View Source
                  </Button>
                </Link>
                <Link href="https://github.com/Richieparrish" target="_blank">
                  <Button className="mt-6">
                    <ExternalLink className="w-4 h-4" />
                    View Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 sm:px-10 md:px-16 py-20 md:py-28 border-t border-border bg-muted/50">
          <Link
            href="/projects/towcester-health-profile"
            className="group flex items-center justify-between"
          >
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                Next Project
              </p>
              <p className="text-2xl md:text-3xl font-light group-hover:text-accent transition-colors">
                Towcester Health Profile
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
