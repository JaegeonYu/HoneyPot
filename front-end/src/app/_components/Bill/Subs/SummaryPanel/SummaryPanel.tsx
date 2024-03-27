import React, { useState } from 'react';
import * as S from './SummaryPanel.css';
import * as T from '@/types';

export default function SummaryPanel({ data }: T.SummaryPanelProps) {
  // const keys = Object.keys(data.difficult_words[0]);

  const result = data ? data.difficult_words.flatMap(Object.keys) : '';
  const values = data ? data.difficult_words.flatMap(Object.values) : '';

  return (
    <>
      {data ? (
        <div className={S.billCardContentsMain}>
          <div className={S.billCardContentsProblem}>
            <div className={S.billCardContentsProblemText}>
              <p className={S.fontTitle}>주제</p>
              <p className={S.fontContent}>{data.title}</p>
            </div>
            <div className={S.billCardContentsProblemText}>
              <p className={S.fontTitle}>핵심</p>
              <p className={S.fontContent}>{data.summary}</p>
            </div>
            <div className={S.billCardContentsProblemText}>
              <p className={S.fontTitle}>개요 및 목적</p>
              <p className={S.fontContent}>
                {data.overview} {data.purpose}
              </p>
            </div>
            <div className={S.billCardContentsProblemText}>
              <p className={S.fontTitle}>예상 결과</p>
              <p className={S.fontContent}>{data.impact_and_expected_results}</p>
            </div>
          </div>

          <div className={S.billCardKeyword}>
            <p className={S.fontTitle}>주요 키워드</p>
            <div className={S.billCardContentsProblemText}>
              {result.map((res: string, idx: number) => (
                <div key={idx}>
                  <p className={S.fontKeywordBold}>{res}</p>
                  <p className={S.fontKeyword}> {values[idx]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
