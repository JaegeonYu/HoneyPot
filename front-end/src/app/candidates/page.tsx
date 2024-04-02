'use client';

import React, { useCallback, useState } from 'react';
import * as S from './page.css';
import * as T from '@/types';
import * as API from '@/apis';
import * as Comp from '@/components';
import * as SubComp from './_Subs';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { PALETTE } from '@/_constants';

export default function CandidatesPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [detail, setDetail] = useState<T.Candidate | null>(null);

  const {
    data: candidateList,
    isFetched: candidateListFetched,
    fetchNextPage: fetchNextCandidateList,
  } = useSuspenseInfiniteQuery({
    queryKey: [`candidate-list-${searchParams.get('sido')}-${searchParams.get('sigungu')}-${searchParams.get('dong')}`],
    queryFn: ({ pageParam }) => {
      const curSido = searchParams.get('sido') || '';
      const curSiGunGu = searchParams.get('sigungu') || '';
      const curDong = searchParams.get('dong') || '';
      if (curSido && curSiGunGu && curDong) {
        return API.cantidate.getCandidateList({
          page: pageParam,
          limit: 10,
          sido: curSido,
          sigungu: curSiGunGu,
          dong: curDong,
        });
      }
    },
    initialPageParam: 0,
    getNextPageParam: (lastPages, allPages, lastPageParams, allPageParams) => {
      return null;
    },
    retry: false,
  });

  const handleQueryString = useCallback(
    ({ candianteId }: { candianteId: number }) => {
      const params = new URLSearchParams(searchParams.toString());

      params.set('detail', String(candianteId));

      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams],
  );

  const handleModalView = ({ isOpen, value }: { isOpen: boolean; value: T.Candidate | null }) => {
    if (isOpen && value) {
      handleQueryString({ candianteId: value.candidateId });
      setDetail({ ...value });
    } else {
      router.back();
      setDetail(null);
    }
  };

  const isHavePartyColorInService = (responsePartyName: string) => {
    const [filtered] = Object.keys(PALETTE.party).filter((partyName, idx) => responsePartyName === partyName);

    return filtered ? PALETTE.party[filtered][100] : PALETTE.party['무소속'][100];
  };

  return (
    <>
      <section className={S.pageSection}>
        <h2 className={S.titleWrapper}>
          <p>
            <span className={S.title}>22대 후보자</span>
            <span className={S.dynamicTitle}>{searchParams.get('sido')}</span>
            <span className={S.dynamicTitle}>{searchParams.get('sigungu')}</span>
            <span className={S.dynamicTitle}>{searchParams.get('dong')}</span>
          </p>
          <span className={S.totalContWrapper}>
            총 <span className={S.number}>{candidateList.pages[0]?.data.totalCount || 0}</span>명
          </span>
        </h2>
        {candidateList.pages.map((page, pageIdx) => {
          return page ? (
            <Comp.GridWrapper key={pageIdx}>
              {page.data.candidateResponseList.map((res: T.Candidate, i: number) => {
                isHavePartyColorInService(res.jdName);
                return (
                  <Comp.Card
                    key={res.hgname}
                    ratio="4 / 6"
                    imgUrl={res.candidateImgUrl}
                    badge={{ isBadgeNeed: false }}
                    onClick={() => handleModalView({ isOpen: true, value: res })}
                  >
                    <div className={S.cardArticle}>
                      <p className={S.hgName}>{res.hgname}</p>
                      <p>{res.sggName}</p>
                    </div>
                    <Comp.Badge isPositionAbsolute={true} color={isHavePartyColorInService(res.jdName)}>
                      {res.jdName}
                    </Comp.Badge>
                  </Comp.Card>
                );
              })}
            </Comp.GridWrapper>
          ) : (
            <div className={S.emptyDataWrapper} key={pageIdx}>
              <Comp.EmptyData alt="후보자 없음" width={200} height={134} maxWidth={200} maxHeight={134} />
              <h3 className={S.exceptionText}>지역을 모두 선택해주세요!</h3>
            </div>
          );
        })}
      </section>
      {Number(searchParams.get('detail')) > 0 && detail && (
        <SubComp.DetailModal viewHandler={() => handleModalView({ isOpen: false, value: null })} {...detail} />
      )}
    </>
  );
}
