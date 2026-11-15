import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { uploadValidation } from "./schema/upload";
import toast from "react-hot-toast";

export async function GET() {
  try {
    const photos = await prisma.photo.findMany();

    return NextResponse.json(photos);
  } catch (error) {
    console.error("Error fetching photos:", error);

    return NextResponse.json(
      { error: "Failed to fetch photos" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = uploadValidation.safeParse(body);

    if (!validation.success) {
      const error = validation.error.issues[0].message;
      console.log(error);
      toast.error(error);
      return;
    }

    await prisma.photo.create({
      data: validation.data,
    });

    return NextResponse.json(
      { message: "The picture was just uploaded" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error:", error);

    return NextResponse.json(
      { error: "Failed to fetch photos" },
      { status: 500 },
    );
  }
}
