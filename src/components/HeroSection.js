import React, { useEffect, useState } from "react";
import "../styles/hero-section.scss";
import WelcomeTo from "./WelcomeTo";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import HeroSlider from "./HeroSlider";
const hams = [
  "/imgs/pack.png",
  "/imgs/nft-ham1.png",
  "/imgs/nft-ham2.png",
  "/imgs/nft-ham3.png",
  "/imgs/nft-ham4.png",
  "/imgs/nft-ham5.png",
  "/imgs/nft-ham6.png",
  "/imgs/nft-ham7.png",
  "/imgs/nft-ham8.png",
  "/imgs/nft-ham9.png",
];
export default function HeroSection({
  showPopup,
  setShowPopup,
  userAddress,
  setUserAddress,
}) {
  const [currentImgBG, setCurrentImageBG] = useState(null);
  const [currentHam, setCurrentHam] = useState(null);
  const { scrollYProgress } = useViewportScroll();
  useEffect(() => {
    console.log("rendered");
    setCurrentImageBG(Math.random() > 0.5 ? "/imgs/bg.jpg" : "/imgs/bg2.jpg");
    setCurrentHam(hams[Math.floor(Math.random() * hams.length)]);
  }, []);
  const yPosAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0, -500, -900]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [1, 0.5, 0.0]);
  return (
    <motion.div
      id="hero-section"
      className="relative overflow-hidden flex flex-col lg:flex-row items-center lg:justify-end"
    >
      {currentImgBG && (
        <img
          className="absolute w-full h-full top-0 left-0 object-cover opacity-50"
          src={currentImgBG}
          alt="bg"
        />
      )}
      <div className="my-container relative z-10  lg:flex lg:justify-end items-center">
        <WelcomeTo
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          setUserAddress={setUserAddress}
          userAddress={userAddress}
        />
        <div className="w-full lg:w-1/2 overflow-hidden hero-slider">
          <HeroSlider />
        </div>

        {currentHam && (
          <img
            className={currentHam.includes("pack") ? "hero-pack-mob" : "big-frank-mob"}
            src={currentHam}
            alt="big ham"
          />
        )}
      </div>
    </motion.div>
  );
}
