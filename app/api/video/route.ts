import { NextRequest,NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function GET(request:NextRequest, response:NextResponse){
    try{
        await prisma.$connect()
       const vidoes=  await prisma.video.findMany({
            orderBy:{
                createdAt: 'desc'
            }
        })
        return NextResponse.json(vidoes)
    }
    catch(error){
        return NextResponse.json({
            error:"Failed to load Videos"
        
        },{status:500})
    }
}