import React from 'react';
import * as S from './ToggleButton.css';
import * as T from '@/types';
import Image from 'next/image';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { vars } from '@/globalTheme.css';

/**
 * @param clicked
 * boolean
 *
 *
 */
export default function ToggleButton({ clicked, btncolor }: T.ToggleButtonProps) {
  const bgc = clicked ? `${btncolor}` : `${vars.colors.service.HOVER_STROKE}`;
  return (
    <button className={S.btnWrapper}>
      <span className={S.createSummary}>요약</span>

      <div
        className={S.back}
        style={assignInlineVars({
          [S.btncolor]: bgc,
        })}
      >
        <div className={`${S.dot} ${clicked ? S.dotClicked : null}`}></div>
      </div>
    </button>
  );
}
