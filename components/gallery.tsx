"use client"

import Image from "next/image"
import { useState } from "react"

export default function Gallery() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const works = [
    {
      id: "case-1",
      title: "Advanced Diagnostic Protocol Implementation",
      category: "Clinical Research",
      image: "/medical-diagnostic-imaging.jpg",
    },
    {
      id: "case-2",
      title: "Patient Education Initiative",
      category: "Healthcare Leadership",
      image: "/medical-seminar-teaching.jpg",
    },
    {
      id: "case-3",
      title: "Complex Case Management",
      category: "Clinical Practice",
      image: "/hospital-medical-staff.jpg",
    },
    {
      id: "case-4",
      title: "Interdisciplinary Team Collaboration",
      category: "Healthcare Innovation",
      image: "/medical-team-meeting.jpg",
    },
    {
      id: "case-5",
      title: "Research Publication & Presentation",
      category: "Academic Medicine",
      image: "/medical-research-lab.jpg",
    },
    {
      id: "case-6",
      title: "Residency Program Development",
      category: "Medical Education",
      image: "/medical-education-training.jpg",
    },
  ]

  return (
    <section className="border-b border-border px-6 sm:px-10 md:px-16 py-12 md:py-20">
      <h3 className="text-sm font-medium text-accent mb-10 md:mb-16 uppercase tracking-wide">Work Gallery</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {works.map((work) => (
          <div
            key={work.id}
            className="group cursor-pointer overflow-hidden rounded-lg"
            onMouseEnter={() => setHoveredId(work.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="relative h-48 md:h-64 w-full bg-muted overflow-hidden">
              <Image
                src={work.image || "/placeholder.svg"}
                alt={work.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </div>

            <div
              className={`p-3 md:p-4 transition-all duration-300 ${
                hoveredId === work.id ? "bg-primary text-primary-foreground" : "bg-card text-card-foreground"
              }`}
            >
              <p className="text-xs font-medium opacity-75 mb-1">{work.category}</p>
              <h4 className="font-medium text-sm">{work.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
