import React from 'react';
import * as S from './GridWrapper.css';
import * as T from '@/types';

export default function GridWrapper({ children }: T.GridWrapperProps) {
  return <div className={S.gridWrapper}>{children}</div>;
}
