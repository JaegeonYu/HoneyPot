'use client';

import React, { Suspense, useEffect } from 'react';
import * as S from './layout.css';
import * as T from '@/types';
import * as Comp from '@/components';
import * as SubComp from './_Subs';

export default function PolyDetailLayout({ Tab1, Tab2, params }: T.PartyDetailLayoutProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <section className={S.chartSectionWrapper}>
        <Suspense>
          <SubComp.Charts params={params}></SubComp.Charts>
        </Suspense>
      </section>
      <section className={S.tabSectionWrapper}>
        <Suspense>
          <Comp.Tab tabTitleList={['국회의원', '의안']} tabChildrenList={[Tab1, Tab2]} />
        </Suspense>
      </section>
    </>
  );
}
