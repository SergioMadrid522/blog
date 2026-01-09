"use client";

import Link from "next/link";
import { GLOBAL } from "@/data";
import { useState } from "react";
import Links from "./Links";
import Modal from "./Modal";
import { Session } from "next-auth";

export default function NavbarContent({
  session,
}: {
  session: Session | null;
}) {
  const { hamburgerIcon } = GLOBAL;
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const userName = session?.user?.name;
  return (
    <div
      className="
        fixed
        top-0 left-0
        flex items-center justify-between 
        px-10 lg:px-30
        py-8 
        bg-linear-to-b from-black/60 via-black/30 to-transparent/20
        w-full md:w-full
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
          items-center
          gap-8
          font-sans font-bold uppercase
          text-[10px] md:text-[14px] text-[#edededad]
        "
      >
        <Links username={userName} />
      </div>

      <div className="flex items-center md:hidden">
        <button type="button" onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            aria-label="Open navegation menu"
            viewBox="0 0 16 16"
            className=""
          >
            <path fillRule="evenodd" d={hamburgerIcon} />
          </svg>
        </button>
      </div>

      <Modal isOpen={isOpen} handleClick={handleClick} username={userName} />
    </div>
  );
}
