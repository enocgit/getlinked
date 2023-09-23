import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Section = ({ children, className }: Props) => {
  return (
    <section
      className={`flex items-center justify-center text-white py-14 px-10 min-h-max bg-secondary border-b border-neutral-500/50 ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
