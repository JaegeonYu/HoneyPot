'use client';

import * as Comp from '@/components';
import * as SubComp from './_Subs';
import * as S from './page.css';

export default function PolyListPage() {
  return (
    <>
      <section className={S.newsSection}>
        <SubComp.News></SubComp.News>
      </section>
      <section className={S.listSection}>
        <div className={S.newsTitle}>21대 국회 정당</div>
        <div className={S.newsContent}>
          <Comp.GridWrapper>
            <SubComp.PolyCard></SubComp.PolyCard>
          </Comp.GridWrapper>
        </div>
      </section>
    </>
  );
}
