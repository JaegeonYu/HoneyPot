'use client';

import React, { useState } from 'react';
import * as S from './layout.css';
import * as Comp from '@/components';

export default function AssemblyListLayout({ Tab1, Tab2 }: { Tab1: React.ReactNode; Tab2: React.ReactNode }) {
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
      {Tab1}
      {Tab2}
    </>
  );
}
