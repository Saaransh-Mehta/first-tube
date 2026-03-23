'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  TooltipItem
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const generateChartData = (days: number) => {
  const labels: string[] = [];
  const data: number[] = [];

  for (let i = 0; i < days; i++) {
    const date = new Date();
    date.setDate(date.getDate() - (days - i));
    labels.push(
      date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      })
    );
    data.push(Math.floor(Math.random() * 100 + 30)); // fake visitors
  }

  return { labels, data };
};

export default function VisitorsChart({ chartData: dynamicData }: any) {
  const [range, setRange] = useState<7 | 30 | 90>(7);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Fallback if prop is missing during load
  const labels = dynamicData?.labels && dynamicData.labels.length > 0 ? dynamicData.labels : ['loading...'];
  const data = dynamicData?.data && dynamicData.data.length > 0 ? dynamicData.data : [0];

  interface ChartDataSet {
    label: string;
    data: number[];
    fill: boolean;
    tension: number;
    borderColor: string;
    backgroundColor: (ctx: { chart: { ctx: CanvasRenderingContext2D } }) => CanvasGradient;
    pointRadius: number;
  }

  interface ChartData {
    labels: string[];
    datasets: ChartDataSet[];
  }

  const chartData: ChartData = {
    labels,
    datasets: [
      {
        label: 'Uploads',
        data,
        fill: true,
        tension: 0.4,
        borderColor: isDark ? 'rgba(96, 165, 250, 0.9)' : 'rgba(0, 0, 0, 0.7)',
        backgroundColor: (ctx: { chart: { ctx: CanvasRenderingContext2D } }) => {
          const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 300);
          if (isDark) {
            gradient.addColorStop(0, 'rgba(59, 130, 246, 0.3)');
            gradient.addColorStop(1, 'rgba(59, 130, 246, 0.02)');
          } else {
            gradient.addColorStop(0, 'rgba(30, 64, 175, 0.3)');
            gradient.addColorStop(1, 'rgba(219, 234, 254, 0.05)');
          }
          return gradient;
        },
        pointRadius: 0,
      },
    ],
  };

const option = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      enabled: true,
      mode: 'index' as const,
      intersect: false,
      backgroundColor: '#000',
      titleColor: '#fff',
      bodyColor: '#fff',
      padding: 10,
      cornerRadius: 6,
      titleFont: { weight: 'bold' as const, size: 14 },
      bodyFont: { size: 13 },
      callbacks: {
        label: function (context: TooltipItem<'line'>) {
  return `Visitors: ${context.parsed.y}`;
},
      },
    },
  },
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: {
        maxTicksLimit: 10,
        color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.6)',
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        color: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)',
      },
      ticks: {
        color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.6)',
      },
    },
  },
};


  return (
    <Card className="w-full max-w-6xl mx-auto shadow-none border-0 bg-transparent">
      <CardHeader className="flex flex-row items-center justify-between px-0 pt-0">
        <CardTitle className="dark:text-white">Recent Upload Activity</CardTitle>
        <div className="space-x-2">
          <Button
            variant={range === 90 ? 'default' : 'outline'}
            onClick={() => setRange(90)}
          >
            Last 3 months
          </Button>
          <Button
            variant={range === 30 ? 'default' : 'outline'}
            onClick={() => setRange(30)}
          >
            Last 30 days
          </Button>
          <Button
            variant={range === 7 ? 'default' : 'outline'}
            onClick={() => setRange(7)}
          >
            Last 7 days
          </Button>
        </div>
      </CardHeader>
      <CardContent className="h-[300px] w-full px-0">
        <Line data={chartData} options={option} />
      </CardContent>
    </Card>
  );
}
