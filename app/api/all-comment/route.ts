import { PrismaClient } from "@/generated/prisma";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(request:NextRequest){
    try{
        const url = new URL(request.url)
        const publicId = url.searchParams.get("publicId")
        if(!publicId){
            return NextResponse.json({error:"No Public Id"})
        } 
        await prisma.$connect()
        const comments = await prisma.comment.findMany({
            where:{videoPublicId:publicId},
            orderBy:{createdAt:"desc"}
        })
        const totalCount = await prisma.comment.count({
            where:{videoPublicId:publicId}
        })
        return NextResponse.json({comments:comments, totalCount:totalCount})
    }catch(error){
        console.log(error)
        return NextResponse.json({error:"Failed to load comments"},{status:400})
    }finally{

    }
}