"use client";
import Link from "next/link";
import { GLOBAL } from "@/data";
import { navbarLinks } from "@/data";
import { useState } from "react";
import Links from "./Links";

export default function Navbar() {
  const { hamburgerIcon } = GLOBAL;
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="
        fixed
        top-0
        flex items-center justify-between
        px-8 py-8 md:px-30
        bg-transparent
        border-b border-b-white/20
        w-full 
        z-1
      "
    >
      <Link
        href="/"
        className="
          font-serif uppercase
          text-2xl  md:text-4xl tracking-tight
          text-[#ededed]
        "
      >
        Fabian.
      </Link>

      <div
        className="
          hidden md:flex gap-8
          font-sans font-bold uppercase
          text-[10px] md:text-[14px] text-[#edededad]
        "
      >
        <Links />
      </div>

      {isOpen && (
        <div
          className="
            absolute md:flex
          bg-red-500
            flex flex-row
          "
        >
          <Links />
        </div>
      )}

      <div className={`flex items-center md:hidden `}>
        <button type="button" onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            viewBox="0 0 16 16"
            className=""
          >
            <path fill-rule="evenodd" d={hamburgerIcon} />
          </svg>
        </button>
      </div>
    </div>
  );
}
