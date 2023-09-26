"use client";
import Image from "next/image";
import React from "react";
import sponsors from "@/content/sponsors";
import BgAesthetic from "./BgAesthetic";
import Glow from "./Glow";
import { motion } from "framer-motion";

type Props = {};

const Partners = (props: Props) => {
  return (
    <div className="relative mt-2 flex items-center justify-center border border-tertiary-100 p-2 min-[500px]:p-10 md:p-20 ">
      <Glow className="-left-60 -top-20" />
      <BgAesthetic src="/png/star-purple.png" className="-top-10 left-10" />
      <BgAesthetic src="/png/star-gradient.png" className="right-80 top-10" />
      <BgAesthetic src="/png/star-white.png" className="bottom-10 right-80" />
      <div className="grid scale-75 gap-10 min-[400px]:max-sm:grid-cols-2 min-[500px]:scale-100 sm:grid-cols-3">
        {sponsors.map((sponsor, index) => {
          const { id, name, image } = sponsor;
          if ((index + 1) % 3 !== 0 && index + 1 < 3) {
            return (
              <motion.div
                key={id}
                className="flex w-full"
                whileInView={{ scale: 1 }}
                initial={{ scale: 0.2 }}
                transition={{ duration: 1 }}
              >
                <div className="relative h-20 w-32 shrink-0">
                  <div className="relative bottom-5 block h-0.5 w-full shrink-0 bg-tertiary-100 min-[400px]:hidden"></div>
                  <Image
                    src={image}
                    alt={name.toLowerCase()}
                    fill
                    style={{ objectFit: "contain" }}
                    className="shrink-0"
                  />
                </div>
                <div className="ml-8 hidden h-full w-0.5 shrink-0 bg-tertiary-100 min-[400px]:block"></div>
              </motion.div>
            );
          }
          if (index + 1 > 3 && (index + 1) % 3 == 0) {
            return (
              <motion.div
                key={id}
                className="flex w-full"
                whileInView={{ scale: 1 }}
                initial={{ scale: 0.2 }}
                transition={{ duration: 1 }}
              >
                <div className="relative h-20 w-32 shrink-0">
                  <div className="relative bottom-5 h-0.5 w-full shrink-0 bg-tertiary-100"></div>
                  <Image
                    src={image}
                    alt={name.toLowerCase()}
                    fill
                    style={{ objectFit: "contain" }}
                    className="shrink-0"
                  />
                </div>
                {/* <div className="ml-8 h-full w-0.5 bg-tertiary-100 shrink-0"></div> */}
              </motion.div>
            );
          }
          if (index + 1 > 3) {
            return (
              <motion.div
                key={id}
                className="flex w-full"
                whileInView={{ scale: 1 }}
                initial={{ scale: 0.2 }}
                transition={{ duration: 1 }}
              >
                <div className="relative h-20 w-32 shrink-0">
                  <div className="relative bottom-5 h-0.5 w-full shrink-0 bg-tertiary-100"></div>
                  <Image
                    src={image}
                    alt={name.toLowerCase()}
                    fill
                    style={{ objectFit: "contain" }}
                    className="shrink-0"
                  />
                </div>
                <div className="ml-8 hidden h-full w-0.5 shrink-0 bg-tertiary-100 min-[400px]:block"></div>
              </motion.div>
            );
          }
          return (
            <motion.div
              key={id}
              className="flex w-full"
              whileInView={{ scale: 1 }}
              initial={{ scale: 0.2 }}
              transition={{ duration: 1 }}
            >
              <div className="relative h-20 w-32 shrink-0">
                <div className="relative bottom-5 block h-0.5 w-full shrink-0 bg-tertiary-100 min-[400px]:hidden"></div>
                <Image
                  src={image}
                  alt={name.toLowerCase()}
                  fill
                  style={{ objectFit: "contain" }}
                  className="shrink-0"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Partners;
