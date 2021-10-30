import React, { useState, useRef, useEffect } from "react";
const cellTemplate = (type, content) => {
  return (
    <div className={`cell ${type === "rarity" ? `${type} ${content}` : `${type}`}`}>
      {type === "img" ? (
        <img src={content} alt="type" />
      ) : (
        <span className="capitalize">
          {type === "amount" && content}
          {type === "percent" && `${content}.00%`}
          {type === "decimal" && `${content.toFixed(5)}`}
          {type === "rarity" && content}
        </span>
      )}
    </div>
  );
};
export default function RarityListItem({ qstn, answr, category, list, toggleList }) {
  const qstn_heading = {
    outfit: "Outfit",
    mouth: "Mouth",
    ears: "Ears & Head",
    furA: "Fur A",
    furB: "Fur B",
    skin: "Skin",
    eyes: "Eyes",
  };
  const content = useRef(null);
  const [setHeight, setHeightState] = useState("0px");
  useEffect(() => {
    setHeightState(
      list[category] === false ? "0px" : `${content?.current?.scrollHeight}px`
    );
  }, [list[category]]);

  function toggleAccordion() {
    toggleList(category);
  }
  return (
    <div className="lg:w-full">
      <div
        onClick={toggleAccordion}
        className="cursor-pointer flex w-full justify-between my-5 "
      >
        <p className="font-bold  capitalize">{qstn_heading[qstn]}</p>
        <img
          className={`transform transition-all ${
            list[category] ? "rotate-180" : "rotate-0"
          }`}
          src="/imgs/arrow-down.svg"
          alt="expand"
        />
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className=" transition-all overflow-hidden "
      >
        <div className="grid grid-cols-3 gap-1 rarity-list-table">
          <div className="cell cell-heading">Item</div>
          <div className="cell cell-heading">Mint Amount</div>

          <div className="cell cell-heading">Rarity</div>
          {answr.map((item, i) => {
            const row = Object.keys(item).map((key) => {
              if (key !== "percent" && key !== "decimal")
                return cellTemplate(key, item[key]);
            });

            return [...row];
          })}
        </div>
      </div>
      <div className="faq-divider"></div>
    </div>
  );
}
