import Image from "next/image";
import banner from "@/assets/images/banner.webp";
import Link from "next/link";
import ChevronDownIcon from "./ChevronDownIcon";

export default function Header() {
  return (
    <div className="relative w-full h-[100svh] overflow-hidden">
      <Image
        src={banner}
        alt="Blog Gallery banner"
        fill
        priority
        className="object-cover object-bottom -z-10"
      />

      <div
        className="
          absolute inset-0
          flex flex-col
          bg-linear-to-t from-black/60 via-black/20 to-black/60
          backdrop-blur-[2px]
        "
      >
        <div className="flex-1"></div>

        <div className="flex flex-col items-center justify-center text-center px-4 shrink-0 z-20">
          <h1 className="font-serif uppercase text-5xl md:text-7xl text-[#ededed] tracking-tight">
            Silent Beauty
          </h1>
          <p className="font-serif italic text-xl md:text-2xl text-[#ededed] mt-2">
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
            prefetch={false}
          >
            All Gallery
          </Link>
        </div>

        <div className="flex-1 flex flex-col justify-end pb-6 z-20">
          <Link href="#recent-pictures" className="w-full">
            <div className="flex flex-col items-center cursor-pointer group">
              <p className="font-sans font-bold text-[16px] text-[#edededc5] italic tracking-[0.25em] my-2 group-hover:text-white transition-colors">
                Recent Pictures
              </p>

              <div className="animate-bounce will-change-transform text-[#edededc5] group-hover:text-white">
                <ChevronDownIcon />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
