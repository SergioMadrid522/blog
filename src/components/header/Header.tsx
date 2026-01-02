import Image from "next/image";
import banner from "@/assets/images/banner.webp";

import Link from "next/link";
import ChevronDownIcon from "./ChevronDownIcon";

export default function Header() {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <Image
          src={banner}
          alt="Blog Gallery banner"
          fill
          priority
          className="object-cover object-bottom"
        />

        <div
          className="
            absolute inset-0
            flex flex-col items-center justify-center
            text-center
            bg-linear-to-t from-black/40 via-black/30 to-black/40
            backdrop-blur-[2.5px]
          "
        >
          <h1 className="font-serif uppercase text-5xl md:text-7xl text-[#ededed] tracking-tight">
            Silent Beauty
          </h1>
          <p
            className="
            font-serif italic
            text-xl md:text-2xl 
            text-[#ededed] 
            mt-2
          "
          >
            Photography by Fabian
          </p>

          <Link
            className="
              font-sans font-bold 
              text-xs text-white
              uppercase
              tracking-[0.25em]
              w-fit
              my-6
              px-8.5 py-3
              border border-white/30 rounded-sm
              hover:bg-[#ededed]/60 hover:text-black transition-all duration-350
            "
            href="/gallery"
          >
            All Gallery
          </Link>
        </div>

        <Link
          href="#recent-pictures"
          className="absolute bottom-0 left-0 w-full flex justify-center"
        >
          <div className="-translate-y-50 flex flex-col items-center">
            <p className="font-sans font-bold text-[16px] text-[#edededc5] italic tracking-[0.25em] my-2">
              Recent Pictures
            </p>

            <div className="animate-bounce will-change-transform">
              <ChevronDownIcon />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
