import React from 'react';
import * as S from './TopBillCategories.css';
import * as API from '@/_apis/assembly';
import * as T from '@/types';
import * as Comp from '@/components';
import { useSuspenseQuery } from '@tanstack/react-query';

export default function TopBillCategories({ params }: T.AssemblyTopBillCategoriesProps) {
  const { data: mostCategoriesResponse, isFetched: mostCategoriesFetched } = useSuspenseQuery({
    queryKey: [{ Assembly: `most-categories-request-${params.id}` }],
    queryFn: () => API.getAssemblyMostCategories({ assemblyId: params.id }),
    retry: false,
  });

  return (
    <article className={S.mostCategoriesWrapper}>
      <h3 className={S.titleText}>가장 많이 발의한 법안 분야</h3>
      <div className={S.mostCategoryContainer}>
        {mostCategoriesResponse.data.map((el: { cmitCd: string; cmitId: number; cmitName: string }, i: number) => (
          <Comp.Category
            key={el.cmitCd}
            iconWidth="48px"
            iconHeight="52px"
            dynamicColorMode={false}
            fontSize="14px"
            categoryId={el.cmitId}
          />
        ))}
      </div>
    </article>
  );
}
