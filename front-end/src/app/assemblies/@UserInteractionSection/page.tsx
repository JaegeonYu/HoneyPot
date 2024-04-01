'use client';

import React, { Suspense, useCallback, useState } from 'react';
import * as T from '@/types';
import * as S from './page.css';
import * as Comp from '@/components';
import * as API from '@/apis';
import AssemblieslLoading from '../loading';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function UserInteractionSection() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleQueryString = useCallback(
    ({ sido, siGunGu, dong, poly, word }: T.HandleQueryStringArgs) => {
      const params = new URLSearchParams(searchParams.toString());

      params.set('sido', String(sido));
      params.set('sigungu', String(siGunGu));
      params.set('dong', String(dong));
      params.set('poly', String(poly));
      params.set('word', String(word));

      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams],
  );

  const [searchValue, setSearchValue] = useState(searchParams.get('word') || '');
  const handleChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleQueryString({ sido: 0, siGunGu: 0, dong: 0, poly: 0, word: searchValue });
  };

  const { data: partyList, isFetched: partyListFetched } = useQuery({
    queryKey: [{ assemblies: `party-list` }],
    queryFn: () =>
      API.poly.getPolyList().then(res => {
        return [
          { polyId: 0, polyName: '모두 보기', logoUrl: 'logoUrl', seats: 'seats', leader: 'leader' },
          ...res.data,
        ];
      }),
    retry: false,
  });

  const concatFiltering = (origin: T.ResponseRegion[], upstream: T.ResponseRegion[] | undefined) => {
    return origin.concat(upstream ? upstream : []).filter(li => li);
  };
  const { data: siDoListResponse, refetch: siDoRefetch } = useSuspenseQuery({
    queryKey: [`si-do-list`],
    queryFn: () =>
      API.region.getSiDoList().then(res => {
        if (res.status === 400) handleQueryString({ sido: 0, siGunGu: 0, dong: 0, poly: 0, word: '' });
        return concatFiltering([{ regionId: 0, regionName: '시/도 선택' }], res.data);
      }),
    retry: false,
  });
  const { data: siGunGuListResponse, refetch: siGunGuRefetch } = useSuspenseQuery({
    queryKey: [`si-gun-gu-list-${searchParams.get('sido')}`],
    queryFn: () =>
      API.region.getSiGunGuList({ siDoId: Number(searchParams.get('sido')) }).then(res => {
        if (res.status === 400) handleQueryString({ sido: 0, siGunGu: 0, dong: 0, poly: 0, word: '' });
        return concatFiltering([{ regionId: 0, regionName: '시/군/구 선택' }], res.data);
      }),
    retry: false,
  });
  const { data: dongListResponse, refetch: dongRefetch } = useSuspenseQuery({
    queryKey: [`dong-list-${searchParams.get('sigungu')}`],
    queryFn: () =>
      API.region.getDongList({ siGunGuId: Number(searchParams.get('sigungu')) }).then(res => {
        if (res.status === 404) handleQueryString({ sido: 0, siGunGu: 0, dong: 0, poly: 0, word: '' });
        return concatFiltering([{ regionId: 0, regionName: '동 선택' }], res.data);
      }),
    retry: false,
  });

  const { data: placeholders, refetch: placeholdersRefetch } = useSuspenseQuery({
    queryKey: [`region-name-${searchParams.get('sido')}-${searchParams.get('sigungu')}-${searchParams.get('dong')}`],
    queryFn: () =>
      API.region
        .getRegionName({
          siDo: Number(searchParams.get('sido')),
          siGunGu: Number(searchParams.get('sigungu')),
          dong: Number(searchParams.get('dong')),
        })
        .catch(err => {
          err.response.data.status === 404 && handleQueryString({ sido: 0, siGunGu: 0, dong: 0, poly: 0, word: '' });
        }),
  });

  const handleSidoItemClick = (region: T.ResponseRegion) => {
    handleQueryString({ sido: region.regionId, siGunGu: 0, dong: 0, poly: Number(searchParams.get('poly')), word: '' });
    siGunGuRefetch();
  };
  const handleSiGunGuItemClick = (region: T.ResponseRegion) => {
    handleQueryString({
      sido: Number(searchParams.get('sido')),
      siGunGu: region.regionId,
      dong: 0,
      poly: Number(searchParams.get('poly')),
      word: '',
    });
    dongRefetch();
  };
  const handleDongItemClick = (region: T.ResponseRegion) => {
    handleQueryString({
      sido: Number(searchParams.get('sido')),
      siGunGu: Number(searchParams.get('sigungu')),
      dong: region.regionId,
      poly: Number(searchParams.get('poly')),
      word: '',
    });
  };

  const handlePartyClick = (partyId: number) => {
    handleQueryString({
      sido: Number(searchParams.get('sido')),
      siGunGu: Number(searchParams.get('sigungu')),
      dong: Number(searchParams.get('dong')),
      poly: partyId,
      word: '',
    });
  };

  return (
    <>
      <section className={S.userInteractionSection}>
        <form className={S.inputWrapper} onSubmit={handleInputSubmit}>
          <Suspense fallback={<AssemblieslLoading width="100%" height="38px" borderRadius="6px" />}>
            <Comp.SearchInput
              inputId="assembly-list-search"
              value={searchValue}
              onSubmit={handleInputSubmit}
              onChange={handleChangeSearchInput}
              placeholder="국회의원 이름 검색해보세요!"
            />
          </Suspense>
        </form>
        <div className={S.areaSelectorWrapper}>
          <Suspense fallback={<AssemblieslLoading width="100%" height="60px" borderRadius="32px" />}>
            <Comp.AreaSelector
              onSidoItemClick={handleSidoItemClick}
              onSiGunGuItemClick={handleSiGunGuItemClick}
              onDongItemClick={handleDongItemClick}
              placeholders={{
                sido: placeholders?.data.sido,
                sigungu: placeholders?.data.sigungu,
                dong: placeholders?.data.dong,
              }}
              siDoList={siDoListResponse}
              siGunGuList={siGunGuListResponse}
              dongList={dongListResponse}
            />
          </Suspense>
        </div>
      </section>
      {partyListFetched ? (
        <div className={S.partyListWindow}>
          <div className={S.partySelectorWrapper}>
            {partyList?.map((party: T.Poly, i: number) => (
              <Comp.FillterButton
                key={`party-${party.polyId}`}
                onClick={() => handlePartyClick(party.polyId)}
                isSelected={Number(searchParams.get('poly')) === party.polyId}
              >
                {party.polyName}
              </Comp.FillterButton>
            ))}
          </div>
        </div>
      ) : (
        <div className={S.skeletonPartyWrapper} />
      )}
    </>
  );
}
