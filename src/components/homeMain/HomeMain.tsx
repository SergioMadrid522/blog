"use client";

import Link from "next/link";
import RecentImages from "./RecentImages";

export default function HomeMain() {
  return (
    <section
      id="recent-pictures"
      className="w-full px-4 md:px-8 py-20 bg-[#0a0a0a]"
    >
      <RecentImages />

      <div className="flex items-center justify-center h-10 p-10">
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
    </section>
  );
}
