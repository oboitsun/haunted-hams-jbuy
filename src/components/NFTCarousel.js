import React from 'react';
import { motion } from 'framer-motion';
export default function NFTCarousel() {
  const nfts = [
    '/imgs/nft-ham7.png',
    '/imgs/nft-ham9.png',
    '/imgs/nft-ham1.png',
    '/imgs/nft-ham2.png',
    '/imgs/nft-ham3.png',
    '/imgs/nft-ham4.png',
  ];
  return (
    <div className="relative w-full">
      <img className="w-full" src="/imgs/nft-back.png" alt="nft-back" />
      {nfts.map((m, i) => (
        <motion.img
          key={i}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 3,
            repeat: 'Infinity',
            repeatType: 'loop',
            delay: i * 3,
            repeatDelay: nfts.length * 3 - 3,
          }}
          className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src={m}
          alt="ham"
        />
      ))}
    </div>
  );
}
