import React, { useState } from 'react';
import * as S from './Bill.css';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import { ArrowBlack, HelpCircle, LinkTo } from '@/_assets/icon';

export default function Bill() {
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
        [S.panelHeight]: isActive ? '1' : '0',
      })}
      onClick={toggleAccordion}
    >
      <div className={S.billCardHeader}>
        <ArrowBlack></ArrowBlack>
        <div className={S.billTitle}>
          <p className={S.fontName}>고향사랑 기부금에 관한 법률안</p>
          <div className={S.billTitlePerson}>
            <p className={S.fontContent}>대표자 : 김태호</p>
            <p className={S.fontContent}>뱃지</p>
          </div>
        </div>
        <div className={S.billTitleCommittee}>
          <HelpCircle></HelpCircle>
          <p className={S.fontContent}>국회운영위원회</p>
        </div>
        <p className={S.fontName}>This is ProgressBar</p>
      </div>
      <div className={S.billCardContents}>
        <div className={S.billCardContentsHeader}>
          <div className={S.billCardContentsHeaderSummary}>
            <p className={S.fontName}>세부사항</p>
            <div className={S.billCardContentsHeaderSummarytBtn}>
              <p className={S.fontContent}>요약하기</p>
            </div>
          </div>
          <div className={S.billCardContentsHeaderLink}>
            <p className={S.fontContent}>원문확인</p>
            <LinkTo></LinkTo>
          </div>
        </div>
        <div className={S.billCardContentsMain}>
          <div className={S.billCardContentsProblem}>
            <div className={S.billCardContentsProblemText}>
              <p className={S.fontName}>문제상황</p>
              <p className={S.fontContent}>
                지방분권과 지방자치가 제대로 이루어지지 않고 중앙·지방정부 간의 재정 불균형이 심각하며, 도시·농촌 간의
                세수 격차가 심화되는 문제가 있음.
              </p>
            </div>
            <div className={S.billCardContentsProblemText}>
              <p className={S.fontName}>문제해결방안</p>
              <p className={S.fontContent}>
                지방재정의 확충을 통한 재정자립을 도모하기 위해 지방세에서 기부금을 받아 지방자치단체에 지원하고, 이를
                통해 지방재정을 확충하고 국가 균형 발전을 도모하려는 것임. 또한, 고향사랑 기부제를 통해 고향에 대한
                건전한 기부문화를 조성하고 고향사랑 기부금을 주민의 복리 증진 등에 사용하여 국가균형발전에 기여하고자
                함.
              </p>
            </div>
          </div>

          <div className={S.billCardContentsProblem}>
            <p className={S.fontName}>주요 키워드</p>
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

        {/* <p className={S.fontName}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu neque sollicitudin, mollis tortor at,
          scelerisque nisl. Nullam vel nisl ac mi ultricies feugiat. Donec consequat finibus bibendum. Maecenas
          hendrerit in ipsum id porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur ipsum
          lectus, posuere vel sollicitudin in, tincidunt eu lacus. Curabitur mollis bibendum luctus. In id gravida
          velit. Duis imperdiet massa ut nisl egestas, eu commodo velit pharetra. Etiam viverra malesuada metus quis
          aliquet. Aliquam ipsum erat, varius non sodales a, condimentum vel sapien. Etiam eleifend, ante in aliquam
          fermentum, magna augue mattis nisl, ornare consequat eros ante non sem. Fusce nec ex arcu. Aliquam nulla enim,
          tempus sit amet auctor vel, dictum porttitor nibh. Pellentesque dolor lectus, sollicitudin sit amet molestie
          id, interdum pulvinar ex. Etiam lorem lectus, lacinia eu lectus quis, pharetra convallis nisi. Aliquam
          tincidunt risus nisi, eu pulvinar dolor porttitor ac. Integer eget ex fringilla, feugiat nibh quis, aliquet
          dolor. In volutpat semper leo in aliquet. Proin non volutpat eros, nec malesuada diam. Mauris sollicitudin
          urna quam, ac pretium mauris bibendum id.
        </p> */}
      </div>
    </div>
  );
}
