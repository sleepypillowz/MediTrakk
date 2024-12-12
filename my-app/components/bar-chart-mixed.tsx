"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { browser: "chronic", infected: 275, fill: "var(--color-chronic)" },
  { browser: "infection", infected: 200, fill: "var(--color-infection)" },
  { browser: "general", infected: 187, fill: "var(--color-general)" },
  { browser: "cancer", infected: 173, fill: "var(--color-cancer)" },
  { browser: "other", infected: 90, fill: "var(--color-other)" },
]

const chartConfig = {
  chronic: {
    label: "chronic",
    color: "hsl(var(--chart-1))",
  },
  infection: {
    label: "virus",
    color: "hsl(var(--chart-2))",
  },
  general: {
    label: "general",
    color: "hsl(var(--chart-3))",
  },
  cancer: {
    label: "cancer",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function AppBarChartMixed() {
  return (
    <Card className="my-8 w-96">
      <CardHeader>
        <CardTitle>Common Diseases</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="browser"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="infected" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="infected" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total infected for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
