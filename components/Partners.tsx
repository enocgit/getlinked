import Image from "next/image";
import React from "react";
import sponsors from "@/content/sponsors";
import BgAesthetic from "./BgAesthetic";
import Glow from "./Glow";

type Props = {};

const Partners = (props: Props) => {
  return (
    <div className="relative mt-2 flex items-center justify-center border border-tertiary-100 p-20 scale-50 sm:scale-100">
      <Glow className="-left-60 -top-20" />
      <Glow className="-bottom-32 -right-60" />
      <BgAesthetic src="/svg/star-purple.svg" className="-top-10 left-10" />
      <BgAesthetic src="/svg/star-gradient.svg" className="right-80 top-10" />
      <BgAesthetic src="/svg/star-white.svg" className="bottom-10 right-80" />
      <div className="grid grid-cols-3 gap-10">
        {sponsors.map((sponsor, index) => {
          const { id, name, image } = sponsor;
          if (id % 3 !== 0) {
            return (
              <div key={id} className="flex w-full">
                <div className="relative h-20 w-32 shrink-0">
                  <Image
                    src={image}
                    alt={name.toLowerCase()}
                    fill
                    style={{ objectFit: "contain" }}
                    className="shrink-0"
                  />
                </div>
                <div className="ml-8 h-full w-0.5 bg-tertiary-100 shrink-0"></div>
              </div>
            );
          }
          if (id > 3) {
            return (
              <div key={id} className="flex w-full">
                <div className="relative h-20 w-32 shrink-0">
                  <div className="relative bottom-5 h-0.5 w-full bg-tertiary-100 shrink-0"></div>
                  <Image
                    src={image}
                    alt={name.toLowerCase()}
                    fill
                    style={{ objectFit: "contain" }}
                    className="shrink-0"
                  />
                </div>
                <div className="ml-8 h-full w-0.5 bg-tertiary-100 shrink-0"></div>
              </div>
            );
          }
          return (
            <div key={id} className="flex w-full">
              <div className="relative h-20 w-32 shrink-0">
                <Image
                  src={image}
                  alt={name.toLowerCase()}
                  fill
                  style={{ objectFit: "contain" }}
                  className="shrink-0"
                />
              </div>
              {/* <div className="h-full w-0.5 bg-tertiary-100 ml-8"></div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Partners;
