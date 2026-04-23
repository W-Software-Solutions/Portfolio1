import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CodeTerminal from "./CodeTerminal";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
};

export default function Home() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit", minute: "2-digit", second: "2-digit",
          hour12: true, timeZone: "Asia/Kolkata",
        })
      );
    update();
    const iv = setInterval(update, 1000);
    return () => clearInterval(iv);
  }, []);

  return (
    <div
      id="Home"
      className="w-screen min-h-screen flex justify-center items-center relative overflow-x-hidden pt-20"
    >
      {/* Architectural grid — very faint, doesn't clash with 3D bg */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── MAIN ROW ─────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8 py-16">

        {/* LEFT: Typography */}
        <motion.section
          className="w-full lg:w-1/2"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.div variants={item} className="flex items-center gap-3 mb-9">
            <div className="w-8 h-px bg-cyan-500/80" />
            <span className="text-cyan-400 text-[11px] font-space tracking-[0.35em] uppercase">
              Portfolio · 2026
            </span>
          </motion.div>

          {/* Headline — tighter, more confident */}
          <motion.h1
            variants={item}
            className="font-space font-semibold text-white leading-[1.04] tracking-[-0.025em]"
            style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)" }}
          >
            Wasif Ansari
          </motion.h1>
          <motion.h2
            variants={item}
            className="font-space font-light text-slate-400 leading-tight mt-1 tracking-tight"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)" }}
          >
            Full Stack Engineer
          </motion.h2>

          {/* Divider */}
          <motion.div variants={item} className="w-16 h-px bg-cyan-500/50 my-7" />

          {/* Description */}
          <motion.p
            variants={item}
            className="text-slate-400 font-outfit leading-[1.85] max-w-[420px] text-[15px]"
          >
            I architect high-performance web experiences — from pixel-perfect UIs
            to scalable APIs. Every line of code is written to last.
          </motion.p>

          {/* Live pulse + clock */}
          <motion.div variants={item} className="flex items-center gap-2.5 mt-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-mono text-[11px] text-slate-500 tabular-nums tracking-wide">
              IST {time} · Available for work
            </span>
          </motion.div>

          {/* CTA buttons */}
          <motion.div variants={item} className="flex flex-wrap gap-4 mt-10">
            <a
              href="#Contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white text-slate-900 font-space font-semibold text-sm hover:bg-cyan-400 transition-colors duration-200"
            >
              Let's Talk
              <motion.span
                className="inline-block"
                whileHover={{ x: 4 }}
              >→</motion.span>
            </a>
            <a
              href="https://drive.google.com/file/d/1_RVT7FCTjZrVFTEd7s7WDc131w0slfpu/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-7 py-3.5 border border-white/20 hover:border-cyan-400/60 hover:text-cyan-400 text-white font-space font-semibold text-sm transition-all duration-200"
            >
              Resume ↗
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="mt-14 pt-8 border-t border-white/5 flex gap-10"
          >
            {[
              { num: "3+", label: "Years of experience" },
              { num: "15+", label: "Projects shipped" },
              { num: "5+", label: "Open source contributions" },
            ].map(({ num, label }) => (
              <div key={label}>
                <p className="text-white font-space text-xl font-semibold tabular-nums">{num}</p>
                <p className="text-slate-500 text-[11px] mt-0.5 font-outfit max-w-[90px] leading-snug">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* RIGHT: Code Terminal */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex justify-center items-center w-full lg:w-1/2"
        >
          <CodeTerminal />
        </motion.section>

      </div>
    </div>
  );
}
