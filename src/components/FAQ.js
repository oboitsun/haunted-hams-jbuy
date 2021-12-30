import React from "react";
import FaqItem from "./FaqItem";
import "../styles/faq.scss";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import { motion } from "framer-motion";

const faqs = [
  {
    qstn: "HOW DO I BUY A HAUNTED HAMSTER?",
    answr: `You can buy a hamster by waiting for the timer to count down to 0, and then visiting the link above which will take you to the relevant “Entrepot” page to mint your Hamster.`,
  },
  {
    qstn: "WHAT CAN I DO WITH ONCE I GET MY HAUNTED HAMSTERS NFT?",
    answr: `Once you have one of these Spooky Hamsters, you will be able to collect it in your wallet. We believe that it’s not only fun, cool artwork but there is potential in the future to turn the Haunted Hamsters into possibly a game or something larger in the future.`,
  },
  {
    qstn: "WHAT WALLET DO I NEED TO BE ABLE TO CONNECT AND BUY?",
    answr: `You will be able to connect via Plug and Stoic on the Entrepot.app marketplace.`,
  },
  {
    qstn: "HOW MANY HAUNTED HAMSTERS CAN I BUY?",
    answr: `You will be able to buy as many as you can, but get in quick as we believe the price is a steal!`,
  },
  {
    qstn: "WHAT ARE THE PLANS FOR THE FUTURE?",
    answr: `We have potential plans for partnerships, future airdrops for holders and other rewards so stay tuned!`,
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
