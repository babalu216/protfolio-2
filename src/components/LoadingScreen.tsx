import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const words = ["Design", "Engineer", "Build", "Execute"];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    // 2700ms total duration
    const duration = 2700;
    const start = performance.now();

    const animate = (time: number) => {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      
      // Calculate count (0 to 100)
      setCount(Math.floor(progress * 100));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(onComplete, 400); // 400ms delay after 100
      }
    };

    requestAnimationFrame(animate);
  }, [onComplete]);

  useEffect(() => {
    // Rotate words every 675ms (2700 / 4)
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 675);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-center items-center overflow-hidden">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute top-6 left-6 font-display italic text-xs text-muted tracking-[0.4em]"
      >
        BB
      </motion.div>

      <div className="absolute top-6 right-6 text-xs text-muted uppercase tracking-[0.2em]">
        PORTFOLIO — 2025
      </div>

      <div className="relative flex flex-row items-center justify-center gap-10">
        <div className="h-40 overflow-hidden relative flex items-center justify-center w-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={wordIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute text-lg text-muted font-body uppercase tracking-[0.3em] origin-center -rotate-90 whitespace-nowrap"
            >
              {words[wordIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="text-8xl md:text-9xl font-display tabular-nums text-text-primary">
          {String(count).padStart(3, "0")}
        </div>
      </div>

      <div className="absolute bottom-10 left-10 right-10 md:left-20 md:right-20 h-[2px] bg-border/50">
        <div 
          className="accent-gradient h-full w-full origin-left"
          style={{ 
            transform: `scaleX(${count / 100})`,
            boxShadow: '0 0 15px rgba(212,255,0,0.4)'
          }}
        />
      </div>

      <div className="absolute w-full h-[1px] bg-accent/15 animate-[scan-line_3.5s_ease-in-out_infinite]" />
    </div>
  );
}
