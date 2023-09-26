"use client";
import BgAesthetic from "./BgAesthetic";
import { motion } from "framer-motion";
import timeline from "@/content/timeline";

const mockTimeline = [1, 2, 3, 4, 5, 6];

const Timeline = () => {
  return (
    <>
      <div className="hidden space-y-16 sm:block">
        {timeline.map((timeline, index: number) => {
          const { title, body, date } = timeline;
          if (index % 2 === 0) {
            return (
              <div
                key={title}
                className="grid grid-cols-7 items-center gap-5 text-sm text-white"
              >
                <motion.div
                  className="relative col-span-3 space-y-1 justify-self-end text-right"
                  whileInView={{ x: 0 }}
                  initial={{ x: -100 }}
                  transition={{ duration: 1.5 }}
                >
                  <h3 className="text-lg font-[700] text-tertiary-100">
                    {title}
                  </h3>
                  <p className="max-w-md leading-relaxed">{body}</p>
                </motion.div>
                <div className="before:content relative col-span-1 flex h-10 w-10 items-center justify-center justify-self-center rounded-full bg-primary-200 font-[500] before:absolute before:bottom-12 before:left-5 before:h-20 before:w-1 before:bg-tertiary-100">
                  {index + 1}
                </div>
                <motion.h3
                  className="col-span-3 justify-self-start text-left text-lg font-[700] text-tertiary-100"
                  whileInView={{ x: 0 }}
                  initial={{ x: 100 }}
                  transition={{ duration: 1.5 }}
                >
                  {date}
                </motion.h3>
              </div>
            );
          }
          return (
            <div
              key={title}
              className="grid grid-cols-7 items-center gap-5 text-sm text-white"
            >
              <motion.h3
                className="col-span-3 justify-self-end text-left text-lg font-[700] text-tertiary-100"
                whileInView={{ y: 0 }}
                initial={{ y: -100 }}
                transition={{ duration: 1.5 }}
              >
                {date}
              </motion.h3>
              <div className="before:content relative col-span-1 flex h-10 w-10 items-center justify-center justify-self-center rounded-full bg-primary-200 font-[500] before:absolute before:bottom-12 before:left-5 before:h-20 before:w-1 before:bg-tertiary-100">
                {index + 1}
              </div>
              <motion.div
                className="relative col-span-3 space-y-1 justify-self-start text-left"
                whileInView={{ y: 0 }}
                initial={{ y: 100 }}
                transition={{ duration: 1.5 }}
              >
                <h3 className="text-lg font-[700] text-tertiary-100">
                  {title}
                </h3>
                <p className="max-w-md leading-relaxed">{body}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
      {/* Mobile version */}
      <div className="relative grid gap-5 text-xs sm:hidden">
        <BgAesthetic
          src="/png/star-purple.png"
          className="-top-10 left-2 h-5 w-5"
        />
        <BgAesthetic
          src="/png/star-white.png"
          className="bottom-60 right-5 h-5 w-5"
        />
        <BgAesthetic
          src="/png/star-neutral.png"
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
                <motion.div
                  className="space-y-1"
                  whileInView={{ x: 0 }}
                  initial={{ x: 100 }}
                  transition={{ duration: 1.5 }}
                >
                  <h3 className="text-md font-[700] text-tertiary-100">
                    Partners and Sponsors
                  </h3>
                  <p className="max-w-md leading-relaxed">
                    Interested teams can now show their interest in the
                    getlinked tech hackathon 1.0 2023 by proceeding to register
                  </p>
                </motion.div>
                <motion.h3
                  className="font-[700] text-tertiary-100"
                  whileInView={{ x: 0 }}
                  initial={{ x: -100 }}
                  transition={{ duration: 1.5 }}
                >
                  November 18, 2023
                </motion.h3>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Timeline;
