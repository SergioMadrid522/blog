import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import toast from "react-hot-toast";
import { uploadValidation } from "../photos/schema/upload";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = uploadValidation.safeParse(body);

    if (!validation.success) {
      const error = validation.error.issues[0].message;
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
