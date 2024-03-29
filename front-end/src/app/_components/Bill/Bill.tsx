import React, { useEffect, useState } from 'react';
import * as S from './Bill.css';
import * as T from '@/types';
import * as Comp from '@/components';

import * as API from '@/_apis/bill';
import { vars } from '@/globalTheme.css';
import { motion } from 'framer-motion';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import { ArrowBlack, HelpCircle, LinkTo } from '@/_assets/icon';
import ProgressBar from './Subs/ProgressBar/ProgressBar';
import Badge from '../Badge/Badge';
import { CATEGORY_LIST, PALETTE } from '@/_constants';
import Category from '../Category/Category';
import ToggleButton from '../ToggleButton/ToggleButton';
import SummaryPanel from './Subs/SummaryPanel/SummaryPanel';
import OriginalPanel from './Subs/OriginPanel/OriginalPanel';
import { useQuery } from '@tanstack/react-query';
// import TextSpinnerLoader from '../LoadingTest/TextSpinner/TextSpinner';
import TextTest from '../LoadingTest/TextTest/texttest';
import DotLoading from './Subs/DotLoading/DotLoading';

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
  polyName,
  procDt,
  procResult,
  proposeDt,
  proposer,
  publProposer,
  rstProposer,
  summary,
  textBody,
}: T.BillProps) {
  const [isActive, setIsActive] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [comm, setComm] = useState(cmitId);
  const [status, setStatus] = useState(billProgressResponse);
  const [dateList, setDateList] = useState([proposeDt, cmitProcDt, lawProcDt, procDt]);
  const [initalflag, setInitialflag] = useState(false);
  const [newPageFlag, setnewPageFlag] = useState(false);

  const {
    data: summaryResponse,
    isFetched: summaryFetched,
    isPending: summaryPending,
  } = useQuery({
    queryKey: [{ summarybill: `summary-request=${billId}` }],
    queryFn: () =>
      API.getSummaryBill({ billId: billId }).then(res => {
        if (res.status === 204) return { summaryResponse: '' };
        return res.data;
      }),
    retry: false,
    enabled: !!initalflag,
  });

  useEffect(() => {
    // 데이터가 변경되면 isActive 상태를 false로 초기화
    setInitialflag(false);
    setIsActive(false);
    setIsToggled(false);
    setComm(cmitId);
    console.log(initalflag, 'initalflag');
  }, [assemblyId, billId, billNo, cmitId]);

  useEffect(() => {
    if (isActive === true && initalflag === false && summary === null && textBody !== null) {
      setInitialflag(true);
      console.log('CLICKED ONCE!', billId);
      console.log(summaryResponse, 'summary');
      // setInitialflag(false);
    }
  }, [isActive]);

  useEffect(() => {
    // 데이터가 변경되면 isActive 상태를 false로 초기화
    if (summary) {
      setIsToggled(true);
      // console.log(summary, 'summary');
    }
  }, [summary]);

  useEffect(() => {
    // 데이터가 변경되면 isActive 상태를 false로 초기화
    // console.log(isToggled);
  }, [isToggled]);

  useEffect(() => {
    // 데이터가 변경되면 isActive 상태를 false로 초기화
    if (summaryResponse) {
      // setIsToggled(true);
      console.log(summaryResponse);
    }
  }, [summaryResponse]);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  const toggleButton = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsToggled(!isToggled);
  };

  const linkButton = (event: React.MouseEvent) => {
    window.open(`${detailLink}`, '_blank', 'noopener, noreferrer');
    event.stopPropagation();
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

            <Badge color={PALETTE.party[polyName][100]} isPositionAbsolute={false}>
              {polyName}
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
          partycolor={PALETTE.party[polyName][100]}
          status={billProgressResponse.resultCd}
          finalDate={procDt}
          finalStatus={billProgressResponse.resultName}
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
                <ToggleButton clicked={isToggled} btncolor={PALETTE.party[polyName][100]}></ToggleButton>
              </div>
            </div>
          </div>
          <div className={S.billCardContentsHeaderLink} onClick={linkButton}>
            <p className={S.fontContent}>원문확인</p>
            <LinkTo></LinkTo>
          </div>
        </div>
        <div className={S.billCardContentsMain}>
          {isToggled ? (
            summary ? (
              <SummaryPanel data={summary} flag={false}></SummaryPanel>
            ) : summaryFetched ? (
              <SummaryPanel data={summaryResponse} flag={true}></SummaryPanel>
            ) : summaryPending ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  backgroundColor: `${vars.colors.service.HOVER_BACKGROUND}`,
                  borderRadius: 8,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    width: 300,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <DotLoading></DotLoading>
                </div>
                <div className={S.textRandom} id="1">
                  <TextTest contents=""></TextTest>
                </div>
              </div>
            ) : (
              <div>Error</div>
            )
          ) : textBody ? (
            <OriginalPanel data={textBody}></OriginalPanel>
          ) : (
            <OriginalPanel data={'원문데이터가 없습니다'}></OriginalPanel>
          )}
        </div>
      </div>
    </div>
  );
}
