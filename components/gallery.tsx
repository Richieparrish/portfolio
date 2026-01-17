"use client"

import Image from "next/image"
import { useState, useCallback } from "react"
import { Skeleton } from "@/components/ui/skeleton"

const images = [
  { id: 1, src: "/image1.jpeg", alt: "Gallery image 1" },
  { id: 8, src: "/image8.png", alt: "Gallery image 8" },
  { id: 9, src: "/image9.png", alt: "Gallery image 9" },
  { id: 2, src: "/image2.jpeg", alt: "Gallery image 2" },
  { id: 3, src: "/image3.jpeg", alt: "Gallery image 3" },
  { id: 4, src: "/image4.jpeg", alt: "Gallery image 4" },
  { id: 5, src: "/image5.jpeg", alt: "Gallery image 5" },
  { id: 6, src: "/image6.jpeg", alt: "Gallery image 6" },
  { id: 7, src: "/image7.jpeg", alt: "Gallery image 7" },
]

export default function Gallery() {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())

  const handleImageLoad = useCallback((id: number) => {
    setLoadedImages((prev) => new Set(prev).add(id))
  }, [])

  return (
    <section className="border-b border-border px-6 sm:px-10 md:px-16 py-12 md:py-20">
      <h3 className="text-sm font-medium text-accent mb-10 md:mb-16 uppercase tracking-wide">
        Gallery
      </h3>

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
  )
}
