import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { SplashScreen } from "./components/SplashScreen";
import { CustomCursor } from "./components/CustomCursor";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800); // Sync with splash delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#050508] text-white overflow-x-hidden relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background elements */}
      <div className="bg-mesh" />
      <div className="bg-blob-3" />
      
      {/* Custom Cursor trail */}
      <CustomCursor />

      {loading && <SplashScreen />}
      
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}
