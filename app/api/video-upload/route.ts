import { NextResponse,NextRequest } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { v2 as cloudinary } from 'cloudinary';

import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient()


  cloudinary.config({ 
        cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET 
    });

    interface cloudinaryUploadResponse{
        public_id:string,
        bytes:number,
        duration?: number
        [key: string] : any

    }

export async function POST(request: NextRequest, response: NextResponse){
    await prisma.$connect()
    const {userId}:any =await auth()
    console.log("the user id on video-upload route is" + userId)
    if(!userId){
        console.log("no user id")
        return NextResponse.json({error:"Unauthorized"},{status:401})
    }
    try{
        const formData = await request.formData();
        const file = formData.get("file") as File | null
        const title = formData.get("title") as string
        const desription = formData.get("description") as string

        if(!file || !title){
            return NextResponse.json({error:"No file found"},{status:401})
        }

        const byte = await file.arrayBuffer()
        const buffer = Buffer.from(byte)

       const result = await new Promise<cloudinaryUploadResponse>(
            (resolve,reject)=>{
                  const uploadStream =  cloudinary.uploader.upload_stream(
                        {   
                            resource_type : 'video',
                            folder:"freetube_videos",

                        },
                        (error,result)=>{
                            if(error) reject(error)
                            else resolve(result as cloudinaryUploadResponse)
                        }
                    )
                    uploadStream.end(buffer)
            }
        )
        const video = await prisma.video.create({
                data:{
                    title,
                    desription,
                    originalSize:String(result.bytes),
                    compressedSize:String(result.bytes),
                    duration:result.duration || 0,
                    publicId:result.public_id

                }
            

        })

        return NextResponse.json(video)
    }catch(error){
        console.log("Upload video failed",error)
        return NextResponse.json({error:"Failed to upload the vidoe"},{status:500})
    }finally{
        await prisma.$disconnect()
    }
}