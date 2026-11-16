"use client";

import { breakpointColumnsObj } from "@/data";
import { GLOBAL } from "@/icons.data";
import Masonry from "react-masonry-css";
import Image from "next/image";
import SeeDetailsLink from "../utils/SeeDetailsLink";

import { useGetImages } from "@/hooks/useGetImages";
import { useEffect } from "react";

export default function HomeGallery() {
  const { loading, error, data, fetchData } = useGetImages();
  const { circleSpin: SpinIcon } = GLOBAL;

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return (
      <div className="flex flex-col gap-5 items-center justify-center h-dvh">
        <span className="font-sans uppercase text-2xl md:text-3xl lg:text-4xl text-[#a3a3a3] leading-[0.9]">
          Loading images...
        </span>
        <SpinIcon />
      </div>
    );
  }

  if (!data) {
    return <div className="flex items-center justify-center h-dvh" />;
  }

  if (error) {
    return <p>Error loading images: {error}</p>;
  }

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4"
        columnClassName="flex flex-col gap-4"
      >
        {data.map(({ id, src, title, slug, blurImgUrl, likesCount, liked }) => (
          <div key={id} className="group relative overflow-hidden">
            <Image
              src={src}
              alt={title}
              blurDataURL={blurImgUrl}
              width={1200}
              height={800}
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-xl w-full h-auto object-cover"
            />
            <SeeDetailsLink slug={slug} data={{ id, likesCount, liked }} />
          </div>
        ))}
      </Masonry>
    </>
  );
}
