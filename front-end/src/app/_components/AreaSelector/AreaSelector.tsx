import React from 'react';
import * as S from './AreaSelector.css';

export default function AreaSelector() {
  return (
    <div className={S.wrapper}>
      <button className={S.areaContainer}>
        시/도 선택
        <ul className={S.ulContainer}>
          <li className={S.optionsItem}>시/도 선택</li>
          <li className={S.optionsItem}>시/도 선택</li>
          <li className={S.optionsItem}>시/도 선택</li>
          <li className={S.optionsItem}>시/도 선택</li>
          <li className={S.optionsItem}>시/도 선택</li>
          <li className={S.optionsItem}>시/도 선택</li>
          <li className={S.optionsItem}>시/도 선택</li>
          <li className={S.optionsItem}>시/도 선택</li>
        </ul>
      </button>
      <hr className={S.styledHr} />
      <button className={S.areaContainer}>
        시/군/구 선택
        <ul className={S.ulContainer}>
          <li className={S.optionsItem}>시/군/구 선택</li>
          <li className={S.optionsItem}>시/군/구 선택</li>
          <li className={S.optionsItem}>시/군/구 선택</li>
          <li className={S.optionsItem}>시/군/구 선택</li>
          <li className={S.optionsItem}>시/군/구 선택</li>
          <li className={S.optionsItem}>시/군/구 선택</li>
          <li className={S.optionsItem}>시/군/구 선택</li>
          <li className={S.optionsItem}>시/군/구 선택</li>
          <li className={S.optionsItem}>시/군/구 선택</li>
        </ul>
      </button>
      <hr className={S.styledHr} />
      <button className={S.areaContainer}>
        동 선택
        <ul className={S.ulContainer}>
          <li className={S.optionsItem}>동 선택</li>
          <li className={S.optionsItem}>동 선택</li>
          <li className={S.optionsItem}>동 선택</li>
          <li className={S.optionsItem}>동 선택</li>
          <li className={S.optionsItem}>동 선택</li>
          <li className={S.optionsItem}>동 선택</li>
          <li className={S.optionsItem}>동 선택</li>
        </ul>
      </button>
    </div>
  );
}
