import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        color: "#CBD5E0",
      },
    },
  },
  scales: {
    y: {
      ticks: { color: "#CBD5E0", beginAtZero: true },
      beginAtZero: true,
      max: 100,
    },
    x: {
      ticks: { color: "#CBD5E0", beginAtZero: true },
      max: 100,
    },
  },
};

export const data = {
  datasets: [
    {
      label: "A dataset",
      data: Array.from({ length: 100 }, () => ({
        x: faker.datatype.number({ min: -100, max: 100 }),
        y: faker.datatype.number({ min: -100, max: 100 }),
      })),
      backgroundColor: "rgba(213, 63, 140, 1)",
    },
  ],
};

export function ScatterApp({ data }: { data: any }) {
  return <Scatter data={data} options={options} />;
}
