import React from 'react'
import LineChart from '@/components/LineChart';
import { SectionCards } from '@/components/SectionCard';
import VideoComponent from '@/components/RecentVideo';
import QuickActions from '@/components/QuickActions';
const page = () => {
  return (
    <main className='dashboard flex flex-col gap-4'>
        <div className="top-head flex flex-col gap-2">
            <h1 className='text-3xl'>Dashboard</h1>
            <p className='text-sm'>Welcome Back ! See what is happening around your channel</p>
        </div>
        <hr />
        <div className="channel-analytics flex justify-center items-center">
           <SectionCards/>
        </div>
        <div className="middle-card charts ">
        <div className="chart-card">
            <LineChart/>
            </div>
        </div>
        <div className="bottom-dashboard">
            <div className='grid grid-cols-2 place-content-center'>
                    <div className='video-card'><VideoComponent/></div>
                    <div className='quick-actions'>
                        <QuickActions/>
                    </div>
            </div>
        </div>
      
    </main>
  )
}

export default page
