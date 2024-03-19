'use client';
import React from 'react';
import * as S from './style.css';
import { ArrowBlack, ArrowMain } from '@/_assets/icon';

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
              <ArrowMain></ArrowMain>
            </button>
          </div>
        </div>
        <div className={S.solganSubWrapper}>
          <p className={S.solganSubFont}>
            국가와 지역구를 위해 열심히 일한다는 여의도 꿀벌들,
            <br />
            여러분들은 얼마나 잘 알고 계신가요
            <br />
            이들의 약속부터 실천을 여의도꿀통에서 확인해보세요
          </p>
        </div>

        <div className={S.tempWrapper}>테스트입니다</div>
      </div>
    </>
  );
}
