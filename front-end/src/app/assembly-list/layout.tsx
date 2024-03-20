'use client';

import React, { useState } from 'react';
import * as S from './layout.css';
import * as Comp from '@/components';

export default function AssemblyListLayout({ tab1, tab2 }: { tab1: React.ReactNode; tab2: React.ReactNode }) {
  const [currentTab, setCurrentTab] = useState(0);
  const [searchValue, setSearchValue] = useState('');

  const handleChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  return (
    <>
      <section className={S.userInteractionSection}>
        <form className={S.inputWrapper}>
          <Comp.SearchInput
            inputId="assembly-list-search"
            value={searchValue}
            onChange={handleChangeSearchInput}
            placeholder="국회의원 이름 또는 정당으로 검색해보세요!"
          />
        </form>
        <div className={S.areaSelectorWrapper}>
          <Comp.AreaSelector />
        </div>
      </section>
      {tab1}
      {tab2}
    </>
  );
}
