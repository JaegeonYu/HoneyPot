'use client';

import React from 'react';
import * as S from './page.css';
import * as Comp from '@/components';
import { CATEGORY_LIST } from '@/_constants';

export default function AssemblyDetailTab2() {
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
    </div>
  );
}
