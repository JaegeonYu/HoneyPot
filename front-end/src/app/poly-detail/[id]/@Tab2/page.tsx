'use client';

import React, { useState } from 'react';
import * as S from './page.css';
import * as T from '@/types';
import * as API from '@/_apis';
import * as Comp from '@/components';
import { useSuspenseQuery, useSuspenseInfiniteQuery } from '@tanstack/react-query';

export default function PolyDetailTab2({ params }: T.PartyDetailTab2Props) {
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  console.log('hello');

  const { data: infoResponse, isFetched: infoFetched } = useSuspenseQuery({
    queryKey: [{ polyDetail: `most-categories-request-${params.id}` }],
    queryFn: () => API.poly.getPolyDetailInfo({ polyId: params.id, cmit: 0, page, limit }),
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
    queryKey: [{ assembly: `detail-${params.id}` }],
    queryFn: ({ pageParam }) =>
      API.assembly.getAssemblyBill({ assemblyId: params.id, cmit: 0, page: pageParam, take: 10 }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      // console.log(`GET NEXT :`, lastPage);
      return null;
    },
    getPreviousPageParam: (firstPage, allPages, firstPageParam, allPageParams) => {
      // console.log(`GET PREV :`, firstPage);
      return null;
    },
  });

  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <div>
      <Comp.CategoryList onCategoryClick={handleCategoryClick} />
      <section className={S.billListWithChartWrapper}>
        <div>
          {data?.pages[0].data.billResponse?.map((res: T.BillProps, i: number) => (
            <Comp.Bill key={res.billId} {...res} />
          ))}
        </div>
      </section>
    </div>
  );
}
