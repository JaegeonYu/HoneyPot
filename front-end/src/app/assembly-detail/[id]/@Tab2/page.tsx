'use client';

import React from 'react';
import * as API from '@/_apis/assembly';
import * as S from './page.css';
import * as T from '@/types';
import * as Comp from '@/components';
import { CATEGORY_LIST } from '@/_constants';
import { useInfiniteQuery } from '@tanstack/react-query';

export default function AssemblyDetailTab2({ params }: T.AssemblyDetailTab2Props) {
  const {} = useInfiniteQuery({});

  return (
    <div className={S.window}>
      <div className={S.categoriesWrapper}>
        {CATEGORY_LIST.map((category, i) => (
          <Comp.Category
            key={i}
            categoryId={i}
            fontSize="13px"
            dynamicColorMode={true}
            iconWidth="32px"
            iconHeight="34px"
          />
        ))}
      </div>
      <section>{/* <Comp.Bill></Comp.Bill> */}</section>
    </div>
  );
}
