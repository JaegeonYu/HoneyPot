'use client';

import React, { useState } from 'react';
import * as S from './page.css';
import * as API from '@/_apis/assembly';
import * as Comp from '@/components';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

export default function AssemblyListTab1() {
  const searchParams = useSearchParams();

  const queryKey = [
    {
      assemblyList: `member-list`,
      areaCode: `${Number(searchParams.get('sido'))}-${Number(searchParams.get('sigungu'))}-${Number(
        searchParams.get('dong'),
      )}`,
      work: searchParams.get('word') || '',
      poly: 0,
      page: 0,
    },
  ];
  const { data: response } = useQuery({
    queryKey: queryKey,
    queryFn: () =>
      API.getAssemblyList({
        sido: Number(searchParams.get('sido')),
        sigungu: Number(searchParams.get('sigungu')),
        dong: Number(searchParams.get('dong')),
        poly: 0,
        word: searchParams.get('word') || '',
        page: 0,
        limit: 10,
      }),
  });

  console.log(`response :`, response);

  return (
    <>
      <Comp.GridWrapper>
        {response?.data.assemblyCardResponseList.map((res: any, i: any) => (
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
