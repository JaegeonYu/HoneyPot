export interface DoughnutChartProps {
  chartTitle: string;
  datasetList: number[][] | string[][];
  legendList: { title: string; color: string }[];
  UNIQUE_ID_FOR_LEGEND: 'assembly-member-attendance-rate';
}

export interface PieChartProps {
  chartTitle: string;
  datasetList: number[] | string[];
  legendList: { title: string; color: string }[];
  legendDisplay: boolean;
  UNIQUE_ID_FOR_LEGEND:
    | 'party-parliamentary-seat'
    | 'bill-list-current-situation'
    | 'assembly-member-bill-current-situation'
    | 'assembly-member-promise-current-situation';
}
