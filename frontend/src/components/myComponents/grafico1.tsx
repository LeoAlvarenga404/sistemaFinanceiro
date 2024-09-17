"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

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
import { useEffect, useState } from "react"

export const description = "A stacked area chart"

const chartData = [
  { month: "Janeiro", income: 186.00, outcome: 80.00 },
  { month: "Fevereiro", income: 305.00, outcome: 200.00 },
  { month: "Março", income: 237.00, outcome: 120.00 },
  { month: "Abril", income: 73.00, outcome: 190.00 },
  { month: "Maio", income: 209.00, outcome: 130.00 },
  { month: "Junho", income: 214.50, outcome: 140.00 },
]

const chartConfig = {
  income: {
    label: "Income",
    color: "hsl(var(--chart-2))",
  },
  outcome: {
    label: "Outcome",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function Grafico() {
  const [ totalIncome, setTotalIncome ] = useState<number>(0)

  function calculaTotalIncome() {
    const total = chartData.reduce((acc, item) => acc + item.income, 0);
    setTotalIncome(total)
  }

  useEffect(() => {
    calculaTotalIncome();
  }, [])

  return (
    <Card className="w-[400px] h-full border-zinc-800">
      <CardHeader>
        <CardTitle>Gráfico de Gerenciamento de finança</CardTitle>
        <CardDescription>
          Suas entradas e saídas
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="outcome"
              type="basis"
              fill="var(--color-outcome)"
              fillOpacity={0.4}
              stroke="var(--color-outcome)"
              stackId="a"
            />
              <Area
                dataKey="income"
                type="basis"
                fill="var(--color-income)"
                fillOpacity={0.4}
                stroke="var(--color-income)"
                stackId="a"
              />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Total Income: ${totalIncome} <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              JAN - JUN 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
