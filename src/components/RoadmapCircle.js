import React, { useState, useEffect } from "react";
import "../styles/roadmap-circle.scss";
import Heading from "./Heading";
const roadmap = [
  {
    direction: "ltr",
    month: "SEP ",
    text: `The vision of Haunted Hamsters begins, and preparation for the project is
      underway.`,
  },

  {
    direction: "ltr",
    month: "OCT ",
    text: `Development, design is underway for the project and the first set of
      Hamsters start to be minted!`,
  },
  {
    direction: "rtl",
    month: "NOV ",
    text: `Trading on the secondary marketplace begins - users can buy and sell Haunted Hamsters there.`,
  },
  {
    direction: "rtl",
    month: "Dec ",
    text: `Hamsters are spooking the ICP blockchain!`,
  },
  {
    direction: "ltr",
    month: "Jan ",
    text: `Potential future development, airdrops, rewards for holders and potential game (if demand) is in the works.`,
  },
];
export default function RoadmapCircle({ items, title }) {
  const [styles, setStyles] = useState({
    width: 50,
    stl: 90,
    radius: 25,
  });
  useEffect(() => {
    const circle = document.getElementById("roadmap-circle");

    if (window && window.innerWidth < 661) {
      setStyles({
        ...styles,
        width: circle.offsetWidth,
        stl: 70,
        radius: circle.offsetWidth / 2,
      });
    }
    if (window && window.innerWidth >= 661) {
      setStyles({
        ...styles,
        width: circle.offsetWidth,
        stl: 90,
        radius: circle.offsetWidth / 2,
      });
    }
    if (window && window.innerWidth >= 1280) {
      setStyles({
        ...styles,
        width: circle.offsetWidth,
        stl: 130,
        radius: circle.offsetWidth / 2,
      });
    }
  }, []);
  const [active, setActive] = useState(null);
  const [activeContent, setActiveContent] = useState(false);
  const div = 360 / roadmap.length;
  const radius = styles.radius;
  const handleClick = (text, i) => {
    setActive(i);
    setActiveContent(text);
  };
  return (
    <div id="roadmap" className="my-container">
      {/* <div className="pb-10">
        <Heading>Roadmap</Heading>
      </div> */}

      <div
        id="roadmap-circle"
        className="circle flex justify-center items-center relative "
      >
        <div className="center-circle">
          <div className=" w-full h-full text-center  px-5  flex justify-center items-center text-2xl relative">
            <img
              className="absolute w-full place-center-abs z-0"
              src="/imgs/moon.png"
              alt="moon"
            />

            {activeContent ? (
              <p className="w-full h-auto text-center text-xs lg:text-2xl px-2 lg:px-6 leading-tight place-center-abs z-10">
                {activeContent}
              </p>
            ) : (
              <>
                <p className="text-center font-fright text-6xl lg:text-9xl leading-none  place-center-abs z-10">
                  Roadmap
                </p>
                <span className="text-xs disclaimer place-center-abs z-10">
                  *tap on moons to see
                </span>
              </>
            )}
          </div>
        </div>
        {roadmap.map((c, i) => (
          <div
            key={i}
            onClick={() => {
              handleClick(c.text, i);
            }}
            style={{
              top:
                styles.width / 2 -
                styles.stl / 2 +
                Math.sin(div * i * (Math.PI / 180)) * radius,
              left:
                styles.width / 2 -
                styles.stl / 2 +
                Math.cos(div * i * (Math.PI / 180)) * radius,
            }}
            className={`outer-circle ${i === active && "outer-circle-active"}`}
          >
            <img
              className="absolute w-full place-center-abs z-0"
              src="/imgs/moon.png"
              alt="moon"
            />
            <p className="outer-circle-text place-center-abs z-10 font-fright">
              {c.month}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
