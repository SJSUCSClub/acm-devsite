"use client";

import React, { useState } from "react";
import Link from "next/link";

import Logo from "/public/Logo.png";
import Image from "next/image";
import LinkCard from "./LinkCard";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar z-10 sticky w-full">
      <div className="flex bg-white px-[5%] py-4 border-b-4 w-full">
        <Link href="/" className="mr-auto">
          <Image
            src={Logo}
            alt="Logo"
            quality={100}
            className="sm:h-auto max-w-[100px] h-auto"
          />
        </Link>

        <div className="hidden md:flex grid grid-flow-col gap-4 items-center text-right justify-right">
          <LinkCard path="/about" pathName="About Us" />
          <LinkCard path="/board" pathName="Board" />
          <LinkCard path="/events" pathName="Events" />
        </div>

        <div className="md:hidden place-content-center items-center">
          <button
            onClick={handleClick}
            className="flex flex-col justify-center items-center"
          >
            <span
              className={`bg-black block transition-all duration-300 ease-out 
                                h-1 w-9 rounded-sm ${
                                  isOpen
                                    ? "rotate-45 translate-y-2"
                                    : "-translate-y-0.5"
                                }`}
            ></span>
            <span
              className={`bg-black block transition-all duration-300 ease-out 
                                h-1 w-9 rounded-sm my-1 ${
                                  isOpen ? "opacity-0" : "opacity-100"
                                }`}
            ></span>
            <span
              className={`bg-black block transition-all duration-300 ease-out 
                                h-1 w-9 rounded-sm ${
                                  isOpen
                                    ? "-rotate-45 -translate-y-2"
                                    : "translate-y-0.5"
                                }`}
            ></span>
          </button>
        </div>
      </div>
      <div
        className={`w-screen ${isOpen ? "absolute transition ease-in flex-row bg-white justify-center text-center items-center md:hidden  border-b-4" : "hidden"}`}
        onClick={handleClick}
      >
        <LinkCard path="/about" pathName="About Us" />
        <LinkCard path="/board" pathName="Board" />
        <LinkCard path="/events" pathName="Events" />
      </div>
    </div>
  );
};
export default Navbar;
