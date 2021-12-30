import React, { useState } from "react";
import "../styles/rarity-list.scss";
import { rarityList } from "./db";
import RarityListItem from "./RarityListItem";

export default function RarityList() {
  const [list, setList] = useState({
    outfit: false,
    skin: false,
    eyes: false,
    mouth: false,
    ears: false,
    furA: false,
    furB: false,
  });
  const toggleList = (category) => {
    const temp = { ...list };
    for (const [key, value] of Object.entries(temp)) {
      temp[key] = key !== category && false;
      temp[key] = key === category && !value;
    }

    setList({ ...temp });
  };
  return (
    <div>
      {rarityList.map((listItem, i) => (
        <RarityListItem
          qstn={Object.keys(list)[i]}
          category={Object.keys(list)[i]}
          answr={listItem}
          list={list}
          toggleList={toggleList}
        />
      ))}
    </div>
  );
}
