'use client';

import React, { useState } from 'react';
import * as S from './page.css';
import * as T from '@/types';
import * as API from '@/_apis/assembly';
import * as Comp from '@/components';
import { useSuspenseQuery } from '@tanstack/react-query';

export default function AssemblyTab1({ params }: T.AssemblyTab1Props) {
  const { data: infoResponse, isFetched: infoFetched } = useSuspenseQuery({
    queryKey: [{ assembly: `info-request-${params.id}` }],
    queryFn: () => API.getAssemblyInfo({ assemblyId: params.id }),
    retry: false,
  });

  const { data: pledgeResponse, isFetched: pledgeFetched } = useSuspenseQuery({
    queryKey: [{ assembly: `pledge-list-request-${params.id}` }],
    queryFn: () => API.getPledgeList({ assemblyId: params.id }),
    retry: false,
  });

  console.log(`pledgeResponse :`, pledgeResponse.data);
  return (
    <section className={S.wrapper}>
      <h2 className={S.titleWrapper}>
        <span className={S.title}>공약</span>
        <span className={S.totalContWrapper}>
          총 <span className={S.number}>{pledgeResponse?.data.length}</span>개
        </span>
      </h2>
      <ul className={S.pledgeWrapper}>
        {pledgeResponse.data.map((el: T.PledgeProps, i: number) => (
          <Comp.Pledge key={`pledge-${el.id}`} {...el} polyName={infoResponse.data.polyName} />
        ))}
      </ul>
      {/* <Comp.Pagination currentPage={1} totalItems={pledgeResponse?.data.length} onPageChange={handlePaginationClick} /> */}
    </section>
  );
}
