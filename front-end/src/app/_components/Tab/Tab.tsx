import React from 'react';
import * as S from './Tab.css';
import * as T from '@/_types/components/tab';
import { vars } from '@/globalTheme.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';

/**
 * @param tabTitleList
 * Tab의 Title로 들어갈 리스트 [type: string[]]
 * @param selectedIdx
 * 선택된 Tab의 Index [type: number]
 * @param selectedIdxHandler
 * onClick에 들어갈 함수 [type: ([...arg]: any) => void]
 */
export default function Tab({ tabTitleList, selectedIdx, selectedIdxHandler }: T.TabProps) {
  return (
    <div className={S.categoryWrapper}>
      {tabTitleList.map((tabTitle, idx) => (
        <button
          key={idx}
          className={S.category}
          style={assignInlineVars({
            [S.color]: selectedIdx === idx ? vars.colors.service.MAIN_BLACK : vars.colors.service.SUB_BLACK,
            [S.borderBottom]: selectedIdx === idx ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_WHITE,
            [S.fontWeight]: selectedIdx === idx ? '700' : '400',
            [S.oneOfCategoryWidthVar]: `${100 / 2}%`,
          })}
          onClick={() => selectedIdxHandler(idx)}
        >
          {tabTitle}
        </button>
      ))}
    </div>
  );
}
