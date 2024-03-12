'use client';

import React, { useState } from 'react';
import * as Comp from '@/components';
import * as S from './style.css';

export default function SungjeUiTest() {
  const [isSelectedIdx, setIsSelectedIdx] = useState(0);
  const handleIsSelectedIdx = (idx: number) => {
    setIsSelectedIdx(idx);
  };

  return (
    <>
      <Comp.Tab
        selectedIdx={isSelectedIdx}
        selectedIdxHandler={handleIsSelectedIdx}
        tabTitleList={['공약', '약력', '관련 영상', '의안']}
      />
      <div className={S.gridWrapper}>
        <Comp.Card></Comp.Card>
        <Comp.Card></Comp.Card>
        <Comp.Card></Comp.Card>
        <Comp.Card></Comp.Card>
        <Comp.Card></Comp.Card>
        <Comp.Card></Comp.Card>
      </div>
    </>
  );
}
