"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useCallback } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  MapPin,
  Users,
  WavesArrowDown,
  Construction,
} from "lucide-react";

const projectImages = [
  {
    id: 7,
    src: "/image7.png",
    alt: "Group 5 team at University of Northampton",
  },
  {
    id: 8,
    src: "/image8.png",
    alt: "Project presentation and filming session",
  },
];

const communityAssets = [
  {
    name: "Renew 169 Wellbeing Café",
    description: "A safe space for mental health support.",
  },
  {
    name: "TADD",
    description:
      "Towcester Area Door-to-Door — Volunteer transport supporting NHS access.",
  },
  {
    name: "Towcester Foodbank",
    description: "Providing emergency support and financial advice.",
  },
];

const recommendations = [
  {
    title: "Infrastructure Investment",
    description:
      "Urgent commissioning of a new GP surgery to handle the expanded population.",
    number: "01",
  },
  {
    title: "Health Education",
    description:
      "Targeted campaigns to educate the demographic on the '62-day cancer pathway' and the importance of early screening.",
    number: "02",
  },
  {
    title: "Improved Access",
    description: "Better transport links to secondary care facilities.",
    number: "03",
  },
];

export default function TowcesterHealthProfilePage() {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageLoad = useCallback((id: number) => {
    setLoadedImages((prev) => new Set(prev).add(id));
  }, []);

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
              Case Study
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight mb-8">
            Towcester Community
            <br />
            <span className="text-muted-foreground">Health Profile</span>
          </h1>

          <div className="flex flex-wrap gap-6 md:gap-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-accent" />
              <span>July 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              <span>University of Northampton</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-accent" />
              <span>Group 5 SLCPP Placement</span>
            </div>
          </div>
        </section>

        <section className="px-6 sm:px-10 md:px-16 pb-20 md:pb-32">
          <AspectRatio ratio={16 / 9}>
            <Image
              src="/image7.png"
              alt="Project Image"
              fill
              className="object-cover"
            />
          </AspectRatio>
        </section>

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
                As part of the 2024 SLCPP Placement 3, I supported "Group 5" in
                conducting a comprehensive community diagnosis of Towcester,
                Northamptonshire. This project aimed to identify health
                inequalities, map local resources, and propose solutions to
                improve public health outcomes in one of England's oldest
                continuously inhabited towns.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 sm:px-10 md:px-16 py-20 md:py-28 bg-muted/50">
          <h2 className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-12">
            The Challenge
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-16">
            Towcester presents a unique demographic profile. While it appears
            affluent with a crime rate significantly lower than the county
            average, our research uncovered hidden inequalities driven by rapid
            urbanization.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            <div className="bg-background p-8 md:p-12">
              <div className="text-5xl md:text-6xl font-light text-accent mb-4">
                3×
              </div>
              <h3 className="text-lg font-medium mb-3">Population Pressure</h3>
              <p className="text-muted-foreground leading-relaxed">
                The town's population has tripled over the last 50 years to
                nearly 12,000, yet it is still served by only two GP surgeries.
              </p>
            </div>
            <div className="bg-background p-8 md:p-12">
              <div className="text-5xl md:text-6xl font-light text-accent mb-4">
                0
              </div>
              <h3 className="text-lg font-medium mb-3">Infrastructure Gaps</h3>
              <p className="text-muted-foreground leading-relaxed">
                We identified a lack of NHS dental practices and infrequent
                public transport, creating barriers to healthcare access.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 sm:px-10 md:px-16 py-20 md:py-28 border-t border-border">
          <h2 className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-4">
            Key Findings
          </h2>
          <p className="text-2xl md:text-3xl font-light mb-16 max-w-2xl">
            Cancer Screening Uptake
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <div className="text-6xl md:text-7xl font-light text-accent mb-6">
                <WavesArrowDown className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium mb-3">Declining Uptake</h3>
              <p className="text-muted-foreground leading-relaxed">
                Screening participation dropped to 60% post-COVID-19, well below
                the desired 80% threshold for effective cancer prevention.
              </p>
            </div>
            <div>
              <div className="text-6xl md:text-7xl font-light text-accent mb-6">
                <Construction className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium mb-3">
                Accessibility Barriers
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Only two hospitals available for alternative screening,
                requiring travel to Daventry or Northampton for women with
                mobility issues.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 sm:px-10 md:px-16 py-20 md:py-28 bg-primary text-primary-foreground">
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] mb-4 opacity-60">
            Community Assets
          </h2>
          <p className="text-lg md:text-xl font-light mb-12 max-w-2xl opacity-80">
            The vital role of the "third sector" in plugging gaps left by
            statutory services.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {communityAssets.map((asset) => (
              <div
                key={asset.name}
                className="border-t border-primary-foreground/20 pt-6"
              >
                <h3 className="text-lg font-medium mb-3">{asset.name}</h3>
                <p className="text-sm opacity-70 leading-relaxed">
                  {asset.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 sm:px-10 md:px-16 py-20 md:py-28 border-t border-border">
          <h2 className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-4">
            Recommendations
          </h2>
          <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
            The final report concluded that to alleviate the strain on the NHS
            and improve local health, Towcester requires:
          </p>

          <div className="space-y-0">
            {recommendations.map((rec) => (
              <div
                key={rec.number}
                className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-t border-border first:border-t-0 hover:bg-muted/30 transition-colors -mx-6 px-6"
              >
                <div className="md:col-span-2">
                  <span className="text-4xl md:text-5xl font-light text-accent/50 group-hover:text-accent transition-colors">
                    {rec.number}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-xl font-medium">{rec.title}</h3>
                </div>
                <div className="md:col-span-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {rec.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 sm:px-10 md:px-16 pb-20 md:pb-32">
          <AspectRatio ratio={16 / 9}>
            <Image
              src="/image8.png"
              alt="Project Image"
              fill
              className="object-cover"
            />
          </AspectRatio>
        </section>

        <section className="px-6 sm:px-10 md:px-16 py-20 md:py-28 border-t border-border">
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
