import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { PROJECTS } from "./pro";

function TiltCard({ children, className }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {/* Glossy overlay effect based on mouse position could also be added, but this transform style keeps it premium */}
      <div
        style={{ transform: "translateZ(50px)" }}
        className="w-full h-full"
      >
        {children}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <div id="Projects" className="w-full py-24 relative perspective-1000">
      <div className="flex flex-col items-center justify-center mb-20">
        <span className="px-4 py-1.5 rounded-full glass border-cyan-500/30 text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4 inline-block shadow-[0_0_15px_rgba(6,182,212,0.5)]">
          3D Interactive Portfolio
        </span>
        <h2 className="font-space text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
          Featured Projects
        </h2>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-32">
        {PROJECTS.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                } gap-10 lg:gap-20 items-center justify-between group`}
            >
              {/* 3D Image Container */}
              <div className="w-full md:w-1/2 relative rounded-2xl">
                <TiltCard className="w-full relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] glass p-2 border-white/5 transition-colors duration-500 rounded-2xl will-change-transform">
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  <div className="overflow-hidden rounded-xl bg-slate-900 border border-slate-800 h-full relative">
                    <img
                      className="w-full h-full object-cover max-h-[300px] lg:max-h-[400px] pointer-events-none drop-shadow-2xl"
                      src={project.image}
                      alt={project.title}
                    />
                  </div>
                </TiltCard>
              </div>

              {/* Text Container with depth effect */}
              <div className="w-full md:w-1/2 flex flex-col gap-6 px-4 md:px-8">
                <motion.h3
                  whileHover={{ scale: 1.05, originX: 0 }}
                  className="font-space font-bold text-4xl md:text-5xl text-white group-hover:text-cyan-400 transition-colors duration-300 drop-shadow-[0_0_10px_rgba(6,182,212,0.3)] cursor-default"
                >
                  {project.title}
                </motion.h3>

                <div className="glass p-6 rounded-xl border-l-4 border-cyan-500 relative transform transition-transform group-hover:translate-x-2">
                  <p className="text-slate-300 text-lg leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                <div className="flex gap-4 mt-6">
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex-1">
                    <button className="w-full py-4 px-6 glass rounded-full border border-white/10 hover:border-white/40 hover:bg-white/10 transition-all text-white font-semibold flex justify-center items-center gap-2">
                      View Code
                    </button>
                  </a>
                  {project.live !== "not Available" && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="flex-1">
                      <button className="w-full py-4 px-6 bg-cyan-600 hover:bg-cyan-500 rounded-full text-white font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:-translate-y-1 transition-all flex justify-center items-center gap-2">
                        Live Demo
                      </button>
                    </a>
                  )}
                  {project.live === "not Available" && (
                    <div className="flex-1">
                      <button className="w-full py-4 px-6 glass rounded-full text-slate-500 cursor-not-allowed border outline-none border-transparent font-semibold">
                        N/A
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
