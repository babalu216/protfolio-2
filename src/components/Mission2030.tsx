import { motion, useMotionValue, useSpring, useTransform, useScroll, useTransform as useFramerTransform } from "framer-motion";
import { Target, MonitorPlay, PenTool, LayoutTemplate, Box, Users, Leaf, Globe } from "lucide-react";
import React, { useRef } from "react";

const missions = [
  {
    title: "Plant Design Engineer",
    description: "Build expertise in designing safe, efficient, and reliable industrial plants by applying engineering principles, international standards, and innovative design methodologies.",
    icon: <Target size={28} />
  },
  {
    title: "SP3D & AVEVA E3D Professional",
    description: "Master intelligent 3D plant modelling, piping routing, equipment modelling, clash detection, and multidisciplinary design coordination using industry-leading software.",
    icon: <MonitorPlay size={28} />
  },
  {
    title: "Piping Design Specialist",
    description: "Develop advanced skills in piping design, layout optimization, stress-aware routing, material specifications, and engineering documentation for industrial facilities.",
    icon: <PenTool size={28} />
  },
  {
    title: "AutoCAD & Technical Design Expert",
    description: "Create accurate engineering drawings, piping isometrics, equipment layouts, fabrication drawings, and detailed technical documentation following global engineering standards.",
    icon: <LayoutTemplate size={28} />
  },
  {
    title: "Digital Plant Engineering",
    description: "Apply modern digital engineering workflows, intelligent modelling, design automation, and collaborative engineering practices to improve project quality and efficiency.",
    icon: <Box size={28} />
  },
  {
    title: "Engineering Leadership",
    description: "Develop strong communication, technical coordination, and project management skills to lead multidisciplinary engineering teams and deliver successful industrial projects.",
    icon: <Users size={28} />
  },
  {
    title: "Sustainable Engineering",
    description: "Design energy-efficient, reliable, and environmentally responsible industrial systems that contribute to a sustainable future.",
    icon: <Leaf size={28} />
  },
  {
    title: "Global Engineering Career",
    description: "Contribute to world-class EPC, oil & gas, power, petrochemical, and industrial plant projects while continuously expanding technical knowledge and professional expertise.",
    icon: <Globe size={28} />
  }
];

function MissionCard({ mission, index }: { mission: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative p-8 rounded-[24px] bg-[#0A0A0A]/90 backdrop-blur-xl border border-border/50 hover:border-accent/40 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
    >
      {/* Animated Glowing Border */}
      <div className="absolute inset-0 rounded-[24px] pointer-events-none p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
        style={{
          background: 'linear-gradient(45deg, transparent, rgba(212,255,0,0.4), transparent)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />
      
      {/* Soft Hover Glow Inside */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent/0 group-hover:bg-accent/5 blur-[40px] rounded-full pointer-events-none transition-colors duration-700" />

      <div className="relative z-20 flex flex-col h-full" style={{ transform: "translateZ(20px)" }}>
        
        {/* Icon & Progress */}
        <div className="flex justify-between items-start mb-6">
          <div className="p-4 rounded-2xl bg-surface border border-border/50 text-text-primary group-hover:text-black group-hover:bg-accent transition-all duration-500 group-hover:rotate-6 group-hover:shadow-[0_0_20px_rgba(212,255,0,0.3)]">
            <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: index * 0.2 }}>
              {mission.icon}
            </motion.div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] font-mono text-muted uppercase tracking-widest">In Progress</span>
          </div>
        </div>

        {/* Text Content */}
        <h3 className="text-xl font-bold text-text-primary uppercase tracking-tight mb-3">
          {mission.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
          {mission.description}
        </p>

        {/* Bottom Line Indicator */}
        <div className="w-0 group-hover:w-full h-[2px] bg-accent/50 transition-all duration-500 mt-auto" />
      </div>
    </motion.div>
  );
}

export default function Mission2030() {
  const barRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: barRef,
    offset: ["start end", "center center"]
  });
  const barWidth = useFramerTransform(scrollYProgress, [0, 1], ["0%", "30%"]); // 30% progress conceptually

  return (
    <section id="mission" className="py-24 md:py-32 bg-bg relative overflow-hidden perspective-1000">
      
      {/* Background Blueprint Grid */}
      <motion.div 
        animate={{ backgroundPosition: ["0px 0px", "-40px -40px"] }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        className="absolute inset-0 opacity-[0.02] pointer-events-none z-0"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Soft Ambient Depth Glow */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left mb-20 max-w-3xl"
        >
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-muted block mb-4">
            08 / Mission 2030
          </span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-text-primary uppercase mb-6">
            Vision <span className="text-accent italic font-display">2030</span>
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            My long-term vision is to evolve into a world-class Plant Design Engineer by mastering advanced engineering design, intelligent 3D modelling, and innovative industrial solutions.
          </p>
        </motion.div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24" style={{ perspective: "2000px" }}>
          {missions.map((mission, idx) => (
            <MissionCard key={idx} mission={mission} index={idx} />
          ))}
        </div>

        {/* Bottom Section: Animated Progress Bar */}
        <motion.div 
          ref={barRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold text-text-primary uppercase tracking-tight mb-2">Journey to Mission 2030</h3>
          <p className="text-muted text-sm mb-12">Every project, every drawing, and every challenge moves me closer to achieving my engineering vision.</p>
          
          <div className="w-full h-[2px] bg-border relative mb-6 rounded-full overflow-hidden">
            <motion.div 
              style={{ width: barWidth }}
              className="absolute left-0 top-0 bottom-0 bg-accent shadow-[0_0_10px_#D7FF00]"
            />
          </div>
          
          <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-muted">
            <span>Current Progress</span>
            <span className="text-accent">Always Learning • Always Improving • Always Designing</span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
