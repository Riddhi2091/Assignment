import React from 'react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
    },
  },
};

const labels = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 1000, max: 1000000})),
      borderColor: "#2FCA72",
      backgroundColor: "#2FCA72",
    },
  ],
};

export default function Chart() {
  return (
    <div>
      <Line options={options} data={data}/>
    </div>
  );
}
