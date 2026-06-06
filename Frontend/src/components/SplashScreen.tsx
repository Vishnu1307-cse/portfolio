import { motion } from "framer-motion";

export function SplashScreen() {
  const letters = "VISHNU S".split("");

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: "none" }}
      transition={{ duration: 0.8, delay: 2.2, ease: "easeInOut" }}
      className="fixed inset-0 bg-[#050508] flex flex-col items-center justify-center z-[9999]"
    >
      {/* Background soft pulse glow */}
      <motion.div 
        animate={{ 
          scale: [0.8, 1.2, 0.9],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[80px]"
      />

      <div className="flex overflow-hidden mb-4">
        {letters.map((letter, idx) => (
          <motion.span
            key={idx}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: idx * 0.08,
              duration: 0.8,
              ease: [0.6, 0.01, 0.05, 0.95],
            }}
            className="text-5xl md:text-7xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-500 to-cyan-400 inline-block px-1"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>

      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "120px", opacity: 0.8 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent"
      />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="text-xs uppercase tracking-[0.3em] text-white mt-4 font-light"
      >
        Creative Developer & Designer
      </motion.p>
    </motion.div>
  );
}
export default SplashScreen;
