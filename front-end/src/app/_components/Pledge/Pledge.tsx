import React, { useState } from 'react';
import * as S from './Pledge.css';
import * as T from '@/types';
import * as Icon from '@/_assets/icon';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { PALETTE } from '@/_constants';

export default function Pledge({
  polyName,
  fulfillmentRate,
  pledgeName,
  pledgeSummary,
  natureDivisionNationalRegional,
  natureDivisionLegislationFinance,
  requiredBudgetAmount,
  securedBudgetAmount,
  otherImplementationBasis,
}: T.PledgeProps) {
  const [isOpen, setIsOpen] = useState(false);

  const dynamicColor = () => {
    if (fulfillmentRate === '완료') {
      return assignInlineVars({
        [S.bgColor]: PALETTE.party[polyName][100],
        [S.fontColor]: PALETTE.service.MAIN_WHITE,
      });
    }
    if (fulfillmentRate === '추진 중' || fulfillmentRate === '추진중') {
      return assignInlineVars({
        [S.bgColor]: PALETTE.party[polyName][80],
        [S.fontColor]: PALETTE.service.MAIN_WHITE,
      });
    }
    if (fulfillmentRate === '보류') {
      return assignInlineVars({
        [S.bgColor]: PALETTE.party[polyName][60],
        [S.fontColor]: PALETTE.service.MAIN_WHITE,
      });
    }
    if (fulfillmentRate === '기타') {
      return assignInlineVars({
        [S.bgColor]: PALETTE.party[polyName][40],
        [S.fontColor]: PALETTE.service.MAIN_WHITE,
      });
    }
    if (fulfillmentRate === '폐기') {
      return assignInlineVars({
        [S.bgColor]: PALETTE.party[polyName][20],
        [S.fontColor]: PALETTE.party[polyName][100],
      });
    }
  };

  return (
    <li className={S.wrapper} onClick={() => setIsOpen(prev => !prev)}>
      <article className={S.headerContainer}>
        <div className={S.iconWithTextWrapper}>
          <div className={S.icon} style={assignInlineVars({ [S.rotate]: isOpen ? 'rotate(180deg)' : 'rotate(0)' })}>
            <Icon.ArrowGray />
          </div>
          <div className={S.textWrapper}>
            <h3 className={S.headerTitle}>{pledgeName}</h3>
            <p className={S.headerSummary}>{pledgeSummary}</p>
          </div>
        </div>
        <div className={S.currentState} style={dynamicColor()}>
          {fulfillmentRate}
        </div>
      </article>
      <article
        className={S.detailsWrapper}
        style={assignInlineVars({
          [S.height]: isOpen ? 'fit-content' : '0px',
          [S.padding]: isOpen ? '36px 12px 24px 12px' : '0px 12px',
        })}
      >
        <div className={S.detailsContainer}>
          <p className={S.detailsTitle}>어떠한 분야를 위한 공약인가?</p>
          <pre
            className={S.detailsDescriptions}
          >{`${natureDivisionNationalRegional} ${natureDivisionLegislationFinance}`}</pre>
        </div>
        <div className={S.detailsContainer}>
          <p className={S.detailsTitle}>필요한 재정액은 얼마인가요?</p>
          <pre className={S.detailsDescriptions}>{requiredBudgetAmount}</pre>
        </div>
        <div className={S.detailsContainer}>
          <p className={S.detailsTitle}>확보된 재정액은 얼마인가요?</p>
          <pre className={S.detailsDescriptions}>{securedBudgetAmount}</pre>
        </div>
        <div className={S.detailsContainer}>
          <p className={S.detailsTitle}>기타 이행 근거를 설명해주세요.</p>
          <pre className={S.detailsDescriptions}>{otherImplementationBasis}</pre>
        </div>
      </article>
    </li>
  );
}
