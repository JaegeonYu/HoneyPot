// 'use client';

// import React, { useState } from 'react';

// export default function PolyListLayout({ children }: { children: React.ReactNode }) {
//   return <>{children}</>;
// }
'use client';

import React from 'react';
import * as S from './layout.css';
import * as T from '@/types';
import * as Comp from '@/components';
import * as SubComp from './_Subs';

export default function PolyDetailLayout({ Tab1, Tab2, params }: T.PartyDetailLayoutProps) {
  return (
    <>
      <section className={S.chartSectionWrapper}>
        <SubComp.Charts params={params}></SubComp.Charts>
      </section>
      <section className={S.tabSectionWrapper}>
        <Comp.Tab tabTitleList={['국회의원', '의안']} tabChildrenList={[Tab1, Tab2]} />
      </section>
    </>
  );
}
