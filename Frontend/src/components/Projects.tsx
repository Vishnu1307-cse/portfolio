import projectsData from "../data/projects.json";
import { motion } from "framer-motion";

type Project = {
  title: string;
  about: string;
  github: string;
  tools: string[];
};

export function Projects() {
  const projects: Project[] = projectsData;

  return (
    <section id="projects" className="py-32 px-8 max-w-6xl mx-auto">
      <h2 className="text-5xl font-semibold mb-10">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.03 }}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-white/10 transition-all cursor-pointer"
          >
            <h3 className="text-2xl font-semibold mb-3">{proj.title}</h3>

            <p className="opacity-80 leading-relaxed mb-4">{proj.about}</p>

            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-300 transition"
            >
              View on GitHub →
            </a>

            <div className="mt-4 flex flex-wrap gap-2">
              {proj.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white/10 rounded-full text-sm opacity-80"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
