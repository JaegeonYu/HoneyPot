'use client';

import React, { useState } from 'react';
import * as S from './page.css';
import * as API from '@/apis';
import * as Comp from '@/components';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

export default function AssemblyListTab1() {
  const [take, setTake] = useState(1);

  // const { data: response } = useQuery({
  //   queryKey: ['test'],
  //   queryFn: () =>
  //     API.assembly.getAssemblyList().then(res => {
  //       console.log(`res.data :`, res.data);
  //       return res;
  //     }),
  // });

  return (
    <>
      {/* <Comp.GridWrapper>
        {response?.data.map((res, i) => (
          <Link className={S.styledLink} key={res.monaCd} href={`/assembly-detail/${res.assemblyId}`}>
            <Comp.Card
              key={res.monaCd}
              ratio="4 / 5"
              badge={{ isBadgeNeed: true, text: res.polyName }}
              imgUrl={res.assemblyImgUrl}
            >
              <article className={S.cardArticle}>
                <h3 className={S.mainText}>
                  {res.hgName}
                  <span className={S.subText}>의원</span>
                </h3>
                <p className={S.areaName}>{res.origName}</p>
              </article>
            </Comp.Card>
          </Link>
        ))}
      </Comp.GridWrapper> */}
    </>
  );
}
