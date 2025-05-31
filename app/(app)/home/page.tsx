"use client"
import axios from 'axios'
import React, { useEffect ,useState} from 'react'

const page = () => {
  const [videos,setVideos] = useState<Array<any>>([])
  const loadAllVideos = async()=>{
    const result = await axios.get("/api/video")
    console.log(result.data)
    setVideos(result.data)
  }
  useEffect(()=>{
    loadAllVideos()
  },[])
  console.log(videos)
  return (
    <div>
      This is Home Page
      {/* {
        videos.map((video)=>{
          return(
            <>
            {video.title}
            </>
          )
        })
      } */}
    </div>
  )
}

export default page
