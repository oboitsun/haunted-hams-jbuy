import React from "react";
import "../styles/hero-section.scss";
import WelcomeTo from "./WelcomeTo";
import { motion, useTransform, useViewportScroll } from "framer-motion";
export default function HeroSection({
  showPopup,
  setShowPopup,
  userAddress,
  setUserAddress,
}) {
  const { scrollYProgress } = useViewportScroll();

  const yPosAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0, -500, -900]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [1, 0.5, 0.0]);
  return (
    <motion.div
      id="hero-section"
      className="relative overflow-hidden flex flex-col lg:flex-row items-center lg:justify-end"
    >
      <img
        className="absolute w-full h-full top-0 left-0 object-cover opacity-50"
        src="/imgs/bg.png"
        alt="bg"
      />
      <div className="my-container relative z-10  lg:flex lg:justify-end">
        <WelcomeTo
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          setUserAddress={setUserAddress}
          userAddress={userAddress}
        />
        <motion.img
          style={{ x: yPosAnim, opacity }}
          className="big-frank  pointer-events-none"
          src="/imgs/franken-big.png"
          alt="big ham"
        />
        <img className=" big-frank-mob" src="/imgs/franken-big.png" alt="big ham" />
      </div>
    </motion.div>
  );
}
