import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function CountUp({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Easing function (easeOutExpo)
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(Math.floor(easeProgress * end));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsSection() {
  const stats = [
    { number: 1, suffix: "+", label: "Year Experience", desc: "Hands-on engineering" },
    { number: 50, suffix: "+", label: "Eng. Drawings", desc: "Drafted & reviewed" },
    { number: 3, suffix: "MW+", label: "Power Managed", desc: "Thermal plant systems" },
    { number: 2, suffix: "", label: "Industries", desc: "Power & Web3 tech" },
  ];

  return (
    <section id="stats" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="mb-16">
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-muted block mb-4">
            01 / The Numbers
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary uppercase max-w-2xl">
            Quantifiable <span className="text-accent italic font-display">Impact</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 border border-border bg-bg group hover:-translate-y-2 transition-transform duration-300 rounded-2xl"
            >
              <div className="text-5xl lg:text-6xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                <CountUp end={stat.number} suffix={stat.suffix} />
              </div>
              <h3 className="text-lg font-bold text-text-primary uppercase tracking-wide mb-2">
                {stat.label}
              </h3>
              <p className="text-sm text-muted">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
