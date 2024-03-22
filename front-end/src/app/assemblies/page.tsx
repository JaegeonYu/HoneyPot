'use client';

import React, { Suspense, useCallback } from 'react';
import * as S from './page.css';
import * as T from '@/types';
import * as API from '@/_apis/assembly';
import * as Comp from '@/components';
import Link from 'next/link';
import { useSuspenseQuery } from '@tanstack/react-query';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { AxiosResponse } from 'axios';
import AssemblieslLoading from './loading';

interface Assembly {
  assemblyId: number;
  assemblyImgUrl: string;
  hgName: string;
  monaCd: string;
  origName: string;
  polyName: string;
}
interface AssembliesResponse {
  assemblyCardResponseList: Assembly[];
  count: number;
}

export default function AssembliesTab1() {
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

  const queryKey = [
    {
      assemblies: `member-list`,
      areaCode: `${Number(searchParams.get('sido'))}-${Number(searchParams.get('sigungu'))}-${Number(
        searchParams.get('dong'),
      )}`,
      poly: Number(searchParams.get('poly')),
      work: searchParams.get('word') || '',
      page: 0,
    },
  ];
  const { data: assembliesResponse, isFetched: assembliesFetched } = useSuspenseQuery({
    queryKey: queryKey,
    queryFn: () =>
      API.getAssemblies({
        sido: Number(searchParams.get('sido')),
        sigungu: Number(searchParams.get('sigungu')),
        dong: Number(searchParams.get('dong')),
        poly: Number(searchParams.get('poly')),
        word: searchParams.get('word') || '',
        page: 0,
        limit: 8,
      }).catch(err => {
        err.response.data.status === 400 && handleQueryString({ sido: 0, siGunGu: 0, dong: 0 });
      }),
  });

  return (
    <>
      {assembliesFetched
        ? assembliesResponse?.data.assemblyCardResponseList.map((res: Assembly, i: number) => (
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
        : Array.from({ length: 8 }).map((_, i) => <div className={S.skeletonCard} key={`skeleton-card-${i}`} />)}
    </>
  );
}
