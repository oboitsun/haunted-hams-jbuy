import React, { useState, useEffect } from "react";
import FAQ from "./components/FAQ";
import "./styles/common.scss";
import HeroSection from "./components/HeroSection";
import EndlessHamsters from "./components/EndlessHamsters";
import Team from "./components/Team";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ModalMenu from "./components/ModalMenu";
import ComingSoonPopUp from "./components/ComingSoonPopUp";

import AboutHamsters from "./components/AboutHamsters";
import Roadmap from "./components/Roadmap";
import Ghost from "./components/Ghost";
import Web from "./components/Web";
import Roadmap2 from "./components/Roadmap2";
import BuyButton from "./components/BuyButton";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const handleScroll = (e) => {
    if (e.target.scrollingElement.scrollTop < 10) setScrolled(false);
    if (e.target.scrollingElement.scrollTop >= 10) setScrolled(true);
  };

  //scrolling listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  //connect wallet functions
  const [userAddress, setUserAddress] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className=" relative overflow-hidden app">
      <div id="top"></div>
      <Ghost />

      <Header
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        setUserAddress={setUserAddress}
        userAddress={userAddress}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        scrolled={scrolled}
      />

      <HeroSection
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        setUserAddress={setUserAddress}
        userAddress={userAddress}
      />

      <AboutHamsters />
      <div className="relative">
        <EndlessHamsters />
        <Web />
      </div>
      <Roadmap2 />
      {/* <Roadmap /> */}
      <Team />

      <FAQ />

      <div className="w-full lg:w-4/5 mx-auto pb-5">
        <BuyButton big />
      </div>

      <Footer
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        setUserAddress={setUserAddress}
        userAddress={userAddress}
      />

      <ComingSoonPopUp showPopup={showPopup} setShowPopup={setShowPopup} />
      <ModalMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
}
