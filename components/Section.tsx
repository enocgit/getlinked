import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Section = ({ children, className }: Props) => {
  return (
    <section
      className={`flex min-h-max items-center justify-center border-b border-neutral-500/50 bg-secondary px-10 py-14 text-white ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
