import React, { useEffect, useState } from 'react';
import Burger from './Burger';
import Logo from './Logo';
import { Link as Anchor } from 'react-scroll';
import '../styles/header.scss';
import Button from './Button';
import Socials from './Socials';
import ConnectWallet from './ConnectWallet';
import BuyButton from './BuyButton';

export default function Header({
  showPopup,
  setShowPopup,
  userAddress,
  setUserAddress,
  showMenu,
  setShowMenu,
  scrolled,
}) {
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    window && setRendered(true);
  }, []);
  const links = [
    { href: 'about-us', text: 'About Us' },
    // { href: "team", text: "Team" },
    // { href: "roadmap", text: "Roadmap" },
    {
      href: 'https://ml3ia-3aaaa-aaaak-aabfq-cai.raw.ic0.app/',
      text: 'Portal',
    },
    // { href: "faq", text: "FAQ" },
  ];

  const linkProps = {
    spy: true,
    smooth: true,
    offset: -100,
    duration: 500,
    activeClass: 'active',
    className: 'anchor text-white min-w-max',
  };
  return (
    <div
      id="header"
      className={` ${scrolled ? 'bg-black py-3 shadow-lg' : 'py-7'}`}
    >
      <div className="my-container justify-between flex items-center">
        <div>
          <Logo wide={true} />
        </div>
        <Burger showMenu={showMenu} setShowMenu={setShowMenu} />
        <div className="hidden lg:flex text-xs xl:text-base font-bold lg:gap-6   xl:gap-10 items-center">
          {links.map((l, i) =>
            l.text === 'Portal' ? (
              <a className="anchor text-white min-w-max" href={l.href}>
                {l.text}
              </a>
            ) : (
              <Anchor key={i} to={l.href} {...linkProps}>
                {l.text}
              </Anchor>
            )
          )}
          <Socials />
          <div>
            <BuyButton />
          </div>
        </div>
      </div>
    </div>
  );
}
