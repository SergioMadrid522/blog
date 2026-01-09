"use client";

import type { ModalProps } from "@/types";
import Links from "./Links";
import { GLOBAL } from "@/data";

export default function Modal({ isOpen, handleClick, username }: ModalProps) {
  const { closeIcon } = GLOBAL;

  return (
    <>
      {isOpen && (
        <>
          <div
            className="
              absolute 
              flex flex-col md:flex
              items-center justify-center gap-5
              top-0 left-0
              w-full h-screen
              bg-linear-to-b from-black/80 via-black to-black/65
            "
          >
            <Links handleClick={handleClick} username={username} />
          </div>

          <div className="absolute right-8 md:hidden items-center">
            <button type="button" onClick={handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-label="Close navegation menu"
              >
                <path fillRule="evenodd" d={closeIcon} />
              </svg>
            </button>
          </div>
        </>
      )}
    </>
  );
}
