export default function Education() {
  const qualifications = [
    {
      type: "Degree",
      title: "Foundation Degree in Adult Nursing",
      description: "Comprehensive training in patient care, medical procedures, and healthcare management",
    },
    {
      type: "Diploma",
      title: "GDPR Compliance & Data Protection",
      description: "Professional certification in data protection regulations and compliance standards",
    },
  ]

  const certifications = [
    "Advanced Microsoft Excel",
    "First Aid Certificate",
    "Infection Control & Health & Safety",
    "Leadership & Team Management",
  ]

  const selfTaught = [
    "Python Programming",
    "Web Development",
    "Version Control",
  ]

  return (
    <section className="border-b border-border px-6 sm:px-10 md:px-16 py-12 md:py-20">
      <h3 className="text-sm font-medium text-accent mb-10 md:mb-16 uppercase tracking-wide">Education & Training</h3>

      <div className="max-w-4xl space-y-10 md:space-y-14">
        <div>
          <h4 className="font-medium text-foreground mb-4 md:mb-6 text-lg">Qualifications</h4>
          <div className="space-y-4 md:space-y-6">
            {qualifications.map((qual, idx) => (
              <div key={idx} className="border-l-2 border-accent pl-4 md:pl-6">
                <p className="text-xs md:text-sm text-accent font-medium mb-1">{qual.type}</p>
                <h5 className="text-base md:text-lg font-medium text-foreground mb-1">{qual.title}</h5>
                <p className="text-sm md:text-base text-foreground/70">{qual.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium text-foreground mb-4 md:mb-6 text-lg">Professional Certifications</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {certifications.map((cert, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 md:p-4 bg-card rounded-lg border border-border">
                <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></span>
                <p className="text-sm md:text-base text-foreground">{cert}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium text-foreground mb-4 md:mb-6 text-lg">Self-Taught Programming</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {selfTaught.map((skill, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 md:p-4 bg-card rounded-lg border border-border">
                <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></span>
                <p className="text-sm md:text-base text-foreground">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
