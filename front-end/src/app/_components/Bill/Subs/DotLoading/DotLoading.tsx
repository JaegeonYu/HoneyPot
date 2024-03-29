import React from 'react';
import * as S from './DotLoading.css';

export default function DotLoading() {
  return (
    <>
      {/* <div className={S.wrapper}> */}
      <div className={S.stage}>
        <div className={S.dotPulse1}></div>
        <div className={S.dotPulse2}></div>
        <div className={S.dotPulse3}></div>
        <div className={S.dotPulse4}></div>
        <div className={S.dotPulse5}></div>
      </div>
      {/* </div> */}
    </>
  );
}
