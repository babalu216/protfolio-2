import { motion } from "framer-motion";

const experiences = [
  {
    role: "Junior Engineer",
    company: "Power Mech Projects Limited",
    date: "June 2025 – June 2026",
    points: [
      "Assisted in piping erection and installation activities for thermal power plant projects.",
      "Interpreted engineering drawings and piping isometrics.",
      "Coordinated with construction, quality, and safety teams.",
      "Monitored site progress and maintained engineering documentation.",
      "Supported inspection and quality assurance activities."
    ]
  },
  {
    role: "Community Moderator",
    company: "Ducat Project",
    date: "Concurrent Role",
    points: [
      "Managed and moderated Web3 community discussions.",
      "Assisted users with project-related support.",
      "Coordinated announcements and engagement activities.",
      "Maintained a positive and active community environment."
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section className="py-24 md:py-32 bg-surface border-t border-border relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="mb-20">
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-muted block mb-4">
            Work Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary uppercase mb-6">
            Career <span className="text-accent italic font-display">Path</span>
          </h2>
        </div>

        <div className="space-y-16 relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-border hidden md:block" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-bg border-2 border-accent hidden md:block" />

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-text-primary uppercase tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="text-accent font-display italic text-lg mt-1">
                    {exp.company}
                  </div>
                </div>
                <div className="inline-block px-4 py-1.5 border border-border rounded-full text-xs font-mono uppercase tracking-widest text-muted w-fit">
                  {exp.date}
                </div>
              </div>

              <ul className="space-y-3 mt-8">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-4 text-muted text-sm md:text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0 opacity-60" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
