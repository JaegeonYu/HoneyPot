import React from 'react';
import * as S from './ToggleButton.css';
import * as T from '@/types';
import Image from 'next/image';
import { assignInlineVars } from '@vanilla-extract/dynamic';

/**
 * @param clicked
 * boolean
 *
 *
 */
export default function ToggleButton({ clicked }: T.ToggleButtonProps) {
  return (
    <button className={S.dot}>
      <span>안녕</span>
    </button>
  );
}
