import { clashDisplay } from "@/app/font";
import React from "react";
import BgAesthetic from "./BgAesthetic";

type Props = {};

const mockTimeline = [1, 2, 3, 4, 5, 6];

const Timeline = (props: Props) => {
  return (
    <>
      <div className="hidden space-y-16 sm:block">
        {mockTimeline.map((timeline, index) => {
          if (index % 2 === 0) {
            return (
              <div
                key={index}
                className="grid grid-cols-7 items-center gap-5 text-sm text-white"
              >
                <div className="relative col-span-3 space-y-1 justify-self-end text-right">
                  <h3 className="text-lg font-[700] text-tertiary-100">
                    Partners and Sponsors
                  </h3>
                  <p className="max-w-md leading-relaxed">
                    Getlinked Hackathon 1.0 is honored to have the following
                    major companies as its partners and sponsors
                  </p>
                </div>
                <div className="before:content relative col-span-1 flex h-10 w-10 items-center justify-center justify-self-center rounded-full bg-primary-200 font-[500] before:absolute before:bottom-12 before:left-5 before:h-20 before:w-1 before:bg-tertiary-100">
                  {index + 1}
                </div>
                <h3 className="col-span-3 justify-self-start text-left text-lg font-[700] text-tertiary-100">
                  November 18, 2023
                </h3>
              </div>
            );
          }
          return (
            <div
              key={index}
              className="grid grid-cols-7 items-center gap-5 text-sm text-white"
            >
              <h3 className="col-span-3 justify-self-end text-left text-lg font-[700] text-tertiary-100">
                November 18, 2023
              </h3>
              <div className="before:content relative col-span-1 flex h-10 w-10 items-center justify-center justify-self-center rounded-full bg-primary-200 font-[500] before:absolute before:bottom-12 before:left-5 before:h-20 before:w-1 before:bg-tertiary-100">
                {index + 1}
              </div>
              <div className="relative col-span-3 space-y-1 justify-self-start text-left">
                <h3 className="text-lg font-[700] text-tertiary-100">
                  Partners and Sponsors
                </h3>
                <p className="max-w-md leading-relaxed">
                  Interested teams can now show their interest in the getlinked
                  tech hackathon 1.0 2023 by proceeding to register
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="relative grid gap-5 text-xs sm:hidden">
        <BgAesthetic
          src="/svg/star-purple.svg"
          className="-top-10 left-2 h-5 w-5"
        />
        <BgAesthetic
          src="/svg/star-white.svg"
          className="bottom-60 right-5 h-5 w-5"
        />
        <BgAesthetic
          src="/svg/star-neutral.svg"
          className="-bottom-5 -left-5 h-5 w-5"
        />
        {mockTimeline.map((timeline) => {
          return (
            <div key={timeline} className="flex gap-x-2">
              <div className="flex flex-col items-center gap-y-1">
                <div className="h-full w-0.5 bg-tertiary-100"></div>
                <div className="relative  flex h-5 w-5 shrink-0 items-center justify-center justify-self-center rounded-full bg-primary-200 font-[500]">
                  {timeline}
                </div>
              </div>
              <div className="relative space-y-2 justify-self-start text-left">
                <div className="space-y-1">
                  <h3 className="text-md font-[700] text-tertiary-100">
                    Partners and Sponsors
                  </h3>
                  <p className="max-w-md leading-relaxed">
                    Interested teams can now show their interest in the
                    getlinked tech hackathon 1.0 2023 by proceeding to register
                  </p>
                </div>
                <h3 className="font-[700] text-tertiary-100">
                  November 18, 2023
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Timeline;
