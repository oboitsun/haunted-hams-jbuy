import React from 'react';
import Heading from './Heading';
import SubHeading from './SubHeading';
import '../styles/about-us.scss';
export default function AboutHamsters() {
  return (
    <div id="about-us" className="bg-light-khaki">
      <div className="my-container">
        <Heading>What is haunted hamsters</Heading>
        <SubHeading>
          Haunted Hamsters is a Halloween NFT collection of 3333 hamsters
          dropped on October 31st 2021 on Entrepot. They have 10 spooky traits
          and were dropped as a surprise collectible before Halloween.
        </SubHeading>
      </div>
    </div>
  );
}
