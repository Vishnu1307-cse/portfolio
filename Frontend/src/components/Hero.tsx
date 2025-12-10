import { motion } from "framer-motion";

export function Hero() {
return (
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
    Engineering student, splash artist, and someone who loves turning ideas into visuals, whether through Blender 3D modeling or 2D art.
    I enjoy creating clean, thoughtful designs and building intuitive digital experiences using my full-stack web development skills, especially with the MERN stack and Ruby on Rails.
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
);
}