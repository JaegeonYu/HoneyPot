'use client';

import * as Comp from '@/components';
import * as API from '@/_apis';
import { useQueries } from '@tanstack/react-query';
import * as SubComp from './_Subs';
import * as S from './page.css';

interface Poly {
  polyId: number;
  polyName: string;
  logoUrl: string;
  polySeatsResponse: {
    seats: number;
    totalSeats: number;
  };
  leader: string;
}

interface NewsProps {
  id: number;
  title: string;
  date: string;
  url: string;
}

export default function PolyListPage() {
  const [{ data: partyList, isFetched: partyListFetched }, { data: newsList, isFetched: newsListFetched }] = useQueries(
    {
      queries: [
        {
          queryKey: [{ parties: `party-list` }],
          queryFn: () =>
            API.poly
              .getPolyList()
              .then(res => res.data.filter((el: Poly, i: number) => i !== res.data.length - 1 && el)),
          retry: false,
        },
        {
          queryKey: [`party-list-news`],
          queryFn: () =>
            API.poly.getNewsInPolyList().then(res => {
              return res.data.nbzyjjyoamdqqjorw[1].row.map((item: any, index: number) => ({
                id: index,
                title: item.COMP_MAIN_TITLE,
                date: item.REG_DATE,
                url: item.LINK_URL,
              }));
            }),
          retry: false,
        },
      ],
    },
  );

  return (
    <>
      <section className={S.newsSection}>
        <div className={S.newsWrapper}>
          <div className={S.newsHeader}>최근 국회 뉴스</div>
          <div className={S.newsContent}>
            <article className={S.itemsWrapper}>
              {newsList?.slice(0, 3).map((item: NewsProps, i: number) => (
                <SubComp.News key={`party-list-news-${item.id}`} {...item} />
              ))}
            </article>
            <div className={S.line} />
            <article className={S.itemsWrapper}>
              {newsList?.slice(3).map((item: NewsProps, i: number) => (
                <SubComp.News key={`party-list-news-${item.id}`} {...item} />
              ))}
            </article>
          </div>
        </div>
      </section>
      <div className={S.partyTitle}>21대 국회 정당</div>
      <Comp.GridWrapper>
        {partyList?.map((party: Poly, i: number) => (
          <SubComp.PolyCard key={`party-${party.polyId}`} {...party} />
        ))}
      </Comp.GridWrapper>
    </>
  );
}
