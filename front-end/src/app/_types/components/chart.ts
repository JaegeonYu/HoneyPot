export interface DoughnutChartProps {
  chartTitle: string;
  datasetList: number[][] | string[][];
  legendList: { title: string; color: string }[];
}
