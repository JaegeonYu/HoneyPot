'use client';

import React, { useState, useEffect } from 'react';
import * as S from './PolyCard.css';
import * as Comp from '@/components';
import * as API from '@/_apis';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import Link from 'next/link';

interface PolyData {
  polyId: number;
  polyName: string;
  logoUrl: string;
  seats: number;
  leader: string;
}

export default function PolyCard() {
  const { data: partyList, isFetched: partyListFetched } = useQuery({
    queryKey: [`party-list`],
    queryFn: () => API.poly.getPolyList(),
    retry: false,
  });

  return (
    <>
      {partyList?.data.map((poly: PolyData, i: number) => (
        <Link className={S.styledLink} key={`party-${poly.polyId}`} href={`/poly-detail/${poly.polyId}`}>
          <Comp.Card
            key={`party-${poly.polyId}`}
            ratio="1 / 1"
            badge={{ isBadgeNeed: false }}
            imgUrl={`/party/party-${poly.polyId}.svg`}
          >
            <div className={S.cardInfoSection}>
              <div className={S.polyCnt}>
                <span>{poly.seats} 명</span>
                <span style={{ fontSize: 14, color: '#717171' }}> / 157 명</span>
              </div>
              <div className={S.leaderName}>당대표 : {poly.leader}</div>
            </div>
          </Comp.Card>
        </Link>
      ))}
    </>
  );
}
