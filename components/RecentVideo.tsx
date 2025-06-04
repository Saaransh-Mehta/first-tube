"use client"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, Clock } from "lucide-react"
import { useEffect } from "react"
export default function VideoComponent() {
    useEffect(()=>{
        const fetchUserVideo = async()=>{
            try{

            }catch(error){
                console.log("This is error")
            }
        }
    },[])
  const videos = [
    {
      id: 1,
      title: "Introduction to React Hooks",
      thumbnail: "/placeholder.svg?height=80&width=120",
      duration: "12:34",
      status: "published",
      updatedAgo: "2 hours ago",
    },
    {
      id: 2,
      title: "Building Modern UIs with Tailwind CSS",
      thumbnail: "/placeholder.svg?height=80&width=120",
      duration: "18:45",
      status: "in progress",
      updatedAgo: "1 day ago",
    },
    {
      id: 3,
      title: "Next.js App Router Deep Dive",
      thumbnail: "/placeholder.svg?height=80&width=120",
      duration: "25:12",
      status: "published",
      updatedAgo: "3 days ago",
    },
      ]

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Play className="w-5 h-5" />
          Recent Videos
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {videos.map((video) => (
          <div key={video.id} className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="relative flex-shrink-0">
              <img
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                className="w-20 h-12 object-cover rounded-md bg-muted"
              />
              <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
                {video.duration}
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-sm leading-tight mb-2 line-clamp-2">{video.title}</h3>

              <div className="flex items-center justify-between gap-2">
                <Badge variant={video.status === "published" ? "default" : "secondary"} className="text-xs">
                  {video.status === "published" ? "Published" : "In Progress"}
                </Badge>

                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>{video.updatedAgo}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="pt-2 border-t">
          <button className="text-sm text-primary hover:underline">View all videos</button>
        </div>
      </CardContent>
    </Card>
  )
}
