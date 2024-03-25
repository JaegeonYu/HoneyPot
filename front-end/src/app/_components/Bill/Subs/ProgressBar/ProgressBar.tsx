import React from 'react';
import * as S from './ProgressBar.css';
import * as T from '@/types';
import Dot from '../Dot/Dot';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { vars } from '@/globalTheme.css';

/**
 * @param step
 * 0 : 발의   /  1: 상임위 . .  / 44: 폐기 / 99: 가결
 *

 *
 * @description

 */
export default function ProgressBar({ step, date, partycolor, status, finalStatus, finalDate }: T.ProgressBarProps) {
  const stepnameList = ['발의', '상임위', '법사위', '본회의'];
  //나중에 date는 파라미터로 받은 date쓸 것
  // const date = ['23.12.01', '24.01.04', '24.02.01'];
  const st = false;

  return (
    <div className={S.wrapper}>
      {/* 첫번쨰 Dot */}
      {stepnameList.map((stepname, i) => (
        <div className={S.element} key={i}>
          {status === 'R6' ? <p className={S.fontContent}>{stepname}</p> : <p style={{ height: 22 }}></p>}
          {step !== null && step >= i && i < 4 ? (
            <Dot idx={4 - i} partycolor={partycolor} flag={true} barflag={true} lastdot={true}></Dot>
          ) : (
            <Dot idx={4 - i} partycolor={partycolor} flag={false} barflag={false} lastdot={true}></Dot>
          )}
          {status === 'R6' ? <p className={S.fontDate}>{date[i]}</p> : <p style={{ height: 22 }}></p>}
        </div>
      ))}

      {status !== 'R6' ? (
        <>
          <p className={S.replaceWord}> {finalStatus}</p>
          <p className={S.finalDate}> {finalDate}</p>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
