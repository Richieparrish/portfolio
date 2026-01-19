export default function Experience() {
  const positions = [
    {
      year: "Sept 2025 – Present",
      title: "Administrative Officer",
      institution: "Ministry of Justice, Northampton",
      description: [
        "Streamlined case management processes, reducing turnaround time by 20%",
        "Ensured compliance with legal and regulatory standards through accurate record-keeping",
        "Improved stakeholder communication and response times via clear reporting systems",
        "Supported adoption of new case management software and trained other team members",
      ],
    },
    {
      year: "Jun 2024 – Sept 2025",
      title: "Transport Clerk",
      institution: "Great Bear, Northampton",
      description: [
        "Coordinated inbound and outbound deliveries, ensuring timely dispatch and accurate documentation",
        "Maintained transport schedules and resolved delivery discrepancies to minimize delays",
        "Improved efficiency up to 45% by implementing better tracking systems for shipments and inventory",
      ],
    },
    {
      year: "July 2023 – June 2024",
      title: "Healthcare Assistant",
      institution: "MKU Hospital, Milton Keynes",
      description: [
        "Assisted in delivering patient-centered care, ensuring comfort and dignity for adults with diverse health needs",
        "Supported medication administration and monitored patient conditions under supervision",
        "Maintained accurate care records and ensured compliance with health and safety standards",
      ],
    },
    {
      year: "Jan 2021 – June 2023",
      title: "In-Store Team Lead",
      institution: "Domino's Pizza, Northampton",
      description: [
        "Supervised daily store operations, ensuring compliance with company standards and food safety regulations",
        "Managed small team and motivated them to achieve performance targets and deliver excellent customer service",
        "Coordinated order processing and inventory control to maintain efficiency and reduce waste",
        "Resolved customer issues promptly, improving satisfaction and repeat business",
      ],
    },
    {
      year: "Sept 2020 – Present",
      title: "Software Developer (Self-Taught)",
      institution: "Continuous Learning, Northampton",
      description: [
        "Developed small-scale applications and scripts using Python to automate tasks and solve real-world problems",
        "Built projects demonstrating knowledge of data structures, APIs, and object-oriented programming",
        "Utilized Git/GitHub for version control and collaborative coding",
      ],
    },
  ];

  return (
    <section className="border-b border-border px-6 sm:px-10 md:px-16 py-12 md:py-20">
      <h3 className="text-sm font-medium text-accent mb-10 md:mb-16 uppercase tracking-wide">
        Professional Experience
      </h3>

      <div className="max-w-4xl space-y-8 md:space-y-12">
        {positions.map((position, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-2 md:gap-8">
            <div className="md:w-44 flex-shrink-0">
              <p className="text-xs md:text-sm text-muted-foreground font-medium">
                {position.year}
              </p>
            </div>
            <div className="flex-1 border-l-2 md:border-l border-border pl-4 md:pl-8 mt-2 md:mt-0">
              <h4 className="text-base md:text-lg font-medium text-foreground mb-1">
                {position.title}
              </h4>
              <p className="text-sm md:text-base text-accent mb-2 md:mb-3">
                {position.institution}
              </p>
              <ul className="space-y-1 md:space-y-1.5">
                {position.description.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm md:text-base text-foreground/70 leading-relaxed flex items-start gap-2"
                  >
                    <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-accent/50 rounded-full mt-2 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
