import React from "react";
import { motion } from "framer-motion";
import Svg2 from "./Svg2";

export default function About() {
  return (
    <div
      id="Aboutme"
      className="w-screen h-screen flex justify-center items-center relative overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24 relative z-10">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative max-w-lg w-full"
        >
          {/* Decorative Elements */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-30 animate-pulse"></div>

          <div className="relative glass p-8 md:p-12 rounded-2xl border-white/10 overflow-hidden group">
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <h2 className="text-4xl md:text-6xl font-space font-bold mb-6">
              About <span className="text-cyan-400">Me</span>
              <span className="inline-block ml-4 animate-bounce"><Svg2 /></span>
            </h2>

            <p className="text-slate-300 font-light leading-relaxed text-lg">
              I'm <span className="text-white font-semibold">Wasif Ansari</span>, a passionate Full Stack Developer skilled in Python, React, Node.js, and MongoDB. I specialize in creating dynamic, responsive web applications with a focus on performance and seamless user experiences.
            </p>
            <p className="text-slate-300 font-light leading-relaxed text-lg mt-4">
              My core mission is to build innovative, scalable solutions that solve real-world problems and deliver exceptional value to users. I thrive on translating complex ideas into elegant, interactive digital realities.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="hidden md:flex flex-col gap-6"
        >
          <div className="glass p-6 rounded-2xl w-64 border-l-4 border-cyan-400 hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
            <h3 className="font-space font-bold text-3xl text-white mb-2">3+</h3>
            <p className="text-cyan-400 text-sm tracking-wider uppercase font-semibold">Years Experience</p>
          </div>

          <div className="glass p-6 rounded-2xl w-64 border-l-4 border-purple-500 hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
            <h3 className="font-space font-bold text-3xl text-white mb-2">20+</h3>
            <p className="text-purple-400 text-sm tracking-wider uppercase font-semibold">Projects Completed</p>
          </div>

          <div className="glass p-6 rounded-2xl w-64 border-l-4 border-blue-500 hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
            <h3 className="font-space font-bold text-3xl text-white mb-2">100%</h3>
            <p className="text-blue-400 text-sm tracking-wider uppercase font-semibold">Client Satisfaction</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
