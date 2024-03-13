import React from 'react';
import * as S from './Poster.css';
import * as T from '@/types';

/**
 * @param children
 * Poster 들어갈 텍스트 컨텐츠 [type: React.ReactNode]

 *

 */
export default function Poster({ children }: T.PosterProps) {
  return <div className={S.wrapper}>{children}</div>;
}
