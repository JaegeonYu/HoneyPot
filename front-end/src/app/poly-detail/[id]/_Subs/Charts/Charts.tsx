import React, { useState } from 'react';
import * as S from './Charts.css';
import * as T from '@/types';
import * as Comp from '@/components';
import { useSuspenseQuery } from '@tanstack/react-query';
import * as API from '@/_apis';
import { PALETTE } from '@/_constants';

export default function Charts({ params }: T.PartyDetailChartsProps) {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const { data: infoResponse, isFetched: infoFetched } = useSuspenseQuery({
    queryKey: [{ polyDetail: `info-request-${params.id}` }],
    queryFn: () => API.poly.getPolyDetail({ polyId: params.id }),
    retry: false,
  });
  const { data: mostCategoriesResponse, isFetched: mostCategoriesFetched } = useSuspenseQuery({
    queryKey: [{ polyDetail: `most-categories-request-${params.id}` }],
    queryFn: () => API.poly.getPolyDetailInfo({ polyId: params.id, cmit: 1, page, limit }),
    retry: false,
  });
  console.log(mostCategoriesResponse, '==');

  return (
    <article className={S.chartsWrapper}>
      <div className={S.title}>이미지 자리</div>
      <div className={S.content}>
        <Comp.Poster posterheight="360px" posterwidth="360px">
          <div className={S.leftContainer}>
            <Comp.PieChart
              chartTitle="의원 수"
              legendDisplay={true}
              legendList={[{ title: '참석', color: PALETTE.party[infoResponse.data.polyName][50] }]}
              datasetList={[70]}
              UNIQUE_ID_FOR_LEGEND="party-parliamentary-seat"
            />
          </div>
        </Comp.Poster>
        <Comp.Poster posterheight="360px" posterwidth="360px">
          <div className={S.midContainer}>
            <div className={S.attendanceRate}>
              <p className={S.attendanceRateTitle}>{infoResponse.data.polyName} 평균 출석률</p>
              <p className={S.attendanceRateContent}>88%</p>
            </div>
            <div className={S.attendanceRate}>
              <p className={S.attendanceRateTitle}>출석률 상위 (전체 평균 ㅇㅇ 건)</p>
              <p className={S.attendanceRateContent}>ㅇㅇ 건</p>
              <p className={S.attendanceRateContent}>ㅇㅇ 건</p>
              <p className={S.attendanceRateContent}>ㅇㅇ 건</p>
            </div>
            <div className={S.attendanceRate}>
              <p className={S.attendanceRateTitle}>출석률 하위 (전체 평균 ㅇㅇ 건)</p>
              <p className={S.attendanceRateContent}>ㅇㅇ 건</p>
              <p className={S.attendanceRateContent}>ㅇㅇ 건</p>
              <p className={S.attendanceRateContent}>ㅇㅇ 건</p>
            </div>
          </div>
        </Comp.Poster>
        <Comp.Poster posterheight="360px" posterwidth="360px">
          <div className={S.rightContainer}>
            <div className={S.mostCategory}>
              <div className={S.mostCategoryTitle}>가장 많이 발의한 분야</div>
              <div className={S.mostCategoryContent}>
                {mostCategoriesResponse.data.committeeResponse.map((res: any, i: number) => (
                  <Comp.Category
                    key={`category-${i}`}
                    iconWidth="24px"
                    iconHeight="28px"
                    dynamicColorMode={false}
                    fontSize="12px"
                    categoryId={Number(res.cmitId)}
                  />
                ))}
              </div>
            </div>
            <div className={S.mostAssembly}>
              <div className={S.mostAssemblyTitle}>가장 많이 발의한 의원</div>
              <div className={S.mostAssemblyContent}>
                {mostCategoriesResponse.data.mostCmitAssemblyResponseList[0].hgName}가나다
              </div>
              <div className={S.mostAssemblyContent}>
                {mostCategoriesResponse.data.mostCmitAssemblyResponseList[1].hgName}가나다
              </div>
              <div className={S.mostAssemblyContent}>
                {mostCategoriesResponse.data.mostCmitAssemblyResponseList[2].hgName}가나다
              </div>
            </div>
          </div>
        </Comp.Poster>
      </div>
    </article>
  );
}
