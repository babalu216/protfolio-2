import SectionHeader from "./SectionHeader";

export default function Projects() {
  return (
    <section id="projects" className="bg-bg py-24 md:py-32">
      <SectionHeader 
        eyebrow="Projects"
        heading={<>Featured <span className="font-display italic text-[#4A90D9]">work</span></>}
        subtext="A selection of engineering and personal projects reflecting precision, hands-on execution, and a passion for impactful solutions."
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 max-w-[1200px] mx-auto px-6 mt-14">
        
        {/* Card 1 */}
        <div className="md:col-span-7 aspect-[4/3] bg-surface border border-stroke rounded-3xl overflow-hidden relative group hover:border-[#4A90D9]/30 transition-all">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #1A2A3D 50%, #0A1520 100%)' }} />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-surface via-surface/90 to-transparent p-7 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <span className="text-[10px] uppercase tracking-widest text-[#4A90D9] block mb-2">Power Engineering</span>
            <div className="flex justify-between items-end gap-4">
              <div>
                <h3 className="text-xl font-medium text-text-primary mb-2">Thermal Power Plant Erection</h3>
                <p className="text-sm text-muted mb-4 max-w-md">Hands-on erection and piping work supporting large-scale power generation infrastructure.</p>
                <div className="flex flex-wrap gap-2">
                  {["Piping Systems", "Site Execution", "Quality Inspection"].map(tag => (
                    <span key={tag} className="bg-bg/50 border border-stroke/50 rounded-full text-[10px] px-2.5 py-1 text-muted backdrop-blur-md">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="hidden sm:flex shrink-0 w-10 h-10 rounded-full border border-stroke items-center justify-center text-text-primary bg-surface/50 backdrop-blur-md opacity-0 group-hover:opacity-100 group-hover:border-[#4A90D9]/50 transition-all duration-300">
                ↗
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="md:col-span-5 aspect-square bg-surface border border-stroke rounded-3xl overflow-hidden relative group hover:border-[#4A90D9]/30 transition-all">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0F1D15 0%, #1A2E20 100%)' }} />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-surface via-surface/90 to-transparent p-7 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <span className="text-[10px] uppercase tracking-widest text-[#4A90D9] block mb-2">Mechanical</span>
            <div className="flex justify-between items-end gap-4">
              <div>
                <h3 className="text-xl font-medium text-text-primary mb-2">Piping Installation & Site Coordination</h3>
                <p className="text-sm text-muted mb-4 max-w-sm">Execution, monitoring, and documentation of piping systems during power plant construction.</p>
                <div className="flex flex-wrap gap-2">
                  {["AutoCAD", "Material Management", "Documentation"].map(tag => (
                    <span key={tag} className="bg-bg/50 border border-stroke/50 rounded-full text-[10px] px-2.5 py-1 text-muted backdrop-blur-md">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="md:col-span-5 aspect-square bg-surface border border-stroke rounded-3xl overflow-hidden relative group hover:border-[#4A90D9]/30 transition-all">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #1A1408 0%, #2A2010 100%)' }} />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-surface via-surface/90 to-transparent p-7 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <span className="text-[10px] uppercase tracking-widest text-[#4A90D9] block mb-2">MEP / HVAC</span>
            <div className="flex justify-between items-end gap-4">
              <div>
                <h3 className="text-xl font-medium text-text-primary mb-2">HVAC & MEP System Design</h3>
                <p className="text-sm text-muted mb-4 max-w-sm">Practical design and coordination of HVAC and MEP systems through structured learning and exercises.</p>
                <div className="flex flex-wrap gap-2">
                  {["HVAC", "MEP Coordination", "Building Services"].map(tag => (
                    <span key={tag} className="bg-bg/50 border border-stroke/50 rounded-full text-[10px] px-2.5 py-1 text-muted backdrop-blur-md">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="md:col-span-7 aspect-[4/3] bg-surface border border-stroke rounded-3xl overflow-hidden relative group hover:border-[#4A90D9]/30 transition-all">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0D0D1A 0%, #141428 100%)' }} />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-surface via-surface/90 to-transparent p-7 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <span className="text-[10px] uppercase tracking-widest text-[#4A90D9] block mb-2">Community & Web3</span>
            <div className="flex justify-between items-end gap-4">
              <div>
                <h3 className="text-xl font-medium text-text-primary mb-2">Web3 Community Management</h3>
                <p className="text-sm text-muted mb-4 max-w-md">Grew and managed a blockchain project community through engagement, moderation, and content strategy.</p>
                <div className="flex flex-wrap gap-2">
                  {["Web3", "Community", "Communication"].map(tag => (
                    <span key={tag} className="bg-bg/50 border border-stroke/50 rounded-full text-[10px] px-2.5 py-1 text-muted backdrop-blur-md">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="md:col-span-12 aspect-[2/1] sm:aspect-[3/1] bg-surface border border-stroke rounded-3xl overflow-hidden relative group hover:border-[#4A90D9]/30 transition-all">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0A1020 0%, #0F1A30 50%, #080D18 100%)' }} />
          <div className="absolute inset-0 blueprint-grid opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-surface via-surface/90 to-transparent p-7 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <span className="text-[10px] uppercase tracking-widest text-[#4A90D9] block mb-2">Digital</span>
            <div className="flex justify-between items-end gap-4">
              <div>
                <h3 className="text-xl font-medium text-text-primary mb-2">Personal Engineering Portfolio</h3>
                <p className="text-sm text-muted mb-4 max-w-2xl">Designed and built this portfolio to showcase engineering experience, skills, and projects with precision and clarity.</p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Tailwind CSS", "TypeScript", "GSAP", "Framer Motion"].map(tag => (
                    <span key={tag} className="bg-bg/50 border border-stroke/50 rounded-full text-[10px] px-2.5 py-1 text-muted backdrop-blur-md">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="hidden sm:flex shrink-0 w-10 h-10 rounded-full border border-stroke items-center justify-center text-text-primary bg-surface/50 backdrop-blur-md opacity-0 group-hover:opacity-100 group-hover:border-[#4A90D9]/50 transition-all duration-300">
                ↗
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
