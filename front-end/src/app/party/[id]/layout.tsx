'use client';

import React, { Suspense, useEffect } from 'react';
import * as S from './layout.css';
import * as T from '@/types';
import * as Comp from '@/components';
import * as SubComp from './_Subs';
import Image from 'next/image';

export default function PolyDetailLayout({ Tab1, Tab2, params }: T.PartyDetailLayoutProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <section className={S.chartSectionWrapper}>
        <div className={S.partyLogo}>
          <Image src={`/party/party-${params.id}.svg`} alt="정당 로고" width={200} height={100} layout="fixed" />
          <span className={S.givenInfomation}>
            정당 정보 출처 :{' '}
            <a
              className={S.givenInfomationLink}
              href="https://open.assembly.go.kr/portal/data/service/selectAPIServicePage.do/OJ24FX001003FD16907#none"
              target="_black"
            >
              국회사무처
            </a>
          </span>
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
