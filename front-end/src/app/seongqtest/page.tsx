'use client';

import React, { useState, useEffect } from 'react';
import * as Comp from '@/components';
import * as S from './style.css';

import { CATEGORY_LIST } from '@/_constants';
import { PALETTE } from '@/_constants';
import { Category } from '@/components';
// import { fontName } from '@/_components/Bill/Bill.css';

export default function SeongqTest() {
  const [isSelectedIdx, setIsSelectedIdx] = useState(0);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const billdata = [
    {
      partycolor: 'red',
      partyname: '국민의힘',
      represent: '김태호',
      committee: 2,
      billtitle: '고향사랑 기부금에 관한 법률안',
      progressbar: ['TBD'],
      panelsectiondata: ['TBD'],
    },
    {
      partycolor: 'blue',
      partyname: '더불어민주당',
      represent: '유잼건',
      committee: 3,
      billtitle: 'SSAFY내 침대 설치ㅍ',
      progressbar: ['TBD'],
      panelsectiondata: ['TBD'],
    },
    {
      partycolor: 'blue',
      partyname: '더불어민주당',
      represent: '유잼건',
      committee: 1,
      billtitle: 'S 침대 설치',
      progressbar: ['TBD'],
      panelsectiondata: ['TBD'],
    },
    {
      partycolor: 'red',
      partyname: '국민의힘',
      represent: '김태호',
      committee: 15,
      billtitle: 'SSAFY내 식사메뉴 5가지로 증설하는 법률안안 입니다다라라라아',
      progressbar: ['TBD'],
      panelsectiondata: ['TBD'],
    },
  ];

  return (
    mounted && (
      <>
        <Comp.Tab
          selectedIdx={isSelectedIdx}
          selectedIdxHandler={handleIsSelectedIdx}
          tabTitleList={['전체 의안', '주목을 받았던 의안']}
        />
        <Comp.SearchInput inputId="12" onChange={() => {}} value="" placeholder="hello world"></Comp.SearchInput>
        <div className={S.postWrapper}>
          <Comp.Poster>
            <Comp.PieChart
              chartTitle="의안 추진 현황"
              legendList={[
                { title: '이행', color: PALETTE.party.PEOPLE_POWER_PARTY[100] },
                { title: '진행중', color: PALETTE.party.PEOPLE_POWER_PARTY[80] },
                { title: '폐기', color: PALETTE.party.PEOPLE_POWER_PARTY[60] },
              ]}
              datasetList={[30, 40, 70]}
              legendDisplay={false}
              UNIQUE_ID_FOR_LEGEND="bill-list-current-situation"
            ></Comp.PieChart>
          </Comp.Poster>
          {/* 정당페이지에서는 여기 주석 해제하고 사용 */}
          {/* 
        <Comp.Poster>
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
              <p className={S.fontContent}></p>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                padding: '0px 8px',
              }}
            >
              {billdata.map((category, i) => (
                <div key={`category-${i}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Category
                    categoryId={category.committee}
                    color={{ default: '#777777', hover: '#777777', focus: '#777777' }}
                    width="20px"
                    height="24px"
                  />
                  <p className={S.fontContent}>{CATEGORY_LIST[category.committee].name}</p>
                </div>
              ))}
            </div>

            <div className={S.textWrapper}>
              <p className={S.fontTitle}>가장 많이 발의한 의원 </p>
            </div>
            <div className={S.textWrapper}>
              <p className={S.fontContent}>{data.mostlaw[0]}</p>
              <p className={S.fontContent}>{data.mostlaw[1]}</p>
              <p className={S.fontContent}>{data.mostlaw[2]}</p>
            </div>
          </Comp.Poster>
        </div>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-evenly' }}>
          {CATEGORY_LIST.map((category, i) => (
            <div key={`category-list-${i}`}>
              <div>
                <Category
                  categoryId={i}
                  color={{ default: '#777777', hover: '#EEEEEE', focus: '#DDDDDD' }}
                  width="20px"
                  height="24px"
                />
              </div>
              <div>{category.name}</div>
            </div>
          ))}
        </div>
        <div className={S.headWrapper}>
          <p className={S.fontHead}>발의한 국회운영 의안</p>
          <p className={S.fontSub}>{billdata.length}개의 검색결과</p>
        </div>

        {/* <Comp.Bill {...bill}></Comp.Bill> */}
        {billdata.map((bills, index) => (
          <Comp.Bill key={index} {...bills} />
        ))}

        {/* <Comp.Bill></Comp.Bill>
      <Comp.Bill></Comp.Bill> */}
      </>
    )
  );
}
