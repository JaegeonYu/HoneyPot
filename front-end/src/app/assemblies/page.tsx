'use client';

import React, { useCallback, useEffect, useState } from 'react';
import * as S from './page.css';
import * as T from '@/types';
import * as API from '@/_apis/assembly';
import { useIntersectionObserver } from '@/_customhooks';
import * as Comp from '@/components';
import Link from 'next/link';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface Assembly {
  assemblyId: number;
  assemblyImgUrl: string;
  hgName: string;
  monaCd: string;
  origName: string;
  polyName: string;
}

export default function AssembliesPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const handleQueryString = useCallback(
    ({ sido, siGunGu, dong }: T.HandleQueryStringArgs) => {
      const params = new URLSearchParams(searchParams.toString());

      params.set('sido', String(sido));
      params.set('sigungu', String(siGunGu));
      params.set('dong', String(dong));

      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams],
  );

  const [totalCount, setTotalCount] = useState<null | number>(null);
  const queryKey = [
    {
      assemblies: `member-list`,
      areaCode: `${Number(searchParams.get('sido'))}-${Number(searchParams.get('sigungu'))}-${Number(
        searchParams.get('dong'),
      )}`,
      poly: Number(searchParams.get('poly')),
      work: searchParams.get('word') || '',
    },
  ];

  const {
    data: assembliesResponse,
    isFetched: assembliesFetched,
    fetchNextPage: fetchNextAssemblies,
  } = useSuspenseInfiniteQuery({
    queryKey: queryKey,
    queryFn: ({ pageParam }) =>
      API.getAssemblies({
        sido: Number(searchParams.get('sido')),
        sigungu: Number(searchParams.get('sigungu')),
        dong: Number(searchParams.get('dong')),
        poly: Number(searchParams.get('poly')),
        word: searchParams.get('word') || '',
        page: pageParam,
        limit: 8,
      })
        .then(res => {
          console.log(`res :`, res.status);
          return res;
        })
        .catch(err => {
          err.response.data.status === 400 && handleQueryString({ sido: 0, siGunGu: 0, dong: 0 });
        }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      console.log(`lastPage :`, lastPageParam);
      if (lastPage?.status === 204 && lastPageParam === 0) return null;
      else if (totalCount !== null && lastPageParam * 8 > totalCount) return null;
      return lastPageParam + 1;
    },
  });

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
      <h2 className={S.totalCountText}>
        총 <span className={S.totalNumber}>{totalCount}</span>명
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
      <div ref={targetElement} />
      {/* <button></button> */}
    </section>
  );
}
