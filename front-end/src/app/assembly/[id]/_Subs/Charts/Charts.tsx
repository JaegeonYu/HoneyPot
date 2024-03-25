import React from 'react';
import * as API from '@/_apis/assembly';
import * as S from './Charts.css';
import * as T from '@/types';
import * as Comp from '@/components';
import { PALETTE } from '@/_constants';
import { useSuspenseQueries } from '@tanstack/react-query';

export default function Charts({ params }: T.AssemblyChartsProps) {
  const [
    { data: infoResponse, isFetched: infoFetched },
    //  { data: pledgeResponse, isFetched: pledgeFetched }
  ] = useSuspenseQueries({
    queries: [
      {
        queryKey: [{ assembly: `info-request-${params.id}` }],
        queryFn: () => API.getAssemblyInfo({ assemblyId: params.id }),
      },
      // {
      //   queryKey: [{ assembly: `pledge-request-${params.id}` }],
      //   queryFn: () => API.getAssemblyPledge({ assemblyId: params.id }),
      // },
    ],
  });

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
                { title: '완료', color: PALETTE.party[infoResponse.data.polyName][100] },
                { title: '추진중', color: PALETTE.party[infoResponse.data.polyName][80] },
                { title: '보류', color: PALETTE.party[infoResponse.data.polyName][60] },
                { title: '기타', color: PALETTE.party[infoResponse.data.polyName][40] },
                { title: '폐기', color: PALETTE.party[infoResponse.data.polyName][20] },
              ]}
              datasetList={[30, 20, 80, 12, 2]}
              UNIQUE_ID_FOR_LEGEND="assembly-member-promise-current-situation"
            />
          </div>
        </Comp.Poster>
        <Comp.Poster posterwidth="360px" posterheight="360px">
          <div className={S.chartContainer}>
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
  );
}

const DUMMY_PLEDGE = [
  {
    assembly_id: '226',
    id: '5',
    completed_pledges: '1',
    discarded_pledges: '0',
    financial_pledges: '/',
    in_term_pledges: '/',
    legislative_pledges: '4 / 4',
    national_pledges: '/',
    new_projects: '16 / 16',
    ongoing_pledges: '21',
    ongoing_projects: '6 / 6',
    other_pledges: '0',
    out_term_pledges: '/',
    pending_pledges: '0',
    regional_pledges: '18 / 18',
    standing_committee: '과학기술정보방송통신위원회',
    total_executed_budget: '(현재 예산 집행 추산중) 억원',
    total_legislative_resolution_completed_pledges: '1',
    total_pledges: '22',
    total_required_budget: '(추정) 약 10조 원',
    total_required_legislative_pledges: '3',
    total_secured_budget: '(현재 예산 확보 추산중) 억원',
  },
  {
    assembly_id: '10',
    id: '1',
    completed_pledges: '38',
    discarded_pledges: '-',
    financial_pledges: '64/79',
    in_term_pledges: '55/79',
    legislative_pledges: '15/79',
    national_pledges: '9/79',
    new_projects: '49/79',
    ongoing_pledges: '41',
    ongoing_projects: '30/79',
    other_pledges: '-',
    out_term_pledges: '24/79',
    pending_pledges: '-',
    regional_pledges: '70/79',
    standing_committee: '기획재정위원회',
    total_executed_budget: '4,086억원',
    total_legislative_resolution_completed_pledges: '8',
    total_pledges: '79',
    total_required_budget: '14,839.4억원',
    total_required_legislative_pledges: '15',
    total_secured_budget: '4,623.5억원',
  },
  {
    assembly_id: '297',
    id: '20',
    completed_pledges: '9',
    discarded_pledges: '-',
    financial_pledges: '8/17',
    in_term_pledges: '10/15',
    legislative_pledges: '1/5',
    national_pledges: '3/7',
    new_projects: '7/15',
    ongoing_pledges: '15',
    ongoing_projects: '3/9',
    other_pledges: '-',
    out_term_pledges: '0/9',
    pending_pledges: '-',
    regional_pledges: '7/17',
    standing_committee: '외교통일위원회',
    total_executed_budget: '786 억원',
    total_legislative_resolution_completed_pledges: '1',
    total_pledges: '24',
    total_required_budget: '449 억원',
    total_required_legislative_pledges: '5',
    total_secured_budget: '1,480 억원',
  },
];
