"use client";

import Link from "next/link";
import React, { useState } from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { Menu, X } from "lucide-react";

const NavLinks = ({ melody }: { melody?: string }) => {
  return (
    <ul className={melody}>
      <li>
        <Link href="/" className="">
          Home
        </Link>
      </li>
      <li>
        <Link href="/aboutMe">About Me</Link>
      </li>
      <li>
        <Link href="/projects">Projects</Link>
      </li>
      <li>
        <a href="/DavidCappel-Developer" target="_blank">
          Download CV
        </a>
      </li>
      <li>
        <Link href="/blog">Blog</Link>
      </li>
    </ul>
  );
};

const NavBar = () => {
  const [isClick, setisClick] = useState(false);
  const toggleNavBar = () => {
    setisClick(!isClick);
  };
  return (
    <div className="relative z-20">
      <nav>
        <div className="z-10 absolute w-full sm:px-16 items-center justify-center mt-8 hidden md:flex">
          <HoverBorderGradient
            containerClassName="rounded-full"
            className="w-auto"
            as="ul"
            clockwise={true}
          >
            <NavLinks melody="flex gap-10" />
          </HoverBorderGradient>
        </div>
        <div className="md:hidden flex z-10 w-full bg-transparent absolute mt-3 top-3 right-0 justify-end pr-3 flex-wrap">
          <div className="bg-white opacity-35 m-2 pt-1 px-1 rounded-md">
            <button className="md:hidden" onClick={toggleNavBar}>
              {isClick ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>
      {isClick && (
        <div className="bg-white dark:bg-black opacity-45 text-black dark:text-white md:hidden">
          <NavLinks melody="flex flex-col items-center gap-10" />
        </div>
      )}
    </div>
  );
};

export default NavBar;
