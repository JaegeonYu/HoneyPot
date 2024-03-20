import React from 'react';
import * as S from './ProgressBar.css';
import * as T from '@/types';
import Dot from './Dot';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { vars } from '@/globalTheme.css';

/**
 * @param step
 * 0 : 발의   /  1: 상임위 . .  / 44: 폐기 / 99: 가결
 *

 *
 * @description

 */
export default function ProgressBar({ step, date, partycolor }: T.ProgressBarProps) {
  const stepnameList = ['발의', '상임위', '법사위', '본회의'];
  //나중에 datetemp는 파라미터로 받은 date쓸 것
  const datetemp = ['23.12.01', '24.01.04', '24.02.01'];

  return (
    <div className={S.wrapper}>
      {/* 첫번쨰 Dot */}
      {stepnameList.map((stepname, i) => (
        <div className={S.element}>
          {step !== 44 && step !== 99 ? <p className={S.fontContent}>{stepname}</p> : <p style={{ height: 22 }}></p>}
          {step >= i && i < 4 ? (
            <Dot idx={4 - i} partycolor={partycolor} flag={true} barflag={true} lastdot={true}></Dot>
          ) : (
            <Dot idx={4 - i} partycolor={partycolor} flag={false} barflag={false} lastdot={true}></Dot>
          )}
          {step !== 44 && step !== 99 ? <p className={S.fontDate}>{datetemp[0]}</p> : <p></p>}
        </div>
      ))}
    </div>
  );
}
