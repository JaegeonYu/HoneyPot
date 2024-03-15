import React from 'react';
import * as S from './Dot.css';
import * as T from '@/types';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { vars } from '@/globalTheme.css';

/**
 * @param partycolor
 * 정당색 코드 string
 *
 * @description
 */
export default function Dot({ partycolor, flag }: T.DotProps) {
  const stepname = ['발의', '상임위', '법사위', '본회의'];

  return (
    <>
      {flag ? (
        <div
          className={S.dot}
          style={assignInlineVars({
            [S.partycolor]: partycolor,
          })}
        ></div>
      ) : (
        <div
          className={S.dot}
          style={assignInlineVars({
            [S.partycolor]: vars.colors.service.STROKE_OR_BLUR,
          })}
        ></div>
      )}
    </>
  );
}
