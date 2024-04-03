import React from 'react';
import * as S from './loading.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';

export default function AssemblieslLoading({
  width,
  height,
  borderRadius,
}: {
  width: string;
  height: string;
  borderRadius: string;
}) {
  return (
    <div
      className={S.loadingWrapper}
      style={assignInlineVars({ [S.widthProps]: width, [S.heightProps]: height, [S.borderRadius]: borderRadius })}
    />
  );
}
