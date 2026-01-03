"use client";

import { breakpointColumnsObj, gallery } from "@/data";
import Masonry from "react-masonry-css";
import Image from "next/image";

export default function HomeGallery() {
  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4"
        columnClassName="flex flex-col gap-4"
      >
        {gallery.map(({ id, src, title }) => (
          <div key={id} className="relative">
            <Image
              src={src}
              alt={title}
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-xl w-full h-auto object-cover"
            />
          </div>
        ))}
      </Masonry>
    </>
  );
}
