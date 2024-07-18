import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface ChartData {
  labels: string[];
  temperatures: number[];
}

interface ChartProps {
  data: ChartData;
}

const ChartComponent: React.FC<ChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart>();

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Destroy existing chart instance if it exists
      }
      chartInstance.current = new Chart(chartRef.current, {
        type: 'line',
        data: {
          labels: data.labels,
          datasets: [
            {
              label: 'Temperature (°C)',
              data: data.temperatures,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            tooltip: {
              callbacks: {
                label: (context) => {
                  if (context.raw) {
                    const value = context.raw as number; // Cast context.raw to number if possible
                    return `Temperature: ${value.toFixed(1)} °C`;
                  }
                  return '';
                },
              },
            },
          },
        },
      });
    }
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;
