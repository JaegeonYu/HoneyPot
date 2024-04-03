import React, { useState } from 'react';
import * as S from './CandidatesCard.css';
import * as Comp from '@/components';
import * as T from '@/types';
import { PALETTE } from '@/_constants';
import { assignInlineVars } from '@vanilla-extract/dynamic';

interface CandidatesCardProps extends T.Candidate {
  onClick: ([...args]: any) => void;
}

export default function CandidatesCard({
  age,
  birthday,
  candidateImgUrl,
  career1,
  career2,
  edu,
  giho,
  hgname,
  huboid,
  jdName,
  onClick,
}: CandidatesCardProps) {
  const [isFlip, setIsFlip] = useState({ hover: false, touch: false });

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
    <div key={huboid} className={S.infoSection} onClick={onClick}>
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
              <img className={S.profileImg} src={candidateImgUrl} alt={`${hgname} 프로필 사진`} />
              <Comp.Badge isPositionAbsolute={true} color={isHavePartyColorInService(jdName)}>
                {jdName}
              </Comp.Badge>
            </div>
            <div className={S.flipCardBack}>
              <div>
                <h4 className={S.headingTitle}>생년월일</h4>
                <p className={S.content}>
                  {`${birthday.slice(0, 4)}년 ${birthday.slice(4, 6)}월 ${birthday.slice(6, 8)}일`}
                  <span className={S.subContent}>{`(${age}세)`}</span>
                </p>
              </div>
              <div>
                <h4 className={S.headingTitle}>학력</h4>
                <p className={S.content}>{edu}</p>
              </div>
              <div>
                <h4 className={S.headingTitle}>경력</h4>
                <p className={S.content}>{career1}</p>
                <p className={S.content}>{career2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className={S.hgName}>
        {hgname} <span className={S.giho}>기호 {giho}번</span>
      </h2>
    </div>
  );
}
