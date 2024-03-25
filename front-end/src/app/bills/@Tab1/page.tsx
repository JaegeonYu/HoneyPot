'use client';

import React, { useState, useEffect, Suspense, useRef } from 'react';
import * as Comp from '@/components';
import * as S from './page.css';
import * as T from '@/types';
import * as API from '@/_apis/bill';

import { CATEGORY_LIST } from '@/_constants';
import { PALETTE } from '@/_constants';
import { Category } from '@/components';
import { useSuspenseQuery } from '@tanstack/react-query';
import Pagination from '@/_components/Pagination/pagination';
import BillLoading from './loading';
// import { fontName } from '@/_components/Bill/Bill.css';

export default function BillTab1() {
  const [isSelectedIdx, setIsSelectedIdx] = useState(0);
  const [mounted, setMounted] = useState<boolean>(false);
  const [page, setPage] = useState(0); // 페이지 상태 추가
  const [limit, setLimit] = useState(10); // 한 페이지에 보일 아이템 개수 상태 추가
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);
  const [scrollPosition, setScrollPosition] = useState<number>(); // 스크롤 위치 상태 추가

  const scrollToRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    // 스크롤 위치 변경 시 특정 위치로 이동
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [page]);

  console.log(page, 'page');

  const { data: billResponse, isFetched: billFetched } = useSuspenseQuery({
    queryKey: [{ bill: `info-request-bill-list` }, { page, limit, selectedCategoryId }], // 쿼리 키에 page와 limit 추가
    queryFn: () => API.getBillInfo({ cmit: selectedCategoryId, page, limit, word: '' }), // API 호출 시 동적으로 page와 limit 전달
    retry: false,
  });
  ///////////////////////////////
  const handleIsSelectedIdx = (idx: number) => {
    setIsSelectedIdx(idx);
  };
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
  };
  ///////////////////////////////////////////////////
  console.log(billResponse.data, 'INFO');

  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategoryId(categoryId);
    console.log(selectedCategoryId, '========================');
  };

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
              <p className={S.fontTitle}>가장 많이 발의된 분야</p>
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
              {billResponse.data.committeeResponse.map((res: any, i: number) => (
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
                    categoryId={Number(res.cmitId)}
                    dynamicColorMode={false}
                    iconWidth="24px"
                    iconHeight="28px"
                    fontSize="12px"
                  />
                </div>
              ))}
            </div>

            <div className={S.textWrapper}>
              <p className={S.fontTitle}>분야 가장 많이 발의한 의원 </p>
            </div>
            <div className={S.textWrapper}>
              <p className={S.fontContent}>{billResponse.data.mostCmitAssemblyResponseList[0].hgName}</p>
              <p className={S.fontContent}>{billResponse.data.mostCmitAssemblyResponseList[1].hgName}</p>
              <p className={S.fontContent}>{billResponse.data.mostCmitAssemblyResponseList[2].hgName}</p>
            </div>
          </Comp.Poster>
        </div>
        <div className={S.headWrapper} ref={scrollToRef}>
          <p className={S.fontHead}>발의한 국회운영 의안</p>
          <p className={S.fontSub}>{billResponse.data.billStatResponse.totalCount}개의 검색결과</p>
        </div>
        <div style={{ paddingTop: 4, backgroundColor: `${PALETTE.service.HOVER_BACKGROUND}` }}>
          <Comp.CategoryList onCategoryClick={handleCategoryClick} />
        </div>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px', padding: 16 }}>
          {billResponse.data.billResponse.map((res: T.BillProps, index: number) => (
            <Comp.Bill key={index} {...res} />
          ))}
        </div>

        <Pagination
          currentPage={page}
          onPageChange={handlePageChange}
          // limit={limit}
          // onLimitChange={handleLimitChange}
          totalItems={billResponse.data.billStatResponse.totalCount}
        ></Pagination>
      </>
    )
  );
}

// <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px', padding: 16 }}>
// {/* 로딩 중이면 스켈레톤을 보여줌 */}
// {billFetched
//   ? billResponse.data.billResponse.map((res: T.BillProps, index: number) => (
//       <Comp.Bill key={index} {...res} />
//     ))
//   : Array.from({ length: 10 }, (_, index) => <BillLoading width="100%" height="30" key={index} />)}
// </div>
