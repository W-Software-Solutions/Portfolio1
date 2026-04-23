import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Scroll() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 md:h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 z-[100] origin-left shadow-[0_0_10px_rgba(6,182,212,0.8)]"
      style={{ scaleX }}
    />
  );
}
