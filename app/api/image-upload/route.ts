import { NextResponse,NextRequest } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { v2 as cloudinary } from 'cloudinary';

export const runtime = "nodejs";

  cloudinary.config({ 
        cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET 
    });

    interface cloudinaryUploadResponse{
        public_id:string,
        [key: string] : unknown

    }

export async function POST(request: NextRequest){

    const {userId} = await auth()
    console.log("User idis there" + userId)
    if(!userId){
        return NextResponse.json({error:"Unauthorized"},{status:401})
    }
    try{
        const formData = await request.formData();
        const file = formData.get("file") as File | null
        if(!file){
            return NextResponse.json({error:"No file found"},{status:401})
        }
        const byte = await file.arrayBuffer()
        const buffer = Buffer.from(byte)

       const result = await new Promise<cloudinaryUploadResponse>(
            (resolve,reject)=>{
                  const uploadStream =  cloudinary.uploader.upload_stream(
                        {folder:"freetube"},
                        (error,result)=>{
                            if(error) reject(error)
                            else resolve(result as cloudinaryUploadResponse)
                        }
                    )
                    uploadStream.end(buffer)
            }
        )
        return NextResponse.json({publicId:result.public_id},{status:200})
    }catch(error){
        console.log("Upload image failed",error)
        return NextResponse.json({error:"Failed to upload the image"},{status:500})
    }
}