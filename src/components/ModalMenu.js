import React from "react";
import { motion } from "framer-motion";

import "../styles/modal-menu.scss";
import { Link as Anchor } from "react-scroll";
import Socials from "./Socials";
import ConnectWallet from "./ConnectWallet";
import BuyButton from "./BuyButton";

export default function ModalMenu({ showMenu, setShowMenu }) {
  const links = [
    { href: "about-us", text: "About Us" },
    { href: "team", text: "Team" },
    { href: "roadmap", text: "Roadmap" },
    // { href: "market", text: "Market" },
    { href: "faq", text: "FAQ" },
  ];
  const linkProps = {
    spy: true,
    smooth: true,
    offset: -100,
    duration: 500,
    activeClass: "active",
    className: "cursor-pointer text-white font-bold lg:text-grey ",
  };
  const cont = {
    show: {
      height: "100vh",
      zIndex: 20,
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
    hidden: {
      height: "100vh",
      zIndex: 0,
      opacity: 0,
    },
  };

  return (
    <motion.div
      variants={cont}
      initial="hidden"
      animate={showMenu ? "show" : "hidden"}
      className={`modal-menu ${showMenu ? "" : "pointer-events-none"}`}
    >
      {links.map((l, i) => (
        <motion.div key={i} className="text-3xl mb-5">
          <Anchor
            onClick={() => {
              setShowMenu(false);
            }}
            to={l.href}
            {...linkProps}
          >
            {l.text}
          </Anchor>
        </motion.div>
      ))}
      <motion.div key={11} className="">
        <BuyButton />
      </motion.div>
      <motion.div key={12} className="  ">
        <Socials big modal />{" "}
      </motion.div>
      <img className="block " src="/imgs/dfinity.png" alt="dfinity blockchain" />
    </motion.div>
  );
}
