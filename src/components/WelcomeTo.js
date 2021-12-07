import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import Timer from "./Timer";
// import dynamic from "next/dynamic";
import ConnectWallet from "./ConnectWallet";
import BuyButton from "./BuyButton";
// const DynamicComponent = dynamic(() => import("./ConnectWallet"), { ssr: false });
export default function WelcomeTo({
  setShowPopup,
  showPopup,
  setUserAddress,
  userAddress,
}) {
  const cont = {
    show: {
      x: 0,
      transition: { duration: 0.3, staggerChildren: 0.1, delayChildren: 0.3 },
    },
    hidden: { x: 0, transition: { duration: 1 } },
  };
  const item = {
    show: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    hidden: { x: "-60vw", opacity: 0, transition: { duration: 1 } },
  };
  return (
    <motion.div variants={cont} initial="hidden" animate="show" className="welcome-to ">
      <motion.p variants={item} key={1} className="title  font-fright">
        Welcome to
      </motion.p>
      <motion.p variants={item} key={2} className="title font-fright">
        THE Haunted hamsters
      </motion.p>

      <motion.div variants={item} key={4}>
        <Timer />
      </motion.div>
      <motion.div
        variants={item}
        key={5}
        className="w-full flex flex-col  gap-2 xl:gap-4 "
      >
        <div className="w-full lg:w-4/5 mx-auto pb-5">
          <BuyButton big />
        </div>
        <div className="flex items-center mx-auto">
          <a href="https://discord.gg/exfE77A68X">
            <button className="btn join-discord w-full"> Join The Discord</button>
          </a>
          <img
            className="block max-w-min ml-5  lg:ml-4 "
            src="/imgs/dfinity.png"
            alt="dfinity blockchain"
          />
        </div>
      </motion.div>
      <div
        onClick={() => {
          setShowPopup(true);
        }}
        className="w-full text-white text-center hover:underline cursor-pointer pt-5"
      >
        Check out the Rarity Traits!
      </div>
    </motion.div>
  );
}
