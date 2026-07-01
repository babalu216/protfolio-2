import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { Wrench, Zap, FileSpreadsheet, ShieldCheck, PenTool, Users, ArrowUpRight } from "lucide-react";
import React, { useRef } from "react";

const skills = [
  {
    title: "Piping Engineering",
    description: "Built practical experience in piping engineering through active involvement in thermal power plant construction projects. Participated in piping erection, installation, equipment alignment, and engineering coordination to support successful project execution. Interpreted P&IDs, isometric drawings, general arrangement drawings, and piping layouts to ensure accurate installation and compliance with project requirements. Assisted in quality inspections, material verification, construction planning, and progress monitoring while working closely with engineers, supervisors, and contractors. Focused on delivering safe, efficient, and high quality industrial piping systems by following engineering standards, quality procedures, and site safety regulations. Continuously expanding expertise in plant engineering, 3D piping design, and advanced engineering technologies to support complex industrial projects.",
    icon: <Wrench size={32} />,
    badge: "1 Year",
    tools: ["P&ID", "Isometrics", "ASME Codes"],
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Thermal Power Plant Systems",
    description: "Built a strong foundation in thermal power plant engineering by contributing to the construction and execution of large scale industrial projects. Gained practical experience with critical plant systems including boilers, steam turbines, condensers, feedwater systems, cooling water systems, industrial piping, pumps, valves, and auxiliary equipment. Supported installation activities, engineering coordination, equipment inspections, and construction planning while ensuring compliance with project specifications, quality standards, and strict safety requirements. Experienced in interpreting technical drawings, monitoring project progress, collaborating with multidisciplinary teams, and resolving site level engineering challenges. Continuously expanding expertise in advanced power generation technologies, plant engineering, and sustainable industrial infrastructure to deliver safe, reliable, and efficient energy solutions.",
    icon: <Zap size={32} />,
    badge: "Expert",
    tools: ["Turbines", "Boilers", "Cooling Towers"],
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Engineering Drawings",
    description: "Precise interpretation of technical drawings, blueprints, and complex construction documents.",
    icon: <FileSpreadsheet size={32} />,
    badge: "Advanced",
    tools: ["AutoCAD", "Blueprints", "GD&T"],
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "QA / QC",
    description: "Quality assurance, inspection support, and strict compliance activities on active sites.",
    icon: <ShieldCheck size={32} />,
    badge: "Certified",
    tools: ["NDT", "Compliance", "Audits"],
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "AutoCAD",
    description: "Professional engineering drafting, 2D/3D modeling, and thorough drawing review.",
    icon: <PenTool size={32} />,
    badge: "Pro",
    tools: ["2D Drafting", "3D Modeling", "Layouts"],
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Stakeholder Management",
    description: "Coordination with multidisciplinary teams, vendors, and critical project stakeholders.",
    icon: <Users size={32} />,
    badge: "Leadership",
    tools: ["Agile", "Negotiation", "Reporting"],
    span: "md:col-span-2 md:row-span-1",
  }
];

function TiltCard({ skill, index }: { skill: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for tilt
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Map mouse position to rotation (-5deg to 5deg)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  // Cursor follow light
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const background = useMotionTemplate`radial-gradient(600px circle at ${cursorX}px ${cursorY}px, rgba(212,255,0,0.1), transparent 80%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalized mouse position for tilt (-0.5 to 0.5)
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
    
    // Exact pixels for light effect
    cursorX.set(mouseX);
    cursorY.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`group relative h-full min-h-[320px] rounded-[24px] border border-border/50 bg-[#0C0C0C]/80 backdrop-blur-xl p-8 overflow-hidden hover:border-accent/50 transition-colors duration-500 hover:-translate-y-2 shadow-2xl ${skill.span}`}
    >
      {/* Dynamic Cursor Light */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
        style={{ background }} 
      />

      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0 group-hover:opacity-20 transition-opacity duration-700"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />

      {/* Floating Particles */}
      <motion.div 
        animate={{ y: [0, -10, 0], opacity: [0.2, 0.8, 0.2] }} 
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-10 right-10 w-1 h-1 bg-accent rounded-full z-0" 
      />
      <motion.div 
        animate={{ y: [0, 15, 0], opacity: [0.2, 0.5, 0.2] }} 
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 left-12 w-1.5 h-1.5 bg-accent/50 rounded-full z-0" 
      />

      {/* Animated Gradient Border Glow on Hover */}
      <div className="absolute inset-0 rounded-[24px] pointer-events-none p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
        style={{
          background: 'linear-gradient(45deg, transparent, rgba(212,255,0,0.5), transparent)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      {/* Content (Lifted in 3D) */}
      <div className="relative z-20 h-full flex flex-col" style={{ transform: "translateZ(40px)" }}>
        
        {/* Top Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 rounded-2xl bg-surface border border-border/50 text-text-primary group-hover:text-black group-hover:bg-accent transition-all duration-500 group-hover:rotate-12">
            {skill.icon}
          </div>
          <span className="px-3 py-1 rounded-full border border-border/50 bg-bg/50 text-xs font-mono text-muted uppercase tracking-widest backdrop-blur-md">
            {skill.badge}
          </span>
        </div>

        {/* Title & Growing Line */}
        <h3 className="text-2xl font-bold text-text-primary uppercase tracking-tight mb-4">
          {skill.title}
        </h3>
        <div className="w-0 h-[2px] bg-accent mb-4 group-hover:w-16 transition-all duration-500 ease-out" />

        {/* Description (Expands/fades in) */}
        <p className="text-muted text-sm leading-relaxed mb-8 flex-1">
          {skill.description}
        </p>

        {/* Footer: Tool list & Button */}
        <div className="mt-auto flex flex-col xl:flex-row xl:items-end justify-between gap-6 border-t border-border/30 pt-6">
          <div className="flex flex-wrap gap-2">
            {skill.tools.map((tool: string, i: number) => (
              <span key={i} className="text-[10px] font-mono uppercase tracking-widest text-muted bg-surface px-2 py-1 rounded border border-border/30">
                {tool}
              </span>
            ))}
          </div>

          {/* Animated Arrow Button */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">
            Explore <span className="p-1.5 rounded-full bg-accent/20"><ArrowUpRight size={14} /></span>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section className="py-24 md:py-32 bg-bg relative overflow-hidden perspective-1000">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-muted block mb-4">
              02 / Skills & Expertise
            </span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-text-primary uppercase max-w-2xl">
              Professional <span className="text-accent italic font-display">Capabilities</span>
            </h2>
          </div>
          
          {/* Animated Number Counter (Simulated for visual) */}
          <div className="flex items-center gap-8">
            <div className="text-right">
              <div className="text-3xl font-display italic text-text-primary">06</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted">Core Disciplines</div>
            </div>
            <div className="w-[1px] h-12 bg-border" />
            <div className="text-right">
              <div className="text-3xl font-display italic text-text-primary">18+</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted">Technical Tools</div>
            </div>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]" style={{ perspective: "2000px" }}>
          {skills.map((skill, idx) => (
            <TiltCard key={idx} skill={skill} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
