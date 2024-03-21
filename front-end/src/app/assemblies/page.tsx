'use client';

import React, { useCallback } from 'react';
import * as S from './page.css';
import * as T from '@/types';
import * as API from '@/_apis/assembly';
import * as Comp from '@/components';
import Link from 'next/link';
import { useSuspenseQuery } from '@tanstack/react-query';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

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
      Assemblies: `member-list`,
      areaCode: `${Number(searchParams.get('sido'))}-${Number(searchParams.get('sigungu'))}-${Number(
        searchParams.get('dong'),
      )}`,
      work: searchParams.get('word') || '',
      poly: 0,
      page: 0,
    },
  ];
  const { data: response } = useSuspenseQuery({
    queryKey: queryKey,
    queryFn: () =>
      API.getAssemblies({
        sido: Number(searchParams.get('sido')),
        sigungu: Number(searchParams.get('sigungu')),
        dong: Number(searchParams.get('dong')),
        poly: 0,
        word: searchParams.get('word') || '',
        page: 0,
        limit: 8,
      }).catch(err => {
        err.response.data.status === 400 && handleQueryString({ sido: 0, siGunGu: 0, dong: 0 });
      }),
  });

  return (
    <>
      {response?.data.assemblyCardResponseList.map((res: any, i: any) => (
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
      ))}
    </>
  );
}
