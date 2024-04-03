import React from 'react';
import * as S from './Poster.css';
import * as T from '@/types';
import { assignInlineVars } from '@vanilla-extract/dynamic';

/**
 * @param children
 * Poster 들어갈 텍스트 컨텐츠 [type: React.ReactNode]

 *

 */
export default function Poster({ children, posterwidth, posterheight }: T.PosterProps) {
  return (
    <div
      className={S.wrapper}
      style={assignInlineVars({
        [S.posterheight]: posterheight,
        [S.posterwidth]: posterwidth,
      })}
    >
      {children}
    </div>
  );
}
