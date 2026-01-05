import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg";

export function Hero() {
  return (
    <section className="h-screen px-6 flex items-center">
      <div className="w-full max-w-7xl mx-auto flex items-center">
        
        {/* LEFT: PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-shrink-0"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-72 h-72 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"
          >
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* MIDDLE: TEXT CONTENT */}
        <div className="flex-1 flex ">
          <div className="max-w-xl text-center md:text-left ml-12">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-6xl md:text-7xl font-semibold tracking-tight mb-4"
            >
              Crafting Experiences
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-xl opacity-70"
            >
              Engineering student, splash artist, and someone who loves turning ideas into visuals,
              whether through Blender 3D modeling or 2D art.
              I enjoy creating clean, thoughtful designs and building intuitive digital experiences
              using my full-stack web development skills, especially with the MERN stack and Ruby on Rails.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10"
            >
              <a
                href="#projects"
                className="inline-block px-8 py-3 bg-white text-black font-medium rounded-full hover:scale-105 active:scale-95 shadow-lg transition-all"
              >
                Explore Work
              </a>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
