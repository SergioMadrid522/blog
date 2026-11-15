"use client";
import { useGetImage } from "@/hooks/useGetImage";
import { RenderImageProps } from "@/types";
import Image from "next/image";
import { GLOBAL } from "@/icons.data";
import { useEffect, useState } from "react";
import LikeButton from "../utils/LikeButton";

export default function RenderImageClient({ slug }: RenderImageProps) {
  const { locationIcon, heart, filledHeart } = GLOBAL;
  const { loading, error, data, fetchData } = useGetImage();

  useEffect(() => {
    fetchData(slug);
  }, [fetchData, slug]);

  if (loading) {
    return <p>Loading photo...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!data) {
    return <p>Photo not found.</p>;
  }

  return (
    <main className="w-full px-4 md:px-8 py-22 bg-[#0a0a0a]">
      <section className="flex flex-wrap items-center justify-evenly gap-10">
        <div className="relative w-3xl h-3xl">
          <Image
            src={data.src}
            alt={data.title}
            width={4320}
            height={3240}
            className="object-cover rounded-xl w-full"
            priority
          />
        </div>

        <aside className="text-center">
          <h1 className="font-serif uppercase text-4xl md:text-5xl lg:text-6xl text-[#ededed] leading-[0.9] tracking-tight mb-6">
            {data.title}
          </h1>

          <div className="flex items-center justify-center gap-1">
            {locationIcon()}
            <p className="font-sans text-[20px] text-[#a3a3a3]">
              {data.location}
            </p>
          </div>

          <LikeButton
            key={data.id}
            photoId={data.id}
            initialLiked={data.liked}
            initialLikesCount={data.likesCount}
            className="mt-8"
          />
        </aside>
      </section>
    </main>
  );
}
