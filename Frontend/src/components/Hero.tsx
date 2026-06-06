import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import profile from "../assets/profile.jpeg";
import resume from "../assets/Resume_Vishnu_S.pdf";

export function Hero() {
  const roles = [
    "Full-Stack Web Developer",
    "Lead @ Intel IoT Club",
    "MERN Stack Specialist",
    "Ruby on Rails Engineer",
    "Creative Splash Artist",
  ];
  
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen px-6 flex items-center justify-center pt-24 overflow-hidden">
      {/* Decorative background grid and gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT: TEXT CONTENT */}
        <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-violet-500/10 border border-violet-500/20 text-violet-400 mb-6 inline-block">
              Available for Internships & Projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-5xl md:text-7xl xl:text-8xl font-bold tracking-tight mb-4 text-white"
          >
            I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-500 to-cyan-400 text-glow-purple">
              Vishnu S
            </span>
          </motion.h1>

          <div className="h-12 md:h-16 flex items-center justify-center lg:justify-start mb-6">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="text-2xl md:text-4xl font-semibold text-cyan-400 text-glow-cyan"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed mb-8"
          >
            Computer Science student at Amrita Coimbatore. I build robust full-stack applications (MERN, PERN, Laravel, Rails) and explore creative design with Blender 3D and splash art.
          </motion.p>

          {/* Social icons row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex gap-4 justify-center lg:justify-start mb-10"
          >
            <a
              href="https://github.com/Vishnu1307-cse"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-violet-500 hover:bg-violet-500/10 text-white/80 hover:text-white transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
            </a>
            <a
              href="https://www.linkedin.com/in/vishnu-s-55887b295/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-500 hover:bg-cyan-500/10 text-white/80 hover:text-white transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a
              href="mailto:svvishnu33@gmail.com"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-pink-500 hover:bg-pink-500/10 text-white/80 hover:text-white transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </a>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] text-center"
            >
              Explore Work
            </a>
            <a
              href={resume}
              download="Resume_Vishnu_S.pdf"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white hover:bg-white/10 font-semibold rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] text-center flex items-center justify-center gap-2"
            >
              <span>Download Resume</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            </a>
          </motion.div>
        </div>

        {/* RIGHT: PROFILE IMAGE & FLOATING BLOBS */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Holographic glowing rings background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full opacity-20 blur-2xl animate-pulse" />
            
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden avatar-glow p-[3px] bg-black"
            >
              <img
                src={profile}
                alt="Vishnu S Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>

            {/* Float tags */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 px-4 py-2 bg-[#0d0d1e]/90 backdrop-blur-md rounded-2xl border border-violet-500/30 text-violet-300 text-xs font-semibold shadow-lg shadow-violet-500/10"
            >
              React & Node
            </motion.div>
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-2 -left-6 px-4 py-2 bg-[#0d0d1e]/90 backdrop-blur-md rounded-2xl border border-cyan-500/30 text-cyan-300 text-xs font-semibold shadow-lg shadow-cyan-500/10"
            >
              Laravel & Rails
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/40 hover:text-white/80 transition-colors"
        >
          <span className="text-xs uppercase tracking-widest font-light">Scroll Down</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
        </motion.a>
      </div>
    </section>
  );
}
export default Hero;
