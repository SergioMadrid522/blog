/* "use client"; */
import Link from "next/link";
import { GLOBAL } from "@/data";
import { navbarLinks } from "@/data";
//import { useState } from "react";

export default function Navbar() {
  const { hamburgerIcon } = GLOBAL;
  /* const [isActive, setIsActive] = useState(true); */

  return (
    <div
      className="
        group relative 
        flex flex-wrap 
        items-center justify-center 
        p-4 border-r w-15 
        
    "
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path fillRule="evenodd" d={hamburgerIcon} />
        </svg>
      </div>
      <div
        className={`
            flex
            gap-2
            font-sans
            uppercase
            tracking-[0.25em]
            [writing-mode:vertical-rl]
            rotate-180
            
        `}
      >
        {/*         {isActive && (
          <div className="absolute left-0 h- w-0.5 rounded-full bg-[#d4b572] shadow-[0_0_10px_#d4b572]" />
        )} */}
        {navbarLinks.map(({ label }) => (
          <Link key={label} href={`#${label}`}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
