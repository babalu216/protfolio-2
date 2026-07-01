import { motion, useMotionValue, useSpring, useTransform, useScroll, useTransform as useFramerTransform } from "framer-motion";
import { GraduationCap, Factory, Wrench, Ruler, MonitorPlay, Rocket } from "lucide-react";
import React, { useRef } from "react";

const roadmap = [
  {
    title: "Foundation",
    subtitle: "Mechanical Engineering Graduate",
    description: "Built a strong foundation in mechanical engineering with knowledge of thermodynamics, fluid mechanics, manufacturing processes, machine design, strength of materials, engineering drawing, and industrial systems. This academic background developed my analytical thinking and engineering problem solving skills.",
    icon: <GraduationCap size={28} />
  },
  {
    title: "Industrial Experience",
    subtitle: "Thermal Power Plant Engineer",
    description: "Started my engineering career in thermal power plant construction, gaining practical experience in piping erection, equipment installation, engineering coordination, quality inspections, construction planning, and multidisciplinary collaboration on large industrial projects.",
    icon: <Factory size={28} />
  },
  {
    title: "Piping Engineering",
    subtitle: "Industrial Piping Systems",
    description: "Strengthened my expertise in industrial piping systems through hands-on site experience. Developed skills in interpreting P&IDs, isometric drawings, piping layouts, engineering documentation, construction methodologies, quality assurance, and engineering standards.",
    icon: <Wrench size={28} />
  },
  {
    title: "Engineering Design",
    subtitle: "CAD & Technical Documentation",
    description: "Currently expanding my expertise in engineering design by mastering AutoCAD, technical drafting, equipment layouts, piping layouts, engineering documentation, and design standards. Focused on transforming engineering concepts into accurate, efficient, and practical design solutions.",
    icon: <Ruler size={28} />
  },
  {
    title: "Digital Plant Design",
    subtitle: "SP3D & AVEVA E3D",
    description: "Actively learning SmartPlant 3D (SP3D) and AVEVA E3D to create intelligent 3D plant models, perform piping routing, equipment modelling, clash detection, and multidisciplinary design coordination using modern digital engineering workflows.",
    icon: <MonitorPlay size={28} />
  },
  {
    title: "Future Goal",
    subtitle: "Plant Design Engineer",
    description: "My ambition is to become a highly skilled Plant Design Engineer specializing in industrial plant engineering, intelligent 3D modelling, piping design, equipment layout, and multidisciplinary engineering coordination. I strive to create innovative, efficient, reliable, and sustainable engineering solutions while continuously learning new technologies and contributing to world-class industrial projects.",
    icon: <Rocket size={28} />
  }
];

function RoadmapCard({ item, index }: { item: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <div className="relative flex items-center justify-center md:justify-between w-full mb-16 md:mb-24 last:mb-0 group">
      {/* Center Line Dot */}
      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-bg border-2 border-accent z-20 group-hover:bg-accent transition-colors duration-500 group-hover:scale-150 group-hover:shadow-[0_0_15px_#D7FF00]" />
      
      {/* Animated Arrow for mobile (connecting lines handled in parent) */}
      
      <div className={`w-full md:w-[45%] flex ${index % 2 === 0 ? 'md:justify-end ml-10 md:ml-0' : 'md:justify-start ml-10 md:ml-0 md:pl-0 md:absolute md:right-0'} relative`}>
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => { x.set(0); y.set(0); }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative w-full p-8 rounded-2xl bg-[#0C0C0C]/80 backdrop-blur-xl border border-border/50 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(212,255,0,0.1)] transition-all duration-500 hover:-translate-y-2 z-10"
        >
          {/* Animated glowing border effect */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
            style={{
              background: 'linear-gradient(45deg, transparent, rgba(212,255,0,0.5), transparent)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
          />

          <div style={{ transform: "translateZ(30px)" }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-surface rounded-xl border border-border/50 text-text-primary group-hover:text-black group-hover:bg-accent transition-all duration-500 group-hover:rotate-12">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-primary uppercase tracking-tight">{item.title}</h3>
                <div className="text-accent font-display italic text-sm">{item.subtitle}</div>
              </div>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function FutureVision() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const lineHeight = useFramerTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section id="vision" className="py-24 md:py-32 bg-bg relative overflow-hidden perspective-1000 border-t border-border">
      
      {/* Moving Blueprint Background */}
      <motion.div 
        animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Ambient floating particles */}
      <motion.div animate={{ y: [0, -20, 0], opacity: [0.1, 0.3, 0.1] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full blur-[2px]" />
      <motion.div animate={{ y: [0, 20, 0], opacity: [0.1, 0.4, 0.1] }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }} className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-accent/80 rounded-full blur-[3px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10" ref={containerRef}>
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-muted block mb-4">
            07 / Future Vision
          </span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-text-primary uppercase mb-6">
            Engineering <span className="text-accent italic font-display">Roadmap</span>
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Building my career through continuous learning, practical industrial experience, and advanced engineering design with the goal of becoming a professional Plant Design Engineer.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative w-full pb-20">
          {/* Static Background Line */}
          <div className="absolute left-[7px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-border z-0" />
          
          {/* Animated Glow Line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-[7px] md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] bg-accent z-10 shadow-[0_0_15px_#D7FF00]" 
          />

          {/* Cards */}
          {roadmap.map((item, idx) => (
            <RoadmapCard key={idx} item={item} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
}
