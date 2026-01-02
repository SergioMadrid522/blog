"use client";

import { navbarLinks } from "@/data";
import Link from "next/link";
import type { LinkProps } from "@/types";

export default function Links({ handleClick }: LinkProps) {
  return (
    <>
      {navbarLinks.map(({ label, pageUrl }) => (
        <Link
          key={label}
          href={pageUrl}
          onClick={handleClick}
          className="
          font-bold
          text-2xl md:text-[14px]
          hover:text-white focus:text-white transition-colors"
        >
          {label}
        </Link>
      ))}
    </>
  );
}
