'use client'

import React from 'react'
import { Card, CardContent, CardTitle } from './ui/card'
import Link from 'next/link'
import { VideoIcon, ImageIcon, SettingsIcon, BotIcon } from 'lucide-react'

const QuickActions = () => {
  const actions = [
    {
      href: "/video-upload",
      tag: "Upload Video",
      icon: <VideoIcon className="h-5 w-5 text-blue-500" />
    },
    {
      href: "/social-share",
      tag: "Create Thumbnails",
      icon: <ImageIcon className="h-5 w-5 text-purple-500" />
    },
    {
      href: "/settings",
      tag: "Settings",
      icon: <SettingsIcon className="h-5 w-5 text-gray-600" />
    },
    {
      href: "/ai",
      tag: "AI Support",
      icon: <BotIcon className="h-5 w-5 text-green-500" />
    }
  ]

  return (
    <main className="px-6 py-4">
      <Card className="rounded-2xl shadow-md">
        <CardTitle className="text-xl p-4">Quick Actions</CardTitle>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {actions.map((action, key) => (
              <Link key={key} href={action.href}>
                <div className="flex items-center gap-4 p-4 border rounded-xl hover:bg-muted/40 transition-colors cursor-pointer">
                  <div>{action.icon}</div>
                  <div className="text-sm font-medium">{action.tag}</div>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </main>
  )
}

export default QuickActions
