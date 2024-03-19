import React from 'react';
import * as S from './AssemblyCard.css';
import * as T from '@/types';
import * as Comp from '@/components';
import { PALETTE } from '@/_constants';

export default function AssemblyCard({
  assemblyImgUrl,
  polyName,
  hgName,
  units,
  origName,
  birthDate,
}: T.AssemblyDetailCardProps) {
  const formatBirthDate = (date: string) => {
    const newDate = date.split('-');
    return `${newDate[0]}년 ${newDate[1]}월 ${newDate[2]}일생`;
  };
  const calcAgeWithBirthDate = (date: string) => {
    const yearOfBirthDate = date.split('-')[0];
    const currentYear = new Date().getFullYear();

    return `(${currentYear - 1 - Number(yearOfBirthDate)}세)`;
  };
  return (
    <Comp.Card ratio="4 / 7" imgUrl={assemblyImgUrl} badge={{ isBadgeNeed: true, text: polyName }}>
      <article className={S.textContentInCard}>
        <h3 className={S.mainText}>
          {hgName}
          <span className={S.subText}>의원</span>
        </h3>
        <div className={S.badgesWrapper}>
          {units.split(',').map((unit, i) => (
            <Comp.Badge key={`unit-${i}`} isPositionAbsolute={false} color={PALETTE.service.MAIN_COLOR_100}>
              {unit}
            </Comp.Badge>
          ))}
        </div>
        <p className={S.areaName}>{origName}</p>
        <p className={S.birthDate}>
          {formatBirthDate(birthDate)}
          <span className={S.subText}>{calcAgeWithBirthDate(birthDate)}</span>
        </p>
      </article>
    </Comp.Card>
  );
}
