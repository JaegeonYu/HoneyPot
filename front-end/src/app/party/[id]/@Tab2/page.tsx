'use client';

import React, { useState, useRef, useEffect } from 'react';
import * as S from './page.css';
import * as T from '@/types';
import * as API from '@/_apis';
import * as Comp from '@/components';
import { useQuery } from '@tanstack/react-query';

export default function PolyDetailTab2({ params }: T.PartyDetailTab2Props) {
  const target = useRef<HTMLHeadingElement>(null); // 페이지 네이션 클릭 시 view port의 위치를 옮길 target
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);
  const [pageParam, setPageParam] = useState(0); // 페이지 네이션 현재 페이지 상태
  const [totalCount, setTotalCount] = useState<number | null>(null); // API 받으면 searchCount(?)를 담을 상태

  //의안 API
  const { data: billResponse } = useQuery({
    queryKey: [{ party: `detail-${params.id}`, page: pageParam, selectedCategoryId: selectedCategoryId }],
    queryFn: () =>
      API.poly
        .getPolyBill({ polyId: params.id, cmit: selectedCategoryId, page: pageParam, take: 10 })
        .then(res => res.data),
  });

  //의안 API 상태가 변하면 의안 리스트 총 갯수와 차트 데이터를 response에 맞게 변경
  useEffect(() => {
    if (billResponse) {
      setTotalCount(billResponse.searchCount);
    } else {
      setTotalCount(0);
    }
  }, [billResponse]);

  //카테고리 리스트의 하나의 item에 들어갈 onClick 함수
  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategoryId(categoryId);
    setPageParam(0);
  };

  //페이지 네이션 버튼 리스트의 하나의 item에 들어갈 onClick 함수
  const handlePaginationClick = (newPage: number) => {
    setPageParam(newPage);
    if (target.current) target.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={target}>
      <Comp.CategoryList selectedIdx={selectedCategoryId} onCategoryClick={handleCategoryClick} />
      <section className={S.billListWithChartWrapper}>
        {billResponse?.billResponse?.map((res: T.BillProps, i: number) => (
          <Comp.Bill key={res.billId} {...res} />
        ))}
        <Comp.Pagination currentPage={pageParam} totalItems={totalCount || 0} onPageChange={handlePaginationClick} />
      </section>
    </div>
  );
}
