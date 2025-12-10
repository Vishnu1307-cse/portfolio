import { motion } from "framer-motion";
import hologram from "../assets/cpu-hologram.png";

export function About() {
  return (
    <section id="about" className="py-32 px-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        {/* Hologram (floating only) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={hologram}
            alt="hologram"
            className="w-[420px] mx-auto"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-semibold mb-6">Who Am I?</h2>
          <p className="text-lg opacity-80 leading-relaxed">
I’m <i>Vishnu</i>, a Computer Science student at Amrita Vishwa Vidyapeetham, Coimbatore, passionate about full-stack development with a focus on the MERN stack and Ruby on Rails. I love blending technical problem-solving with creativity to build impactful, data-driven applications.
Beyond coding, I explore Blender 3D modeling and 2D art, bringing together engineering and design in everything I create.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
