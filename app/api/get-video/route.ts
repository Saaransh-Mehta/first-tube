import { PrismaClient } from "@/generated/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request:NextRequest){

const prisma = new PrismaClient()
prisma.$connect() 
    const url = new URL(request.url);
    const publicId = url.searchParams.get("publicId") ?? undefined;
    const video = await prisma.video.findUnique({
        where: { publicId }
    })

    if(!video){
        return NextResponse.json({error:"Error while fetching video"},{status:401})
    }

    return NextResponse.json(video)
}