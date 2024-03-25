import React from 'react';
import * as S from './PieChart.css';
import * as T from '@/types';
import { Chart as ChartJS, Legend, Tooltip, Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { PALETTE } from '@/_constants';

ChartJS.register(Legend, Tooltip, Title);

/**
 * @param chartTitle
 * 이 차트가 어떤 것을 보여주는지 상단에 표출될 타이틀
 *
 * @param legendList
 * 범례에 표출될 이름과 색깔을 명시함
 * [type: { title: string, color: string }[]]
 *
 * 예시는 아래와 같음.
 *
 * [
 *  { title: '완료', color: PALETTE.party[DUMMY.polyName][100] },
 *  { title: '추진중', color: PALETTE.party[DUMMY.polyName][80] },
 *  { title: '보류', color: PALETTE.party[DUMMY.polyName][80] },
 *  { title: '기타', color: PALETTE.party[DUMMY.polyName][80] },
 *  { title: '폐기', color: PALETTE.party[DUMMY.polyName][80] },
 * ]
 *
 * @param datasetList
 * 해당 차트에 보여질 데이터 세트의 리스트
 *
 * 예시는 아래와 같음
 *
 * [30, 20, 80, 12, 2]
 *
 * @param UNIQUE_ID_FOR_LEGEND
 * 커스텀 범례의 ID를 설정함. 꼭 UNIQUE 해야 함. 자세한 예시는 아래와 같음.
 *
 * [type:
 * 정당 상세 조회 - 의석수 | 'party-parliamentary-seat'
 *
 * 의안 리스트 조회 - 추진 현황 | 'bill-list-current-situation'
 *
 * 의원 상세 조회 - 의안 추친 현황 | 'assembly-member-bill-current-situation'
 *
 * 의원 상세 조회 - 공약 추진 현황 | 'assembly-member-promise-current-situation']
 *
 * (ex. 'assembly-member-bill-current-situation')
 *
 * @param legendDisplay
 * 범례를 보여줄지 말 지의 여부를 설정
 * [type: boolean]
 *
 * @description
 * 차트의 크기는 width: 100%로 설정이 되어 있어서 한 번 감싸서 사용해줘야 한다.
 * 또한 높이도 width의 크기를 따라간다. 즉, 크기는 width x width
 */

// UNIQUE_ID_FOR_LEGEND:

export default function PieChart({
  chartTitle,
  legendList,
  datasetList,
  legendDisplay,
  UNIQUE_ID_FOR_LEGEND,
}: T.PieChartProps) {
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
        listElement.onclick = () => {
          const { type } = chart.config;
          if (type === 'pie' || type === 'doughnut') {
            chart.toggleDataVisibility(item.index);
          } else {
            chart.setDatasetVisibility(item.datasetIndex, !chart.isDatasetVisible(item.datasetIndex));
          }
          chart.update();
        };

        const colorBox = document.createElement('span');
        colorBox.className = S.colorBox;
        colorBox.style.backgroundColor = legendList[i].color;

        const textContainer = document.createElement('p');
        textContainer.className = S.legendTitle;

        const text = document.createTextNode(item.text);
        textContainer.appendChild(text);
        textContainer.style.textDecoration = item.hidden ? 'line-through' : '';

        listElement.appendChild(colorBox);
        listElement.appendChild(textContainer);
        ul.appendChild(listElement);
      });
    },
  };

  const options = {
    plugins: {
      aspectRatio: 1,
      responsive: true,
      legend: { display: false },
      htmlLegend: { containerID: UNIQUE_ID_FOR_LEGEND },
      tooltip: {
        callbacks: {
          label(context: any) {
            let dataList = context.dataset.data;
            return `${dataList[context.dataIndex]}개`;
          },
        },
      },
    },
  };
  return (
    <div className={S.chartWrapper}>
      <p className={S.chartTitle}>{chartTitle}</p>
      <Pie
        options={options}
        plugins={[htmlLegendPlugin]}
        data={{
          labels: legendList.map(li => li.title),
          datasets: [
            {
              data: datasetList,
              backgroundColor: legendList.map(li => li.color),
            },
          ],
        }}
      />
      {legendDisplay && <div id={UNIQUE_ID_FOR_LEGEND}></div>}
    </div>
  );
}
