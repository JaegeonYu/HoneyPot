'use client';

import React from 'react';
import * as S from './page.css';
import * as T from '@/types';
import * as API from '@/_apis';
import * as Comp from '@/components';
import Link from 'next/link';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { useIntersectionObserver } from '@/_customhooks';

export default function PolyDetailTab1({ params }: T.PartyDetailTab1Props) {
  const {
    data: assembliesResponse,
    isFetched: assembliesFetched,
    fetchNextPage: fetchNextAssemblies,
  } = useSuspenseInfiniteQuery({
    queryKey: [
      {
        partyDetail: `member-list`,
        poly: Number(params.id),
      },
    ],
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
      return lastPageParam + 1;
    },
  });

  const targetElement = useIntersectionObserver(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (assembliesFetched) {
      fetchNextAssemblies();
    }
  });

  return (
    <section className={S.cardSection}>
      <Comp.GridWrapper>
        {assembliesFetched
          ? assembliesResponse.pages.map((page, pageIndex) => {
              return (
                page?.data.assemblyCardResponseList !== undefined &&
                page?.data.assemblyCardResponseList.map((res: T.Assembly, i: number) => (
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
      <div ref={targetElement} />
    </section>
  );
}
