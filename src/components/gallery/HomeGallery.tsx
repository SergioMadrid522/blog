"use client";

import { breakpointColumnsObj, gallery } from "@/data";
import Masonry from "react-masonry-css";
import Image from "next/image";
export default function HomeGallery() {
  return (
    <section className="w-full px-4 md:px-8 py-22 bg-[#0a0a0a]">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4"
        columnClassName="flex flex-col gap-4"
      >
        {gallery.map(({ id, src, title }) => (
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
    </section>
  );
}
