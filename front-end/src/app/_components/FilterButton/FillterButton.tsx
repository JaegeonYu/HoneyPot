import React from 'react';
import * as S from './FillterButton.css';
import * as T from '@/types';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { PALETTE } from '@/_constants';

export default function FilterButton({ children, isSelected, onClick }: T.FillterButtonProps) {
  return (
    <button
      className={S.item}
      onClick={onClick}
      style={assignInlineVars({
        [S.isSelectedBgColor]: isSelected ? PALETTE.service.MAIN_BLACK : PALETTE.service.SUB_WHITE,
      })}
    >
      <div
        className={S.text}
        style={assignInlineVars({
          [S.isSelectedFontColor]: isSelected ? PALETTE.service.MAIN_WHITE : PALETTE.service.MAIN_BLACK,
        })}
      >
        {children}
      </div>
    </button>
  );
}
