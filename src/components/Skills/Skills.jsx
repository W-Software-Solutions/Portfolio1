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

export default function () {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="">
      <div className="flex justify-center gap-5 items-center font-Anton text-white text-7xl mt-10 mb-16">
        Skills
      </div>
      <motion.div
        ref={ref}
        className="flex justify-center gap-5"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.25,
            },
          },
        }}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}

      >
        <div className="mb-16 p-14 flex flex-row border-2 gap-5 justify-center border-[#00ADB5] rounded-2xl w-[900px] flex-wrap ">
          <Logo icon={python} />
          <Logo icon={nodejs} />
          <Logo icon={react} />
          <Logo icon={express} />
          <Logo icon={mongodb} />
          <Logo icon={html} />
          <Logo icon={css} />
          <Logo icon={js} />
          <Logo icon={django} />
          <Logo icon={tailwind} />
          <Logo icon={typescript} />
          <Logo icon={postman} />
          <Logo icon={github} />
          <Logo icon={canva} />
          <Logo icon={mySQL} />
          <Logo icon={git} />
        </div>
      </motion.div>
    </div>
  );
}
