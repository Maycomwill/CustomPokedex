import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as RechartsRadarChart,
} from 'recharts';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { StatsChartDataPros } from '@/interfaces/pokemonInterfaces';

interface RadarChartProps {
  data: StatsChartDataPros[];
}

const chartConfig = {
  desktop: {
    label: 'Points',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export function RadarChart({ data }: RadarChartProps) {
  return (
    <Card className="w-full rounded-none border-none bg-transparent">
      <CardHeader className="items-center pb-4">
        <CardTitle className="text-gray-100">Pokemon Stats</CardTitle>
      </CardHeader>
      <CardContent className="px-0 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <RechartsRadarChart data={data}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent className="capitalize" />}
            />
            <PolarRadiusAxis
              domain={[0, 255]}
              tickCount={4}
              tick={false}
              axisLine={false}
            />
            <PolarAngleAxis className="capitalize" dataKey="name" />
            <PolarGrid />
            <Radar
              dataKey="value"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
            />
          </RechartsRadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
