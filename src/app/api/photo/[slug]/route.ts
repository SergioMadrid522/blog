import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getVisitorToken } from "@/lib/visitor";
import type { RouteContext } from "@/types";

export async function GET(request: Request, { params }: RouteContext) {
  try {
    const { slug } = await params;

    const visitorToken = await getVisitorToken();

    const photo = await prisma.photo.findUnique({
      where: { slug },
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

    if (!photo) {
      return NextResponse.json({ error: "Photo not found" }, { status: 404 });
    }

    const { likes, _count, ...photoData } = photo;

    return NextResponse.json({
      ...photoData,
      likesCount: _count.likes,
      liked: likes.length > 0,
    });
  } catch (error) {
    console.error("Error fetching photo:", error);

    return NextResponse.json(
      { error: "Failed to fetch photo" },
      { status: 500 },
    );
  }
}
