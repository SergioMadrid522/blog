import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const photos = await prisma.photo.findMany({
      include: {
        _count: {
          select: {
            likes: true,
          },
        },
      },
    });

    const formattedPhotos = photos.map(({ _count, ...photo }) => ({
      ...photo,
      likesCount: _count.likes,
    }));

    return NextResponse.json(formattedPhotos);
  } catch (error) {
    console.error("Error fetching photos:", error);

    return NextResponse.json(
      { error: "Failed to fetch photos" },
      { status: 500 },
    );
  }
}
