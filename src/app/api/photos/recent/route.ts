import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getVisitorToken } from "@/lib/visitor";
import { Prisma } from "@prisma/client";

const recentPhotosQuery = {
  orderBy: {
    createdAt: "desc",
  },
  take: 10,
  include: {
    _count: {
      select: {
        likes: true,
      },
    },
    likes: {
      where: {
        visitorToken: "",
      },
      select: {
        id: true,
      },
    },
  },
} satisfies Prisma.PhotoFindManyArgs;

export async function GET() {
  try {
    const visitorToken = await getVisitorToken();

    const photos = await prisma.photo.findMany({
      ...recentPhotosQuery,
      include: {
        ...recentPhotosQuery.include,
        likes: {
          where: {
            visitorToken,
          },
          select: {
            id: true,
          },
        },
      },
    });

    const formattedPhotos = photos.map(({ _count, likes, ...photo }) => ({
      ...photo,
      likesCount: _count.likes,
      liked: likes.length > 0,
    }));

    return NextResponse.json(formattedPhotos);
  } catch (error) {
    console.error("Error fetching recent photos:", error);

    return NextResponse.json(
      { error: "Failed to fetch recent photos" },
      { status: 500 },
    );
  }
}
