import React from "react";
import "./../styles/roadmap.scss";
import Heading from "./Heading";
import NFTCarousel from "./NFTCarousel";

const roadmap = [
  {
    direction: "ltr",
    month: "JULY ",
    text: `The vision of Haunted Hamsters begins, and preparation for the project is
    underway.`,
  },
  {
    direction: "ltr",
    month: "AUG ",
    text: `Development, design is underway for the project and the first set of
    Hamsters start to be minted!`,
  },
  {
    direction: "rtl",
    month: "OCT ",
    text: `The final amount of Hamsters are minted and are now available on the
    marketplace.`,
  },
  {
    direction: "rtl",
    month: "NOV ",
    text: `Future development, airdrops, rewards and potential game is in the works.`,
  },
];
export default function Roadmap() {
  return (
    <div id="roadmap" className="relative">
      <img className="web-r" src="imgs/web-r.png" alt="web" />
      <div className="my-container">
        <Heading>roadmap</Heading>
        <div className="part">
          <div className="dates">
            {roadmap.map(
              (r, i) =>
                i < 2 && (
                  <div
                    key={r.month}
                    className={`milestone-wrapper ${r.direction} pb-10 `}
                  >
                    <div className="date-pumpkin">
                      <img
                        className="block w-full"
                        src="/imgs/pumpkin.png"
                        alt="pumpkin"
                      />
                      <div className="date font-fright">{r.month}</div>
                    </div>
                    <div className="milestone-text">{r.text}</div>
                  </div>
                )
            )}
          </div>
          <div className="hover:scale-110 transform transition-transform">
            <img src="/imgs/hamm.png" alt="Mummy Ham" />
          </div>
        </div>
        <div className="part">
          <div className="dates">
            {roadmap.map(
              (r, i) =>
                i > 1 && (
                  <div
                    key={r.month}
                    className={`milestone-wrapper ${r.direction} pb-10 `}
                  >
                    <div className="milestone-text">{r.text}</div>
                    <div className="date-pumpkin">
                      <div className="date font-fright">{r.month}</div>
                      <img
                        className="block w-full"
                        src="/imgs/pumpkin.png"
                        alt="pumpkin"
                      />
                    </div>
                  </div>
                )
            )}
          </div>
          <div className="part-pet hover:scale-110 transform transition-transform ">
            <NFTCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}
