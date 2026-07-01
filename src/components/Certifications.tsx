import SectionHeader from "./SectionHeader";
import { GraduationCap, Settings, Wrench, CheckCircle } from "lucide-react";

const certifications = [
  {
    icon: GraduationCap,
    title: "B.Tech — Mechanical Engineering",
    issuer: "APJ Abdul Kalam Technological University",
    year: "2024"
  },
  {
    icon: Settings,
    title: "HVAC Design Certification",
    issuer: "Professional Certification",
    year: "2024"
  },
  {
    icon: Wrench,
    title: "MEP Certification",
    issuer: "Professional Certification",
    year: "2024"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="bg-bg py-24 md:py-32">
      <SectionHeader 
        eyebrow="Certifications"
        heading={<>Credentials & <span className="font-display italic text-[#4A90D9]">qualifications</span></>}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1100px] mx-auto px-6 mt-14">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="bg-surface border border-stroke rounded-3xl p-7 hover:border-[#4A90D9]/35 group transition-all"
            style={{ boxShadow: "0 0 0 rgba(74,144,217,0)" }} 
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 0 24px rgba(74,144,217,0.07)"} 
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0 0 0 rgba(74,144,217,0)"}
          >
            <div className="flex justify-between items-start mb-5">
              <div className="w-10 h-10 rounded-full accent-gradient flex items-center justify-center">
                <cert.icon size={20} className="text-white" />
              </div>
              <span className="text-xs text-muted font-mono">{cert.year}</span>
            </div>
            
            <h3 className="text-base font-medium text-text-primary mt-3 mb-1">{cert.title}</h3>
            <p className="text-xs text-muted">{cert.issuer}</p>
            
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-[#4A90D9]/40 px-3 py-1 text-[10px] text-[#4A90D9] uppercase tracking-wide">
              <CheckCircle size={10} />
              <span>Certified</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
