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
export default function Dot({ partycolor, flag, barflag, lastdot, idx }: T.DotProps) {
  const stepname = ['발의', '상임위', '법사위', '본회의'];

  return (
    <>
      {flag ? (
        <div
          className={S.dot}
          style={assignInlineVars({
            [S.dynamicZIndex]: `${idx}`,
            [S.partycolor]: partycolor,
          })}
        >
          {idx !== 4 ? (
            <div
              className={S.bar}
              style={assignInlineVars({
                [S.dynamicZIndex]: `${idx}`,
                [S.partycolor]: partycolor,
              })}
            ></div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div
          className={S.dot}
          style={assignInlineVars({
            [S.dynamicZIndex]: `${idx}`,
            [S.partycolor]: vars.colors.service.STROKE_OR_BLUR,
          })}
        >
          <div
            className={S.bar}
            style={assignInlineVars({
              [S.dynamicZIndex]: `${idx}`,
              [S.partycolor]: vars.colors.service.STROKE_OR_BLUR,
            })}
          ></div>
        </div>
      )}
    </>
  );
}
