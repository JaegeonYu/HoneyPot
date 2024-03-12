'use client';

import React, { useState } from 'react';
import * as Comp from '@/components';

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
      <Comp.GridWrapper>
        {Array.from({ length: 10 }).map((_, i) => (
          <Comp.Card key={`card-${i}`} ratio="4 / 5" imgUrl={`/image/category/${i}.svg`}>
            {i}
          </Comp.Card>
        ))}
      </Comp.GridWrapper>
    </>
  );
}
