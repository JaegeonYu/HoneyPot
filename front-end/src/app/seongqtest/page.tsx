'use client';

import React, { useState, useEffect, Suspense } from 'react';
import * as Comp from '@/components';
import * as S from './style.css';
import * as T from '@/types';
import * as API from '@/_apis/bill';

import { CATEGORY_LIST } from '@/_constants';
import { PALETTE } from '@/_constants';
import { Category } from '@/components';
import { useSuspenseQuery } from '@tanstack/react-query';
// import { fontName } from '@/_components/Bill/Bill.css';

export default function SeongqTest() {
  const [isSelectedIdx, setIsSelectedIdx] = useState(0);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { data: billResponse, isFetched: billFetched } = useSuspenseQuery({
    queryKey: [{ bill: `info-request-bill-list` }],
    queryFn: () => API.getBillInfo({ cmit: 0, page: 1, limit: 10, word: '' }),
    retry: false,
  });

  const handleIsSelectedIdx = (idx: number) => {
    setIsSelectedIdx(idx);
  };

  console.log(billResponse.data, 'INFO');

  const ddata = {
    party: '더불어민주당',
    attendance: 88,
    average: 76,
    top: ['김성제', '강건', '유잼건'],
    topattendance: [112, 90, 88],
    bottom: ['김가빈', '권준구', '조성규'],
    bottomattendance: [30, 20, 10],
    mostlaw: ['김성제', '강건', '유잼건'],
    mostcategory: [1, 3, 5],
  };

  return (
    mounted && (
      <>
        {/* <Comp.Tab
          tabTitleList={['전체 의안', '주목을 받았던 의안']}
          tabChildrenList={[<div>ffdfd</div>, <div>fdfdfd</div>, <div></div>]}
        >
          <Comp.SearchInput inputId="12" onChange={() => {}} value="" placeholder="hello world"></Comp.SearchInput>
        </Comp.Tab> */}

        <div className={S.postWrapper}>
          <Comp.Poster posterwidth="330px" posterheight="100%">
            <div style={{ width: '80%' }}>
              <Comp.PieChart
                chartTitle="의안 추진 현황"
                legendList={[
                  { title: '가결', color: PALETTE.service.MAIN_COLOR_100 },
                  { title: '진행중', color: PALETTE.service.MAIN_COLOR_80 },
                  { title: '대안반영', color: PALETTE.service.MAIN_COLOR_60 },
                  { title: '철회 및 폐기', color: PALETTE.service.MAIN_COLOR_40 },
                  { title: '부결', color: PALETTE.service.MAIN_COLOR_20 },
                ]}
                datasetList={[
                  billResponse.data.billStatResponse.approved,
                  billResponse.data.billStatResponse.inProgress,
                  billResponse.data.billStatResponse.disposedOrWithdrawn,
                  billResponse.data.billStatResponse.alternativeIncorporated,
                  billResponse.data.billStatResponse.rejected,
                ]}
                legendDisplay={true}
                UNIQUE_ID_FOR_LEGEND="bill-list-current-situation"
              ></Comp.PieChart>
            </div>
          </Comp.Poster>

          <Comp.Poster posterwidth="330px" posterheight="362px">
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
              {ddata.mostcategory.map((category, i) => (
                <div
                  key={`category-${i}`}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Category
                    categoryId={category}
                    dynamicColorMode={false}
                    iconWidth="24px"
                    iconHeight="28px"
                    fontSize="12px"
                  />
                </div>
              ))}
            </div>

            <div className={S.textWrapper}>
              <p className={S.fontTitle}>가장 많이 발의한 의원 </p>
            </div>
            <div className={S.textWrapper}>
              <p className={S.fontContent}>{ddata.mostlaw[0]}</p>
              <p className={S.fontContent}>{ddata.mostlaw[1]}</p>
              <p className={S.fontContent}>{ddata.mostlaw[2]}</p>
            </div>
          </Comp.Poster>
        </div>

        <div className={S.headWrapper}>
          <p className={S.fontHead}>발의한 국회운영 의안</p>
          <p className={S.fontSub}>{billResponse.data.billStatResponse.totalCount}개의 검색결과</p>
        </div>
        <div style={{ paddingTop: 4, backgroundColor: `${PALETTE.service.HOVER_BACKGROUND}` }}>
          <Comp.CategoryList />
        </div>
        {/* <Comp.Bill {...bill}></Comp.Bill> */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px', padding: 16 }}>
          {billResponse.data.billResponse.map((res: T.BillProps, index: number) => (
            // console.log(res, '======='),
            <Comp.Bill key={index} {...res} />
          ))}
        </div>

        {/* <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px', padding: 16 }}>
          <Comp.Bill {...billResponse.data.billResponse} />
        </div> */}
      </>
    )
  );
}
