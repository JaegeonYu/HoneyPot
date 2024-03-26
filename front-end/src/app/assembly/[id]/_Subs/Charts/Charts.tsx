import React, { useEffect, useState } from 'react';
import * as API from '@/_apis/assembly';
import * as S from './Charts.css';
import * as T from '@/types';
import * as Comp from '@/components';
import { PALETTE } from '@/_constants';
import { useSuspenseQueries } from '@tanstack/react-query';

export default function Charts({ params }: T.AssemblyChartsProps) {
  const [browserWidth, setBrowserWidth] = useState(window.innerWidth);
  const [{ data: infoResponse, isFetched: infoFetched }, { data: pledgeRateResponse, isFetched: pledgeFetched }] =
    useSuspenseQueries({
      queries: [
        {
          queryKey: [{ assembly: `info-request-${params.id}` }],
          queryFn: () => API.getAssemblyInfo({ assemblyId: params.id }),
        },
        {
          queryKey: [{ assembly: `pledge-rate-request-${params.id}` }],
          queryFn: () => API.getPledgeRateInfo({ assemblyId: params.id }),
        },
      ],
    });

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener('resize', () => {
        setBrowserWidth(window.innerWidth);
      });
      return () => {
        window.removeEventListener('resize', () => {
          setBrowserWidth(window.innerWidth);
        });
      };
    }
  }, []);

  return (
    <>
      <article className={S.wrapper}>
        <h3 className={S.titleText}>활동 현황</h3>
        <div className={S.chartsContainer}>
          <Comp.Poster
            posterwidth={browserWidth > 940 ? '45%' : '80%'}
            posterheight={browserWidth > 940 ? '45%' : '80%'}
          >
            <div className={S.chartContainer}>
              <p className={S.totalCount}>총 {pledgeRateResponse.data.pledgeFulfillmentStatus.totalPledges}개</p>
              <Comp.PieChart
                chartTitle={'공약 추진 현황'}
                legendDisplay={true}
                legendList={[
                  { title: '완료', color: PALETTE.party[infoResponse.data.polyName][100] },
                  { title: '추진중', color: PALETTE.party[infoResponse.data.polyName][80] },
                  { title: '보류', color: PALETTE.party[infoResponse.data.polyName][60] },
                  { title: '기타', color: PALETTE.party[infoResponse.data.polyName][40] },
                  { title: '폐기', color: PALETTE.party[infoResponse.data.polyName][20] },
                ]}
                datasetList={[
                  pledgeRateResponse.data.pledgeFulfillmentStatus.completedPledges,
                  pledgeRateResponse.data.pledgeFulfillmentStatus.ongoingPledges,
                  pledgeRateResponse.data.pledgeFulfillmentStatus.pendingPledges,
                  pledgeRateResponse.data.pledgeFulfillmentStatus.otherPledges,
                  pledgeRateResponse.data.pledgeFulfillmentStatus.discardedPledges,
                ]}
                UNIQUE_ID_FOR_LEGEND="assembly-member-promise-current-situation"
              />
            </div>
          </Comp.Poster>
          <Comp.Poster
            posterwidth={browserWidth > 940 ? '45%' : '80%'}
            posterheight={browserWidth > 940 ? '45%' : '80%'}
          >
            <div className={S.chartContainer}>
              <Comp.Tooltip>
                <p>TOOLTIP TEST</p>
                <p>TOOLTIP TEST</p>
                <p>TOOLTIP TEST</p>
                <p>TOOLTIP TEST</p>
                <p>TOOLTIP TEST</p>
                <p>TOOLTIP TEST</p>
                <p>TOOLTIP TEST</p>
                <p>TOOLTIP TEST</p>
                <p>TOOLTIP TEST</p>
                <p>TOOLTIP TEST</p>
              </Comp.Tooltip>
              <Comp.DoughnutChart
                legendList={[
                  { title: '본회의', color: PALETTE.party[infoResponse.data.polyName][100] },
                  { title: '상임위', color: PALETTE.party[infoResponse.data.polyName][60] },
                ]}
                datasetList={[
                  [30, 70],
                  [20, 80],
                ]}
                chartTitle="출석률"
                UNIQUE_ID_FOR_LEGEND="assembly-member-attendance-rate"
              />
            </div>
          </Comp.Poster>
        </div>
      </article>
    </>
  );
}
