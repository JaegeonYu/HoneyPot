'use client';

import React, { useState } from 'react';
import * as S from './PolyCard.css';
import * as Comp from '@/components';
import Link from 'next/link';

const data = {
  polyId: 1,
  polyName: '더불어민주당',
  logoUrl: 'http://www.assembly.go.kr/photo/9770984.jpg',
  seats: 154,
  leader: '',
};
// key={i}
export default function PolyCard() {
  return (
    <>
      {Array.from({ length: 12 }).map((poly, i) => (
        <Comp.Card key={data.polyId} ratio="4 / 5" badge={{ isBadgeNeed: false }} imgUrl={data.logoUrl}>
          <div className={S.cardSection}>
            <div className={S.polyCnt}>{data.seats} / 157</div>
            <div className={S.leaderName}>{data.leader}</div>
          </div>
        </Comp.Card>
      ))}
    </>
  );
}
