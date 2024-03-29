import React from 'react';
import * as S from './EmptyData.css';
import * as T from '@/types';
import Image from 'next/image';
import { assignInlineVars } from '@vanilla-extract/dynamic';

export default function EmptyData({ alt, width, height, maxWidth, maxHeight }: T.EmptyDataProps) {
  return (
    <div className={S.emptyDataWrapper}>
      <Image
        className={S.emptyDataImage}
        src={'/empty-data.png'}
        width={width}
        height={height}
        alt={alt}
        style={assignInlineVars({ [S.maxWidth]: `${maxWidth}px`, [S.maxHeight]: `${maxHeight}px` })}
      />
    </div>
  );
}
