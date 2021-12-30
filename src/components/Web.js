import React from "react";
import { motion } from "framer-motion";
export default function Web({ src }) {
  return (
    <motion.img
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1],
      }}
      transition={{
        delay: 0.3,
        repeatDelay: 0.3,
        repeatType: "reverse",
        repeat: "Infinity",
        ease: "easeOut",
        duration: 7,
      }}
      className="web"
      src={src ? src : "/imgs/web-l.png"}
      alt="web"
    />
  );
}
