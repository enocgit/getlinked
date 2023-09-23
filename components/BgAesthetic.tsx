import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  className?: string;
  height?: number;
  width?: number;
};

const BgAesthetic = ({ src, width, height, className }: Props) => {
  return (
    <Image
      src={src}
      alt=""
      width={width ? width : 20}
      height={height ? height : 20}
      className={`absolute ${className}`}
    />
  );
};

export default BgAesthetic;
