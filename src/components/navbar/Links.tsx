import { navbarLinks } from "@/data";
import Link from "next/link";
import type { LinkProps } from "@/types";

export default function Links({ username, handleClick }: LinkProps) {
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
      {username && (
        <div
          className="
            text-yellow-500 
            border border-yellow-500/50 
            bg-yellow-500/10
            px-3 py-1 
            rounded-full 
            text-[10px] md:text-xs 
            font-sans font-bold uppercase tracking-widest 
            mb-4 md:mb-0 md:mr-6
            flex items-center gap-2
            cursor-default select-none
        "
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          {username}
        </div>
      )}
    </>
  );
}
