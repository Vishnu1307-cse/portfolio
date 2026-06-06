import { motion } from "framer-motion";

export function Experience() {
  const experiences = [
    {
      role: "Web Application Development Intern",
      company: "Pricol Technologies Plant 1",
      duration: "Apr 2026 – Jun 2026",
      bullets: [
        "Developed a secure enterprise file transfer platform using Laravel and React, enabling controlled document exchange between internal employees, customers, and vendors.",
        "Implemented role-based access control (RBAC), multi-stage approval workflows, OTP-based authentication, user management modules, and audit-ready transaction tracking.",
        "Built features including file transfer requests, approval centers, team oversight dashboards, inbox management, and SFTP backed secure file storage with configurable system settings.",
      ],
      tech: ["Laravel", "React", "RBAC", "OTP Auth", "SFTP", "MySQL"],
    },
  ];

  return (
    <section id="experience" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] bottom-0 left-0 pointer-events-none" />
      
      <div className="w-full max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 mb-3 block">
            Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
        </div>

        <div className="relative border-l border-violet-500/20 ml-4 md:ml-12 pl-6 md:pl-12 py-4 space-y-12">
          
          {/* Glowing dot for timeline root */}
          <div className="absolute top-0 left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 animate-ping opacity-75" />
          <div className="absolute top-0 left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 border-2 border-black" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative"
            >
              {/* Timeline item marker */}
              <div className="absolute top-1.5 -left-[30px] md:-left-[54px] w-3 h-3 rounded-full bg-violet-500 border border-black" />
              
              {/* Card wrapper */}
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-violet-500/30 transition-all duration-300 shadow-xl shimmer-card hover:shadow-black/50">
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-violet-400 font-semibold mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-white/70 w-fit">
                    {exp.duration}
                  </span>
                </div>

                <ul className="space-y-4 text-white/70 mb-8 list-none pl-0">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-3 text-base leading-relaxed">
                      <span className="text-cyan-400 mt-1.5 select-none">✦</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-violet-600/10 border border-violet-500/20 text-violet-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Experience;
