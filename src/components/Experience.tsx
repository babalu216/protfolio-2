import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="bg-bg py-24 md:py-32 blueprint-grid overflow-hidden">
      <SectionHeader 
        eyebrow="Experience"
        heading={<>Where I've <span className="font-display italic text-[#4A90D9]">worked</span></>}
      />

      <div className="max-w-2xl mx-auto px-6 mt-16 relative">
        {/* Vertical line */}
        <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-stroke -translate-x-1/2" />

        {/* Entry 1 */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" as any }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex md:justify-end mb-16"
        >
          {/* Timeline Dot */}
          <div className="absolute left-[19px] md:left-1/2 top-8 w-4 h-4 rounded-full accent-gradient ring-4 ring-bg -translate-x-1/2" />
          
          <div className="bg-surface border border-stroke rounded-3xl p-7 ml-10 md:ml-0 md:w-[calc(50%-2rem)]">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-mono text-muted">2025 – 2026</span>
              <span className="border border-stroke text-[10px] px-3 py-1 rounded-full text-muted uppercase tracking-wider">Full-time</span>
            </div>
            <h3 className="text-lg font-medium text-text-primary mt-2">Junior Engineer</h3>
            <p className="text-sm text-muted">Powermech Projects Limited</p>
            
            <div className="w-full h-px bg-stroke my-4" />
            
            <p className="text-sm text-muted leading-relaxed mb-6">
              Supporting thermal power plant erection activities — assisting piping installation, 
              quality checks, documentation, and site coordination on large-scale power generation infrastructure.
            </p>
            
            <div className="flex flex-wrap gap-2">
              {["Thermal Power Plants", "Piping Systems", "Site Coordination", "Quality Inspection"].map(tag => (
                <span key={tag} className="bg-bg border border-stroke rounded-full text-[11px] px-3 py-1 text-muted">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Entry 2 */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }} 
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" as any }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex md:justify-start"
        >
          {/* Timeline Dot */}
          <div className="absolute left-[19px] md:left-1/2 top-8 w-4 h-4 rounded-full accent-gradient ring-4 ring-bg -translate-x-1/2" />
          
          <div className="bg-surface border border-stroke rounded-3xl p-7 ml-10 md:ml-0 md:w-[calc(50%-2rem)]">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-mono text-muted">2024 – 2025</span>
              <span className="border border-stroke text-[10px] px-3 py-1 rounded-full text-muted uppercase tracking-wider">Contract</span>
            </div>
            <h3 className="text-lg font-medium text-text-primary mt-2">Web3 Community Moderator</h3>
            <p className="text-sm text-muted">Ducat Project</p>
            
            <div className="w-full h-px bg-stroke my-4" />
            
            <p className="text-sm text-muted leading-relaxed mb-6">
              Managed community engagement and user support for a blockchain project — driving 
              project growth through content, communication, and community operations.
            </p>
            
            <div className="flex flex-wrap gap-2">
              {["Community Management", "Web3", "Communication", "Moderation"].map(tag => (
                <span key={tag} className="bg-bg border border-stroke rounded-full text-[11px] px-3 py-1 text-muted">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
