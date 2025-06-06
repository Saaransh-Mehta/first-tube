'use client'
import React,{useState, useEffect,use} from 'react'
import {  getCldImageUrl, getCldVideoUrl } from 'next-cloudinary'
import "cloudinary-video-player/cld-video-player.min.css";
// import { DefaultVideoLayout } from "@vidstack/react/player/layouts/plyr;
import { MediaPlayer, MediaProvider } from '@vidstack/react'
import axios from 'axios';
import { NextResponse } from 'next/server';
import VideoDescription from '@/components/VideoDescription';
import CommentSection from '@/components/CommentSection';

const Page = ({params}:{params:Promise<{publicId:string[]}>}) => {

  type Video = {
    id: string;
    title: string;
    description: string;
    url: string;
  }
  const [data,setData] = useState<Video | null>()
  
  
  const { publicId } = use(params);
  const stringifiedPublicId:string = publicId.join('/');

  

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response = await axios.get(`/api/get-video?publicId=${encodeURIComponent(stringifiedPublicId)}`)
        console.log("this is response data" + response.data)
        setData(response.data)
        
      }catch(error){
        console.log(error)
          return NextResponse.json({error:"Error while fetching the data"},{status:401}) 
      }
    }
    fetchData()
    console.log(data)
  },[publicId])
  
   console.log('stringified public id is ', stringifiedPublicId)
    const videoUrl = getCldVideoUrl({
        src: stringifiedPublicId,
        width: 1920,
        height: 1080,
        // format: 
        assetType:'video',
        format: 'mp4',
        // gravity:"auto"
        // rawTransformations:
    })
    const poster = getCldImageUrl({
      src: stringifiedPublicId,
      assetType:'video',
      width: 1920,
      height: 1080,
    })

  return (
    
  <>
<div className='video-player flex justify-center flex-col items-center'>


  
    <div className='flex justify-center items-center w-full h-full'>
      <MediaPlayer
                poster={poster}
                className='rounded-lg'
                title="video"
                streamType="on-demand"
                load="eager"
                controls
                
            >
                <MediaProvider>
                    <source
                        src={videoUrl}
                        type="video/webm"
                    />
                </MediaProvider>
                {/* <DefaultVideoLayout /> */}
            </MediaPlayer>
    </div>
   <div className='video-description '>
      <VideoDescription description={data?.description ?? ''} title={data?.title ?? ''}/>
   </div>
   <div className="comment-section">
    <CommentSection stringifiedPublicId={stringifiedPublicId}/>
   </div>
 </div>
  </>
 
  )
}

export default Page
