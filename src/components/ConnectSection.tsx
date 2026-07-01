import { motion } from "framer-motion";
import { Mail, ArrowUpRight, FileText } from "lucide-react";

export default function ConnectSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20">
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-muted block mb-4">
            06 / Connect
          </span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-text-primary uppercase mb-6">
            Let's <span className="text-accent italic font-display">Connect</span>
          </h2>
          <p className="text-muted max-w-xl text-lg leading-relaxed">
            I'm always open to discussing engineering projects, site execution opportunities, or MEP design collaborations. Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Links */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <motion.a
              href="mailto:bipinbabu216@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group flex flex-col p-8 bg-bg border border-border rounded-2xl hover:border-accent hover:shadow-[0_0_30px_rgba(212,255,0,0.1)] transition-all duration-300"
            >
              <div className="p-4 bg-surface rounded-full w-fit mb-6 text-text-primary group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                <Mail size={24} />
              </div>
              <h3 className="text-2xl font-bold text-text-primary uppercase tracking-tight mb-2">Email</h3>
              <p className="text-muted mb-6">bipinbabu216@gmail.com</p>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent mt-auto">
                Send a Message <ArrowUpRight size={14} />
              </div>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/bipinb-engieer"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group flex flex-col p-8 bg-bg border border-border rounded-2xl hover:border-accent hover:shadow-[0_0_30px_rgba(212,255,0,0.1)] transition-all duration-300"
            >
              <div className="p-4 bg-surface rounded-full w-fit mb-6 text-text-primary group-hover:text-accent group-hover:bg-accent/10 transition-colors flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
              <h3 className="text-2xl font-bold text-text-primary uppercase tracking-tight mb-2">LinkedIn</h3>
              <p className="text-muted mb-6">linkedin.com/in/bipinb-engieer</p>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent mt-auto">
                Connect on LinkedIn <ArrowUpRight size={14} />
              </div>
            </motion.a>
          </div>

          {/* Right Column - Resume */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-full group flex flex-col p-8 bg-bg border border-border rounded-2xl hover:border-accent hover:shadow-[0_0_30px_rgba(212,255,0,0.1)] transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                  <div className="p-4 bg-surface rounded-full w-fit mb-6 text-text-primary group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                    <FileText size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary uppercase tracking-tight mb-2">Resume</h3>
                  <p className="text-muted">Review my full professional experience and certifications.</p>
                </div>
                <a
                  href="/resume.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-accent text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-accent/90 transition-colors flex items-center gap-2"
                >
                  View Resume <ArrowUpRight size={14} />
                </a>
              </div>

              {/* Resume Preview Image */}
              <div className="relative flex-1 min-h-[300px] w-full rounded-xl overflow-hidden border border-border">
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent z-10" />
                <img 
                  src="/resume.jpg" 
                  alt="Bipin B Resume" 
                  className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
