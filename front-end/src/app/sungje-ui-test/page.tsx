'use client';

import React, { useState } from 'react';
import * as Comp from '@/components';
import { PALETTE } from '@/_constants';

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
      <div style={{ width: 300, height: 300, display: 'flex', gap: 124 }}>
        <Comp.DoughnutChart
          chartTitle={'출석률'}
          legendList={[
            { title: '본회의', color: PALETTE.party.PEOPLE_POWER_PARTY.MAIN },
            { title: '상임위', color: PALETTE.party.PEOPLE_POWER_PARTY.SUB },
          ]}
          datasetList={[
            [30, 70],
            [20, 80],
          ]}
        ></Comp.DoughnutChart>
      </div>
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
