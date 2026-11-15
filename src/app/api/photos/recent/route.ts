import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getVisitorToken } from "@/lib/visitor";

export async function GET() {
  try {
    const visitorToken = await getVisitorToken();

    const photos = await prisma.photo.findMany({
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
            visitorToken,
          },
          select: {
            id: true,
          },
        },
      },
    });

    const formattedPhotos = photos.map((photo) => ({
      id: photo.id,
      slug: photo.slug,
      src: photo.src,
      title: photo.title,
      location: photo.location,
      blurImgUrl: photo.blurImgUrl,
      createdAt: photo.createdAt,
      updatedAt: photo.updatedAt,
      likesCount: photo._count.likes,
      liked: photo.likes.length > 0,
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
