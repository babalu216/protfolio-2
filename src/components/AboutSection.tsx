import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-surface border-t border-border">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-muted block mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary uppercase mb-12">
            Bridging <span className="text-accent italic font-display">Engineering</span> & Technology
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-muted font-light leading-relaxed">
            <p>
              I am a Mechanical Engineering graduate with professional experience in thermal power plant construction and piping systems. As a Junior Engineer at Power Mech Projects, I contributed to site execution, engineering coordination, quality assurance, and project documentation.
            </p>
            <p>
              Alongside my engineering career, I have worked as a Community Moderator in the Web3 ecosystem, helping manage digital communities, support users, and drive engagement initiatives. This unique combination of engineering and technology has strengthened my communication, stakeholder management, and problem-solving skills.
            </p>
            <p className="text-text-primary font-medium">
              I am passionate about continuous learning, innovation, and creating solutions that bridge traditional engineering with modern technology.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
