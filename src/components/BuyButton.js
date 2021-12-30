import React from "react";
import "../styles/buy-button.scss";
export default function BuyButton({ big }) {
  return (
    <a
      className={`buy-button flex items-center justify-center ${
        big ? "big" : ""
      }`}
      href="https://entrepot.app/marketplace/hauntedhamsters"
    >
      <img
        className="block h-auto mr-1"
        src="/imgs/entrepot.png"
        alt="entrepot"
      />
      <div className="flex flex-col">
        <p className="buy-now">Buy now on</p>
        <p className="font-fright  tracking-wider font-medium">Entrepot</p>
      </div>
    </a>
  );
}
