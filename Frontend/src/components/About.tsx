import { motion } from "framer-motion";
import hologram from "../assets/cpu-hologram.png";

export function About() {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* LEFT: FLOATING HOLOGRAM IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="absolute w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
            <motion.img
              src={hologram}
              alt="Holographic CPU"
              className="w-[380px] max-w-full relative z-10 filter drop-shadow-[0_0_35px_rgba(6,182,212,0.3)]"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* RIGHT: TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 mb-3 block">
              Background
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              About Me
            </h2>
            
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              I’m <span className="text-white font-semibold">Vishnu S</span>, currently pursuing my B.Tech in Computer Science and Engineering at Amrita Vishwa Vidyapeetham, Coimbatore (expected graduation: July 2027). I specialize in developing full-stack web applications and creating immersive 3D/2D digital designs.
            </p>
            
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              I blend developer logic with design artistry. Whether building secure RBAC-driven REST endpoints or crafting assets in Blender, my focus is always on visual polish, security, and intuitive user experiences.
            </p>

            {/* Fact details grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-violet-500/30 transition-all">
                <span className="text-xs uppercase text-violet-400 tracking-wider font-semibold block mb-1">
                  B.Tech CGPA
                </span>
                <span className="text-2xl font-bold text-white">7.43 / 10.0</span>
                <span className="text-xs text-white/40 block mt-1">Amrita Vishwa Vidyapeetham</span>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-cyan-500/30 transition-all">
                <span className="text-xs uppercase text-cyan-400 tracking-wider font-semibold block mb-1">
                  High School Marks
                </span>
                <span className="text-2xl font-bold text-white">90.83%</span>
                <span className="text-xs text-white/40 block mt-1">Vivekam Matriculation HSS</span>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-pink-500/30 transition-all">
                <span className="text-xs uppercase text-pink-400 tracking-wider font-semibold block mb-1">
                  Leadership
                </span>
                <span className="text-lg font-bold text-white">Lead Full-Stack Dev</span>
                <span className="text-xs text-white/40 block mt-1">Intel IoT Club</span>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-amber-500/30 transition-all">
                <span className="text-xs uppercase text-amber-400 tracking-wider font-semibold block mb-1">
                  Location
                </span>
                <span className="text-lg font-bold text-white">Coimbatore, IN</span>
                <span className="text-xs text-white/40 block mt-1">Tamilnadu, India</span>
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
export default About;
