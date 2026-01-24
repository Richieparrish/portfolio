"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ArrowUpRight } from "lucide-react";
import { useState, useCallback } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const images = [
  { id: 1, src: "/image1.jpeg", alt: "Gallery image 1" },
  { id: 2, src: "/image2.jpeg", alt: "Gallery image 2" },
  { id: 3, src: "/image3.jpeg", alt: "Gallery image 3" },
  { id: 4, src: "/image4.jpeg", alt: "Gallery image 4" },
  { id: 5, src: "/image5.jpeg", alt: "Gallery image 5" },
  { id: 6, src: "/image6.jpeg", alt: "Gallery image 6" },
];

export default function GalleryPage() {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageLoad = useCallback((id: number) => {
    setLoadedImages((prev) => new Set(prev).add(id));
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="flex-1 pt-16">
        <section className="px-6 sm:px-10 md:px-16 py-12 md:py-20">
          <div className="mb-10 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
              Gallery
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              A collection of moments from my professional journey, events, and
              collaborations.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="relative overflow-hidden rounded-lg bg-muted break-inside-avoid"
              >
                {!loadedImages.has(image.id) && (
                  <Skeleton className="absolute inset-0 w-full h-full rounded-lg z-10" />
                )}
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={800}
                  className={`w-full h-auto object-cover transition-opacity duration-300 rounded-lg ${
                    loadedImages.has(image.id) ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => handleImageLoad(image.id)}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 sm:px-10 md:px-16 py-20 md:py-28 border-t border-border bg-muted/50">
          <Link
            href="/projects"
            className="group flex items-center justify-between"
          >
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                Continue Exploring
              </p>
              <p className="text-2xl md:text-3xl font-light group-hover:text-accent transition-colors">
                View Projects
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
