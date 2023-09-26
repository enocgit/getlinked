"use client";
import { motion } from "framer-motion";
import BgAesthetic from "./BgAesthetic";
import Image from "next/image";

type Props = {};

const Rewards = (props: Props) => {
  return (
    <div className="-gap-2 relative flex flex-col min-[400px]:flex-row min-[400px]:max-sm:scale-75 md:max-[1090px]:right-20 md:max-[1090px]:scale-75">
      <BgAesthetic
        src="/png/star-neutral.png"
        className="-bottom-10 right-40"
      />
      <BgAesthetic src="/png/star-white.png" className="-right-20 top-20" />
      <BgAesthetic src="/png/star-white.png" className="-top-12 left-0" />
      <motion.div
        className="relative order-2 mt-5 h-80 w-48 min-[400px]:order-1 min-[400px]:mt-14 min-[400px]:h-60 min-[400px]:w-32 md:mt-0"
        whileInView={{ y: 0 }}
        initial={{ y: -150 }}
        transition={{ duration: 2 }}
      >
        <Image
          src="/png/2nd-position.png"
          alt="2nd position"
          fill
          style={{ objectFit: "contain" }}
          className=""
        />
      </motion.div>
      <div className="relative order-1 mt-14 h-80 w-48 min-[400px]:bottom-14 min-[400px]:order-2 md:mt-0">
        <Image
          src="/png/1st-position.png"
          alt="1st position"
          fill
          style={{ objectFit: "contain" }}
          className=""
        />
      </div>
      <motion.div
        className="relative order-3 mt-5 h-80 w-48 min-[400px]:order-3 min-[400px]:mt-14 min-[400px]:h-60 min-[400px]:w-32 md:mt-0"
        whileInView={{ y: 0 }}
        initial={{ y: 150 }}
        transition={{ duration: 2 }}
      >
        <Image
          src="/png/3rd-position.png"
          alt="3rd position"
          fill
          style={{ objectFit: "contain" }}
          className=""
        />
      </motion.div>
    </div>
  );
};

export default Rewards;
