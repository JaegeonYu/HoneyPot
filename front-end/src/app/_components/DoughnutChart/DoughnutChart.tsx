import React from 'react';
import * as S from './DoughnutChart.css';
import * as T from '@/types';
import { Chart as ChartJS, Legend, Title, CategoryScale, LinearScale, Tooltip, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { PALETTE } from '@/_constants';

ChartJS.register(Legend, Tooltip, Title, CategoryScale, LinearScale, ArcElement);

/**
 * @param chartTitle
 * 이 차트가 어떤 것을 보여주는지 상단에 표출될 타이틀
 *
 * @param legendList
 * 범례에 표출될 이름과 색깔을 명시함
 * [type: { title: string, color: string }[]]
 *
 * 예시는 아래와 같음
 *
 * [{ title: '본회의', color: PALETTE.party.PEOPLE_POWER_PARTY.MAIN },{ title: '상임위', color: PALETTE.party.PEOPLE_POWER_PARTY.SUB }]
 *
 * @param datasetList
 * 해당 차트에 보여질 데이터 세트의 리스트
 *
 * 예시는 아래와 같음
 *
 * [[30, 70],[20, 80]]
 *
 * @returns
 */

export default function DoughnutChart({ chartTitle, legendList, datasetList }: T.DoughnutChartProps) {
  const getOrCreateLegendList = (chart: any, id: any) => {
    const legendContainer = document.getElementById(id);
    let listContainer = legendContainer?.querySelector('ul');

    if (!listContainer) {
      listContainer = document.createElement('ul');
      listContainer.className = S.customLegendUlContainer;
      legendContainer?.appendChild(listContainer);
    }
    return listContainer;
  };

  const htmlLegendPlugin = {
    id: 'htmlLegend',
    afterUpdate(chart: any, args: any, options: any) {
      const ul = getOrCreateLegendList(chart, options.containerID);

      while (ul.firstChild) {
        ul.firstChild.remove();
      }

      const items = chart.options.plugins.legend.labels.generateLabels(chart);
      items.forEach((item: any, i: number) => {
        const listElement = document.createElement('li');
        listElement.className = S.customLegendLiItem;

        const colorBox = document.createElement('span');
        colorBox.className = S.colorBox;
        colorBox.style.backgroundColor = legendList[i].color;

        const textContainer = document.createElement('p');
        textContainer.className = S.legendTitle;

        const text = document.createTextNode(item.text);
        textContainer.appendChild(text);

        listElement.appendChild(colorBox);
        listElement.appendChild(textContainer);
        ul.appendChild(listElement);
      });
    },
  };

  const option = {
    aspectRatio: 1,
    responsive: true,
    cutout: '80%',
    spacing: 0,
    plugins: {
      legend: { position: 'bottom' as 'bottom', borderRadius: 12, display: false },
      htmlLegend: { containerID: 'custom-legend' },
      title: { display: true, text: chartTitle },
      tooltip: {
        callbacks: {
          label(context: any) {
            let dataList = context.dataset.data;
            return `${context.dataIndex === 0 ? '결석' : '출석'}: ${dataList[context.dataIndex]}`;
          },
          title(context: any) {
            return legendList[context[0].datasetIndex].title;
          },
        },
      },
    },
  };

  return (
    <div className={S.chartWrapper}>
      <Doughnut
        options={option}
        plugins={[htmlLegendPlugin]}
        data={{
          labels: legendList.map(li => li.title),
          datasets: datasetList.map((data, i) => ({
            data: data,
            backgroundColor: [PALETTE.service.STROKE_OR_BLUR, legendList[i].color],
          })),
        }}
      ></Doughnut>
      <div id="custom-legend"></div>
    </div>
  );
}
