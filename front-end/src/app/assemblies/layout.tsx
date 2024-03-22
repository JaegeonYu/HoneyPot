'use client';

import React, { Suspense, useCallback, useState } from 'react';
import * as S from './layout.css';
import * as Comp from '@/components';
import * as API from '@/apis';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import AssemblieslLoading from './loading';
import { useQuery } from '@tanstack/react-query';

interface Poly {
  polyId: number;
  polyName: string;
  logoUrl: string;
  seats: number;
  leader: string;
}

export default function AssembliesLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleQueryString = useCallback(
    (key: string, value: string | number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(key, String(value));

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
    handleQueryString('word', searchValue);
  };

  const { data: partyList, isFetched: partyListFetched } = useQuery({
    queryKey: [`party-list`],
    queryFn: () =>
      API.poly.getPolyList().then(res => {
        return [
          { polyId: 0, polyName: '모두 보기', logoUrl: 'logoUrl', seats: 'seats', leader: 'leader' },
          ...res.data,
        ];
      }),
    retry: false,
  });

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
            <Comp.AreaSelector />
          </Suspense>
        </div>
      </section>
      {partyListFetched ? (
        <div className={S.partyListWindow}>
          <div className={S.partySelectorWrapper}>
            {partyList?.map((party: Poly, i: number) => (
              <button
                key={`party-${party.polyId}`}
                className={S.partyItem}
                onClick={() => handleQueryString('poly', party.polyId)}
              >
                <span className={S.partyText}>{party.polyName}</span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className={S.skeletonPartyWrapper} />
      )}

      <Comp.GridWrapper>{children}</Comp.GridWrapper>
    </>
  );
}
