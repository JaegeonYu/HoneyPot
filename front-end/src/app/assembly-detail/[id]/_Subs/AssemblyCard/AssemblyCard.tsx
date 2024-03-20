import React from 'react';
import * as S from './AssemblyCard.css';
import * as API from '@/_apis/assembly';
import * as T from '@/types';
import * as Comp from '@/components';
import * as Icon from '@/_assets/icon';
import { PALETTE } from '@/_constants';
import { useSuspenseQueries } from '@tanstack/react-query';

export default function AssemblyCard({ params }: T.AssemblyDetailCardProps) {
  const [{ data: infoResponse, isFetched: infoFetched }, { data: snsResponse, isFetched: snsFetched }] =
    useSuspenseQueries({
      queries: [
        {
          queryKey: [{ assemblyDetail: `info-request-${params.id}` }],
          queryFn: () => API.getAssemblyInfo({ assemblyId: params.id }),
          retry: false,
        },
        {
          queryKey: [{ assemblyDetail: `sns-request-${params.id}` }],
          queryFn: () => API.getAssemblySns({ assemblyId: params.id }),
          retry: false,
        },
      ],
    });

  const formatBirthDate = (date: string) => {
    const newDate = date.split('-');
    return `${newDate[0]}년 ${newDate[1]}월 ${newDate[2]}일생`;
  };
  const calcAgeWithBirthDate = (date: string) => {
    const yearOfBirthDate = date.split('-')[0];
    const currentYear = new Date().getFullYear();

    return `(${currentYear - 1 - Number(yearOfBirthDate)}세)`;
  };

  const handleLinkAttributeByUrl = (url: string) => {
    return url === null ? null : { href: url, target: '_black' };
  };

  return (
    <>
      <Comp.Card
        ratio="4 / 7"
        imgUrl={infoResponse.data.assemblyImgUrl}
        badge={{ isBadgeNeed: true, text: infoResponse.data.polyName }}
      >
        <article className={S.textContentInCard}>
          <h3 className={S.mainText}>
            {infoResponse.data.hgName}
            <span className={S.subText}>의원</span>
          </h3>
          <div className={S.badgesWrapper}>
            {infoResponse.data.units.split(',').map((unit: string, i: number) => (
              <Comp.Badge key={`unit-${i}`} isPositionAbsolute={false} color={PALETTE.service.MAIN_COLOR_100}>
                {unit}
              </Comp.Badge>
            ))}
          </div>
          <p className={S.areaName}>{infoResponse.data.origName}</p>
          <p className={S.birthDate}>
            {formatBirthDate(infoResponse.data.birthDate)}
            <span className={S.subText}>{calcAgeWithBirthDate(infoResponse.data.birthDate)}</span>
          </p>
        </article>
      </Comp.Card>
      <div className={S.snsWrapper}>
        <a {...handleLinkAttributeByUrl(snsResponse.data.youtubeUrl)} className={S.snsItem}>
          <Icon.YoutubeLogo />
          {snsResponse.data.youtubeUrl === null && <div className={S.snsItemOverlay} />}
        </a>
        <a {...handleLinkAttributeByUrl(snsResponse.data.twitterUrl)} className={S.snsItem}>
          <Icon.XLogo />
          {snsResponse.data.twitterUrl === null && <div className={S.snsItemOverlay} />}
        </a>
        <a {...handleLinkAttributeByUrl(snsResponse.data.facebookUrl)} className={S.snsItem}>
          <Icon.FaceboookLogo />
          {snsResponse.data.facebookUrl === null && <div className={S.snsItemOverlay} />}
        </a>
        <a {...handleLinkAttributeByUrl(snsResponse.data.blogUrl)} className={S.snsItem}>
          <Icon.HomePageLogo />
          {snsResponse.data.blogUrl === null && <div className={S.snsItemOverlay} />}
        </a>
      </div>
    </>
  );
}
