import { useState, useEffect } from "react";
import resume from "../assets/Resume_Vishnu_S.pdf";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["about", "skills", "experience", "projects", "certifications", "contact"];
      let currentSection = "";
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-4 flex justify-between items-center ${
        scrolled
          ? "backdrop-blur-md bg-[#050508]/80 border-b border-purple-500/10 shadow-lg shadow-purple-500/5"
          : "bg-transparent"
      }`}
    >
      <a href="#" className="group flex items-center gap-2">
        <span className="text-2xl font-bold tracking-tight text-white transition-all group-hover:text-cyan-400">
          Vishnu
        </span>
        <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400">
          S
        </span>
      </a>

      <div className="hidden md:flex gap-8 items-center text-sm font-medium">
        {[
          { name: "About", id: "about" },
          { name: "Skills", id: "skills" },
          { name: "Experience", id: "experience" },
          { name: "Projects", id: "projects" },
          { name: "Certifications", id: "certifications" },
          { name: "Contact", id: "contact" },
        ].map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`relative py-1 transition-all duration-300 hover:text-white ${
              activeSection === item.id ? "text-cyan-400" : "text-white/60"
            }`}
          >
            {item.name}
            {activeSection === item.id && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full" />
            )}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a
          href={resume}
          download="Resume_Vishnu_S.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded-full border border-violet-500/30 text-white bg-violet-600/10 hover:bg-violet-600/30 transition-all duration-300 shadow-md hover:shadow-violet-600/20 active:scale-95"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
export default Navbar;