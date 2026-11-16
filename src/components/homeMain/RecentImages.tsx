"use client";

import { breakpointColumnsObj } from "@/data";
import Masonry from "react-masonry-css";
import Image from "next/image";
import SeeDetailsLink from "../utils/SeeDetailsLink";
import { useEffect } from "react";
import { useGetRecentImages } from "@/hooks/useGetRecentImages";

export default function RecentImages() {
  const { loading, error, data, fetchData } = useGetRecentImages();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <p>Loading photos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!data || data.length === 0) {
    return <p>No recent photos found.</p>;
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
