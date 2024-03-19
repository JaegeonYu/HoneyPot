import React from 'react';
import * as S from './TopBillCategories.css';
import * as Comp from '@/components';
import { CATEGORY_LIST, PALETTE } from '@/_constants';

export default function TopBillCategories() {
  return (
    <article className={S.mostCategoriesWrapper}>
      <h3 className={S.titleText}>가장 많이 발의한 의안 분야</h3>
      <div className={S.mostCategoryContainer}>
        {Array.from({ length: 4 }).map((el, i) => (
          <Comp.Category
            key={i}
            iconWidth="48px"
            iconHeight="52px"
            dynamicColorMode={false}
            fontSize="14px"
            categoryId={i}
          />
        ))}
      </div>
    </article>
  );
}
