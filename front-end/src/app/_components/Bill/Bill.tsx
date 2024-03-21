import React, { useState } from 'react';
import * as S from './Bill.css';
import * as T from '@/types';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import { ArrowBlack, HelpCircle, LinkTo } from '@/_assets/icon';
import ProgressBar from './Subs/ProgressBar/ProgressBar';
import Badge from '../Badge/Badge';
import { CATEGORY_LIST, PALETTE } from '@/_constants';
import Category from '../Category/Category';
import ToggleButton from '../ToggleButton/ToggleButton';
import SummaryPanel from './Subs/SummaryPanel/SummaryPanel';
import OriginalPanel from './Subs/OriginPanel/OriginalPanel';

/**
 *
 * TBD
 * 정당컬러 받아야함
 * 파라미터로 데이터 받아오기
 */
export default function Bill({
  assemblyId,
  billId,
  billName,
  billNo,
  billProgressResponse,
  cmitId,
  cmitName,
  cmitProcDt,
  detailLink,
  hgName,
  lawProcDt,
  polyId,
  procDt,
  procResult,
  proposeDt,
  proposer,
  publProposer,
  rstProposer,
  summary,
  textBody,
}: T.BillProps) {
  const [isActive, setIsActive] = useState(true);
  const [isToggled, setIsToggled] = useState(true);
  const [comm, setComm] = useState(cmitId);
  const [status, setStatus] = useState(billProgressResponse);
  const [dateList, setDateList] = useState([proposeDt, cmitProcDt, lawProcDt, procDt]);

  const partyname = '더불어민주연합';
  const toggleAccordion = () => {
    console.log(isActive, 'isActive');
    setIsActive(!isActive);
  };

  const toggleButton = (event: React.MouseEvent) => {
    console.log(isToggled, 'Toggles');
    event.stopPropagation();
    setIsToggled(!isToggled);
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
        <div className={S.billTitle} style={{ width: 400 }}>
          <p className={S.fontHeader}>{billName}</p>
          <div className={S.billTitlePerson}>
            <p className={S.fontContent}>대표자 : {hgName}</p>

            <Badge color={PALETTE.party[partyname][100]} isPositionAbsolute={false}>
              {hgName}
            </Badge>
          </div>
        </div>
        <div className={S.billTitleCommittee}>
          <Category
            key={`category-${comm}`}
            categoryId={comm}
            dynamicColorMode={false}
            iconWidth="24px"
            iconHeight="28px"
            fontSize="12px"
          />
        </div>
        {/* <p className={S.fontTitle}>This is ProgressBar</p> */}

        <ProgressBar
          step={Number(billProgressResponse.presentCd[1])}
          date={dateList}
          partycolor={PALETTE.party[partyname][100]}
        ></ProgressBar>
      </div>
      <div className={S.billCardContents}>
        <div className={S.billCardContentsHeader}>
          <div className={S.billCardContentsHeaderSummary}>
            <p className={S.fontTitle}>세부사항</p>
            <div className={S.billCardContentsHeaderSummarytBtn}>
              {/* <p className={S.fontContent}>요약하기</p>
              <p className={S.fontContent}>toggle btn here</p> */}
              <div onClick={toggleButton}>
                <ToggleButton clicked={isToggled} btncolor={PALETTE.party[partyname][100]}></ToggleButton>
              </div>
            </div>
          </div>
          <div className={S.billCardContentsHeaderLink}>
            <p className={S.fontContent}>원문확인</p>
            <LinkTo></LinkTo>
          </div>
        </div>
        <div className={S.billCardContentsMain}>
          {summary !== null ? <SummaryPanel></SummaryPanel> : <OriginalPanel data={textBody}></OriginalPanel>}
        </div>
      </div>
    </div>
  );
}
