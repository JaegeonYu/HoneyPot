'use client';
import React from 'react';
import * as S from './layout.css';
import * as T from '@/types';
import * as Comp from '@/components';
import * as SubComp from './_Subs';
import * as Icon from '@/_assets/icon';

export default function PartyDetailLayout({ Tab1, Tab2, params }: T.PartyDetailLayoutProps) {
  return (
    <>
      <section className={S.mainSectionWrapper}>
        <div className={S.partyLogo}>로고</div>
        <div>
          <SubComp></SubComp>{' '}
        </div>
      </section>
      <section className={S.tabSectionWrapper}>
        <Comp.Tab tabTitleList={['국회의원', '의안']} tabChildrenList={[Tab1, Tab2]} />
      </section>
    </>
  );
}
