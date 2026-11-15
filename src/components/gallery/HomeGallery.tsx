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
      <div className="flex items-center justify-center gap-2">
        <svg
          className="animate-spin h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <SpinIcon />
        </svg>
        <span>Loading images...</span>
      </div>
    );
  }

  if (error) {
    return <p>Error loading images: {error}</p>;
  }

  if (!data) {
    return <p>No images found.</p>;
  }

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4"
        columnClassName="flex flex-col gap-4"
      >
        {data.map(({ src, title, slug, blurImgUrl }) => (
          <div key={title} className="group relative overflow-hidden">
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
            <SeeDetailsLink slug={slug} />
          </div>
        ))}
      </Masonry>
    </>
  );
}
