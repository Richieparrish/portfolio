"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
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
import {
  FadeUp,
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";

const techStack = [
  { name: "TypeScript", category: "Language" },
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

export function OsteoHero() {
  return (
    <>
      <div className="px-6 sm:px-10 md:px-16 pt-8">
        <FadeIn>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Projects</span>
          </Link>
        </FadeIn>
      </div>

      <section className="px-6 sm:px-10 md:px-16 pt-12 pb-16 md:pt-16 md:pb-24">
        <FadeUp>
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[1px] bg-accent" />
            <span className="text-xs font-medium text-accent uppercase tracking-[0.2em]">
              Technical Project
            </span>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight mb-8">
            Osteo AI
          </h1>
        </FadeUp>

        <FadeUp delay={0.2}>
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
        </FadeUp>
      </section>
    </>
  );
}

export function OsteoOverview() {
  return (
    <section className="px-6 sm:px-10 md:px-16 py-20 md:py-28 border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-4">
          <FadeUp>
            <h2 className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-4">
              Overview
            </h2>
            <div className="w-16 h-[1px] bg-border" />
          </FadeUp>
        </div>
        <div className="lg:col-span-8">
          <FadeUp delay={0.1}>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground/90">
              Osteo AI is an intelligent bone analysis system designed to assist
              healthcare professionals in evaluating X-ray imagery. By
              leveraging machine learning algorithms, the system can identify
              potential skeletal deformities, fractures, and other anomalies
              with high precision, providing valuable diagnostic support.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

export function OsteoFeatures() {
  return (
    <section className="px-6 sm:px-10 md:px-16 py-20 md:py-28 bg-muted/50">
      <FadeUp>
        <h2 className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-12">
          Core Features
        </h2>
      </FadeUp>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {features.map((feature) => (
          <StaggerItem key={feature.title}>
            <div className="flex gap-5">
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
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}

export function OsteoCapabilities() {
  return (
    <section className="px-6 sm:px-10 md:px-16 py-20 md:py-28 border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-4">
          <FadeUp>
            <h2 className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-4">
              Capabilities
            </h2>
            <div className="w-16 h-[1px] bg-border" />
          </FadeUp>
        </div>
        <div className="lg:col-span-8">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilities.map((capability) => (
              <StaggerItem key={capability}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{capability}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

export function OsteoTechStack() {
  return (
    <section className="px-6 sm:px-10 md:px-16 py-20 md:py-28 bg-primary text-primary-foreground">
      <FadeUp>
        <h2 className="text-xs font-medium uppercase tracking-[0.2em] mb-4 opacity-60">
          Technology Stack
        </h2>
        <p className="text-lg md:text-xl font-light mb-12 max-w-2xl opacity-80">
          Built with modern tools and frameworks for reliable, scalable AI
          processing.
        </p>
      </FadeUp>

      <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {techStack.map((tech) => (
          <StaggerItem key={tech.name}>
            <div className="border-t border-primary-foreground/20 pt-6">
              <p className="text-xs opacity-50 mb-2">{tech.category}</p>
              <h3 className="text-lg font-medium">{tech.name}</h3>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}

export function OsteoStatus() {
  return (
    <section className="px-6 sm:px-10 md:px-16 py-20 md:py-28 border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-4">
          <FadeUp>
            <h2 className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-4">
              Project Status
            </h2>
            <div className="w-16 h-[1px] bg-border" />
          </FadeUp>
        </div>
        <div className="lg:col-span-8">
          <FadeUp delay={0.1}>
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
              <Link
                href="https://github.com/Richieparrish/osteo"
                target="_blank"
              >
                <Button className="mt-6">
                  <Github className="w-4 h-4" />
                  View Source
                </Button>
              </Link>
              <Link href="https://osteo-phi.vercel.app/" target="_blank">
                <Button className="mt-6">
                  <ExternalLink className="w-4 h-4" />
                  View Demo
                </Button>
              </Link>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

export function OsteoNextProject() {
  return (
    <section className="px-6 sm:px-10 md:px-16 py-20 md:py-28 border-t border-border bg-muted/50">
      <FadeUp>
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
      </FadeUp>
    </section>
  );
}
