import React from "react";

export default function TimerCountItem({ time, text }) {
  return (
    <div className="flex flex-col items-center text-white">
      <p className="timer-digits ">{time.length > 1 ? time : 0 + time}</p>
      <p className=" font-medium text-xs lg:text-base">{text}</p>
    </div>
  );
}
