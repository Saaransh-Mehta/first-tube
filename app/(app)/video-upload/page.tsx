"use client"
import React,{useState} from 'react'
import axios from "axios"


const Page = () => {
// const router = useRouter()
const [file,setFile] = useState<File | null>(null)
const [title,setTitle] = useState<string>("")
const [description,setDescription] = useState<string>("")
const [isUploading,setIsUploading] = useState<boolean>(false)

const MAX_FILE_SIZE = 70 * 1024 * 1024; // 70MB in byte

const handleSubmit = async(event:React.FormEvent)=>{
  event.preventDefault()
  if(!file) return
  if(file.size > MAX_FILE_SIZE) {
    alert("File size too big")
    return;
  }
  setIsUploading(true)
  const formData = new FormData()
  formData.append("file",file)
  formData.append("title",title as string)
  formData.append("description",description as string)

  try{
    const result = axios.post("/api/video-upload",
      formData
    
    )
    console.log(result)
  }catch(error){
    console.log(error, "Error during sending file request")
  }finally{
    setIsUploading(false)
  }

}

  return (
    <div>
       <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Upload Video</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input outline-black/70 outline input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="textarea outline outline-black/70 textarea-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Video File</span>
              </label>
              <input
                type="file"
                accept="video/*"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="file-input  file-input-bordered w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isUploading as boolean} 
            >
              {isUploading ? "Uploading..." : "Upload Video"}
            </button>
          </form>
        </div>
    </div>
  )
}

export default Page
