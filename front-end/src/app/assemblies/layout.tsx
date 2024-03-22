'use client';

import React, { Suspense, useState } from 'react';
import * as S from './layout.css';
import * as Comp from '@/components';
import * as API from '@/apis';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import AssemblieslLoading from './loading';
import { useSuspenseQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

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
  const [searchValue, setSearchValue] = useState(searchParams.get('word') || '');

  const handleChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    params.set('word', searchValue);

    router.push(`${pathname}?${params.toString()}`);
  };

  const { data: partyList, isFetched: partyListFetched } = useSuspenseQuery({
    queryKey: [`party-list`],
    queryFn: () => API.poly.getPolyList(),
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
      <div>
        {partyList.data.map((party: Poly, i: number) => (
          <button key={`party-${party.polyId}`}></button>
        ))}
      </div>
      <Comp.GridWrapper>
        <Suspense fallback={<AssemblieslLoading width="100%" height="60px" borderRadius="32px" />}>{children}</Suspense>
      </Comp.GridWrapper>
    </>
  );
}
