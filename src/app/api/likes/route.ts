import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getVisitorToken } from "@/lib/visitor";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const photoId = body.photoId;

    if (
      typeof photoId !== "number" ||
      !Number.isInteger(photoId) ||
      photoId <= 0
    ) {
      return NextResponse.json({ error: "Invalid photoId" }, { status: 400 });
    }

    // Verify that the photo exists
    const photo = await prisma.photo.findUnique({
      where: { id: photoId },
      select: { id: true },
    });

    if (!photo) {
      return NextResponse.json({ error: "Photo not found" }, { status: 404 });
    }

    // Identify the visitor
    const visitorToken = await getVisitorToken();

    // Check whether this visitor already liked the photo
    const existingLike = await prisma.like.findUnique({
      where: {
        photoId_visitorToken: {
          photoId,
          visitorToken,
        },
      },
    });

    let liked: boolean;

    if (existingLike) {
      await prisma.like.delete({
        where: { id: existingLike.id },
      });

      liked = false;
    } else {
      await prisma.like.create({
        data: {
          photoId,
          visitorToken,
        },
      });

      liked = true;
    }

    // Get the updated like count
    const likesCount = await prisma.like.count({
      where: { photoId },
    });

    return NextResponse.json({
      success: true,
      liked,
      likesCount,
    });
  } catch (error) {
    console.error("Error toggling like:", error);

    return NextResponse.json(
      { error: "Failed to update like" },
      { status: 500 },
    );
  }
}
