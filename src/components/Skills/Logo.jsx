import React from "react";
import { motion } from "framer-motion";

export default function Logo({ icon }) {
  const logoAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200 } }
  };

  return (
    <motion.div
      variants={logoAnimation}
      whileHover={{ y: -8, scale: 1.05 }}
      className="glass-panel p-4 md:p-6 rounded-2xl flex items-center justify-center transition-all duration-300 hover:shadow-[0_10px_30px_rgba(6,182,212,0.3)] hover:border-cyan-400/30 cursor-pointer"
    >
      <img className="size-12 md:size-20 object-contain drop-shadow-md" src={icon} alt="tech-logo" />
    </motion.div>
  );
}
