import { motion } from "framer-motion";

export function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.2, delay: 1.2 }}
      className="fixed inset-0 bg-black flex items-center justify-center z-[9999]"
    >
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold tracking-tight text-white"
      >
        VISHNU'S PORTFOLIO
      </motion.h1>
    </motion.div>
  );
}
