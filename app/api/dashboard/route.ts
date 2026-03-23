import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
export const runtime = "nodejs";

const prisma = new PrismaClient();

export async function GET() {
  try {
    await prisma.$connect();

    const [totalVideos, totalComments, recentVideosRaw] = await Promise.all([
      prisma.video.count(),
      prisma.comment.count(),
      prisma.video.findMany({
        orderBy: { createdAt: "desc" },
        take: 3,
        select: {
          id: true,
          title: true,
          duration: true,
          createdAt: true,
          publicId: true,
        },
      }),
    ]);

    // Format recent videos for the component
    const recentVideos = recentVideosRaw.map((v) => ({
      id: v.id,
      title: v.title,
      duration: Math.round(v.duration) + "s",
      thumbnail: `https://res.cloudinary.com/demo/image/upload/${v.publicId}.jpg`, // generic placeholder or use real cloudinary id if exists
      status: "published",
      updatedAgo: new Date(v.createdAt).toLocaleDateString(),
    }));

    // Generate chart data: last 7 days of uploads
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    
    const recentUploads = await prisma.video.findMany({
      where: {
        createdAt: {
          gte: sevenDaysAgo,
        },
      },
      select: { createdAt: true },
    });

    const uploadsByDay: Record<string, number> = {};
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateString = d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
      uploadsByDay[dateString] = 0;
    }

    recentUploads.forEach((vid) => {
      const dateString = new Date(vid.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric" });
      if (uploadsByDay[dateString] !== undefined) {
        uploadsByDay[dateString] += 1;
      }
    });

    const chartLabels = Object.keys(uploadsByDay);
    const chartData = Object.values(uploadsByDay);

    return NextResponse.json({
      totalVideos,
      totalComments,
      recentVideos,
      chartData: {
        labels: chartLabels,
        data: chartData,
      },
    });
  } catch (error) {
    console.error("Dashboard API Error:", error);
    return NextResponse.json(
      { error: "Failed to load dashboard data" },
      { status: 500 }
    );
  }
}
