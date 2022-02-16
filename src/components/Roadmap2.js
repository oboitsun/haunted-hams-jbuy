import React from 'react';
import '../styles/roadmap2.scss';
import Heading from './Heading';

const roadmap = [
  {
    direction: 'ltr',
    month: 'SEP ',
    text: `The vision of Haunted Hamsters begins, and preparation for the project is
    underway.`,
  },

  {
    direction: 'ltr',
    month: 'OCT ',
    text: `Development, design is underway for the project and the first set of
    Hamsters start to be minted!`,
  },
  {
    direction: 'rtl',
    month: 'NOV ',
    text: `Trading on the secondary marketplace begins - users can buy and sell Haunted Hamsters there.`,
  },
  {
    direction: 'rtl',
    month: 'Dec ',
    text: `Hamsters are spooking the ICP blockchain!`,
  },
  {
    direction: 'ltr',
    month: 'Jan ',
    text: `Potential future development, airdrops, rewards for holders and potential game (if demand) is in the works.`,
  },
];
export default function Roadmap2() {
  return (
    <div id="roadmap" className="relative">
      <img className="web-r" src="imgs/web-r.png" alt="web" />
      <div className="my-container roadmap2 hidden lg:block">
        <div className="grid  grid-cols-4 auto-rows-auto place-items-center gap-y-10">
          <div className="date-pumpkin">
            <img className="block w-full" src="/imgs/moon.png" alt="pumpkin" />
            <div className="date font-fright">{roadmap[0].month}</div>
          </div>
          <div className="horiz-bar top"></div>
          <div className="date-pumpkin">
            <img className="block w-full" src="/imgs/moon.png" alt="pumpkin" />
            <div className="date font-fright">{roadmap[1].month}</div>
          </div>
          <div className="w-full h-full relative overflow-hidden">
            <div className="pivot-top"></div>
          </div>

          <div className="legend">{roadmap[0].text}</div>
          <div className="empty"></div>
          <div className="legend">{roadmap[1].text}</div>
          <div className="w-1.5 h-full bg-black relative">
            <div className="absolute w-full h-full top-full left-0 bg-black"></div>
            <div className="absolute w-full h-full -top-2/3 left-0 bg-black"></div>
          </div>
          <div className="flex flex-col items-center">
            <Heading>roadmap</Heading>
            {/* <button className="bg-crimson rounded-xl font-bold text-white uppercase px-4 py-2">
              view full roadmap 2.0
            </button> */}
          </div>
          <div className="empty"></div>
          <div className="legend pr-5">{roadmap[2].text}</div>
          <div className="date-pumpkin">
            <img className="block w-full" src="/imgs/moon.png" alt="pumpkin" />
            <div className="date font-fright">{roadmap[2].month}</div>
          </div>
          <div className="legend">{roadmap[4].text}</div>
          <div className="empty"></div>
          <div className="legend">{roadmap[3].text}</div>
          <div className="w-1.5 h-full bg-black relative">
            <div className="absolute w-full h-full top-2/3 left-0 bg-black"></div>
            <div className="absolute w-full h-full -top-full left-0 bg-black"></div>
          </div>
          <div className="date-pumpkin">
            <img className="block w-full" src="/imgs/moon.png" alt="pumpkin" />
            <div className="date font-fright">{roadmap[4].month}</div>
          </div>
          <div className="h-1.5 w-full bg-black rounded-full relative top-4"></div>
          <div className="date-pumpkin">
            <img className="block w-full" src="/imgs/moon.png" alt="pumpkin" />
            <div className="date font-fright">{roadmap[3].month}</div>
          </div>
          <div className="w-full h-full relative overflow-hidden">
            <div className="pivot-bottom"></div>
          </div>
        </div>{' '}
      </div>
      <div className="my-container roadmap2 lg:hidden block">
        <Heading>roadmap</Heading>
        <div className="grid  grid-cols-1 auto-rows-auto place-items-center gap-y-1">
          <div className="w-1/2 mx-auto">
            <div className="date-pumpkin ">
              <img
                className="block w-full"
                src="/imgs/moon.png"
                alt="pumpkin"
              />
              <div className="date font-fright">{roadmap[0].month}</div>
            </div>
          </div>
          <div className="legend">{roadmap[0].text}</div>
          <div className="w-1.5 h-14 bg-black rounded-full"></div>

          <div className="w-1/2 mx-auto">
            <div className="date-pumpkin ">
              <img
                className="block w-full"
                src="/imgs/moon.png"
                alt="pumpkin"
              />
              <div className="date font-fright">{roadmap[1].month}</div>
            </div>
          </div>
          <div className="legend">{roadmap[1].text}</div>
          <div className="w-1.5 h-14 bg-black rounded-full"></div>

          <div className="w-1/2 mx-auto">
            <div className="date-pumpkin ">
              <img
                className="block w-full"
                src="/imgs/moon.png"
                alt="pumpkin"
              />
              <div className="date font-fright">{roadmap[2].month}</div>
            </div>
          </div>
          <div className="legend">{roadmap[2].text}</div>
          <div className="w-1.5 h-14 bg-black rounded-full"></div>

          <div className="w-1/2 mx-auto">
            <div className="date-pumpkin ">
              <img
                className="block w-full"
                src="/imgs/moon.png"
                alt="pumpkin"
              />
              <div className="date font-fright">{roadmap[3].month}</div>
            </div>
          </div>
          <div className="legend">{roadmap[3].text}</div>
          <div className="w-1.5 h-14 bg-black rounded-full"></div>

          <div className="w-1/2 mx-auto">
            <div className="date-pumpkin ">
              <img
                className="block w-full"
                src="/imgs/moon.png"
                alt="pumpkin"
              />
              <div className="date font-fright">{roadmap[4].month}</div>
            </div>
          </div>
          <div className="legend">{roadmap[4].text}</div>
        </div>
      </div>
    </div>
  );
}
