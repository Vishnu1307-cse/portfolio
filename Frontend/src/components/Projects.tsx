import projectsData from "../data/projects.json";
import { motion } from "framer-motion";

type Project = {
  title: string;
  about: string;
  github: string;
  github_backend?: string;
  tools: string[];
};

export function Projects() {
  const projects: Project[] = projectsData;

  // Split featured vs other projects
  const featuredProjects = projects.slice(0, 3);
  const regularProjects = projects.slice(3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[130px] bottom-1/4 right-1/4 pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 mb-3 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
        </div>

        {/* FEATURED PROJECTS (Large 1-column layout or staggered cards) */}
        <div className="space-y-12 mb-20">
          {featuredProjects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-violet-500/30 transition-all duration-300 shadow-xl hover:shadow-black/50 shimmer-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-8">
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-violet-600/20 border border-violet-500/30 text-violet-300 mb-4 inline-block">
                  Featured Project
                </span>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                  {proj.title}
                </h3>
                
                <p className="text-white/70 leading-relaxed text-base md:text-lg mb-6">
                  {proj.about}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-white/5 border border-white/5 text-white/60"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-center text-sm font-semibold rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                  <span>{proj.github_backend ? "Frontend Repo" : "View on GitHub"}</span>
                </a>
                
                {proj.github_backend && (
                  <a
                    href={proj.github_backend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 text-center text-sm font-semibold rounded-full bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                    <span>Backend Repo</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white tracking-tight">
            More Projects
          </h3>
        </div>

        {/* REGULAR PROJECTS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {regularProjects.map((proj, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-cyan-500/30 transition-all duration-300 shadow-xl shimmer-card flex flex-col justify-between"
            >
              <div>
                <h4 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {proj.title}
                </h4>
                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  {proj.about}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-xs font-semibold rounded bg-white/5 text-white/50"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Source Code</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
export default Projects;
