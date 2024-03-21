import React from 'react';
import * as S from './SummaryPanel.css';
import * as T from '@/types';

export default function SummaryPanel() {
  return (
    <div className={S.billCardContentsMain}>
      <div className={S.billCardContentsProblem}>
        <div className={S.billCardContentsProblemText}>
          <p className={S.fontTitle}>문제상황</p>
          <p className={S.fontContent}>
            지방분권과 지방자치가 제대로 이루어지지 않고 중앙·지방정부 간의 재정 불균형이 심각하며, 도시·농촌 간의 세수
            격차가 심화되는 문제가 있음.
          </p>
        </div>
        <div className={S.billCardContentsProblemText}>
          <p className={S.fontTitle}>문제해결방안</p>
          <p className={S.fontContent}>
            지방재정의 확충을 통한 재정자립을 도모하기 위해 지방세에서 기부금을 받아 지방자치단체에 지원하고, 이를 통해
            지방재정을 확충하고 국가 균형 발전을 도모하려는 것임. 또한, 고향사랑 기부제를 통해 고향에 대한 건전한
            기부문화를 조성하고 고향사랑 기부금을 주민의 복리 증진 등에 사용하여 국가균형발전에 기여하고자 함.
          </p>
        </div>
      </div>

      <div className={S.billCardContentsProblem}>
        <p className={S.fontTitle}>주요 키워드</p>
        <div className={S.billCardContentsProblemText}>
          <p className={S.fontKeywordBold}>지방재정자립</p>
          <p className={S.fontKeyword}>
            지방자치단체가 자체적으로 지방세 등의 수입을 확보하여 재정의 독립성을 확보하는 것.
          </p>
        </div>

        <div className={S.billCardContentsProblemText}>
          <p className={S.fontKeywordBold}>지방재정자립</p>
          <p className={S.fontKeyword}>
            지방자치단체가 자체적으로 지방세 등의 수입을 확보하여 재정의 독립성을 확보하는 것.
          </p>
        </div>
      </div>
    </div>
  );
}
