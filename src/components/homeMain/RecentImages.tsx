"use client";

import { breakpointColumnsObj } from "@/data";

import Masonry from "react-masonry-css";
import Image from "next/image";
import SeeDetailsLink from "../utils/SeeDetailsLink";
import { useEffect } from "react";
import { useGetRecentImages } from "@/hooks/useGetRecentImages";
import { GLOBAL } from "@/icons.data";

export default function RecentImages() {
  const { loading, error, data, fetchData } = useGetRecentImages();
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

  if (!data || data.length === 0) {
    return <div className="flex items-center justify-center h-dvh" />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
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
            className="rounded-xl w-full"
            width={1200}
            height={800}
            placeholder="blur"
            blurDataURL={blurImgUrl}
          />

          <SeeDetailsLink
            slug={slug}
            data={{
              id,
              liked,
              likesCount,
            }}
          />
        </div>
      ))}
    </Masonry>
  );
}
