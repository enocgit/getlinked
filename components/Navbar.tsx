"use client";
import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import MainButton from "./MainButton";
import { clashDisplay } from "@/app/font";
import Image from "next/image";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Timeline", "Overview", "FAQs", "Contact"];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      // shouldHideOnScroll
      isBlurred={isMenuOpen ? false : true}
      classNames={{
        item: ["text-white", "data-[active=true]:text-secondary"],
        base: [isMenuOpen ? "bg-secondary" : "bg-transparent", "border-b", "border-neutral-500/50", "z-50"],
        toggleIcon: ["text-white"],
        menuItem: ["text-xs", "space-y-5"],
      }}
    >
      <NavbarContent className="justify-between">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="order-1 md:hidden md:order-2"
          icon={
            isMenuOpen ? (
              <Image
                src="/svg/close.svg"
                alt="close menu"
                width={20}
                height={20}
              />
            ) : (
              <Image
                src="/svg/hamburger.svg"
                alt="open menu"
                width={18}
                height={18}
              />
            )
          }
        />
        <NavbarBrand>
          <h1
            className={`${clashDisplay.className} ${isMenuOpen && "hidden"} text-white text-2xl font-[700] order-2 md:order-1`}
          >
            get<span className="text-tertiary-100">linked</span>
          </h1>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-x-10 md:flex" justify="center">
        <NavbarItem className="text-xs text-white">
          <Link href="#" className="text-sm text-white">
            Timeline
          </Link>
        </NavbarItem>
        <NavbarItem className="text-xs" isActive>
          <Link href="#" aria-current="page" className="text-sm text-transparent bg-primary-100 bg-clip-text">
            Overview
          </Link>
        </NavbarItem>
        <NavbarItem className="text-xs text-white">
          <Link color="foreground" href="#" className="text-sm text-white">
            FAQs
          </Link>
        </NavbarItem>
        <NavbarItem className="text-xs text-white">
          <Link color="foreground" href="#" className="text-sm text-white">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="hidden md:inline-flex">
        <NavbarItem>
          <MainButton>Register</MainButton>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-secondary">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className={`w-full text-white font-[500] text-[1.125rem] mb-5 ${index == 0 && "mt-14"}`} href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <MainButton>Register</MainButton>
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;
