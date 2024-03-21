'use client';

import React, { useState } from 'react';
import * as S from './page.css';
import * as API from '@/_apis/assembly';
import * as Comp from '@/components';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

export default function AssemblyListTab1() {
  const [areaState, setAreaState] = useState({
    sido: 1,
    sigungu: null,
    dong: null,
  });

  const { data: response } = useQuery({
    queryKey: [{ assemblyList: `member-${areaState.sido}` }],
    queryFn: () =>
      API.getAssemblyList({ ...areaState, page: 0, limit: 10, poly: null }).then(res => {
        // console.log(`res.data :`, res.data);
        return res;
      }),
  });

  return (
    <>
      <Comp.GridWrapper>
        {response?.data.map((res: any, i: any) => (
          <Link className={S.styledLink} key={res.monaCd} href={`/assembly-detail/${res.assemblyId}`}>
            <Comp.Card
              key={res.monaCd}
              ratio="4 / 6"
              badge={{ isBadgeNeed: true, text: res.polyName }}
              imgUrl={res.assemblyImgUrl}
            >
              <article className={S.cardArticle}>
                <h3 className={S.mainText}>
                  {res.hgName}
                  <span className={S.subText}>의원</span>
                </h3>
                <p className={S.areaName}>{res.origName}</p>
              </article>
            </Comp.Card>
          </Link>
        ))}
      </Comp.GridWrapper>
    </>
  );
}
