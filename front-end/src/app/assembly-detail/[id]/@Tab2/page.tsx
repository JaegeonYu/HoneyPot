'use client';

import React from 'react';
import * as API from '@/_apis/assembly';
import * as S from './page.css';
import * as T from '@/types';
import * as Comp from '@/components';
import { CATEGORY_LIST, PALETTE } from '@/_constants';
import { useSuspenseInfiniteQuery, useSuspenseQuery } from '@tanstack/react-query';

export default function AssemblyDetailTab2({ params }: T.AssemblyDetailTab2Props) {
  const { data: infoResponse, isFetched: infoFetched } = useSuspenseQuery({
    queryKey: [{ assemblyDetail: `info-request-${params.id}` }],
    queryFn: () => API.getAssemblyInfo({ assemblyId: params.id }),
    retry: false,
  });
  const {
    data,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
    ...result
  } = useSuspenseInfiniteQuery({
    queryKey: [{ assemblyDetail: `detail-${params.id}` }],
    queryFn: ({ pageParam }) => API.getAssemblyBill({ page: pageParam, assemblyId: params.id, take: 4 }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      console.log(`GET NEXT :`, lastPage);
      return null;
    },
    getPreviousPageParam: (firstPage, allPages, firstPageParam, allPageParams) => {
      console.log(`GET PREV :`, firstPage);
      return null;
    },
  });

  const legendList = console.log(`data.pages[0].data :`, data.pages[0].data);
  console.log(`data.pageParams :`, data?.pageParams);
  console.log(`data.pages :`, data?.pages);

  return (
    <>
      <Comp.CategoryList />
      <section className={S.billListWithChartWrapper}>
        {/* {data?.pages[0].data.map((res, i) => (
      <Comp.Bill key={res.billId} partycolor={PALETTE.party[]}
      partyname={}
      represent={}
      committee={}
      billtitle={}
      progressbar={}
      panelsectiondata={} ></Comp.Bill>
    ))} */}
        <Comp.Poster posterwidth="280px" posterheight="268px">
          <div className={S.chartWrapper}>
            <Comp.PieChart
              chartTitle="전체 의안 추진 현황"
              legendList={['가결', '부결', '철회 또는 페기', '진행중', '대안반영'].map((title: string, i = 1) => ({
                title: title,
                color: PALETTE.party[infoResponse.data.polyName][(i + 1) * 20],
              }))}
              legendDisplay={true}
              datasetList={[12, 24, 24, 100, 70]}
              UNIQUE_ID_FOR_LEGEND="assembly-member-bill-current-situation"
            />
          </div>
        </Comp.Poster>
      </section>
    </>
  );
}

// {
//   "approved": 0,//'가결',
//   "rejected": 0,//'부결',
//   "disposedOrWithdrawn": 0,//'철회or페기',
//   "inProgress": 0,//'진행중',
//   "alternativeIncorporated": 0,//'대안반영',
//   "totalCount": 0,//'전체 갯수',
// }
