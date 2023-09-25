"use client";
import { motion } from "framer-motion";
import BgAesthetic from "./BgAesthetic";
import Glow from "./Glow";
import style from "@/app/Home.module.css";


const IgnitingRevolutionText = () => {
  return (
    <motion.h2
      className={`${style.revolution} text-center text-lg font-[700] italic tracking-wide sm:text-2xl xl:text-right`}
      animate={{ x: [0 -50, 50, 0] }}
      // initial={{x: -200}}
    >
      <BgAesthetic src="/png/star-white.png" className="left-12 top-8" />
      <BgAesthetic src="/png/star-neutral.png" className="right-96 top-20" />
      <Glow className="left-0 top-0 lg:left-20" />
      <Glow className="bottom-10 z-10 hidden xl:right-10 xl:top-20 xl:block" />
      <Glow className="top-30 -right-20 z-10 hidden xl:block" />
      Igniting a Revolution in HR Innovation
    </motion.h2>
  );
};

export default IgnitingRevolutionText;
