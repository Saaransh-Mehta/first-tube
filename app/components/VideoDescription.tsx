
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Avatar,AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';


interface VideoDescriptionProps {
  description: string;
  title:string;
}

const VideoDescription: React.FC<VideoDescriptionProps> = ({
  description,title
}) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);
  const [hasDisliked, setHasDisliked] = useState(false);
  const [likes, setLikes] = useState(1250);
  const [dislikes, setDislikes] = useState(23);
  const [isSubscribed,setIsSubscribed] = useState<boolean>(false)

  // const truncatedDescription = description.length > 200 
  //   ? description.substring(0, 200) + '...'
  //   : description;

  const handleLike = () => {
    if (hasLiked) {
      setHasLiked(false);
      setLikes(likes - 1);
    } else {
      setHasLiked(true);
      setLikes(likes + 1);
      if (hasDisliked) {
        setHasDisliked(false);
        setDislikes(dislikes - 1);
      }
    }
  };

  const handleDislike = () => {
    if (hasDisliked) {
      setHasDisliked(false);
      setDislikes(dislikes - 1);
    } else {
      setHasDisliked(true);
      setDislikes(dislikes + 1);
      if (hasLiked) {
        setHasLiked(false);
        setLikes(likes - 1);
      }
    }
  };

  const formatCount = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    }
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <div className="bg-white w-[34vw] rounded-lg shadow-sm border border-gray-200 p-6">
      <div className='title'>
        <h1 className='text-4xl font-semibold tracking-tight mb-2'>{title}</h1>
      </div>
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center bg-gray-100 rounded-full overflow-hidden">
          <button
            
            className={`rounded-none rounded-l-full px-4 py-2 ${hasLiked ? 'bg-blue-100 text-blue-600' : ''}`}
            onClick={handleLike}
          >
            <ThumbsUp className="w-4 h-4 mr-2" />
            {formatCount(likes)}
          </button>
          <div className="w-px h-6 bg-gray-300"></div>
          <button
          
            className={`rounded-none rounded-r-full px-4 py-2 ${hasDisliked ? 'bg-red-100 text-red-600' : ''}`}
            onClick={handleDislike}
          >
            <ThumbsDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <div className="space-y-3">
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {isDescriptionExpanded ? description : description?.substring(0,200) }
          </p>
          
          {description?.length > 200 && (
            <button
              
              onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
              className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 h-auto font-medium"
            >
              {isDescriptionExpanded ? (
                <>
                  Show less <ChevronUp className="w-4 h-4 ml-1" />
                </>
              ) : (
                <>
                  Show more <ChevronDown className="w-4 h-4 ml-1" />
                </>
              )}
            </button>
          )}
        </div>
      </div>
      <div className='author mt-4 flex justify-between'>
        <div className="flex justify-center items-center gap-6 avatar-part">
        <Avatar className="h-10 w-10">
                   
                    <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                      JS
                    </AvatarFallback>
                  </Avatar>
                  <div className='flex flex-col'>

                <h1 className='font-semibold  text-lg'>Jordan Sandhu</h1>
                <p className='text-gray-500 text-sm'>143k Subscribers</p>
                  </div>
          </div>
          <div className="subscribe">
            {isSubscribed ? <><Button onClick={()=>setIsSubscribed(false)} className='bg-gray-400 text-white hover:bg-gray-500 transition animate-in'>Subscribed</Button></> : <><Button onClick={()=>setIsSubscribed(true)} className='bg-red-600 text-white hover:bg-red-700 transition animate-in'>Subscribe</Button></>}
            
          </div>
      </div>
    </div>
  );
};

export default VideoDescription;
