import React, { useEffect } from "react";
import RarityList from "./RarityList";
import Logo from "./Logo";
import "../styles/popup.scss";
export default function ComingSoonPopUp({ showPopup, setShowPopup }) {
  useEffect(() => {
    if (showPopup && window) {
      window.document.body.style.position = "fixed";
    }
    if (!showPopup && window) {
      window.document.body.style.position = "static";
    }
  }, [showPopup]);
  return (
    <div
      onClick={() => setShowPopup(false)}
      className={`${
        showPopup ? "opacity-100 " : "pointer-events-none opacity-0"
      } transition-all duration-300 fixed z-40 bg-black bg-opacity-80 top-0 left-0 w-screen h-screen flex justify-center items-center`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="popup p-5"
      >
        <div className="flex items-center pb-5">
          <div className="mr-5">
            <Logo />
          </div>
          <p className="font-fright text-2xl uppercase mr-auto">
            Haunted hamsters rarity list
          </p>
          <img
            onClick={() => {
              setShowPopup(false);
            }}
            src="/imgs/close-icon.svg"
            alt="close"
          />
        </div>
        <RarityList />
      </div>
    </div>
  );
}
