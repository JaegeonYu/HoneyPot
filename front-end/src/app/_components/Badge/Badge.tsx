import React from 'react';
import * as S from './Badge.css';
import * as T from '@/types';
import { assignInlineVars } from '@vanilla-extract/dynamic';

/**
 * @param color
 * 배경색을 설정 [type: string]
 *
 * @param children
 * 내부에 들어갈 Text 컨텐츠 [type: React.ReactNode]
 *
 * @param isPositionAbsolute
 * Badge가 우측 상단에 떠있어야 되는 경우 [type: boolean]
 *
 * @description
 * 의안 컴포넌트, 국회의원 카드 내부에 쓰임
 */
export default function Badge({ color, children, isPositionAbsolute }: T.BadgeProps) {
  return (
    <div
      className={isPositionAbsolute ? S.positionAbsoluteStyle : S.positionRelativeStyle}
      style={assignInlineVars({ [S.backgroundColorProps]: color })}
    >
      {children}
    </div>
  );
}
