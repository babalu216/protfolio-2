import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow: string;
  heading: ReactNode;
  subtext?: string;
}

export const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.85, ease: [0.25, 0.1, 0.25, 1] as any },
  viewport: { once: true, margin: "-80px" as any }
};

export default function SectionHeader({ eyebrow, heading, subtext }: SectionHeaderProps) {
  return (
    <motion.div {...fadeUp} className="max-w-[1100px] mx-auto px-6 mb-16 md:px-10 lg:px-16">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-6 h-px bg-stroke" />
        <span className="text-xs text-muted uppercase tracking-[0.3em]">{eyebrow}</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-body font-light text-text-primary">{heading}</h2>
      {subtext && <p className="text-sm text-muted mt-4 max-w-xl">{subtext}</p>}
    </motion.div>
  );
}
