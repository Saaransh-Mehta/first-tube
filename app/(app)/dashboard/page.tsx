"use client"
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LineChart from '@/components/LineChart';
import { SectionCards } from '@/components/SectionCard';
import VideoComponent from '@/components/RecentVideo';
import QuickActions from '@/components/QuickActions';

export default function Dashboard() {
  const [data, setData] = useState({
    totalVideos: 0,
    totalComments: 0,
    recentVideos: [],
    chartData: { labels: [], data: [] }
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/api/dashboard');
        setData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div className="flex h-[80vh] items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>;
  }

  return (
    <main className='dashboard flex flex-col gap-6 p-2 md:p-6 w-full max-w-7xl mx-auto'>
        <div className="top-head flex flex-col gap-1 mb-2">
            <h1 className='text-3xl font-bold'>Dashboard</h1>
            <p className='text-sm text-neutral-500 dark:text-neutral-400'>Welcome Back! See what is happening around your channel</p>
        </div>
        
        <div className="channel-analytics w-full">
           <SectionCards metrics={{ totalVideos: data.totalVideos, totalComments: data.totalComments }} />
        </div>
        
        <div className="middle-card charts w-full">
          <div className="chart-card bg-white dark:bg-[#050505] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 shadow-sm">
            <LineChart chartData={data.chartData} />
          </div>
        </div>
        
        <div className="bottom-dashboard pb-12 w-full">
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <div className='video-card w-full'><VideoComponent videos={data.recentVideos} /></div>
                <div className='quick-actions w-full'>
                    <QuickActions/>
                </div>
            </div>
        </div>
    </main>
  )
}
