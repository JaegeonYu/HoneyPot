import React from 'react';
import * as S from './GridWrapper.css';
import * as T from '@/types';

export default function GridWrapper({ children }: T.GridWrapperProps) {
  return <ul className={S.gridWrapper}>{children}</ul>;
}
