import React, { useEffect, useState } from 'react';
import * as S from './HotBill.css';
import * as T from '@/types';
import { vars } from '@/globalTheme.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { ArrowBlack, LinkTo } from '@/_assets/icon';

export default function HotBill({ id, title, summary, original, url, createdAt, updatedAt }: T.HotBillProps) {
  const [isActive, setIsActive] = useState(false);
  const toggleAccordion = () => {
    console.log(isActive, 'isActive');
    setIsActive(!isActive);
  };

  const linkButton = (event: React.MouseEvent) => {
    window.open(`${url}`, '_blank', 'noopener, noreferrer');
    event.stopPropagation();
  };
  useEffect(() => {
    // 데이터가 변경되면 isActive 상태를 false로 초기화
    setIsActive(false);
  }, [title]);

  return (
    <div
      className={S.billCardWrapper}
      style={assignInlineVars({
        // [S.bgccolor]: isActive ? 'red' : 'blue',
        [S.panelHeight]: isActive ? '100vh' : '0',
      })}
      onClick={toggleAccordion}
    >
      <div className={S.billCardHeader}>
        {isActive ? (
          <div style={{ transform: 'rotate(180deg)' }}>
            <ArrowBlack></ArrowBlack>
          </div>
        ) : (
          <div>
            <ArrowBlack></ArrowBlack>
          </div>
        )}
        {/* <p className={S.fontTitle}>This is ProgressBar</p> */}
        <p className={S.fontHeader}>{title}</p>
      </div>
      <div className={S.billCardContents}>
        <div className={S.billCardContentsHeader}>
          <div className={S.billCardContentsHeaderSummary}>{/* <p className={S.fontTitle}>문제사항</p> */}</div>
          <div className={S.billCardContentsHeaderLink} onClick={linkButton}>
            <p className={S.fontContent}>원문확인</p>
            <LinkTo></LinkTo>
          </div>
        </div>

        <div className={S.billCardContentsMain}>
          <div className={S.billCardContentsProblem}>
            <div className={S.billCardContentsProblemText}>
              <p className={S.fontTitle}>요약</p>
              <pre className={S.fontContent}>{summary}</pre>
            </div>
            <div className={S.billCardContentsProblemText}>
              <p className={S.fontTitle}>관련뉴스</p>
              <p className={S.fontContent}>{url}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
