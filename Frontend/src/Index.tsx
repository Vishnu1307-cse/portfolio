import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/5 border-b border-white/10 px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold tracking-tight">Vichu</h1>
        <div className="flex gap-8 opacity-80 hover:opacity-100 transition-all">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl font-semibold tracking-tight mb-4"
        >
          Crafting Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-xl opacity-70 max-w-2xl"
        >
          Engineering student, splash artist, and lover of clean visuals. Building tech with elegance — or breaking CSS until it submits.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-white text-black font-medium rounded-full hover:scale-105 active:scale-95 shadow-lg transition-all"
          >
            Explore Work
          </a>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-semibold mb-6">Who Am I?</h2>
          <p className="text-lg opacity-80 leading-relaxed">
            I'm an engineering student with a passion for visual storytelling. I design splash art, build systems, and dream of moving to Japan one day. I'm all about blending clean UI aesthetics with smooth, meaningful interactions.
          </p>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-32 px-8 max-w-6xl mx-auto">
        <h2 className="text-5xl font-semibold mb-10">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[{
            title: "Patient Management System",
            desc: "A full-featured hospital workflow tool with search, merge/delete, transfers, and consultation tracking.",
          },{
            title: "Bella AI Localization",
            desc: "Converted Mandarin-heavy logic and UI into clean English, improving accessibility and usability.",
          }].map((proj, i) => (
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
              <p className="opacity-80 leading-relaxed">{proj.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-8 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-semibold mb-6"
        >
          Let's Connect
        </motion.h2>
        <p className="opacity-80 text-lg">Email: your-email@example.com</p>
      </section>
    </div>
  );
}