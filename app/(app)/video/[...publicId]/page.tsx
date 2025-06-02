'use client'
import React,{useState, useEffect,use} from 'react'
import { CldVideoPlayer, getCldImageUrl, getCldVideoUrl } from 'next-cloudinary'
import ReactPlayer from 'react-player';
import cloudinary from 'cloudinary-video-player';
import "cloudinary-video-player/cld-video-player.min.css";
// import { DefaultVideoLayout } from "@vidstack/react/player/layouts/plyr;
import { MediaPlayer, MediaProvider } from '@vidstack/react'
import axios from 'axios';
const page = ({params}:{params:Promise<{publicId:string[]}>}) => {

    const { publicId } = use(params);
    const stringifiedPublicId = publicId.join('/');
    console.log("this is stringifiedPublicId "+stringifiedPublicId)
    const videoUrl = getCldVideoUrl({
        src: stringifiedPublicId,
        width: 1920,
        height: 1080,
        // format: 
        assetType:'video',
        format: 'mp4',
        gravity:"auto"
        // rawTransformations:
    })
    const poster = getCldImageUrl({
      src: stringifiedPublicId,
      assetType:'video',
      width: 1920,
      height: 1080,
    })

    console.log("this is video Url "+videoUrl)
  return (
    
  <>
<div className='video-player flex justify-center flex-col items-center gap-10'>


  <div className='video-title'>
    <h1 className='text-7xl'>Video Title</h1>

  </div>
    <div className='flex justify-center items-center w-full h-full'>
      <MediaPlayer
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
   
 </div>
  </>
 
  )
}

export default page
