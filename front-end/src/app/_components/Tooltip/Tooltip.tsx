import React from 'react';
import * as S from './Tooltip.css';
import * as T from '@/types';
import * as Icon from '@/_assets/icon';

export default function Tooltip({ children }: T.TooltipProps) {
  return (
    <div className={S.iconWrapper}>
      <Icon.HelpCircle />
      <span className={S.tooltip}>{children}</span>
    </div>
  );
}
