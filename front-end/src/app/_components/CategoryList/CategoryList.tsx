'use client';

import React from 'react';
import * as S from './CategoryList.css';
import * as T from '@/types';
import * as Comp from '@/components';
import { CATEGORY_LIST } from '@/_constants';

export default function CategoryList({ onCategoryClick }: T.CategoryListProps) {
  const handleCategoryClick = (categoryId: number) => {
    // onCategoryClick(categoryId);
    console.log(categoryId, 'categoryId');
  };

  return (
    <div className={S.window}>
      <div className={S.categoriesWrapper}>
        {CATEGORY_LIST.map((category, i) => (
          <div key={i} onClick={() => handleCategoryClick(i)}>
            <Comp.Category
              key={i}
              categoryId={i}
              fontSize="13px"
              dynamicColorMode={true}
              iconWidth="32px"
              iconHeight="34px"
              // onClick={() => handleCategoryClick(i)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// export default function CategoryList() {
//   return (
//     <div className={S.window}>
//       <div className={S.categoriesWrapper}>
//         {CATEGORY_LIST.map((category, i) => (
//           <Comp.Category
//             key={i}
//             categoryId={i}
//             fontSize="13px"
//             dynamicColorMode={true}
//             iconWidth="32px"
//             iconHeight="34px"
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
