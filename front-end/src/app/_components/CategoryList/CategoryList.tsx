import React, { useRef } from 'react';
import * as S from './CategoryList.css';
import * as T from '@/types';
import * as Comp from '@/components';
import * as Icon from '@/_assets/icon';
import { CATEGORY_LIST } from '@/_constants';

export default function CategoryList({ onCategoryClick, selectedIdx }: T.CategoryListProps) {
  const translateRef = useRef<HTMLDivElement>(null);
  const listContainerRef = useRef<HTMLDivElement>(null);

  const handleCategoryClick = (categoryId: number) => {
    onCategoryClick(categoryId);
  };

  const handleCarouselClick = (dir: 'L' | 'R') => {
    if (translateRef.current && listContainerRef.current) {
      const movingSize = translateRef.current.offsetWidth / 2;
      const currentMoved = translateRef.current.scrollLeft;
      const limiteSize = listContainerRef.current.offsetWidth;

      if (dir === 'L') {
        if (currentMoved < movingSize) {
          translateRef.current.scrollLeft = 0;
        } else if (currentMoved - movingSize >= 0) {
          translateRef.current.scrollLeft = translateRef.current.scrollLeft - movingSize;
        }
      } else if (dir === 'R') {
        if (limiteSize - currentMoved < movingSize) {
          translateRef.current.scrollLeft = listContainerRef.current.offsetWidth;
        } else if (currentMoved + movingSize <= limiteSize) {
          translateRef.current.scrollLeft = translateRef.current.scrollLeft + movingSize;
        }
      }
    }
  };

  return (
    <div className={S.relativeWrapper}>
      <div className={S.scrollAbleWrapper} ref={translateRef}>
        <div className={S.categoryListWrapper} ref={listContainerRef}>
          {CATEGORY_LIST.map((_, i) => (
            <div key={i} onClick={() => handleCategoryClick(i)}>
              <Comp.Category
                key={i}
                categoryId={i}
                fontSize="13px"
                dynamicColorMode={true}
                iconWidth="32px"
                iconHeight="34px"
                selected={selectedIdx === i}
              />
            </div>
          ))}
        </div>
      </div>
      <Icon.ArrowBlack
        className={S.toLeftIcon}
        onClick={() => handleCarouselClick('L')}
        onTouchStart={() => handleCarouselClick('L')}
      />
      <Icon.ArrowBlack
        className={S.toRightIcon}
        onClick={() => handleCarouselClick('R')}
        onTouchStart={() => handleCarouselClick('R')}
      />
    </div>
  );
}
