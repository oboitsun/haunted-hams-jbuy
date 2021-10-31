import React from "react";

import Logo from "./Logo";
import { Link as Anchor } from "react-scroll";

import Socials from "./Socials";
import ConnectWallet from "./ConnectWallet";
import BuyButton from "./BuyButton";
// const DynamicComponent = dynamic(() => import("./ConnectWallet"), { ssr: false });
export default function Footer({ showPopup, setShowPopup, userAddress, setUserAddress }) {
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
    className: "anchor text-black",
  };
  return (
    <div className="w-full py-5   bg-light-khaki b   relative z-[2] footer">
      <div className="my-container ">
        <div className="faq-divider mb-5"></div>
        <div className="w-full justify-between flex items-center">
          <div className="flex flex-col items-center">
            <Logo wide={false} />
            <div className="lg:hidden pt-5">
              {" "}
              <Socials big />
              <img className="block " src="/imgs/dfinity.png" alt="dfinity blockchain" />
            </div>

            <p className="text-gray-400 lg:hidden text-center py-5">
              2021 © NZ Marketing Group Limited trading as Munchy. All Rights Reserved.
            </p>
          </div>

          <div className="hidden lg:flex text-xs xl:text-base font-bold lg:gap-8 xl:gap-10 items-center">
            {links.map((l, i) => (
              <Anchor key={i} to={l.href} {...linkProps}>
                {l.text}
              </Anchor>
            ))}
            <div className="lg:block hidden ">
              <Socials />
            </div>
            <a href="#">
              <BuyButton />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
