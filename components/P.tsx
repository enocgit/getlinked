"use client";
import { HTMLAttributes } from "react";
import { motion } from "framer-motion";

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

const P = ({ children }: Props) => {
  return (
    <motion.p
      className="max-w-lg text-center text-sm leading-loose md:text-left"
      whileInView={{ y: 0 }}
      initial={{ y: 50 }}
      transition={{ duration: 3 }}
    >
      {children}
    </motion.p>
  );
};

export default P;
