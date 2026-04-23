import React from "react";
import { motion, useInView } from "framer-motion";
import mongodb from "/mongoDb.png";
import nodejs from "/nodeJS.png";
import python from "/python.png"
import express from "/express.png";
import mySQL from "/mySQL.png";
import Logo from "./Logo";
import html from "/html.png";
import css from "/css.png";
import canva from "/canva.png";
import git from "/git.png";
import github from "/github.png";
import js from "/js.png";
import postman from "/postman.png";
import tailwind from "/tailwind.png";
import react from "/react.png";
import typescript from "/ts.png"
import django from "/django.png"
import fastapi from "/fastapi.png" 
import nextjs from "/nextjs.png"


export default function Skills() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skills = [
    python, nodejs, nextjs, react, express, mongodb, fastapi, html, css, js,
    django, tailwind, typescript, postman, github, canva, mySQL, git
  ];

  return (
    <div className="w-full py-20 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="flex flex-col items-center justify-center mb-16 relative z-10">
        <span className="px-4 py-1.5 rounded-full glass border-cyan-500/30 text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4 inline-block">
          My Expertise
        </span>
        <h2 className="font-space text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
          Technical Skills
        </h2>
      </div>

      <motion.div
        ref={ref}
        className="max-w-5xl mx-auto flex justify-center"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
          },
        }}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <div className="relative glass p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl flex flex-wrap gap-6 md:gap-8 justify-center items-center w-full">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 rounded-3xl pointer-events-none"></div>
          {skills.map((skill, index) => (
            <Logo key={index} icon={skill} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
