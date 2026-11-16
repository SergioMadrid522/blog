import Link from "next/link";
import LikeButton from "./LikeButton";
import type { SeeDetailsLinkProps } from "@/types";

export default function SeeDetailsLink({ slug, data }: SeeDetailsLinkProps) {
  return (
    <div
      className="
        absolute inset-0
        flex items-center justify-center 
        flex-col gap-10
        w-full h-full
        bg-black/44 md:bg-black/50
        opacity-100 md:opacity-0
        md:group-hover:opacity-100
        transition-opacity duration-200"
    >
      <Link
        href={`/photo/${slug}`}
        className="font-sans font-bold text-2xl md:text-xl"
      >
        See Details
      </Link>

      <LikeButton
        key={data.id}
        photoId={data.id}
        initialLiked={data.liked}
        initialLikesCount={data.likesCount}
      />
    </div>
  );
}
