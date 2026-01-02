"use client";

import Link from "next/link";
import { GLOBAL } from "@/data";
import { useState } from "react";
import Links from "./Links";
import Modal from "./Modal";

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
        top-0 left-0
        flex items-center justify-between
        px-8 py-8 md:px-30
        bg-linear-to-b from-black/60 via-black/30 to-transparent/20
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
          hidden md:flex 
          gap-8
          font-sans font-bold uppercase
          text-[10px] md:text-[14px] text-[#edededad]
        "
      >
        <Links />
      </div>

      <div className="flex items-center md:hidden">
        <button type="button" onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            viewBox="0 0 16 16"
            className=""
          >
            <path fillRule="evenodd" d={hamburgerIcon} />
          </svg>
        </button>
      </div>

      <Modal isOpen={isOpen} handleClick={handleClick} />
    </div>
  );
}
