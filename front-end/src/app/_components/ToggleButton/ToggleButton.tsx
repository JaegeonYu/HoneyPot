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
  const bgc = clicked ? 'red' : `${vars.colors.service.HOVER_STROKE}`;
  return (
    <button className={S.btnWrapper}>
      <div>요약</div>

      <div
        className={S.back}
        style={assignInlineVars({
          [S.btncolor]: bgc,
        })}
      >
        <div className={`${S.dot} ${clicked ? S.dotClicked : ''}`}></div>
      </div>
    </button>
  );
}
