import React, { useState } from 'react';
import * as S from './Tab.css';
import * as T from '@/_types/components/tab';
import { vars } from '@/globalTheme.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';

/**
 * @param tabTitleList
 * Tab의 Title로 들어갈 리스트 [type: string[]]
 *
 * @param children
 * Tab 사이에 들어가야 될 요소가 있을 때
 * (ex. 법안 리스트 페이지 - 차트)
 *
 * @param tabChildrenList
 * 탭으로 전환될 요소들 [type: React.ReactNode[]]
 */
export default function Tab({ tabTitleList, children, tabChildrenList }: T.TabProps) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className={S.wrapper}>
      <div className={S.tabIndexWrapper}>
        {tabTitleList.map((tabTitle, idx) => (
          <button
            key={idx}
            className={S.tabItem}
            style={assignInlineVars({
              [S.color]: tabIndex === idx ? vars.colors.service.MAIN_BLACK : vars.colors.service.SUB_BLACK,
              [S.borderBottom]: tabIndex === idx ? vars.colors.service.MAIN_BLACK : vars.colors.service.MAIN_WHITE,
              [S.fontWeight]: tabIndex === idx ? '700' : '400',
              [S.oneOfTabWidthVar]: `${100 / 2}%`,
            })}
            onClick={() => setTabIndex(idx)}
          >
            {tabTitle}
          </button>
        ))}
      </div>
      {children}
      <section className={S.window} style={assignInlineVars({ [S.translateX]: `-100% * ${tabIndex}` })}>
        <div className={S.tabsWrapper}>
          {tabChildrenList.map((comp, i) => (
            <article key={i} className={S.tabContainer}>
              {comp}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
