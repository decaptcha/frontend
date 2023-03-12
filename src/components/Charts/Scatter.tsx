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


export const options = {
  scales: {
    y: {
      grid: {
        color: "#ffffff"
      },
      beginAtZero: true,
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
  return <Scatter data={data} />;
}
