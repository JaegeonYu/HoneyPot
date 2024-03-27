'use client';

import React, { useEffect, useState } from 'react';
import * as S from './page.css';
import * as T from '@/types';
import * as API from '@/_apis';
import * as Comp from '@/components';
import Link from 'next/link';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useIntersectionObserver } from '@/_customhooks';

interface Assembly {
  assemblyId: number;
  assemblyImgUrl: string;
  hgName: string;
  monaCd: string;
  origName: string;
  polyName: string;
}

export default function PolyDetailTab1({ params }: T.PartyDetailTab1Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [totalCount, setTotalCount] = useState<null | number>(null);

  //무한스크롤
  const queryKey = [
    {
      partyDetail: `member-list`,
      poly: Number(params.id),
    },
  ];

  const {
    data: assembliesResponse,
    isFetched: assembliesFetched,
    fetchNextPage: fetchNextAssemblies,
  } = useSuspenseInfiniteQuery({
    queryKey: queryKey,
    queryFn: ({ pageParam }) =>
      API.assembly
        .getAssemblies({
          sido: 0,
          sigungu: 0,
          dong: 0,
          poly: Number(params.id),
          word: '',
          page: pageParam,
          limit: 8,
        })
        .then(res => res)
        .catch(err => {
          err.response.data.status === 400;
        }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      if (lastPage?.status === 204 && lastPageParam === 0) return null;
      else if (totalCount !== null && lastPageParam * 8 > totalCount) return null;
      return lastPageParam + 1;
    },
  });

  //바닥이 보였을 때 실행될 함수
  const targetElement = useIntersectionObserver(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (assembliesFetched) {
      fetchNextAssemblies();
    }
  });

  useEffect(() => {
    setTotalCount(assembliesResponse.pages[0]?.data.count || 0);
  }, [assembliesResponse.pages]);

  return (
    <section className={S.cardSection}>
      <h2 className={S.titleWrapper}>
        <span className={S.title}>oo당 국회의원</span>
        <span className={S.totalContWrapper}>
          총 <span className={S.number}>{totalCount || 0}</span>명
        </span>
      </h2>
      <Comp.GridWrapper>
        {assembliesFetched
          ? assembliesResponse.pages.map((page, pageIndex) => {
              return (
                page?.data.assemblyCardResponseList !== undefined &&
                page?.data.assemblyCardResponseList.map((res: Assembly, i: number) => (
                  <Link className={S.styledLink} key={res.monaCd} href={`/assembly/${res.assemblyId}`}>
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
                ))
              );
            })
          : Array.from({ length: 8 }).map((_, i) => <div className={S.skeletonCard} key={`skeleton-card-${i}`} />)}
      </Comp.GridWrapper>
      <div ref={targetElement} id="1" />
    </section>
  );
}
