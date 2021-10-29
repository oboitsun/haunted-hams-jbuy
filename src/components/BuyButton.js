import React from "react";
import "../styles/buy-button.scss";
export default function BuyButton() {
  return (
    <div className="buy-button flex items-center">
      <img className="block h-auto mr-1" src="/imgs/entrepot.png" alt="entrepot" />
      <div className="flex flex-col">
        <p className="buy-now">Buy now on</p>
        <p className="font-fright text-2xl tracking-wider font-medium">Entrepot</p>
      </div>
    </div>
  );
}
