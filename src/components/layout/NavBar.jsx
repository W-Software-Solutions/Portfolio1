import React, { useState, useEffect } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${scrolled ? "py-3 bg-background/70 backdrop-blur-md shadow-lg border-b border-white/10" : "py-6 bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-row items-center justify-between overflow-hidden">
        <div>
          <p className="font-space font-bold text-2xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-shadow-glow">
            Wasif Ansari
          </p>
        </div>

        <div className="flex flex-row items-center gap-4">
          <div className="flex gap-6 md:gap-10 text-sm md:text-base font-semibold text-slate-300">
            <a href="#Home" className="relative group overflow-hidden">
              <span className="group-hover:text-cyan-400 transition-colors duration-300">Home</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#Aboutme" className="relative group overflow-hidden">
              <span className="group-hover:text-cyan-400 transition-colors duration-300">About me</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#Projects" className="relative group overflow-hidden">
              <span className="group-hover:text-cyan-400 transition-colors duration-300">Projects</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
