'use client';

import React, { useState } from 'react';
import * as S from './layout.css';
import * as Comp from '@/components';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function AssemblyListLayout({ Tab1, Tab2 }: { Tab1: React.ReactNode; Tab2: React.ReactNode }) {
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
  return (
    <>
      <section className={S.userInteractionSection}>
        <form className={S.inputWrapper} onSubmit={handleInputSubmit}>
          <Comp.SearchInput
            inputId="assembly-list-search"
            value={searchValue}
            onSubmit={handleInputSubmit}
            onChange={handleChangeSearchInput}
            placeholder="국회의원 이름 검색해보세요!"
          />
        </form>
        <div className={S.areaSelectorWrapper}>
          <Comp.AreaSelector />
        </div>
      </section>
      {Tab1}
      {Tab2}
    </>
  );
}
