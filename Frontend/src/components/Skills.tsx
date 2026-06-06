import { motion } from "framer-motion";

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      accent: "from-violet-500 to-purple-600",
      border: "hover:border-violet-500/30",
      skills: ["JavaScript", "Python", "Ruby", "php", "Java", "C", "C++"],
    },
    {
      title: "Frameworks & Web",
      accent: "from-cyan-500 to-blue-600",
      border: "hover:border-cyan-500/30",
      skills: ["React", "Node.js", "Express.js", "Laravel", "Ruby on Rails"],
    },
    {
      title: "Databases",
      accent: "from-pink-500 to-rose-600",
      border: "hover:border-pink-500/30",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "SQLite", "ClickHouse"],
    },
    {
      title: "Tools & DevOps",
      accent: "from-emerald-500 to-green-600",
      border: "hover:border-emerald-500/30",
      skills: ["Git", "GitLab", "GitHub", "Linux", "Docker", "Nginx", "Cloudflare APIs", "PuTTY"],
    },
    {
      title: "Creative & Other",
      accent: "from-amber-500 to-orange-600",
      border: "hover:border-amber-500/30",
      skills: ["Blender 3D", "Unreal Engine 5", "Computer Graphics", "Data Structures & Algorithms"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };


  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] top-1/4 right-0 pointer-events-none" />
      
      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400 mb-3 block">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Skills & Technologies
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className={`p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-300 shimmer-card ${category.border} shadow-xl hover:shadow-black/40`}
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.accent}`} />
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3.5 py-1.5 rounded-full text-sm font-medium bg-white/5 border border-white/5 text-white/80 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
export default Skills;
