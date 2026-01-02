"use client";

import Masonry from "react-masonry-css";
import Image from "next/image";
import { breakpointColumnsObj, recentPictures } from "@/data";
import Link from "next/link";

export default function HomeMain() {
  return (
    <section
      id="recent-picture"
      className="w-full px-4 md:px-8 py-20 bg-[#0a0a0a]"
    >
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4"
        columnClassName="flex flex-col gap-4"
      >
        {recentPictures.map(({ id, src, title }) => (
          <div key={id}>
            <Image
              src={src}
              alt={title}
              className="rounded-xl w-full"
              placeholder="blur"
            />
          </div>
        ))}
      </Masonry>

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
