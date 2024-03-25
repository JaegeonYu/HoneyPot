import React from 'react';
import * as S from './Charts.css';
import * as T from '@/types';
import * as Comp from '@/components';
import { useSuspenseQueries, useSuspenseQuery } from '@tanstack/react-query';
import * as API from '@/_apis';
import { PALETTE } from '@/_constants';

interface polyDetailData {
  polyId: number;
  polyName: string;
  logoUrl: string;
  seats: number;
  leader: string;
}

export default function Chart({ params }: T.PartyDetailChartsProps) {
  const { data: mostCategoriesResponse, isFetched: mostCategoriesFetched } = useSuspenseQuery({
    queryKey: [{ Assembly: `most-categories-request-${params.id}` }],
    queryFn: () => API.poly.getPolyDetailMostCategories({ polyId: params.id }),
    retry: false,
  });

  const [{ data: infoResponse, isFetched: infoFetched }] = useSuspenseQueries({
    queries: [
      {
        queryKey: [{ polyDetail: `info-request-${params.id}` }],
        queryFn: () => API.poly.getPolyDetail({ polyId: params.id }),
      },
    ],
  });

  return (
    <article className={S.chartsWrapper}>
      <div className={S.title}>이미지 자리</div>
      <div className={S.content}>
        <Comp.Poster posterheight="360px" posterwidth="360px">
          <div className={S.leftContainer}>
            <Comp.PieChart
              chartTitle="의원 수"
              legendDisplay={false}
              legendList={[
                { title: '참석', color: '#152484' },
                { title: '불참', color: PALETTE.party[infoResponse.data.polyName][20] },
              ]}
              datasetList={[30, 20]}
              UNIQUE_ID_FOR_LEGEND="party-parliamentary-seat"
            />
          </div>
        </Comp.Poster>
        <Comp.Poster posterheight="360px" posterwidth="360px">
          <div className={S.midContainer}>
            <p className={S.midTitle}>평균 출석률</p>
            <p className={S.midContent}>%</p>
          </div>
          <div className={S.midContainer}>
            <p className={S.midTitle}>출석률 상위 (전체 평균 ㅇㅇ 건)</p>
            <p className={S.midContent}>ㅇㅇ 건</p>
            <p className={S.midContent}>ㅇㅇ 건</p>
            <p className={S.midContent}>ㅇㅇ 건</p>
          </div>
          <div className={S.midContainer}>
            <p className={S.midTitle}>출석률 하위 (전체 평균 ㅇㅇ 건)</p>
            <p className={S.midContent}>ㅇㅇ 건</p>
            <p className={S.midContent}>ㅇㅇ 건</p>
            <p className={S.midContent}>ㅇㅇ 건</p>
          </div>
        </Comp.Poster>
        <Comp.Poster posterheight="360px" posterwidth="360px">
          <div className={S.rightContainer}>
            <p className={S.rightTitle}>가장 많이 발의한 분야</p>
            {mostCategoriesResponse.data.map((el: { cmitCd: string; cmitId: number; cmitName: string }, i: number) => (
              <Comp.Category
                key={el.cmitCd}
                iconWidth="48px"
                iconHeight="52px"
                dynamicColorMode={false}
                fontSize="14px"
                categoryId={el.cmitId}
              />
            ))}
          </div>
          <div className={S.rightContainer}>
            <p className={S.rightTitle}>가장 많이 발의한 의원</p>
            <p className={S.rightContent}>ㅇㅇㅇ</p>
            <p className={S.rightContent}>ㅇㅇㅇ</p>
            <p className={S.rightContent}>ㅇㅇㅇ</p>
          </div>
        </Comp.Poster>
      </div>
    </article>
  );
}
