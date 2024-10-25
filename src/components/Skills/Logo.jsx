import React from "react";
import { motion } from "framer-motion";
export default function Logo({ icon }) {
  const logoAnimation = { hidden: { opacity: 0 }, show: { opacity: 1 } };
  return (
    <motion.div variants={logoAnimation }>
      <img className=" size-16 md:size-28" src={icon} alt={icon} />
    </motion.div>
  );
}
