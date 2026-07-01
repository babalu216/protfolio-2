import { useEffect, useRef } from "react";
import { Mail } from "lucide-react";
import gsap from "gsap";

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Contact() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, { 
        xPercent: -50, 
        duration: 35, 
        ease: "none", 
        repeat: -1 
      });
    }
  }, []);

  return (
    <section id="contact" className="bg-bg pt-24 pb-10 overflow-hidden relative">
      {/* Background Radial Glow */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(74,144,217,0.06) 0%, transparent 70%)' }} 
      />

      {/* GSAP Marquee */}
      <div className="flex whitespace-nowrap overflow-hidden relative z-0 mt-10">
        <div ref={marqueeRef} className="flex whitespace-nowrap">
          {Array.from({ length: 10 }).map((_, i) => (
            <span 
              key={i} 
              className="font-display italic text-5xl md:text-7xl uppercase text-transparent px-4"
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}
            >
              ENGINEERING PRECISION • BUILDING IMPACT • 
            </span>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="max-w-2xl mx-auto px-6 py-20 text-center z-10 relative">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-6 h-px bg-stroke" />
          <span className="text-xs text-muted uppercase tracking-[0.3em]">Get in Touch</span>
          <div className="w-6 h-px bg-stroke" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-body font-light text-text-primary">
          Let's <span className="font-display italic text-[#4A90D9]">build</span> something <span className="font-display italic text-[#4A90D9]">together</span>
        </h2>
        
        <p className="text-sm md:text-base text-muted mt-6 max-w-lg mx-auto">
          Whether it's a project, an opportunity, or just a conversation about engineering — I'd love to connect.
        </p>
        
        {/* Contact Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a href="mailto:bipinbabu216@gmail.com" className="group relative inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium hover:scale-105 transition-transform overflow-hidden">
            <span className="absolute inset-0 bg-text-primary group-hover:opacity-0 transition-opacity z-0" />
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            <span className="absolute inset-[1px] rounded-full bg-surface/90 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            <span className="relative z-10 text-bg group-hover:text-text-primary transition-colors">bipinbabu216@gmail.com</span>
          </a>
          
          <a href="https://linkedin.com/in/bipinb-engineer" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border-2 border-stroke rounded-full px-8 py-3.5 text-sm text-text-primary hover:border-[#4A90D9]/60 hover:scale-105 transition-all">
            <LinkedinIcon size={16} /> Connect on LinkedIn
          </a>
          
          <a href="https://instagram.com/BIP.IN__" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border-2 border-stroke rounded-full px-8 py-3.5 text-sm text-text-primary hover:border-[#4A90D9]/60 hover:scale-105 transition-all">
            <InstagramIcon size={16} /> @BIP.IN__
          </a>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="border-t border-stroke mt-16 pt-6 max-w-[1100px] mx-auto px-6 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          
          <div className="text-center sm:text-left">
            Bipin B — Mechanical Engineer, Kerala, India
          </div>
          
          <div className="flex items-center gap-3">
            <a href="https://instagram.com/BIP.IN__" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-stroke flex items-center justify-center hover:border-[#4A90D9]/50 hover:text-text-primary transition-colors">
              <InstagramIcon size={14} />
            </a>
            <a href="https://linkedin.com/in/bipinb-engineer" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-stroke flex items-center justify-center hover:border-[#4A90D9]/50 hover:text-text-primary transition-colors">
              <LinkedinIcon size={14} />
            </a>
            <a href="mailto:bipinbabu216@gmail.com" className="w-8 h-8 rounded-full border border-stroke flex items-center justify-center hover:border-[#4A90D9]/50 hover:text-text-primary transition-colors">
              <Mail size={14} />
            </a>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open to opportunities</span>
          </div>

        </div>
      </div>
    </section>
  );
}
