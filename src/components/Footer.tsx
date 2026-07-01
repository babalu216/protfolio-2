import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-border pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          {/* Logo & Bio (Left Col) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary uppercase mb-6">
              Bipin B.
            </h2>
            <p className="text-muted leading-relaxed mb-8 max-w-sm">
              Mechanical Engineer specializing in thermal power plant execution, MEP coordination, and precision engineering design.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/bipinb-engieer" target="_blank" rel="noopener noreferrer" className="p-3 bg-surface border border-border rounded-full text-text-primary hover:text-accent hover:border-accent transition-all flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://www.instagram.com/bip.in__?igsh=ZXAxazZyNWQwdTZs&utm_source=qr" target="_blank" rel="noopener noreferrer" className="p-3 bg-surface border border-border rounded-full text-text-primary hover:text-accent hover:border-accent transition-all flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="mailto:bipin2342@gmail.com" className="p-3 bg-surface border border-border rounded-full text-text-primary hover:text-accent hover:border-accent transition-all flex items-center justify-center">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-muted mb-6">Navigation</h3>
            <ul className="flex flex-col gap-4">
              <li><a href="#stats" className="text-text-primary hover:text-accent transition-colors">Stats & Skills</a></li>
              <li><a href="#projects" className="text-text-primary hover:text-accent transition-colors">Projects</a></li>
              <li><a href="#timeline" className="text-text-primary hover:text-accent transition-colors">Experience</a></li>
              <li><a href="#services" className="text-text-primary hover:text-accent transition-colors">Services</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-muted mb-6">Socials</h3>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-text-primary hover:text-accent transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-text-primary hover:text-accent transition-colors">Instagram</a></li>
              <li><a href="#" className="text-text-primary hover:text-accent transition-colors">Email</a></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-muted mb-6">Stay Updated</h3>
            <p className="text-sm text-text-primary mb-4">Get notified about my latest projects and availability.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-surface border border-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent w-full"
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-accent text-black font-bold rounded-lg hover:bg-accent/90 transition-all uppercase tracking-wide text-sm whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Bipin B. All rights reserved.
          </p>
          <div className="text-sm text-muted flex gap-4">
            <span>Based in Kerala, India</span>
            <span className="hidden md:inline">&middot;</span>
            <span className="hidden md:inline">Built To Last.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
