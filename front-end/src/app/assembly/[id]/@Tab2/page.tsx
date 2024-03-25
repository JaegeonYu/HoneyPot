'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as API from '@/_apis/assembly';
import * as S from './page.css';
import * as T from '@/types';
import * as Comp from '@/components';
import { PALETTE } from '@/_constants';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';

export default function AssemblyTab2({ params }: T.AssemblyTab2Props) {
  const target = useRef<HTMLHeadingElement>(null);
  const [totalCount, setTotalCount] = useState<number | null>(null);
  const [pageParam, setPageParam] = useState(0);
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);
  const [chartData, setChartData] = useState([0, 0, 0, 0, 0]);

  const { data: infoResponse, isFetched: infoFetched } = useSuspenseQuery({
    queryKey: [{ assembly: `info-request-${params.id}` }],
    queryFn: () => API.getAssemblyInfo({ assemblyId: params.id }),
    retry: false,
  });

  const { data: billResponse } = useQuery({
    queryKey: [{ assembly: `detail-${params.id}`, page: pageParam, selectedCategoryId: selectedCategoryId }],
    queryFn: () =>
      API.getAssemblyBill({ assemblyId: params.id, cmit: selectedCategoryId, page: pageParam, take: 10 }).then(
        res => res.data,
      ),
  });

  useEffect(() => {
    if (billResponse) {
      setTotalCount(billResponse.searchCount);
      setChartData(prev => {
        if (billResponse.billStatResponse) {
          const { alternativeIncorporated, approved, disposedOrWithdrawn, inProgress, rejected } =
            billResponse.billStatResponse;
          return [approved, inProgress, alternativeIncorporated, disposedOrWithdrawn, rejected];
        }
        return prev;
      });
    } else {
      setTotalCount(0);
    }
  }, [billResponse]);

  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategoryId(categoryId);
    setPageParam(0);
  };

  const handlePageChange = (newPage: number) => {
    setPageParam(newPage);
    if (target.current) target.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className={S.wrapper}>
        <h2 className={S.titleWrapper} ref={target}>
          <span className={S.title}>법안</span>
          <span className={S.totalContWrapper}>
            총 <span className={S.number}>{totalCount || 0}</span>개
          </span>
        </h2>
        <Comp.CategoryList selectedIdx={selectedCategoryId} onCategoryClick={handleCategoryClick} />
        <section className={S.billListWithChartWrapper}>
          <Comp.Poster posterwidth="280px" posterheight="268px">
            <div className={S.chartWrapper}>
              <Comp.PieChart
                chartTitle="전체 법안 추진 현황"
                legendList={['가결', '진행중', '대안바영', '철회 또는 페기', '부결'].map((title: string, i) => {
                  return {
                    title: title,
                    color: PALETTE.party[infoResponse.data.polyName][100 - i * 20],
                  };
                })}
                legendDisplay={true}
                datasetList={chartData}
                UNIQUE_ID_FOR_LEGEND="assembly-member-bill-current-situation"
              />
            </div>
          </Comp.Poster>
          <div className={S.billswrapper}>
            {billResponse?.billResponse?.map((res: T.BillProps, i: number) => (
              <Comp.Bill key={res.billId} {...res} />
            ))}
          </div>
        </section>
      </section>
      <Comp.Pagination currentPage={pageParam} totalItems={totalCount || 0} onPageChange={handlePageChange} />
    </>
  );
}
