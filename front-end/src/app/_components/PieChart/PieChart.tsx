import React from 'react';
import { Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { vars } from '@/globalTheme.css';

ChartJS.register(Legend, Tooltip);

export default function PieChart() {
  const data = {
    labels: ['이행', '진행중', '폐기'],
    datasets: [
      {
        data: [10, 20, 40],
        backgroundColor: [
          vars.colors.party.DEMOCRATIC_PARTY.LIGHT,
          vars.colors.party.DEMOCRATIC_PARTY.SUB,
          vars.colors.party.DEMOCRATIC_PARTY.MAIN,
        ],
      },
    ],
  };
  return <Pie data={data}></Pie>;
}
