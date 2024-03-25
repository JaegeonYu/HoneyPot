import React from 'react';
import * as S from './loading.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';

export default function BillLoading({ width, height }: { width: string; height: string }) {
  return (
    <div className={S.loadingWrapper} style={assignInlineVars({ [S.widthProps]: width, [S.heightProps]: height })} />
  );
}
