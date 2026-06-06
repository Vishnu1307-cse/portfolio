import { motion } from "framer-motion";

export function Certifications() {
  const items = [
    {
      title: "Full Stack Web Development Bootcamp",
      issuer: "Udemy (Angela Yu)",
      description: "65+ hours of intensive full-stack training covering advanced React, Node.js, database integration, API development, and secure deployment patterns.",
      type: "Certification",
      color: "border-purple-500/20 hover:border-purple-500/40 text-purple-400 bg-purple-500/5",
    },
    {
      title: "Python, SQL, & JavaScript Verification",
      issuer: "HackerRank Skills Badges",
      description: "Verified certifications demonstrating competency in database designs, complex queries, algorithms, and JavaScript backend/frontend mechanisms.",
      type: "Badges",
      color: "border-emerald-500/20 hover:border-emerald-500/40 text-emerald-400 bg-emerald-500/5",
    },
    {
      title: "AWS Academy Graduate — Cloud Foundations",
      issuer: "AWS Academy",
      description: "Validated understanding of AWS cloud concepts, core architecture principles, computing resources, IAM security configuration, and cost models.",
      type: "Badge",
      color: "border-amber-500/20 hover:border-amber-500/40 text-amber-400 bg-amber-500/5",
    },
    {
      title: "Lead Full-Stack Developer Role",
      issuer: "Intel IoT Web Developer Club",
      description: "Appointed to lead developers, coordinate repository reviews, run training workshops, and manage deployments of IoT integrations.",
      type: "Campus Role",
      color: "border-cyan-500/20 hover:border-cyan-500/40 text-cyan-400 bg-cyan-500/5",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="certifications" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute w-[300px] h-[300px] bg-pink-500/5 rounded-full blur-[100px] top-1/2 left-1/4 pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400 mb-3 block">
            Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Certifications & Leadership
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className={`p-8 rounded-3xl border backdrop-blur-xl transition-all duration-300 shadow-xl shimmer-card flex flex-col justify-between ${item.color}`}
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider opacity-80">
                    {item.type}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-current" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>
                
                <p className="text-sm font-semibold opacity-90 mb-4">
                  {item.issuer}
                </p>

                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
export default Certifications;
