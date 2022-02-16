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
          Haunted Hamsters are 3333 hamsters, who have been haunted on the hill
          of Hamsterville. They have 10 spooky traits and were dropped on
          Halloween 2021 as a stealth NFT drop on Entrepot.
        </SubHeading>
      </div>
    </div>
  );
}
