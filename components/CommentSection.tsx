import React, { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ThumbsUp,SendHorizontal } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns';
import axios from 'axios'
const CommentSection = ({stringifiedPublicId}:any) => {
    const [comments, setComments] = useState([
  { id: 1, user: "User1", content: "Amazing song!", createdAt: "2 hours ago", likes: 12 },
  { id: 2, user: "User2", content: "Love the vibe!", createdAt: "1 hour ago", likes: 5 },
]);
const [totalCount , setTotalCount] = useState<number>(0)
const [newComments,setNewComments] = useState("")
const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  useEffect(()=>{
    const fetchComments = async()=>{
      try{
        const response = await axios.get(`/api/all-comment/?publicId=${encodeURIComponent(stringifiedPublicId)}`)
        console.log(JSON.stringify(response.data,null,2))
       setComments(response.data.comments)
       setTotalCount(response.data.totalCount)
      }catch(error){
        console.log(error)
      }
    }
    fetchComments()
  },[])

    const handleSubmit = async()=>{
        const newCommentObj = {
          id:Date.now(),
          user:"You",
          content:newComments,
          createdAt:"Just Now",
          likes:2
        }
        setComments([newCommentObj, ...comments])
        setNewComments("")

        try{
            const response = await axios.post(`/api/comment/?publicId=${encodeURIComponent(stringifiedPublicId)}`,{
              content:newComments
            })
        }catch(error){
          console.log(error)
        }
       
    }

    
  return (
    <div className='w-[34vw]'>
      <Card className="shadow-lg border-0 bg-white/60 backdrop-blur-sm dark:bg-slate-800/60">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-lg font-semibold">Comments</h2>
                  <Badge variant="secondary">{totalCount}</Badge>
                </div>

                <div className="flex gap-4 mb-6">
                  <Avatar className="h-10 w-10">
                   
                    <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                      S
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-row justify-between items-center gap-2">
                    <Input value={newComments} onChange={(e) => setNewComments(e.target.value)}  placeholder="Add a comment..." className="bg-white dark:bg-slate-800" />
                    <SendHorizontal onClick={(handleSubmit)} className="flex justify-end" />
                  </div>
                </div>

                <div className="space-y-4">
                  {comments.map((i) => (
                    <div key={i.id} className="flex gap-4">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm">
                          U{i.user}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-sm">{i.user}</span>
                          <span className="text-xs text-muted-foreground">
                            {typeof i.createdAt === 'string' && !isNaN(Date.parse(i.createdAt))
                              ? formatDistanceToNow(new Date(i.createdAt), { addSuffix: true })
                              : typeof i.createdAt === 'number'
                                ? formatTime(i.createdAt)
                                : 'Just now'}
                          </span>
                        </div>
                        <p className="text-sm text-slate-700 dark:text-slate-300">
                          {i.content}
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                          <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                            <ThumbsUp className="h-3 w-3 mr-1" />
                            {i.likes}
                          </Button>
                          <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                            Reply
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
    </div>
  )
}

export default CommentSection
