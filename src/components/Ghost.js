import React from "react";
import { motion } from "framer-motion";
export default function Ghost() {
  return (
    <motion.img
      initial={{ opacity: 1 }}
      animate={{
        rotate: [0, 10, -10, 0],
        scale: [1, 0.9, 1.1, 1],
        x: [0, -10, 10, -50, 50, 0],
        top: [700, 650, 600, 650, 700],
      }}
      transition={{
        delay: 0.3,
        repeatDelay: 0.3,
        repeatType: "loop",
        repeat: "Infinity",
        ease: "easeOut",
        duration: 7,
      }}
      className="ghost"
      src="/imgs/ghost.png"
      alt="web"
    />
  );
}
