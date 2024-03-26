'use client';

import React, { useState } from 'react';
import * as S from './page.css';
import * as T from '@/types';
import * as API from '@/_apis';
import * as Comp from '@/components';
import Link from 'next/link';
import { useSuspenseQuery, useSuspenseInfiniteQuery } from '@tanstack/react-query';

export default function PolyDetailTab1({ params }: T.PartyDetailTab1Props) {
  return (
    <>
      {/* <Comp.GridWrapper>
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
      </Comp.GridWrapper> */}
      <div>asdas</div>
    </>
  );
}
