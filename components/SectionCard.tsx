import { TrendingDown, TrendingUp } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards() {
  return (
    <main>
         <div className="grid grid-cols-4 gap-4">
      <Card className="cursor-pointer hover:shadow-xl transition-all">
        <CardHeader>
          <CardDescription>Total Revenue</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            $1,250.00
          </CardTitle>
        
            <Badge variant="outline">
              <TrendingUp />
              +12.5%
            </Badge>
          
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up this month <TrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>
<Card className="cursor-pointer hover:shadow-xl transition-all">
          <CardHeader>
          <CardDescription>New Subscribers</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            1,234
          </CardTitle>
        
            <Badge variant="outline">
              <TrendingDown />
              -20%
            </Badge>
         
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Down 20% this period <TrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">
            COntent needs to be updated
          </div>
        </CardFooter>
      </Card>
<Card className="cursor-pointer hover:shadow-xl transition-all">
          <CardHeader>
          <CardDescription>Active Subscribers</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            45,678
          </CardTitle>
            <Badge variant="outline">
              <TrendingUp />
              +12.5%
            </Badge>
          
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Strong subscribers retention <TrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Engagement exceed targets</div>
        </CardFooter>
      </Card>
<Card className="cursor-pointer hover:shadow-xl transition-all">
          <CardHeader>
          <CardDescription>Watch Time</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            4.5k
          </CardTitle>
          
            <Badge variant="outline">
              <TrendingUp />
              +4.5%
            </Badge>
          
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Steady performance increase <TrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Meets growth projections</div>
        </CardFooter>
      </Card>
    </div>
    </main>
   
  )
}
