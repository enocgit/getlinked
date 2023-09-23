import React from "react";

type Props = {
  className?: string;
};

const Glow = ({ className }: Props) => {
  return (
    <div
      className={`absolute h-44 w-44 rounded-full bg-tertiary-50 opacity-60 blur-3xl md:h-72 md:w-72 ${className}`}
    ></div>
  );
};

export default Glow;
