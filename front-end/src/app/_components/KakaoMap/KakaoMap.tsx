'use client';

import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';

// import styles from './map.module.scss';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function KakaoMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  const [windowDefine, setWindowDefine] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) setWindowDefine(true);
  }, []);

  useEffect(() => {
    if (windowDefine && window.kakao) {
      const script = window.kakao.maps.load(() => {
        const geocoder = new window.kakao.maps.services.Geocoder();
        console.log(geocoder);
        geocoder.addressSearch('경기도 남양주시 천마산로 65 (호평동)', (result: any, status: any) => {
          if (status === window.kakao.maps.services.Status.OK) {
            var coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
            console.log(result[0].y, result[0].x);
            const options = {
              //지도를 생성할 때 필요한 기본 옵션
              center: coords, //지도의 중심좌표.
              level: 3, //지도의 레벨(확대, 축소 정도)
            };
            const map = new window.kakao.maps.Map(mapRef.current, options);
            new window.kakao.maps.Marker({
              map: map,
              position: coords,
            });
          } else {
            console.log('WHAT?');
            const options = {
              //지도를 생성할 때 필요한 기본 옵션
              center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
              level: 3, //지도의 레벨(확대, 축소 정도)
            };

            const map = new window.kakao.maps.Map(mapRef.current, options); //지도 생성 및 객체 리턴
            new window.kakao.maps.Marker({
              map: map,
              position: coords,
            });
          }
        });
      });
    }
  }, [windowDefine]);

  return (
    <>
      <Script
        strategy="beforeInteractive"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false&libraries=services`}
      />
      {windowDefine && (
        <>
          <div ref={mapRef} style={{ width: 500, height: 500 }}></div>
        </>
      )}
    </>
  );
}
