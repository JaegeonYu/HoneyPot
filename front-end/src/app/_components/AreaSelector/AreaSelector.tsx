import React, { useRef } from 'react';
import * as T from '@/types';
import * as S from './AreaSelector.css';

export default function AreaSelector({
  onSidoItemClick,
  onSiGunGuItemClick,
  onDongItemClick,
  placeholders,
  siDoList,
  siGunGuList,
  dongList,
}: T.AreaSelectorProps) {
  const siDoButton = useRef<HTMLButtonElement>(null);
  const siGunGuButton = useRef<HTMLButtonElement>(null);
  const dongButton = useRef<HTMLButtonElement>(null);

  const handleSidoItemClick = (value: any) => {
    onSidoItemClick(value);
    siDoButton.current?.blur();
    siGunGuButton.current?.focus();
  };

  const handleSiGunGuItemClick = (value: any) => {
    onSiGunGuItemClick(value);
    siGunGuButton.current?.blur();
    dongButton.current?.focus();
  };

  const handleDongItemClick = (value: any) => {
    onDongItemClick(value);
    dongButton.current?.blur();
  };

  return (
    <div className={S.wrapper}>
      <button
        className={S.areaContainer}
        ref={siDoButton}
        onClick={() => siDoButton.current?.focus()}
        onTouchStart={() => siDoButton.current?.focus()}
      >
        {placeholders.sido || '시/도 선택'}
        <ul className={S.ulContainer}>
          {siDoList.map((sido: any, i: number) => (
            <li
              key={`si-do-${i}`}
              className={S.optionsItem}
              onClick={() => handleSidoItemClick(sido)}
              onTouchStart={() => handleSidoItemClick(sido)}
            >
              {sido.regionName || sido}
            </li>
          ))}
        </ul>
      </button>
      <hr className={S.styledHr} />
      <button
        className={S.areaContainer}
        ref={siGunGuButton}
        onClick={() => siGunGuButton.current?.focus()}
        onTouchStart={() => siGunGuButton.current?.focus()}
      >
        {placeholders.sigungu || '시/군/구 선택'}
        <ul className={S.ulContainer}>
          {siGunGuList.map((siGunGu: any, i: number) => (
            <li
              key={`si-gun-gu-${i}`}
              className={S.optionsItem}
              onClick={() => handleSiGunGuItemClick(siGunGu)}
              onTouchStart={() => handleSiGunGuItemClick(siGunGu)}
            >
              {siGunGu.regionName || siGunGu}
            </li>
          ))}
        </ul>
      </button>
      <hr className={S.styledHr} />
      <button
        className={S.areaContainer}
        ref={dongButton}
        onClick={() => dongButton.current?.focus()}
        onTouchStart={() => dongButton.current?.focus()}
      >
        {placeholders.dong || '동 선택'}
        <ul className={S.ulContainer}>
          {dongList.map((dong: any, i: number) => (
            <li
              key={`dong-${i}`}
              className={S.optionsItem}
              onClick={() => handleDongItemClick(dong)}
              onTouchStart={() => handleDongItemClick(dong)}
            >
              {dong.regionName || dong}
            </li>
          ))}
        </ul>
      </button>
    </div>
  );
}
