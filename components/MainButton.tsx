"use client";
import { Button, Link } from "@nextui-org/react";
import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
};

const MainButton = ({ children, className }: Props) => {
  return (
    <Button
      as={Link}
      href="#"
      className={`w-32 text-xs text-white rounded-sm bg-primary ${className}`}
    >
      {children}
    </Button>
  );
};

export default MainButton;
