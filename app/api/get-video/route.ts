import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
export const runtime = "nodejs";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const publicId = url.searchParams.get("publicId");

  if (!publicId) {
    return NextResponse.json({ error: "Missing publicId" }, { status: 400 });
  }

  const video = await prisma.video.findUnique({
    where: { publicId },
  });

  if (!video) {
    return NextResponse.json({ error: "Video not found" }, { status: 404 });
  }

 
  return NextResponse.json({
    title: video.title,
    description: video.desription,
    publicId: video.publicId,
    
  });
}
