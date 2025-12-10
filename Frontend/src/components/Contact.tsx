import { motion } from "framer-motion";
import mail from "../assets/gmail.jpg";
import github from "../assets/GitHub.png";
import linkedin from "../assets/linkedin.jpeg";
import resume from "../assets/Resume_Vishnu_S.pdf";

export function Contact() {
return (
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


<p className="opacity-100 text-lg flex items-center gap-2 justify-center">
  Email:
  <a href="mailto:svvishnu33@gmail.com" className="opacity-80 text-lg flex items-center gap-2 justify-center">
    <img src={mail} className="w-10 h-10" /> svvishnu33@gmail.com
  </a>
</p>

<p className="opacity-100 text-lg flex items-center gap-2 justify-center">
  GitHub:
  <a href="https://github.com/Vishnu1307-cse" target="_blank" className="opacity-80 text-lg flex items-center gap-2 justify-center">
    <img src={github} className="w-10 h-10" /> Vishnu1307-cse
  </a>
</p>

<p className="opacity-100 text-lg flex items-center gap-2 justify-center">
  Linkedin:
  <a href="https://www.linkedin.com/in/vishnu-s-55887b295/" target="_blank" className="opacity-80 text-lg flex items-center gap-2 justify-center">
    <img src={linkedin} className="w-10 h-10" /> Vishnu S
  </a>
</p>

<p className="opacity-100 text-lg flex items-center gap-2 justify-center">
  Resume:
  <a href={resume} target="_blank" className="opacity-80 text-lg flex items-center gap-2 justify-center">
     Vishnu S resume
  </a>
</p>
</section>
);
}