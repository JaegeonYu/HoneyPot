import React from 'react';
import * as S from './Charts.css';
import * as T from '@/types';
import * as Comp from '@/components';
import { PALETTE } from '@/_constants';

export default function Charts({ polyName }: T.AssemblyDetailChartsProps) {
  return (
    <article className={S.chartsWrapper}>
      <h3 className={S.titleText}>활동 현황</h3>
      <div className={S.chartsContainer}>
        <Comp.Poster posterwidth="360px" posterheight="360px">
          <div className={S.chartContainer}>
            <Comp.PieChart
              chartTitle="공약 추진 현황"
              legendDisplay={true}
              legendList={[
                { title: '완료', color: PALETTE.party[polyName][100] },
                { title: '추진중', color: PALETTE.party[polyName][80] },
                { title: '보류', color: PALETTE.party[polyName][60] },
                { title: '기타', color: PALETTE.party[polyName][40] },
                { title: '폐기', color: PALETTE.party[polyName][20] },
              ]}
              datasetList={[30, 20, 80, 12, 2]}
              UNIQUE_ID_FOR_LEGEND="assembly-member-promise-current-situation"
            ></Comp.PieChart>
          </div>
        </Comp.Poster>
        <Comp.Poster posterwidth="360px" posterheight="360px">
          <div className={S.chartContainer}>
            <Comp.DoughnutChart
              legendList={[
                { title: '본회의', color: PALETTE.party[polyName][100] },
                { title: '상임위', color: PALETTE.party[polyName][80] },
              ]}
              datasetList={[
                [30, 70],
                [20, 80],
              ]}
              chartTitle="출석률"
              UNIQUE_ID_FOR_LEGEND="assembly-member-attendance-rate"
            ></Comp.DoughnutChart>
          </div>
        </Comp.Poster>
      </div>
    </article>
  );
}
