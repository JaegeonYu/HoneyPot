'use client';

import React, { useRef, useState } from 'react';
import * as S from './page.css';
import * as T from '@/types';
import * as API from '@/_apis/assembly';
import * as Comp from '@/components';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';

export default function AssemblyTab1({ params }: T.AssemblyTab1Props) {
  const target = useRef<HTMLHeadingElement>(null);
  const [pageParam, setPageParam] = useState(0);
  const { data: infoResponse, isFetched: infoFetched } = useSuspenseQuery({
    queryKey: [{ assembly: `info-request-${params.id}` }],
    queryFn: () => API.getAssemblyInfo({ assemblyId: params.id }),
    retry: false,
  });

  const { data: pledgeResponse, isFetched: pledgeFetched } = useQuery({
    queryKey: [{ assembly: `pledge-list-request-${params.id}`, page: pageParam }],
    queryFn: () =>
      API.getPledgeList({ assemblyId: params.id, page: pageParam, take: 10 }).then(res => {
        if (res.status === 204) return { totalCount: 0, pledgeDetailResponse: [] };
        return res.data;
      }),
    retry: false,
  });

  const handlePaginationClick = (newPage: number) => {
    setPageParam(newPage);
    if (target.current) target.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={S.wrapper}>
      <h2 className={S.titleWrapper} ref={target}>
        <p className={S.title}>
          공약
          <span style={{ paddingLeft: '8px' }} className={S.infomationGivenDate}>
            정보 출처 :
          </span>
          <a target="_black" href="http://manifesto.or.kr/?page_id=3614" className={S.infomationGivenLink}>
            한국매니페스토
          </a>
          <span className={S.infomationGivenDate}>(24년 4월 기준)</span>
        </p>
        <span className={S.totalContWrapper}>
          총 <span className={S.number}>{pledgeResponse?.totalCount}</span>개
        </span>
      </h2>
      <ul className={S.pledgeWrapper}>
        {pledgeResponse?.totalCount !== 0 ? (
          pledgeResponse?.pledgeDetailResponse.map((el: T.PledgeProps, i: number) => (
            <Comp.Pledge key={`pledge-${el.id}`} {...el} polyName={infoResponse.data.polyName} />
          ))
        ) : (
          <div className={S.emptyDataWrapper}>
            <Comp.EmptyData alt="공약 없음" width={200} height={134} maxWidth={200} maxHeight={134} />
          </div>
        )}
      </ul>
      <Comp.Pagination
        currentPage={pageParam}
        totalItems={pledgeResponse?.totalCount}
        onPageChange={handlePaginationClick}
      />
    </section>
  );
}
