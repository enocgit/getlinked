//@ts-nocheck
"use client";
import React, { useState } from "react";
import Link from "next/link"

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  // Link,
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

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuActive, setMenuActive] = useState<string>("")

  const handleMenuActive = (e) => {
    setMenuActive(e.currentTarget?.dataset.id)
  }

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
        <NavbarBrand className="md:max-xl:-m-0 xl:-m-20" onClick={() => setMenuActive("")}>
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
              <NavbarItem key={label} data-id={`${href}`} onClick={handleMenuActive}>
                <Link
                  href={`${href}`}
                  className={`text-sm ${
                    pathname === href
                      ? "bg-primary-100 bg-clip-text text-transparent"
                      : "bg-primary-100 bg-clip-text text-transparent"
                  } ${
                    menuActive === href
                      ? "bg-primary-100 bg-clip-text text-transparent"
                      : "text-white"
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
            <MainButton href="/register" className={`${pathname == "/register" && "bg-secondary border border-primary"}`}>Register</MainButton>
          </NavbarItem>
        </div>
      </NavbarContent>
      {/* Mobile */}
      <NavbarMenu className={`bg-secondary space-y-5 pt-14`}>
        {navMenus.map((menu, index) => (
          <NavbarMenuItem key={menu.id} data-id={`${menu.href}`} onClick={handleMenuActive}>
            <Link
              className={`w-full text-[1.125rem] font-[500] ${
                pathname === menu.href
                  ? "bg-primary-100 bg-clip-text text-transparent"
                  : "bg-primary-100 bg-clip-text text-transparent"
              } ${
                menuActive === menu.href
                  ? "bg-primary-100 bg-clip-text text-transparent"
                  : "text-white"
              } `}
              href={`${menu.href}`}
              size="lg"
            >
              {menu.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <MainButton href="/register" className={`${pathname == "/register" && "bg-secondary border border-primary"}`}>Register</MainButton>
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;
