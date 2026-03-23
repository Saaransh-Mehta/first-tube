import { TrendingDown, TrendingUp } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards({ metrics }: { metrics: any }) {
  const { totalVideos = 0, totalComments = 0, totalUsers = 0 } = metrics || {};
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <Card className="cursor-pointer hover:shadow-lg transition-all border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0a0a0a]">
          <CardHeader>
            <CardDescription className="dark:text-neutral-400">Total Videos</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl text-neutral-900 dark:text-neutral-100">
              {totalVideos}
            </CardTitle>
            <Badge variant="outline" className="dark:border-neutral-700">
              <TrendingUp className="w-3" />
              Live
            </Badge>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium text-neutral-700 dark:text-neutral-300">
               Hosted globally <TrendingUp className="size-4" />
            </div>
            <div className="text-muted-foreground dark:text-neutral-500">
              All active video files
            </div>
          </CardFooter>
        </Card>

        {/* Card 2 */}
        <Card className="cursor-pointer hover:shadow-lg transition-all border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0a0a0a]">
          <CardHeader>
            <CardDescription className="dark:text-neutral-400">Total Comments</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl text-neutral-900 dark:text-neutral-100">
              {totalComments}
            </CardTitle>
            <Badge variant="outline" className="dark:border-neutral-700">
              <TrendingUp className="w-3" />
              Engagement
            </Badge>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium text-neutral-700 dark:text-neutral-300">
              Community interaction <TrendingUp className="size-4" />
            </div>
            <div className="text-muted-foreground dark:text-neutral-500">
              Across all videos
            </div>
          </CardFooter>
        </Card>

        {/* Card 3 */}
        <Card className="cursor-pointer hover:shadow-lg transition-all border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0a0a0a]">
          <CardHeader>
            <CardDescription className="dark:text-neutral-400">Platform Users</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl text-neutral-900 dark:text-neutral-100">
              Total scale
            </CardTitle>
            <Badge variant="outline" className="dark:border-neutral-700">
              <TrendingUp className="w-3" />
            </Badge>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium text-neutral-700 dark:text-neutral-300">
              Platform Growth <TrendingUp className="size-4" />
            </div>
            <div className="text-muted-foreground dark:text-neutral-500">Growing user base</div>
          </CardFooter>
        </Card>

        {/* Card 4 */}
        <Card className="cursor-pointer hover:shadow-lg transition-all border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0a0a0a]">
          <CardHeader>
            <CardDescription className="dark:text-neutral-400">System Status</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl text-neutral-900 dark:text-neutral-100">
               Active
            </CardTitle>
            <Badge variant="outline" className="dark:border-neutral-700 text-green-600 dark:text-green-400">
              <TrendingUp className="w-3" />
              Healthy
            </Badge>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium text-neutral-700 dark:text-neutral-300">
              Steady performance <TrendingUp className="size-4" />
            </div>
            <div className="text-muted-foreground dark:text-neutral-500">All systems operational</div>
          </CardFooter>
        </Card>
      </div>
    </main>
   
  )
}
