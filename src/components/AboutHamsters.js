import React from "react";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import "../styles/about-us.scss";
export default function AboutHamsters() {
  return (
    <div id="about-us" className="bg-light-khaki">
      <div className="my-container">
        <Heading>What is haunted hamsters</Heading>
        <SubHeading>
          Haunted Hamsters are 6666 hamsters, who have been haunted on the hill of
          Hamsterville. They come with various traits, and are now living on the
          blockchain ready to spook!
        </SubHeading>
      </div>
    </div>
  );
}
