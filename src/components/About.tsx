import SectionHeader from "./SectionHeader";
import { Mail } from "lucide-react";

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

export default function About() {
  return (
    <section id="about" className="bg-bg py-24 md:py-32 blueprint-grid">
      <SectionHeader 
        eyebrow="About Me"
        heading={<>Engineering <span className="font-display italic text-[#4A90D9]">passion</span> into <span className="font-display italic text-[#4A90D9]">purpose</span></>}
      />

      <div className="grid md:grid-cols-2 gap-16 items-start max-w-[1100px] mx-auto px-6 md:px-10 lg:px-16 mt-16">
        
        {/* Left Column */}
        <div>
          <div className="text-sm md:text-base text-muted leading-[1.8] space-y-4">
            <p>
              Mechanical Engineering graduate from APJ Abdul Kalam Technological University (2024), 
              with hands-on experience in thermal power plant erection and piping systems.
            </p>
            <p>
              Currently working as a Junior Engineer at Powermech Projects Limited, supporting 
              large-scale power generation infrastructure — from piping installation and quality 
              inspection to site coordination and technical documentation.
            </p>
            <p>
              Passionate about solving complex engineering challenges while continuously expanding 
              my expertise in design, project execution, and emerging digital tools.
            </p>
          </div>

          <div className="flex gap-4 flex-wrap mt-8">
            <div className="bg-surface border border-stroke rounded-2xl px-6 py-4 text-center flex-1 min-w-[120px]">
              <div className="text-3xl font-display italic text-text-primary">2024</div>
              <div className="text-xs text-muted mt-1">Graduate</div>
            </div>
            <div className="bg-surface border border-stroke rounded-2xl px-6 py-4 text-center flex-1 min-w-[120px]">
              <div className="text-3xl font-display italic text-text-primary">1+</div>
              <div className="text-xs text-muted mt-1">Years Experience</div>
            </div>
            <div className="bg-surface border border-stroke rounded-2xl px-6 py-4 text-center flex-1 min-w-[120px]">
              <div className="text-3xl font-display italic text-text-primary">Kerala</div>
              <div className="text-xs text-muted mt-1">India</div>
            </div>
          </div>
        </div>

        {/* Right Column - Profile Card */}
        <div className="bg-surface border border-stroke rounded-3xl p-8 relative overflow-hidden">
          {/* Blueprint Watermark inside card */}
          <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
          
          <div className="font-display italic text-[120px] text-text-primary/[0.04] absolute -bottom-4 -right-4 leading-none select-none pointer-events-none">
            BB
          </div>

          <div className="relative z-10">
            <div className="mb-6">
              <h3 className="text-xl font-medium text-text-primary">Bipin B</h3>
              <p className="text-sm text-muted">Mechanical Engineer</p>
            </div>

            <div className="w-full h-px bg-stroke my-6" />

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between gap-4">
                <span className="text-muted">University</span>
                <span className="text-text-primary text-right">APJ Abdul Kalam Tech. University</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-muted">Graduation</span>
                <span className="text-text-primary text-right">2024</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-muted">Current Role</span>
                <span className="text-text-primary text-right">Junior Engineer @ Powermech</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-muted">Location</span>
                <span className="text-text-primary text-right">Kerala, India</span>
              </div>
            </div>

            <div className="w-full h-px bg-stroke my-6" />

            <div className="flex gap-3">
              <a href="https://linkedin.com/in/bipinb-engineer" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-stroke flex items-center justify-center hover:border-[#4A90D9]/50 hover:text-text-primary transition-colors">
                <LinkedinIcon size={18} />
              </a>
              <a href="https://instagram.com/BIP.IN__" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-stroke flex items-center justify-center hover:border-[#4A90D9]/50 hover:text-text-primary transition-colors">
                <InstagramIcon size={18} />
              </a>
              <a href="mailto:bipinbabu216@gmail.com" className="w-8 h-8 rounded-full border border-stroke bg-bg flex items-center justify-center hover:border-[#4A90D9]/50 text-muted hover:text-text-primary transition-colors">
                <Mail size={14} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
