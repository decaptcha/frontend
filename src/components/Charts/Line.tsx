import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      labels:{
        color: "#CBD5E0",
      }
    },
  },
  scales: {
    y: {
      ticks: { color: "#CBD5E0", beginAtZero: true },
    },
    x: {
      ticks: { color: "#CBD5E0", beginAtZero: true },
    },
  },
};

export function LineChart({ data }: { data: any }) {
  return <Line data={data} options={options} />;
}
