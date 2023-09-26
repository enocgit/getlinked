"use client";
import { Unica_One } from "next/font/google";
import CountdownTimer from "react-countdown";

const unicaOne = Unica_One({ subsets: ["latin"], weight: "400" });

type CountdownProps = {
  hours: number;
  minutes: number;
  seconds: number;
};

const renderer = ({ hours, minutes, seconds }: CountdownProps) => {
  // Render a countdown
  return (
    <div
      className={`${unicaOne.className} mt-10 translate-y-[60%] space-x-5 text-5xl`}
    >
      <span>
        {hours}
        <span className="text-xs">H</span>
      </span>
      <span>
        {minutes}
        <span className="text-xs">M</span>
      </span>
      <span>
        {seconds}
        <span className="text-xs">S</span>
      </span>
    </div>
  );
};

const Countdown = () => {
  return (
    <CountdownTimer
      date={Date.now() + 200000000000000000}
      renderer={renderer}
    />
  );
};

export default Countdown;
