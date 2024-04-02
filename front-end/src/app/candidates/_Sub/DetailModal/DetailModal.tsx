import React from 'react';
import * as S from './DetailModal.css';
import * as T from '@/types';
import * as API from '@/apis';
import * as Comp from '@/components';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { PALETTE } from '@/_constants';

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

  const { data: candianteDetailResponse, isFetched: candianteDetailFetched } = useQuery({
    queryKey: [{ candianteDetail: `detail-${Number(searchParams.get('detail'))}` }],
    queryFn: () => API.cantidate.getCandianteDetail({ id: Number(searchParams.get('detail')) }),
    retry: false,
  });

  console.log(`hgname : ${hgname}`);
  console.log(`jdName : ${jdName}`);
  console.log(`sdName : ${sdName} ${wiwName} ${sggName}`);
  console.log(`birthday : ${birthday.slice(0, 4)}년 ${birthday.slice(4, 6)}월 ${birthday.slice(6, 8)}일(${age}세)`);
  console.log(`candidateImgUrl : ${candidateImgUrl}`);
  console.log(`career1 : ${career1}`);
  console.log(`career2 : ${career2}`);
  console.log(`edu : ${edu}`);
  console.log(`giho : ${giho}`);

  const isHavePartyColorInService = (responsePartyName: string) => {
    const [filtered] = Object.keys(PALETTE.party).filter((partyName, idx) => responsePartyName === partyName);

    return filtered ? PALETTE.party[filtered][100] : PALETTE.party['무소속'][100];
  };

  return (
    <>
      <div className={S.overlay} onClick={viewHandler} />
      <div className={S.wrapper}>
        <div className={S.profileImgWrapper}>
          <Image
            className={S.profileImg}
            src={candidateImgUrl}
            alt={`${hgname} 프로필 사진`}
            width={100}
            height={100}
          />
        </div>
        <span>{`${birthday.slice(0, 4)}년 ${birthday.slice(4, 6)}월 ${birthday.slice(6, 8)}일(${age}세)`}</span>
        <Comp.Badge isPositionAbsolute={true} color={isHavePartyColorInService(jdName)}>
          {jdName}
        </Comp.Badge>
        <p>학력</p>
        <span>{edu}</span>
        <p>경력</p>
        <span>{career1}</span>
        <span>{career2}</span>
      </div>
    </>
  );
}
