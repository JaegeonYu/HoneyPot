'use client';
import React from 'react';
import * as S from './style.css';
import { ArrowBlack } from '@/_assets/icon';

export default function MainTest() {
  return (
    <>
      <div className={S.mainWrapper}>
        <div className={S.solganSection}>
          <div className={S.solganWrapper}>
            <p className={S.solganFont}>
              국회의 약속부터 실천까지
              <br />한 꿀통에 담다
            </p>
          </div>
          <div className={S.arrow}>
            <button style={{ transform: 'rotate(180deg)' }}>
              <ArrowBlack></ArrowBlack>
            </button>
          </div>
        </div>
        <div className={S.solganWrapper}>
          <p className={S.solganFont}>
            국회의 약속부터 실천까지
            <br />한 꿀통에 담다
          </p>
        </div>
        <div className={S.tempWrapper}>fd</div>
      </div>
    </>
  );
}
