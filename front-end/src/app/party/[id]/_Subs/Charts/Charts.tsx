import React from 'react';
import * as S from './Charts.css';
import * as T from '@/types';
import * as Comp from '@/components';
import { useQuery } from '@tanstack/react-query';
import * as API from '@/_apis';
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
    queryFn: () => API.poly.getPolyDetailInfo({ polyId: params.id, cmit: 1, page: 0, limit: 10 }),
    retry: false,
  });

  return (
    <article className={S.content}>
      {infoFetched && infoResponse ? (
        <Comp.Poster posterheight="30%" posterwidth="30%">
          <div className={S.container} style={assignInlineVars({ [S.containerWidth]: '70%' })}>
            <Comp.PieChart
              chartTitle={<span style={{ fontSize: 18, fontWeight: 'bold' }}>의석수</span>}
              legendDisplay={false}
              legendList={[
                {
                  title: `${infoResponse.data.polyName} 의석 수`,
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
            <div className={S.chartContent}>
              {infoResponse.data.polySeatsResponse.seats}명 / {infoResponse.data.polySeatsResponse.totalSeats}명
            </div>
          </div>
        </Comp.Poster>
      ) : (
        <div style={{ width: '120px', height: '120px', backgroundColor: PALETTE.service.SUB_BLACK }} />
      )}
      {infoFetched && infoResponse ? (
        <Comp.Poster posterheight="30%" posterwidth="30%">
          <div className={S.container} style={assignInlineVars({ [S.containerWidth]: '100%' })}>
            <div className={S.attendanceRate}>
              <p className={S.attendanceRateTitle}>{infoResponse.data.polyName} 평균 출석률</p>
              <p className={S.memberName}>{infoResponse.data.polyAttendanceResponse.averageAttendance} %</p>
            </div>
            <div className={S.attendanceRate}>
              <p className={S.attendanceRateTitle}>출석률 상위</p>
              <p className={S.memberName}>
                {infoResponse.data.polyAttendanceResponse.topAttendanceRate[0].hgName}{' '}
                <span className={S.subText}>
                  ({infoResponse.data.polyAttendanceResponse.topAttendanceRate[0].attendance} %)
                </span>
              </p>
              <p className={S.memberName}>
                {infoResponse.data.polyAttendanceResponse.topAttendanceRate[1].hgName}{' '}
                <span className={S.subText}>
                  ({infoResponse.data.polyAttendanceResponse.topAttendanceRate[1].attendance} %)
                </span>
              </p>
              <p className={S.memberName}>
                {infoResponse.data.polyAttendanceResponse.topAttendanceRate[2].hgName}{' '}
                <span className={S.subText}>
                  ({infoResponse.data.polyAttendanceResponse.topAttendanceRate[2].attendance} %)
                </span>
              </p>
            </div>
            <div className={S.attendanceRate}>
              <p className={S.attendanceRateTitle}>출석률 하위</p>
              <p className={S.memberName}>
                {infoResponse.data.polyAttendanceResponse.bottomAttendanceRate[0].hgName}{' '}
                <span className={S.subText}>
                  ({infoResponse.data.polyAttendanceResponse.bottomAttendanceRate[0].attendance} %)
                </span>
              </p>
              <p className={S.memberName}>
                {infoResponse.data.polyAttendanceResponse.bottomAttendanceRate[1].hgName}{' '}
                <span className={S.subText}>
                  ({infoResponse.data.polyAttendanceResponse.bottomAttendanceRate[1].attendance} %)
                </span>
              </p>
              <p className={S.memberName}>
                {infoResponse.data.polyAttendanceResponse.bottomAttendanceRate[2].hgName}{' '}
                <span className={S.subText}>
                  ({infoResponse.data.polyAttendanceResponse.bottomAttendanceRate[2].attendance} %)
                </span>
              </p>
            </div>
          </div>
        </Comp.Poster>
      ) : (
        <div style={{ width: '120px', height: '120px', backgroundColor: PALETTE.service.SUB_BLACK }} />
      )}
      {mostCategoriesFetched && mostCategoriesResponse ? (
        <Comp.Poster posterheight="30%" posterwidth="30%">
          <div className={S.container} style={assignInlineVars({ [S.containerWidth]: '100%' })}>
            <div>
              <div className={S.attendanceRateTitle}>가장 많이 발의한 분야</div>
              <div className={S.mostCategoryContent}>
                {mostCategoriesResponse.data.committeeResponse.map((res: any, i: number) => (
                  <div key={`category-${i}`}>
                    <Comp.Category
                      iconWidth="24px"
                      iconHeight="28px"
                      dynamicColorMode={false}
                      fontSize="12px"
                      categoryId={Number(res.cmitId)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className={S.mostAssembly}>
              <div className={S.attendanceRateTitle}>가장 많이 발의한 의원</div>
              <p>{mostCategoriesResponse.data.mostCmitAssemblyResponseList[0].hgName}</p>
              <p>{mostCategoriesResponse.data.mostCmitAssemblyResponseList[1].hgName}</p>
              <p>{mostCategoriesResponse.data.mostCmitAssemblyResponseList[2].hgName}</p>
            </div>
          </div>
        </Comp.Poster>
      ) : (
        <div style={{ width: '120px', height: '120px', backgroundColor: PALETTE.service.SUB_BLACK }} />
      )}
    </article>
  );
}
