'use client';

import React, { useState } from 'react';
import * as Comp from '@/components';
import * as S from './style.css';
// import { fontName } from '@/_components/Bill/Bill.css';

export default function SeongqTest() {
  const [isSelectedIdx, setIsSelectedIdx] = useState(0);
  const handleIsSelectedIdx = (idx: number) => {
    setIsSelectedIdx(idx);
  };
  const data = {
    party: '더불어민주당',
    attendance: 88,
    average: 76,
    top: ['김성제', '강건', '유잼건'],
    topattendance: [112, 90, 88],
    bottom: ['김가빈', '권준구', '조성규'],
    bottomattendance: [30, 20, 10],
    mostlaw: ['김성제', '강건', '유잼건'],
  };

  return (
    <>
      <Comp.Tab
        selectedIdx={isSelectedIdx}
        selectedIdxHandler={handleIsSelectedIdx}
        tabTitleList={['전체 의안', '주목을 받았던 의안']}
      />
      <div className={S.postWrapper}>
        <Comp.Poster>This is Chart</Comp.Poster>
        {/* 정당페이지에서는 여기 주석 해제하고 사용 */}

        {/* <Comp.Poster>
          <div className={S.textWrapper}>
            <p className={S.fontTitle}>{data.party} 평균 출석률</p>
            <p className={S.fontContent}>{data.attendance} %</p>
          </div>
          <div className={S.textWrapper}>
            <p className={S.fontTitle}>출석률 상위 (전체 평균 {data.average} 건) </p>
            <p className={S.fontContent}>
              {data.top[0]} ({data.topattendance[0]} 건)
            </p>
            <p className={S.fontContent}>
              {data.top[1]} ({data.topattendance[1]} 건)
            </p>
            <p className={S.fontContent}>
              {data.top[2]} ({data.topattendance[2]} 건)
            </p>
          </div>
          <div className={S.textWrapper}>
            <p className={S.fontTitle}>출석률 하위 (전체 평균 {data.average} 건) </p>
            <p className={S.fontContent}>
              {data.bottom[1]} ({data.bottomattendance[0]} 건)
            </p>
            <p className={S.fontContent}>
              {data.bottom[0]} ({data.bottomattendance[1]} 건)
            </p>
            <p className={S.fontContent}>
              {data.bottom[2]} ({data.bottomattendance[2]} 건)
            </p>
          </div>
        </Comp.Poster> */}

        <Comp.Poster>
          <div className={S.textWrapper}>
            <p className={S.fontTitle}>가장 많이 발의한 분야</p>
            <p className={S.fontContent}>여기에 이미지 컴포넌트</p>
          </div>
          <div className={S.textWrapper}>
            <p className={S.fontTitle}>가장 많이 발의한 의원 </p>
            <p className={S.fontContent}>{data.mostlaw[0]}</p>
            <p className={S.fontContent}>{data.mostlaw[1]}</p>
            <p className={S.fontContent}>{data.mostlaw[2]}</p>
          </div>
        </Comp.Poster>
      </div>
      <div className={S.headWrapper}>
        <p className={S.fontHead}>발의한 국회운영 의안</p>
      </div>
      <Comp.Bill></Comp.Bill>
      <Comp.Bill></Comp.Bill>
      <Comp.Bill></Comp.Bill>
      <Comp.Bill></Comp.Bill>
    </>
  );
}
