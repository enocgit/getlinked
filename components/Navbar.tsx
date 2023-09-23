//@ts-nocheck

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
import { usePathname } from "next/navigation";
import navMenus from "@/content/navMenus";

const Nav = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Timeline", "Overview", "FAQs", "Contact"];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      // shouldHideOnScroll
      isBlurred={isMenuOpen ? false : true}
      classNames={{
        item: ["text-white", "data-[active=true]:text-secondary"],
        base: [
          isMenuOpen ? "bg-secondary" : "bg-transparent",
          pathname == "/" && "border-b",
          "border-neutral-500/50",
          "z-50",
          pathname == "/contact" && "hidden",
          "pt-5",
          "md:flex",
        ],
        toggleIcon: ["text-white"],
        menuItem: ["text-xs", "space-y-5"],
      }}
    >
      <NavbarContent className="justify-between">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="order-1 md:order-2 md:hidden"
          icon={
            isMenuOpen ? (
              <Image
                src="/svg/close.svg"
                alt="close menu"
                width={24}
                height={24}
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
        <NavbarBrand className="md:max-xl:-m-0 xl:-m-20">
          <Link
            href="/"
            className={`${clashDisplay.className} ${
              isMenuOpen && "hidden"
            } order-2 inline-block text-2xl font-[700] text-white md:order-1`}
          >
            get<span className="text-tertiary-100">linked</span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-x-24 md:flex" justify="end">
        <div className="flex gap-x-10">
          {navMenus.map((menu) => {
            const { label, href } = menu;
            return (
              <NavbarItem key={label}>
                <Link
                  href={href}
                  className={`text-sm ${
                    pathname === href
                      ? "bg-primary-100 bg-clip-text text-transparent"
                      : " text-white"
                  }`}
                >
                  {label}
                </Link>
              </NavbarItem>
            );
          })}
        </div>
        <div className="hidden md:inline-flex">
          <NavbarItem>
            <MainButton href="/register">Register</MainButton>
          </NavbarItem>
        </div>
      </NavbarContent>
      <NavbarMenu className="bg-secondary">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={`mb-5 w-full text-[1.125rem] font-[500] text-white ${
                index == 0 && "mt-14"
              }`}
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <MainButton href="/register">Register</MainButton>
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;
