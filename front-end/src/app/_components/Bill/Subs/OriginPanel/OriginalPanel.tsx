import React, { useEffect, useState } from 'react';
import * as S from './OriginalPanel.css';
import * as T from '@/types';

export default function OriginalPanel({ data }: T.OriginalPanelProps) {
  const newstr = data ? data.replace('제안이유', '').replace('및 주요내용', '') : data;
  // console.log('DORIGIGIGN');

  return (
    <div className={S.billCardContentsMain} id="2">
      <div className={S.billCardContentsProblem}>
        <div className={S.billCardContentsProblemText}>
          <p className={S.fontTitle}>제안이유 및 주요사항</p>
          <pre className={S.fontContent}>{newstr}</pre>
        </div>
      </div>
    </div>
  );
}
