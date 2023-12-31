"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

const MainButton = ({ children, className, href }: Props) => {
  return (
    <Button
      as={Link}
      href={`${href}`}
      className={`w-32 rounded-sm bg-primary text-xs text-white ${className}`}
    >
      {children}
    </Button>
  );
};

export default MainButton;
