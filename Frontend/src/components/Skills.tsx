import { motion } from "framer-motion";

export function Skills() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 80 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-7xl font-semibold tracking-tight mb-8"
      >
        Technologies
      </motion.h1>

      {/* SKILLS LIST */}
      <motion.ul
        initial={{ opacity: 0, y: 60 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
        className="text-xl opacity-80 max-w-2xl space-y-4 leading-relaxed"
      >
        <li><span className="font-semibold opacity-100">Languages:</span> JavaScript, Python, Ruby, Java, C, C++</li>
        <li><span className="font-semibold opacity-100">Frameworks:</span> React, Node.js, Express.js, Ruby on Rails</li>
        <li><span className="font-semibold opacity-100">Databases:</span> MongoDB, MySQL, SQLite, PostgreSQL</li>
        <li><span className="font-semibold opacity-100">Tools:</span> Git, Linux, Unreal Engine 5, Blender</li>
        <li><span className="font-semibold opacity-100">Frontend:</span> Tailwind, Bootstrap, Chakra UI</li>
      </motion.ul>

    </section>
  );
}
