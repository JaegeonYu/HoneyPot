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
  const stepname = ['발의', '상임위', '법사위', '본회의'];
  //나중에 datetemp는 파라미터로 받은 date쓸 것
  const datetemp = ['23.12.01', '24.01.04', '24.02.01'];

  return (
    <div className={S.wrapper}>
      {/* 첫번쨰 Dot */}
      <div className={S.element}>
        {step !== 44 && step !== 99 ? <p className={S.fontContent}>{stepname[0]}</p> : <p style={{ height: 22 }}></p>}
        {step >= 0 && step < 4 ? (
          <Dot partycolor={partycolor} flag={true}></Dot>
        ) : (
          <Dot partycolor={partycolor} flag={false}></Dot>
        )}
        {step !== 44 && step !== 99 ? <p className={S.fontDate}>{datetemp[0]}</p> : <p></p>}
      </div>

      {/* 첫번쨰 bar 시작 */}
      {step >= 1 && step < 4 ? (
        <div
          className={S.bar}
          style={assignInlineVars({
            [S.partycolor]: partycolor,
          })}
        ></div>
      ) : (
        <div
          className={S.bar}
          style={assignInlineVars({
            [S.partycolor]: vars.colors.service.STROKE_OR_BLUR,
          })}
        ></div>
      )}

      {/* 두번쨰 DOT시작 */}
      <div className={S.element}>
        {step !== 44 && step !== 99 ? <p className={S.fontContent}>{stepname[1]}</p> : <p style={{ height: 22 }}></p>}
        {step >= 1 && step < 4 ? (
          <Dot partycolor={partycolor} flag={true}></Dot>
        ) : (
          <Dot partycolor={partycolor} flag={false}></Dot>
        )}
        <p className={S.fontDate}>{datetemp[1]}</p>
      </div>
      {/* 두번째 bar 시작 */}

      {step >= 2 && step < 4 ? (
        <div
          className={S.bar2}
          style={assignInlineVars({
            [S.partycolor]: partycolor,
          })}
        ></div>
      ) : (
        <div
          className={S.bar2}
          style={assignInlineVars({
            [S.partycolor]: vars.colors.service.STROKE_OR_BLUR,
          })}
        ></div>
      )}

      {/* 세번쨰 DOT 시작 */}
      <div className={S.element}>
        {step !== 44 && step !== 99 ? <p className={S.fontContent}>{stepname[2]}</p> : <p style={{ height: 22 }}></p>}
        {step >= 2 && step < 4 ? (
          <Dot partycolor={partycolor} flag={true}></Dot>
        ) : (
          <Dot partycolor={partycolor} flag={false}></Dot>
        )}
        <p className={S.fontDate}>{datetemp[2]}</p>
      </div>

      {/* 세번쨰 BAR 데이터 */}
      {step >= 3 && step < 4 ? (
        <div
          className={S.bar3}
          style={assignInlineVars({
            [S.partycolor]: partycolor,
          })}
        ></div>
      ) : (
        <div
          className={S.bar3}
          style={assignInlineVars({
            [S.partycolor]: vars.colors.service.STROKE_OR_BLUR,
          })}
        ></div>
      )}

      {/* 네번쨰 DOT 시작 */}
      <div className={S.element}>
        {step !== 44 && step !== 99 ? <p className={S.fontContent}>{stepname[3]}</p> : <p style={{ height: 22 }}></p>}
        {step >= 3 && step < 4 ? (
          <Dot partycolor={partycolor} flag={true}></Dot>
        ) : (
          <Dot partycolor={partycolor} flag={false}></Dot>
        )}
        <p className={S.fontDate}>{datetemp[3]}</p>
      </div>
    </div>
  );
}
