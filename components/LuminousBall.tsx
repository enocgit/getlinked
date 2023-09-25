"use client";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

const LuminousBall = (props: Props) => {
  return (
    <motion.div
      className=""
      animate={{ rotate: 360 }}
      transition={{ duration: 4, repeat: Infinity }}
    >
      <Image
        src="/png/network-blue.png"
        alt="round blue luminous ball"
        width={450}
        height={450}
        className="absolute -top-2 left-14 z-10 h-[200px] w-[200px] xs:h-[300px] xs:w-[300px] sm:h-[450px] sm:w-[450px]"
      />
    </motion.div>
  );
};

export default LuminousBall;
