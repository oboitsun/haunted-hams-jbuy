import React from "react";
import FaqItem from "./FaqItem";
import "../styles/faq.scss";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import { motion } from "framer-motion";

const faqs = [
  {
    qstn: "How do I buy a Haunted Hamsters?",
    answr: `It’s simple, just press the “Connect Wallet” button, and connect with either
  STOIC Wallet or Plug. You will then be able to “Mint” your own Haunted
  Hamster using the “Mint Now” button. Please note there is a limit of 20
  Haunted Hamsters per person.`,
  },
  {
    qstn: "What Blockhain and technology are Haunted Hamsters on?",
    answr: `We have minted the Haunted Hamsters on the DFINITY Internet Computer
  blockchain, in which we believe is perfect for the project.`,
  },
  {
    qstn: "What can I do with once I get my Haunted Hamsters NFT?",
    answr: `At this stage you can collect it, like other NFT’s with the high possibility of
  the value of it increasing. We believe that not only is it fun, cool artwork,
  but there could be potential in the future to turn Haunted Hamsters into
  potentially a game, or something even larger in the future.`,
  },
  {
    qstn: "What wallet do I need to be able to connect and buy?",
    answr: `You can connect using STOIC Wallet or Plug Wallet at this time.`,
  },
  {
    qstn: "How many Haunted Hamsters caan I buy?",
    answr: `You can buy only 20 Haunted Hamsters per person. There will be other
  ones available on the secondary market place in which you can buy and
  sell your Haunted Hamsters as you wish.`,
  },
  {
    qstn: `What are the plans for the future for Haunted Hamsters?`,
    answr: `We have plans to make a potential game, donations, airdrops and rewards
  - so stay tuned!`,
  },
];
export default function FAQ() {
  return (
    <div id="faq">
      <div className="my-container ">
        <div className="">
          <Heading>FAQ'S</Heading>
          <SubHeading>Here is answers on some frequently asked questions</SubHeading>
          <div className="flex flex-col  auto-rows-auto mr-auto ">
            <div className="faq-divider"></div>
            {faqs.map((f, i) => (
              <FaqItem key={i} {...f} />
            ))}
          </div>
        </div>
        <div className="devil pointer-events-none">
          <motion.img
            initial={{ x: 0, y: 0 }}
            animate={{ x: [0, 15, 0], y: [0, -24, 25, 0] }}
            transition={{
              delay: 0.3,
              repeatDelay: 0.3,
              repeatType: "reverse",
              repeat: "Infinity",
              ease: "easeOut",
              duration: 7,
            }}
            src="/imgs/devil.png"
            alt="devil"
          />
        </div>
      </div>
    </div>
  );
}
