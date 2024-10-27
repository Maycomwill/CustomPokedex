import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { useEffect, useState } from 'react';
import colors from 'tailwindcss/colors';

export const description = 'A radial chart with stacked sections';

const chartConfig = {
  male: {
    label: 'Male',
    color: '#16C172',
  },
  female: {
    label: 'Female',
    color: '#c21f7a',
  },
} satisfies ChartConfig;

interface ICustomChart {
  female: number;
  male: number;
}

interface ChartDataProps {
  male: number;
  female: number;
}

export function GenderChart({ female, male }: ICustomChart) {
  const [chartData, setChartData] = useState<ChartDataProps[]>([]);
  useEffect(() => {
    setChartData([{ male, female }]);
  }, [female, male]);
  if (male === 0 && female === 0) {
    return (
      <div className="flex w-full flex-1 items-center justify-center">
        <p>Gênero desconhecido</p>
      </div>
    );
  }
  return (
    <Card className="flex flex-col border-none bg-transparent text-gray-100">
      <CardHeader className="items-center pb-0">
        <CardTitle>Gender rate</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[250px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          style={{ fill: colors.gray[50] }}
                          className="text-2xl font-bold"
                        >
                          {male > female ? male : male === female ? 50 : female}
                          %
                        </tspan>
                        <tspan
                          style={{ fill: colors.gray[200] }}
                          x={viewBox.cx}
                          y={
                            male === female
                              ? (viewBox.cy || 0) + 12
                              : (viewBox.cy || 0) + 4
                          }
                          className="text-gray-100"
                        >
                          {male > female
                            ? 'Male'
                            : male === female
                              ? 'Chances iguais de encontro'
                              : 'Female'}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="female"
              fill="var(--color-female)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="male"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-male)"
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
