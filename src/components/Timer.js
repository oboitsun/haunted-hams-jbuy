import React, { useEffect, useState } from "react";
import TimerCountItem from "./TimerCountItem";

import { calculateTimeLeft } from "./utils";
export default function Timer() {
  const dayX = new Date("November 1, 2021 04:00:00").getTime();
  const today = Date.now();

  const [timeLeft, setTimeLeft] = useState({
    hours: "0",
    days: "0",
    minutes: "0",
    seconds: "0",
  });

  useEffect(() => {
    let timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(dayX));
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <div className=" flex items-center  mb-4 lg:mb-6 lg:mt-4">
      {dayX < today ? (
        <p className="font-fright text-3xl lg:text-7xl text-white">Ready Mint now!</p>
      ) : (
        <>
          <p className="font-medium text-white  flex-shrink-0 pr-4">
            Time till
            <br /> launch:
          </p>
          <div className="grid grid-cols-4 gap-4 text-white ">
            <TimerCountItem time={timeLeft.days} text="Days" />
            <TimerCountItem time={timeLeft.hours} text="Hours" />
            <TimerCountItem time={timeLeft.minutes} text="Minutes" />
            <TimerCountItem time={timeLeft.seconds} text="Seconds" />
          </div>
        </>
      )}
    </div>
  );
}
