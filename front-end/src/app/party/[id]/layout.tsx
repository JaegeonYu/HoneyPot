'use client';

import React, { Suspense, useEffect } from 'react';
import * as S from './layout.css';
import * as T from '@/types';
import * as Comp from '@/components';
import * as SubComp from './_Subs';
import Image from 'next/image';
import { GoogleTagManager } from '@next/third-parties/google';
import { GA_TRACKING_ID } from '../../../lib/gtag';
import Script from 'next/script';

export default function PolyDetailLayout({ Tab1, Tab2, params }: T.PartyDetailLayoutProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <section className={S.chartSectionWrapper}>
        <div className={S.partyLogo}>
          <Image src={`/party/party-${params.id}.svg`} alt="정당 로고" width={200} height={100} layout="fixed" />
        </div>
        <SubComp.Charts params={params} />
      </section>
      <section className={S.tabSectionWrapper}>
        <Suspense>
          <Comp.Tab tabTitleList={['국회의원', '의안']} tabChildrenList={[Tab1, Tab2]} />
        </Suspense>
      </section>
    </>
  );
}
