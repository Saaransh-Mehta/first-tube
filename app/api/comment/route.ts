import { PrismaClient } from "@/generated/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextRequest,NextResponse } from "next/server";
export const runtime = "nodejs";


const prisma = new PrismaClient()
export async function POST(request:NextRequest){

    const url = new URL(request.url)
    const publicId = url.searchParams.get("publicId")
    if(!publicId){
        return NextResponse.json({error:"No Public Id"})
    }
    const body = await request.json()
    const {content} = body
    console.log(content , " This is content ID")
    const {userId} = await auth()
    if(!userId){
        return NextResponse.json({error:"No user found ! Unauthorized"},{status:401})
    }
    try{
        await prisma.$connect()
        const comment = await prisma.comment.create({
            data:{
              content,
              createdAt: new Date(),
              videoPublicId: publicId
            }
        })
        return NextResponse.json({ message: "Comment added successfully", comment });
    }catch(error){
        console.log(error)
        return NextResponse.json({error:"Failed to load comments"},{status:400})
    }finally{
        await prisma.$disconnect()
    }
}