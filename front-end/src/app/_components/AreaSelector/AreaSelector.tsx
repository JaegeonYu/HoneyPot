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

export default function AreaSelector() {
  const siDoButton = useRef<HTMLButtonElement>(null);
  const siGunGuButton = useRef<HTMLButtonElement>(null);
  const dongButton = useRef<HTMLButtonElement>(null);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleQueryString = useCallback(
    (key: string, value: number | null) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(key, value === null ? '' : String(value));

      params.set('sido', params.get('sido') === null ? '' : (params.get('sido') as string));
      params.set('sigungu', params.get('sigungu') === null ? '' : (params.get('sigungu') as string));
      params.set('dong', params.get('dong') === null ? '' : (params.get('dong') as string));

      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams],
  );

  const [selectedArea, setSelectedArea] = useState({ sido: 0, siGunGu: 0, dong: 0 });

  const { data: siDoListResponse, refetch: siDoRefetch } = useQuery({
    queryKey: [`siDo-list`],
    queryFn: () =>
      API.region.getSiDoList().then((res: AxiosResponse<ResponseRegion[], any>) => {
        res.data.forEach((li, i) => {
          // if (Number(searchParams.get('sido')) === li.regionId) setSiDo({ ...li });
          // if (Number(searchParams.get('sido')) === li.regionId) setSelectedArea({ ...selectedArea, sido: { ...li } });
        });
        return res;
      }),
  });

  const { data: siGunGuListResponse, refetch: siGunGuRefetch } = useQuery({
    queryKey: [`si-gun-gu-list-${searchParams.get('sido')}`],
    queryFn: () =>
      API.region
        .getSiGunGuList({ siDoId: Number(searchParams.get('sido')) })
        .then((res: AxiosResponse<ResponseRegion[], any>) => {
          res.data.forEach((li, i) => {
            console.log(`IN REQUEST :`, selectedArea.siGunGu);
            // if (Number(searchParams.get('sigungu')) === li.regionId) setSiGunGu(prev => ({ ...li }));
            // if (Number(searchParams.get('sigungu')) === li.regionId)
            // setSelectedArea({ ...selectedArea, siGunGu: { ...li } });
          });
          return res;
        }),
  });

  const { data: dongListResponse, refetch: dongRefetch } = useQuery({
    queryKey: [`dong-list-${searchParams.get('sigungu')}`],
    queryFn: () =>
      API.region
        .getDongList({ siGunGuId: Number(searchParams.get('sigungu')) })
        .then((res: AxiosResponse<ResponseRegion[], any>) => {
          res.data.forEach((li, i) => {
            // if (Number(searchParams.get('dong')) === li.regionId) setDong(prev => ({ ...li }));
            // if (Number(searchParams.get('dong')) === li.regionId) setSelectedArea({ ...selectedArea, dong: { ...li } });
          });
          return res;
        }),
  });

  const handleSidoItemClick = (region: Region) => {
    handleQueryString('sido', region.regionId);
    siGunGuRefetch();
    siDoButton.current?.blur();
    siGunGuButton.current?.focus();
    if (selectedArea.sido !== 0 && selectedArea.sido !== region.regionId) {
      handleQueryString('sigungu', null);
      handleQueryString('dong', null);
    }
    setSelectedArea(prev => ({ ...prev, sido: region.regionId }));
  };

  const handleSiGunGuItemClick = (region: Region) => {
    // setSiGunGu(prev => ({ ...region }));

    if (region.regionId === 0) {
      handleQueryString('sigungu', null);
      handleQueryString('dong', null);
    } else {
      handleQueryString('sigungu', region.regionId);
      siGunGuButton.current?.blur();
      dongButton.current?.focus();
    }
    dongRefetch();
  };

  const handleDongItemClick = (region: Region) => {
    // setDong({ ...region });

    if (region.regionId === 0) {
      handleQueryString('dong', null);
    } else {
      handleQueryString('dong', region.regionId);
      dongButton.current?.blur();
    }
  };

  const concatFiltering = (origin: ResponseRegion[], upstream: ResponseRegion[] | undefined) => {
    return origin.concat(upstream ? upstream : []).filter(li => li);
  };

  return (
    <div className={S.wrapper}>
      <button className={S.areaContainer} ref={siDoButton}>
        {[selectedArea.sido]}
        <ul className={S.ulContainer}>
          {siDoListResponse?.data.map((sido: Region, i: number) => (
            <li key={`sido-${i}`} className={S.optionsItem} onClick={() => handleSidoItemClick({ ...sido })}>
              {/* {sido.regionName} */}
            </li>
          ))}
        </ul>
      </button>
      <hr className={S.styledHr} />
      <button className={S.areaContainer} ref={siGunGuButton}>
        {[selectedArea.siGunGu]}
        <ul className={S.ulContainer}>
          {concatFiltering([{ regionId: 0, regionName: '시/군/구 선택' }], siGunGuListResponse?.data).map(
            (siGunGu: Region, i: number) => (
              <li key={`siGunGu-${i}`} className={S.optionsItem} onClick={() => handleSiGunGuItemClick({ ...siGunGu })}>
                {/* {siGunGu.regionName} */}
              </li>
            ),
          )}
        </ul>
      </button>
      <hr className={S.styledHr} />
      <button className={S.areaContainer} ref={dongButton}>
        {[selectedArea.dong]}
        <ul className={S.ulContainer}>
          {concatFiltering([{ regionId: 0, regionName: '동 선택' }], dongListResponse?.data).map(
            (dong: Region, i: number) => (
              <li key={`dong-${i}`} className={S.optionsItem} onClick={() => handleDongItemClick({ ...dong })}>
                {/* {dong.regionName} */}
              </li>
            ),
          )}
        </ul>
      </button>
    </div>
  );
}
