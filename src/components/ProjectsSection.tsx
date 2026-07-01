import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    num: "01",
    category: "Research & Development",
    title: "Nano Technology Project",
    description:
      "Research and development project focused on nanotechnology applications, material properties, and innovative engineering solutions.",
    tag: "R&D",
    accent: "#D4FF00",
  },
  {
    num: "02",
    category: "Power Plant Execution",
    title: "Thermal Power Plant Piping Erection",
    description:
      "Worked on piping erection, installation, equipment alignment, and site execution during thermal power plant construction.",
    tag: "Site Execution",
    accent: "#D4FF00",
  },
  {
    num: "03",
    category: "Building Services",
    title: "MEP Design Project",
    description:
      "Designed mechanical, electrical, and plumbing systems for building services with emphasis on efficiency and coordination.",
    tag: "MEP",
    accent: "#D4FF00",
  },
  {
    num: "04",
    category: "HVAC Engineering",
    title: "HVAC System Design",
    description:
      "Designed HVAC layouts, airflow distribution, cooling load calculations, and equipment selection for commercial buildings.",
    tag: "HVAC",
    accent: "#D4FF00",
  },
  {
    num: "05",
    category: "Web Development",
    title: "Engineering Portfolio Website",
    description:
      "Designed and developed a modern personal engineering portfolio showcasing projects, skills, certifications, and professional experience.",
    tag: "Design & Dev",
    accent: "#D4FF00",
  },
  {
    num: "06",
    category: "Community & Web3",
    title: "Web3 Community Management – Ducat",
    description:
      "Managed community operations, moderated discussions, organized engagement activities, and supported ecosystem growth.",
    tag: "Web3",
    accent: "#D4FF00",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-bg relative overflow-hidden">
      {/* Subtle background noise/texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,255,0,0.03),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-muted block mb-4">
            03 / My Projects
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-text-primary uppercase leading-none">
              Selected <br />
              <span className="text-accent italic font-display">Works</span>
            </h2>
            <p className="text-muted max-w-sm leading-relaxed text-base">
              A curated showcase of engineering, research, and innovation projects across multiple disciplines.
            </p>
          </div>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (idx % 3) * 0.1 }}
              className="group relative flex flex-col bg-surface border border-border rounded-2xl overflow-hidden hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_16px_48px_rgba(212,255,0,0.06)] transition-all duration-400"
            >
              {/* Top stripe with number */}
              <div className="flex items-center justify-between px-6 pt-6 pb-0">
                <span className="text-5xl font-bold font-display italic text-border group-hover:text-accent/30 transition-colors duration-300 select-none">
                  {project.num}
                </span>
                <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 border border-border rounded-full text-muted group-hover:border-accent/30 group-hover:text-accent transition-all duration-300">
                  {project.tag}
                </span>
              </div>

              {/* Body */}
              <div className="flex-1 flex flex-col p-6 pt-4">
                <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted mb-3">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold text-text-primary uppercase tracking-tight leading-tight mb-4 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed flex-1">
                  {project.description}
                </p>
              </div>

              {/* Footer divider + CTA */}
              <div className="px-6 pb-6 pt-4 border-t border-border flex items-center justify-between mt-auto">
                <div className="w-6 h-[1px] bg-border group-hover:w-12 group-hover:bg-accent transition-all duration-500" />
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted group-hover:text-text-primary transition-colors duration-300">
                  View Details
                  <span className="p-1.5 rounded-full bg-border group-hover:bg-accent group-hover:text-black transition-all duration-300">
                    <ArrowUpRight size={12} />
                  </span>
                </span>
              </div>

              {/* Hover glow */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/8 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 border border-border rounded-full text-text-primary font-bold uppercase tracking-wider text-sm hover:bg-surface hover:border-accent/40 transition-all duration-300"
          >
            Discuss a Project <ArrowUpRight size={16} className="text-accent" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
