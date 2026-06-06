import { motion } from "framer-motion";
import mail from "../assets/gmail.jpg";
import github from "../assets/GitHub.png";
import linkedin from "../assets/linkedin.jpeg";
import resume from "../assets/Resume_Vishnu_S.pdf";

export function Contact() {
  const contacts = [
    {
      name: "Email",
      value: "svvishnu33@gmail.com",
      link: "mailto:svvishnu33@gmail.com",
      image: mail,
      borderColor: "hover:border-pink-500/40",
      accentBg: "bg-pink-500/5",
    },
    {
      name: "GitHub",
      value: "Vishnu1307-cse",
      link: "https://github.com/Vishnu1307-cse",
      image: github,
      borderColor: "hover:border-violet-500/40",
      accentBg: "bg-violet-500/5",
    },
    {
      name: "LinkedIn",
      value: "Vishnu S",
      link: "https://www.linkedin.com/in/vishnu-s-55887b295/",
      image: linkedin,
      borderColor: "hover:border-cyan-500/40",
      accentBg: "bg-cyan-500/5",
    },
    {
      name: "Resume",
      value: "Download PDF",
      link: resume,
      image: null, // Custom icon for resume
      borderColor: "hover:border-amber-500/40",
      accentBg: "bg-amber-500/5",
      isDownload: true,
    },
  ];

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[120px] bottom-0 right-0 pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto relative z-10 text-center">
        
        <div className="mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 mb-3 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Let's Connect
          </h2>
          <p className="text-white/60 mt-4 max-w-md mx-auto">
            I'm always open to discussing new opportunities, internship offers, or creative collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {contacts.map((c, idx) => (
            <motion.a
              key={idx}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              download={c.isDownload ? "Resume_Vishnu_S.pdf" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className={`p-6 rounded-3xl border border-white/10 backdrop-blur-xl transition-all duration-300 flex items-center gap-5 shimmer-card text-left ${c.borderColor} ${c.accentBg} shadow-lg`}
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center flex-shrink-0">
                {c.image ? (
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                )}
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-white/40 block">
                  {c.name}
                </span>
                <span className="text-white font-semibold text-base break-all mt-0.5 block hover:text-cyan-400 transition-colors">
                  {c.value}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-20 text-xs text-white/30 tracking-wider font-light">
          © {new Date().getFullYear()} VISHNU S. ALL RIGHTS RESERVED.
        </div>

      </div>
    </section>
  );
}
export default Contact;