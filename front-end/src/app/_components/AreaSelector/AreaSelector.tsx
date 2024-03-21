import React, { useCallback, useRef, useState } from 'react';
import * as S from './AreaSelector.css';
import * as API from '@/apis';
import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

interface Region {
  regionId: number;
}

interface ResponseRegion extends Region {
  regionName: string;
}

interface HandleQueryStringArgs {
  sido: number;
  siGunGu: number;
  dong: number;
}

export default function AreaSelector() {
  const siDoButton = useRef<HTMLButtonElement>(null);
  const siGunGuButton = useRef<HTMLButtonElement>(null);
  const dongButton = useRef<HTMLButtonElement>(null);

  const [placeholders, setPlaceholders] = useState({
    sido: '시/도 선택',
    siGunGu: '시/군/구 선택',
    dong: '동 선택',
  });

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const handleQueryString = useCallback(
    ({ sido, siGunGu, dong }: HandleQueryStringArgs) => {
      const params = new URLSearchParams(searchParams.toString());

      params.set('sido', String(sido));
      params.set('sigungu', String(siGunGu));
      params.set('dong', String(dong));

      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams],
  );

  const concatFiltering = (origin: ResponseRegion[], upstream: ResponseRegion[] | undefined) => {
    return origin.concat(upstream ? upstream : []).filter(li => li);
  };
  const { data: siDoListResponse, refetch: siDoRefetch } = useQuery({
    queryKey: [`si-do-list`],
    queryFn: () =>
      API.region.getSiDoList().then(res => {
        if (res.status === 400) handleQueryString({ sido: 0, siGunGu: 0, dong: 0 });
        console.log(`res.status :`, res.status);
        return concatFiltering([{ regionId: 0, regionName: '시/도 선택' }], res.data);
      }),
    retry: false,
  });
  const { data: siGunGuListResponse, refetch: siGunGuRefetch } = useQuery({
    queryKey: [`si-gun-gu-list-${searchParams.get('sido')}`],
    queryFn: () =>
      API.region.getSiGunGuList({ siDoId: Number(searchParams.get('sido')) }).then(res => {
        if (res.status === 400) handleQueryString({ sido: 0, siGunGu: 0, dong: 0 });
        console.log(`res.status :`, res.status);
        return concatFiltering([{ regionId: 0, regionName: '시/군/구 선택' }], res.data);
      }),
    retry: false,
  });
  const { data: dongListResponse, refetch: dongRefetch } = useQuery({
    queryKey: [`dong-list-${searchParams.get('sigungu')}`],
    queryFn: () =>
      API.region.getDongList({ siGunGuId: Number(searchParams.get('sigungu')) }).then(res => {
        if (res.status === 400) handleQueryString({ sido: 0, siGunGu: 0, dong: 0 });
        console.log(`res.status :`, res.status);
        return concatFiltering([{ regionId: 0, regionName: '동 선택' }], res.data);
      }),
    retry: false,
  });

  const handleSidoItemClick = (region: ResponseRegion) => {
    handleQueryString({ sido: region.regionId, siGunGu: 0, dong: 0 });
    siGunGuRefetch();
    siDoButton.current?.blur();
    siGunGuButton.current?.focus();
    setPlaceholders(prev => ({ ...prev, sido: region.regionName, siGunGu: '시/군/구 선택', dong: '동 선택' }));
  };
  const handleSiGunGuItemClick = (region: ResponseRegion) => {
    if (region.regionId === 0) {
      handleQueryString({ sido: region.regionId, siGunGu: 0, dong: 0 });
    } else {
      handleQueryString({ sido: Number(searchParams.get('sido')), siGunGu: region.regionId, dong: 0 });
      siGunGuButton.current?.blur();
      dongButton.current?.focus();
    }
    dongRefetch();
    setPlaceholders(prev => ({ ...prev, siGunGu: region.regionName, dong: '동 선택' }));
  };
  const handleDongItemClick = (region: ResponseRegion) => {
    if (region.regionId === 0) {
      handleQueryString({
        sido: Number(searchParams.get('sido')),
        siGunGu: Number(searchParams.get('sigungu')),
        dong: 0,
      });
    } else {
      handleQueryString({
        sido: Number(searchParams.get('sido')),
        siGunGu: Number(searchParams.get('sigungu')),
        dong: region.regionId,
      });
      dongButton.current?.blur();
    }
    setPlaceholders(prev => ({ ...prev, dong: region.regionName }));
  };

  return (
    <div className={S.wrapper}>
      <button className={S.areaContainer} ref={siDoButton}>
        {/* {siDoListResponse ? siDoListResponse[Number(searchParams.get('sido'))].regionName : '시/도 선택'} */}
        {placeholders.sido}
        <ul className={S.ulContainer}>
          {siDoListResponse?.map((sido: ResponseRegion, i: number) => (
            <li key={`si-do-${i}`} className={S.optionsItem} onClick={() => handleSidoItemClick({ ...sido })}>
              {sido.regionName}
            </li>
          ))}
        </ul>
      </button>
      <hr className={S.styledHr} />
      <button className={S.areaContainer} ref={siGunGuButton}>
        {/* {siGunGuListResponse ? siGunGuListResponse[Number(searchParams.get('sigungu'))]?.regionName : '시/군/구 선택'} */}
        {placeholders.siGunGu}
        <ul className={S.ulContainer}>
          {siGunGuListResponse?.map((siGunGu: ResponseRegion, i: number) => (
            <li key={`si-gun-gu-${i}`} className={S.optionsItem} onClick={() => handleSiGunGuItemClick({ ...siGunGu })}>
              {siGunGu.regionName}
            </li>
          ))}
        </ul>
      </button>
      <hr className={S.styledHr} />
      <button className={S.areaContainer} ref={dongButton}>
        {/* {dongListResponse ? dongListResponse[Number(searchParams.get('dong'))]?.regionName : '동 선택'} */}
        {placeholders.dong}
        <ul className={S.ulContainer}>
          {dongListResponse?.map((dong: ResponseRegion, i: number) => (
            <li key={`dong-${i}`} className={S.optionsItem} onClick={() => handleDongItemClick({ ...dong })}>
              {dong.regionName}
            </li>
          ))}
        </ul>
      </button>
    </div>
  );
}
