"use client";
import { GLOBAL } from "@/icons.data";
import type { LikeButtonProps } from "@/types";
import { useState } from "react";

export default function LikeButton({
  photoId,
  initialLiked,
  initialLikesCount,
  className = "",
}: LikeButtonProps) {
  const { heart, filledHeart } = GLOBAL;

  const [liked, setLiked] = useState(initialLiked);
  const [likesCount, setLikesCount] = useState(initialLikesCount);
  const [liking, setLiking] = useState(false);
  const [likeError, setLikeError] = useState<string | null>(null);

  const handleLike = async () => {
    if (liking) return;

    try {
      setLiking(true);
      setLikeError(null);

      const response = await fetch("/api/likes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
        body: JSON.stringify({ photoId }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to update like");
      }

      setLiked(result.liked);
      setLikesCount(result.likesCount);
    } catch (error) {
      setLikeError(
        error instanceof Error
          ? error.message
          : "An unexpected error occurred.",
      );
    } finally {
      setLiking(false);
    }
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <button
        type="button"
        onClick={handleLike}
        disabled={liking}
        aria-label={liked ? "Remove like" : "Like this photo"}
        aria-pressed={liked}
        className={`flex items-center gap-2 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${
          liked ? "text-red-500 scale-105" : "text-[#a3a3a3] hover:text-red-500"
        }`}
      >
        <span className="flex items-center justify-center transition-transform duration-200">
          {liked ? filledHeart() : heart()}
        </span>

        <span className="text-sm sm:text-base font-sans">{likesCount}</span>
      </button>

      {likeError && (
        <p className="text-red-400 text-xs sm:text-sm mt-2 text-center">
          {likeError}
        </p>
      )}
    </div>
  );
}
