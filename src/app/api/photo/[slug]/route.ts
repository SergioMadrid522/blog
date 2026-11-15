import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import type { RouteContext } from "@/types";

export async function GET(request: Request, { params }: RouteContext) {
  try {
    const { slug } = await params;

    const photo = await prisma.photo.findUnique({
      where: { slug },
    });

    return NextResponse.json(photo);
  } catch (error) {
    console.error("Error fetching photo:", error);

    return NextResponse.json(
      { error: "Failed to fetch photo" },
      { status: 500 },
    );
  }
}
