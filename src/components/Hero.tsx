import { motion } from "framer-motion";

export default function Hero() {
  const marqueeItems = [
    "Mechanical Engineering", "Piping Systems", "AutoCAD", "HVAC Design", "MEP Coordination",
    "Thermal Power", "Project Management", "Site Execution", "Quality Inspection"
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 overflow-hidden bg-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-1 z-10">
        
        {/* Left Content */}
        <div className="flex flex-col items-start pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-xs font-mono tracking-wider text-muted uppercase mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Available for work &middot; Q3 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-8"
          >
            HELLO, I'M <br />
            <span className="text-accent italic font-display">BIPIN B</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-muted font-light leading-relaxed max-w-xl mb-12"
          >
            <strong className="text-text-primary font-medium">Mechanical Engineer & Project Professional</strong><br className="mb-2" />
            Experienced in Thermal Power Plant Projects, Piping Engineering, QA/QC, and Site Execution. Certified in MEP & HVAC Design with additional experience in Web3 Community Management and Stakeholder Engagement.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <a href="#projects" className="px-8 py-4 bg-accent text-black font-bold rounded-full hover:bg-accent/90 transition-all uppercase tracking-wide text-sm">
              View Projects
            </a>
            <a href="/resume.jpg" download="Bipin_B_Resume.jpg" className="px-8 py-4 bg-transparent border border-border text-text-primary font-bold rounded-full hover:bg-surface transition-all uppercase tracking-wide text-sm">
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 text-xs font-mono text-muted tracking-widest uppercase border-t border-border pt-4"
          >
            B.Tech &middot; APJ Abdul Kalam University &middot; 2024
          </motion.div>
        </div>

        {/* Right Portrait & Floating Stats */}
        <div className="relative h-[600px] lg:h-full w-full flex justify-center lg:justify-end items-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-[420px] lg:max-w-none lg:h-full"
          >
            {/* Subtle lime glow ring behind the image */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/10 via-transparent to-transparent blur-2xl pointer-events-none" />
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl">
              <img
                src="/portrait.jpg"
                alt="Bipin B"
                className="w-full h-auto object-cover object-top"
                style={{ maxHeight: '700px' }}
              />
              {/* Gradient fade at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Floating Stat 1 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute top-[20%] right-[10%] lg:right-[70%] z-20 bg-surface/80 backdrop-blur-md border border-border p-4 rounded-2xl shadow-2xl"
          >
            <div className="text-3xl font-bold text-accent mb-1">1yr+</div>
            <div className="text-[10px] uppercase tracking-widest text-muted font-mono">Experience</div>
          </motion.div>

          {/* Floating Stat 2 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="absolute bottom-[25%] left-[5%] lg:left-[10%] z-20 bg-surface/80 backdrop-blur-md border border-border p-4 rounded-2xl shadow-2xl"
          >
            <div className="text-3xl font-bold text-text-primary mb-1">50+</div>
            <div className="text-[10px] uppercase tracking-widest text-muted font-mono">Drawings</div>
          </motion.div>
          
          {/* Subtle glow behind portrait */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent/5 rounded-full blur-[100px] z-0 pointer-events-none" />
        </div>
      </div>

      {/* Infinite Marquee Footer */}
      <div className="w-full border-y border-border bg-surface py-4 overflow-hidden flex whitespace-nowrap mt-12 lg:mt-0 relative z-20">
        <div className="animate-marquee flex gap-12 items-center">
          {/* Duplicate items 3 times for seamless looping */}
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="text-sm font-mono uppercase tracking-widest text-muted">{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
