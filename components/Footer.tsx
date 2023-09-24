"use client";
import { clashDisplay } from "@/app/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Glow from "./Glow";
import BgAesthetic from "./BgAesthetic";
import { usePathname } from "next/navigation";

type Props = {};

const Footer = (props: Props) => {
  const pathname = usePathname()
  return (
    <footer className={`${pathname !== "/" && "hidden"} flex items-center justify-center p-8 text-xs text-white xss:p-14 bg-secondary-100 `}>
      <div className="">
        <div className="relative flex flex-wrap gap-y-10 gap-x-20 lg:gap-x-32">
          <BgAesthetic
            src="/png/star-white.png"
            className="-left-20 top-10"
            width={10}
            height={10}
          />
          <div className="space-y-8">
            <div className="space-y-2">
              <h3
                className={`${clashDisplay.className} text-xl md:max-w-[250px]`}
              >
                get
                <span className="text-tertiary-100">linked</span>
              </h3>
              <p className="max-w-sm leading-relaxed">
                Getlinked Tech Hackathon is a technology innovation program
                established by a group of organizations with the aim of
                showcasing young and talented individuals in the field of
                technology
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p className="">Terms of Use</p>
              <div className="w-0.5 h-5 bg-tertiary-100"></div>
              <p className="">Privacy policy</p>
            </div>
          </div>
          {/* Useful Links */}
          <div className="relative">
            <BgAesthetic
              src="/png/star-gradient.png"
              className="-left-20 -bottom-2"
              width={10}
              height={10}
            />

            <h3 className="text-sm text-tertiary-100 font-[700]">
              Useful Links
            </h3>
            <ul className="mt-2 space-y-2">
              <li>Overview</li>
              <li>Timeline</li>
              <li>FAQs</li>
              <li>Register</li>
              <li className="flex font-[700] gap-3 text-tertiary-100">
                Follow us
                <span className="flex gap-3">
                  <Link href="" target="_blank">
                    <Image
                      src="/svg/instagram.svg"
                      alt="instagram"
                      width={14}
                      height={14}
                      className="shrink-0"
                    />
                  </Link>
                  <Link href="" target="_blank">
                    <Image
                      src="/svg/xtwitter.svg"
                      alt="xtwitter"
                      width={14}
                      height={14}
                      className="shrink-0"
                    />
                  </Link>
                  <Link href="" target="_blank">
                    <Image
                      src="/svg/facebook.svg"
                      alt="facebook"
                      width={8}
                      height={8}
                      className="shrink-0"
                    />
                  </Link>
                  <Link href="" target="_blank">
                    <Image
                      src="/svg/linkedin.svg"
                      alt="linkedin"
                      width={14}
                      height={14}
                      className="shrink-0"
                    />
                  </Link>
                </span>
              </li>
            </ul>
          </div>
          {/* Contact Us */}
          <div className="relative">
            <BgAesthetic
              src="/png/star-neutral.png"
              className="-left-20 top-10"
              width={10}
              height={10}
            />
            <BgAesthetic
              src="/png/star-white.png"
              className="-right-20 bottom-10"
              width={10}
              height={10}
            />
            <h3 className="text-sm text-tertiary-100 font-[700]">Contact Us</h3>
            <ul className="mt-2 space-y-2">
              <li className="">
                <Link href="tel:+234 6707653444" className="flex gap-4">
                  <Image src="/svg/call.svg" alt="" width={14} height={14} />
                  +234 6707653444
                </Link>
              </li>
              <li className="max-w-[120px]">
                <Link href="" className="flex gap-4">
                  <Image
                    src="/svg/location.svg"
                    alt=""
                    width={14}
                    height={14}
                  />
                  27,Alara Street Yaba 100012 Lagos State
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-center">
          All rights reserved. &copy; getlinked Ltd
        </p>
      </div>
    </footer>
  );
};

export default Footer;
