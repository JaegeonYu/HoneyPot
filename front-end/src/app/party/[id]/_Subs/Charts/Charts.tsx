import React from 'react';
import * as S from './Charts.css';
import * as T from '@/types';
import * as Comp from '@/components';
import * as API from '@/_apis';
import { useQuery } from '@tanstack/react-query';
import { PALETTE } from '@/_constants';
import { assignInlineVars } from '@vanilla-extract/dynamic';

export default function Charts({ params }: T.PartyDetailChartsProps) {
  const { data: infoResponse, isFetched: infoFetched } = useQuery({
    queryKey: [{ polyDetail: `info-request-${params.id}` }],
    queryFn: () => API.poly.getPolyDetail({ polyId: params.id }),
    retry: false,
  });
  const { data: mostCategoriesResponse, isFetched: mostCategoriesFetched } = useQuery({
    queryKey: [{ polyDetail: `most-categories-request-${params.id}` }],
    queryFn: () => API.poly.getPolyDetailInfo({ polyId: params.id, cmit: 0, page: 0, limit: 10 }),
    retry: false,
  });

  return (
    <article className={S.wrapper}>
      {infoFetched && infoResponse ? (
        <div className={S.posterWrapper}>
          <Comp.Poster posterheight="100%" posterwidth="100%">
            <div className={S.container} style={assignInlineVars({ [S.containerWidth]: '80%' })}>
              <Comp.PieChart
                chartTitle={<span className={S.chartTitle}>의석수</span>}
                legendDisplay={false}
                legendList={[
                  {
                    title: `${infoResponse.data.polyName} 의석수`,
                    color: PALETTE.party[infoResponse.data.polyName][100],
                  },
                  { title: '그 외', color: PALETTE.service.STROKE_OR_BLUR },
                ]}
                datasetList={[
                  infoResponse.data.polySeatsResponse.seats,
                  infoResponse.data.polySeatsResponse.totalSeats - infoResponse.data.polySeatsResponse.seats,
                ]}
                UNIQUE_ID_FOR_LEGEND="party-parliamentary-seat"
              />
              <div className={S.legend}>
                {infoResponse.data.polySeatsResponse.seats}명 / {infoResponse.data.polySeatsResponse.totalSeats}명
              </div>
            </div>
          </Comp.Poster>
        </div>
      ) : (
        <div className={S.skeletonLoading} />
      )}
      {infoFetched && infoResponse ? (
        <div className={S.posterWrapper}>
          <Comp.Poster posterheight="100%" posterwidth="100%">
            <div className={S.container} style={assignInlineVars({ [S.containerWidth]: '100%' })}>
              <div className={S.attendanceRate}>
                <h3 className={S.attendanceRateTitle}>{infoResponse.data.polyName} 평균 출석률</h3>
                <p className={S.memberName}>{infoResponse.data.polyAttendanceResponse.averageAttendance} %</p>
              </div>
              <div className={S.attendanceRate}>
                <h3 className={S.attendanceRateTitle}>출석률 상위</h3>
                {infoResponse.data.polyAttendanceResponse.topAttendanceRate.map((res: T.PolyMember, i: number) => (
                  <p key={i} className={S.memberName}>
                    {res.hgName} <span className={S.subText}>({res.attendance} %)</span>
                  </p>
                ))}
              </div>
              <div className={S.attendanceRate}>
                <h3 className={S.attendanceRateTitle}>출석률 하위</h3>
                {infoResponse.data.polyAttendanceResponse.bottomAttendanceRate.map((res: T.PolyMember, i: number) => (
                  <p key={i} className={S.memberName}>
                    {res.hgName} <span className={S.subText}>({res.attendance} %)</span>
                  </p>
                ))}
              </div>
            </div>
          </Comp.Poster>
        </div>
      ) : (
        <div className={S.skeletonLoading} />
      )}
      {mostCategoriesFetched && mostCategoriesResponse ? (
        <div className={S.posterWrapper}>
          <Comp.Poster posterheight="100%" posterwidth="100%">
            <div className={S.container} style={assignInlineVars({ [S.containerWidth]: '100%' })}>
              <div className={S.mostWrapper}>
                <h3 className={S.attendanceRateTitle}>가장 많이 발의한 분야</h3>
                <div className={S.mostCategoryContent}>
                  {mostCategoriesResponse.data.committeeResponse.map(
                    (res: { [key: string]: string | number }, i: number) => (
                      <div key={`category-${i}`}>
                        <Comp.Category
                          iconWidth="24px"
                          iconHeight="28px"
                          dynamicColorMode={false}
                          fontSize="12px"
                          categoryId={Number(res.cmitId)}
                        />
                      </div>
                    ),
                  )}
                </div>
              </div>
              <div className={S.mostWrapper}>
                <h3 className={S.attendanceRateTitle}>가장 많이 발의한 의원</h3>
                <div>
                  {mostCategoriesResponse.data.mostCmitAssemblyResponseList.map(
                    (res: { [key: string]: string | number }, i: number) => (
                      <p key={i} className={S.memberName}>
                        {res.hgName}
                      </p>
                    ),
                  )}
                </div>
              </div>
            </div>
          </Comp.Poster>
        </div>
      ) : (
        <div className={S.skeletonLoading} />
      )}
    </article>
  );
}
