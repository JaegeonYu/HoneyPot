'use client';

import React, { Suspense } from 'react';
import * as S from './layout.css';
import * as T from '@/types';
import * as Comp from '@/components';
import * as SubComp from './_Subs';
import AssemblyDetailLoading from './loading';

export default function AssemblyDetailLayout({ Tab1, Tab2, Tab3, params }: T.AssemblyDetailLayoutProps) {
  return (
    <>
      <section className={S.mainSectionWrapper}>
        <ul>
          <Suspense fallback={<AssemblyDetailLoading width="276px" height="483px" />}>
            <SubComp.AssemblyCard params={params} />
          </Suspense>
        </ul>
        <section className={S.rightOfMainContent}>
          <Suspense fallback={<AssemblyDetailLoading width="806px" height="360px" />}>
            <SubComp.Charts params={params} />
          </Suspense>
          <Suspense fallback={<AssemblyDetailLoading width="806px" height="74px" />}>
            <SubComp.TopBillCategories params={params} />
          </Suspense>
        </section>
      </section>
      <section className={S.tabSectionWrapper}>
        <Comp.Tab tabTitleList={['공약', '의안', '약력']} tabChildrenList={[Tab1, Tab2, Tab3]} />
      </section>
    </>
  );
}
