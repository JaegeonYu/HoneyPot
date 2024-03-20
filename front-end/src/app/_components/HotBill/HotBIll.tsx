import React, { useState } from 'react';
import * as S from './HotBill.css';
import * as T from '@/types';
import { vars } from '@/globalTheme.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { ArrowBlack, LinkTo } from '@/_assets/icon';

export default function HotBill() {
  const [isActive, setIsActive] = useState(true);
  const toggleAccordion = () => {
    console.log(isActive, 'isActive');
    setIsActive(!isActive);
  };

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
        hello
      </div>
      <div className={S.billCardContents}>
        <div className={S.billCardContentsHeader}>
          <div className={S.billCardContentsHeaderSummary}>
            <p className={S.fontTitle}>문제사항</p>
          </div>
          <div className={S.billCardContentsHeaderLink}>
            <p className={S.fontContent}>원문확인</p>
            <LinkTo></LinkTo>
          </div>
        </div>
        <div className={S.billCardContentsMain}>
          <div className={S.billCardContentsProblem}>
            <div className={S.billCardContentsProblemText}>
              <p className={S.fontHeader}>요약</p>
              <p className={S.fontContent}>
                여론과 의료사고에 따라, 전신마취 상태의 수술 시 CCTV 의무 설치 법안이 6년 8개월 만에 통과됐다. 법은 응급
                및 고위험 수술을 제외하고, 환자 요청에 따라 CCTV 촬영 가능하며, 개인정보 보호 및 형사처벌 규정도
                포함됐다. 의료계 반발과 다양한 논의를 거쳐, 수술실 내 CCTV 설치 의무와 관련된 법안이 마련되었으며, 이는
                환자 안전과 의료분쟁 해결을 위한 것이다.
              </p>
            </div>
            <div className={S.billCardContentsProblemText}>
              <p className={S.fontHeader}>관련뉴스</p>
              <p className={S.fontContent}>www.naver.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
