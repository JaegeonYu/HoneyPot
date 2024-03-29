import React, { useCallback, useRef } from 'react';
import * as T from '@/types';
import * as S from './AreaSelector.css';
import * as API from '@/_apis/region';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

export default function AreaSelector() {
  const siDoButton = useRef<HTMLButtonElement>(null);
  const siGunGuButton = useRef<HTMLButtonElement>(null);
  const dongButton = useRef<HTMLButtonElement>(null);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const handleQueryString = useCallback(
    ({ sido, siGunGu, dong }: T.HandleQueryStringArgs) => {
      const params = new URLSearchParams(searchParams.toString());

      params.set('sido', String(sido));
      params.set('sigungu', String(siGunGu));
      params.set('dong', String(dong));

      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams],
  );

  const concatFiltering = (origin: T.ResponseRegion[], upstream: T.ResponseRegion[] | undefined) => {
    return origin.concat(upstream ? upstream : []).filter(li => li);
  };
  const { data: siDoListResponse, refetch: siDoRefetch } = useSuspenseQuery({
    queryKey: [`si-do-list`],
    queryFn: () =>
      API.getSiDoList().then(res => {
        if (res.status === 400) handleQueryString({ sido: 0, siGunGu: 0, dong: 0 });
        return concatFiltering([{ regionId: 0, regionName: '시/도 선택' }], res.data);
      }),
    retry: false,
  });
  const { data: siGunGuListResponse, refetch: siGunGuRefetch } = useSuspenseQuery({
    queryKey: [`si-gun-gu-list-${searchParams.get('sido')}`],
    queryFn: () =>
      API.getSiGunGuList({ siDoId: Number(searchParams.get('sido')) }).then(res => {
        if (res.status === 400) handleQueryString({ sido: 0, siGunGu: 0, dong: 0 });
        return concatFiltering([{ regionId: 0, regionName: '시/군/구 선택' }], res.data);
      }),
    retry: false,
  });
  const { data: dongListResponse, refetch: dongRefetch } = useSuspenseQuery({
    queryKey: [`dong-list-${searchParams.get('sigungu')}`],
    queryFn: () =>
      API.getDongList({ siGunGuId: Number(searchParams.get('sigungu')) }).then(res => {
        if (res.status === 404) handleQueryString({ sido: 0, siGunGu: 0, dong: 0 });
        return concatFiltering([{ regionId: 0, regionName: '동 선택' }], res.data);
      }),
    retry: false,
  });

  const { data: placeholders, refetch: placeholdersRefetch } = useSuspenseQuery({
    queryKey: [`region-name-${searchParams.get('sido')}-${searchParams.get('sigungu')}-${searchParams.get('dong')}`],
    queryFn: () =>
      API.getRegionName({
        siDo: Number(searchParams.get('sido')),
        siGunGu: Number(searchParams.get('sigungu')),
        dong: Number(searchParams.get('dong')),
      }).catch(err => {
        err.response.data.status === 404 && handleQueryString({ sido: 0, siGunGu: 0, dong: 0 });
      }),
  });

  const handleSidoItemClick = (region: T.ResponseRegion) => {
    handleQueryString({ sido: region.regionId, siGunGu: 0, dong: 0 });
    siGunGuRefetch();
    siDoButton.current?.blur();
    siGunGuButton.current?.focus();
  };
  const handleSiGunGuItemClick = (region: T.ResponseRegion) => {
    if (region.regionId === 0) {
      handleQueryString({ sido: Number(searchParams.get('sido')), siGunGu: 0, dong: 0 });
    } else {
      handleQueryString({ sido: Number(searchParams.get('sido')), siGunGu: region.regionId, dong: 0 });
      siGunGuButton.current?.blur();
      dongButton.current?.focus();
    }
    dongRefetch();
  };
  const handleDongItemClick = (region: T.ResponseRegion) => {
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
  };

  return (
    <div className={S.wrapper}>
      <button
        className={S.areaContainer}
        ref={siDoButton}
        onClick={() => siDoButton.current?.focus()}
        onTouchStart={() => siDoButton.current?.focus()}
      >
        {placeholders?.data.sido || '시/도 선택'}
        <ul className={S.ulContainer}>
          {siDoListResponse?.map((sido: T.ResponseRegion, i: number) => (
            <li key={`si-do-${i}`} className={S.optionsItem} onClick={() => handleSidoItemClick({ ...sido })}>
              {sido.regionName}
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
        {placeholders?.data.sigungu || '시/군/구 선택'}
        <ul className={S.ulContainer}>
          {siGunGuListResponse?.map((siGunGu: T.ResponseRegion, i: number) => (
            <li key={`si-gun-gu-${i}`} className={S.optionsItem} onClick={() => handleSiGunGuItemClick({ ...siGunGu })}>
              {siGunGu.regionName}
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
        {placeholders?.data.dong || '동 선택'}
        <ul className={S.ulContainer}>
          {dongListResponse?.map((dong: T.ResponseRegion, i: number) => (
            <li key={`dong-${i}`} className={S.optionsItem} onClick={() => handleDongItemClick({ ...dong })}>
              {dong.regionName}
            </li>
          ))}
        </ul>
      </button>
    </div>
  );
}
