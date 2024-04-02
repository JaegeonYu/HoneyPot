import React, { useState } from 'react';
import * as S from './DetailModal.css';
import * as T from '@/types';
import * as API from '@/apis';
import * as Comp from '@/components';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { PALETTE } from '@/_constants';
import { assignInlineVars } from '@vanilla-extract/dynamic';

interface DetailModalProps extends T.Candidate {
  viewHandler: () => void;
}

export default function DetailModal({
  hgname,
  jdName,
  sdName,
  age,
  birthday,
  candidateImgUrl,
  career1,
  career2,
  edu,
  wiwName,
  sggName,
  giho,
  viewHandler,
}: DetailModalProps) {
  const searchParams = useSearchParams();
  const [isFlip, setIsFlip] = useState({ hover: false, touch: false });

  const { data: candianteDetailResponse, isFetched: candianteDetailFetched } = useQuery({
    queryKey: [{ candianteDetail: `detail-${Number(searchParams.get('detail'))}` }],
    queryFn: () => API.cantidate.getCandidateDetail({ id: Number(searchParams.get('detail')) }),
    retry: false,
  });
  console.log(`candianteDetailResponse :`, candianteDetailResponse);

  const isHavePartyColorInService = (responsePartyName: string) => {
    const [filtered] = Object.keys(PALETTE.party).filter((partyName, idx) => responsePartyName === partyName);

    return filtered ? PALETTE.party[filtered][100] : PALETTE.party['무소속'][100];
  };

  const handleCardtouch = () => {
    setIsFlip(prev => ({ ...prev, touch: !prev.touch }));
  };

  const handleCardHover = (toggle: boolean) => {
    setIsFlip(prev => ({ ...prev, hover: toggle }));
  };

  return (
    <>
      <div className={S.overlay} onClick={viewHandler} />
      <div className={S.wrapper}>
        <div>
          <div
            className={S.cardWrapper}
            onTouchStart={handleCardtouch}
            onMouseLeave={() => handleCardHover(false)}
            onMouseOver={() => handleCardHover(true)}
          >
            <div
              className={S.flipCard}
              style={assignInlineVars({
                [S.flipCardFlag]: isFlip.touch || isFlip.hover ? 'rotateY(180deg)' : 'rotateY(0deg)',
              })}
            >
              <div className={S.flipCardInner}>
                <div className={S.flipCardFront}>
                  <img
                    className={S.profileImg}
                    src={candidateImgUrl}
                    alt={`${hgname} 프로필 사진`}
                    width={100}
                    height={100}
                  />
                  <Comp.Badge isPositionAbsolute={true} color={isHavePartyColorInService(jdName)}>
                    {jdName}
                  </Comp.Badge>
                </div>
                <div className={S.flipCardBack}>
                  <span>{`${birthday.slice(0, 4)}년 ${birthday.slice(4, 6)}월 ${birthday.slice(
                    6,
                    8,
                  )}일(${age}세)`}</span>

                  <h4>학력</h4>
                  <span>{edu}</span>

                  <h4>경력</h4>
                  <p>{career1}</p>
                  <p>{career2}</p>
                </div>
              </div>
            </div>
          </div>
          <h2>{hgname}</h2>
          <h3>기호 {giho}번</h3>
        </div>
      </div>
    </>
  );
}
