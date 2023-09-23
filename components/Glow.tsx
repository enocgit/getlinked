import React from "react";

type Props = {
    className?: string;
};

const Glow = ({ className }: Props) => {
  return (
    <div className={`absolute rounded-full opacity-40 w-44 h-44 md:w-72 md:h-72 bg-tertiary-50 blur-3xl ${className}`}></div>
  );
};

export default Glow;
