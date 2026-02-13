"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  MapPin,
  Users,
  WavesArrowDown,
  Construction,
} from "lucide-react";
import {
  FadeUp,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  ScaleUp,
} from "@/components/animations";


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
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="flex-1 pt-20">
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
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className="h-[1px] bg-accent"
              />
              <span className="text-xs font-medium text-accent uppercase tracking-[0.2em]">
                Case Study
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight mb-8">
              Towcester Community
              <br />
              <span className="text-muted-foreground">Health Profile</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
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
          </FadeUp>
        </section>

        <section className="px-6 sm:px-10 md:px-16 pb-20 md:pb-32">
          <ScaleUp>
            <AspectRatio ratio={16 / 9} className="rounded-2xl overflow-hidden">
              <Image
                src="/img2.jpg"
                alt="Group 5 team at University of Northampton"
                fill
                className="object-cover"
              />
            </AspectRatio>
          </ScaleUp>
        </section>

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
                <div className="hidden lg:block float-left mr-8 w-72">
                  <ScaleUp delay={0.2}>
                    <AspectRatio
                      ratio={3 / 4}
                      className="rounded-2xl overflow-hidden shadow-lg"
                    >
                      <Image
                        src="/img3.jpg"
                        alt="Personal photo from the project"
                        fill
                        className="object-cover"
                      />
                    </AspectRatio>
                  </ScaleUp>
                </div>
                <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground/90">
                  As part of the 2024 SLCPP Placement 3, I supported "Group 5"
                  in conducting a comprehensive community diagnosis of
                  Towcester, Northamptonshire. This project aimed to identify
                  health inequalities, map local resources, and propose
                  solutions to improve public health outcomes in one of
                  England's oldest continuously inhabited towns.
                </p>
              </FadeUp>
              <ScaleUp delay={0.2} className="lg:hidden mt-8 md:mt-12">
                <div className="max-w-sm">
                  <AspectRatio
                    ratio={3 / 4}
                    className="rounded-2xl overflow-hidden shadow-lg"
                  >
                    <Image
                      src="/img3.jpg"
                      alt="Personal photo from the project"
                      fill
                      className="object-cover"
                    />
                  </AspectRatio>
                </div>
              </ScaleUp>
            </div>
          </div>
        </section>

        <section className="px-6 sm:px-10 md:px-16 py-20 md:py-28 bg-muted/50">
          <FadeUp>
            <h2 className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-12">
              The Challenge
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-16">
              Towcester presents a unique demographic profile. While it appears
              affluent with a crime rate significantly lower than the county
              average, our research uncovered hidden inequalities driven by
              rapid urbanization.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              className="bg-background p-8 md:p-12"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl md:text-6xl font-light text-accent mb-4"
              >
                3×
              </motion.div>
              <h3 className="text-lg font-medium mb-3">Population Pressure</h3>
              <p className="text-muted-foreground leading-relaxed">
                The town's population has tripled over the last 50 years to
                nearly 12,000, yet it is still served by only two GP surgeries.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="bg-background p-8 md:p-12"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="text-5xl md:text-6xl font-light text-accent mb-4"
              >
                0
              </motion.div>
              <h3 className="text-lg font-medium mb-3">Infrastructure Gaps</h3>
              <p className="text-muted-foreground leading-relaxed">
                We identified a lack of NHS dental practices and infrequent
                public transport, creating barriers to healthcare access.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="px-6 sm:px-10 md:px-16 py-20 md:py-28 border-t border-border">
          <FadeUp>
            <h2 className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-4">
              Key Findings
            </h2>
            <p className="text-2xl md:text-3xl font-light mb-16 max-w-2xl">
              Cancer Screening Uptake
            </p>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <StaggerItem>
              <div>
                <motion.div
                  initial={{ rotate: -10, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                  className="text-6xl md:text-7xl font-light text-accent mb-6"
                >
                  <WavesArrowDown className="w-12 h-12" />
                </motion.div>
                <h3 className="text-xl font-medium mb-3">Declining Uptake</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Screening participation dropped to 60% post-COVID-19, well
                  below the desired 80% threshold for effective cancer
                  prevention.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div>
                <motion.div
                  initial={{ rotate: 10, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                    delay: 0.1,
                  }}
                  className="text-6xl md:text-7xl font-light text-accent mb-6"
                >
                  <Construction className="w-12 h-12" />
                </motion.div>
                <h3 className="text-xl font-medium mb-3">
                  Accessibility Barriers
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Only two hospitals available for alternative screening,
                  requiring travel to Daventry or Northampton for women with
                  mobility issues.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </section>

        <section className="px-6 sm:px-10 md:px-16 py-20 md:py-28 bg-primary text-primary-foreground">
          <FadeUp>
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] mb-4 opacity-60">
              Community Assets
            </h2>
            <p className="text-lg md:text-xl font-light mb-12 max-w-2xl opacity-80">
              The vital role of the "third sector" in plugging gaps left by
              statutory services.
            </p>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {communityAssets.map((asset) => (
              <StaggerItem key={asset.name}>
                <div className="border-t border-primary-foreground/20 pt-6">
                  <h3 className="text-lg font-medium mb-3">{asset.name}</h3>
                  <p className="text-sm opacity-70 leading-relaxed">
                    {asset.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        <section className="px-6 sm:px-10 md:px-16 py-20 md:py-28 border-t border-border">
          <FadeUp>
            <h2 className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-4">
              Recommendations
            </h2>
            <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
              The final report concluded that to alleviate the strain on the NHS
              and improve local health, Towcester requires:
            </p>
          </FadeUp>

          <div className="space-y-0">
            {recommendations.map((rec, index) => (
              <motion.div
                key={rec.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
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
              </motion.div>
            ))}
          </div>
        </section>

        <section className="px-6 sm:px-10 md:px-16 pb-20 md:pb-32">
          <ScaleUp>
            <AspectRatio ratio={16 / 9} className="rounded-2xl overflow-hidden">
              <Image
                src="/img4.jpg"
                alt="Project presentation and filming session"
                fill
                className="object-cover"
              />
            </AspectRatio>
          </ScaleUp>
        </section>

        <section className="px-6 sm:px-10 md:px-16 py-20 md:py-28 border-t border-border">
          <FadeUp>
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
          </FadeUp>
        </section>
      </main>

      <Footer />
    </div>
  );
}
