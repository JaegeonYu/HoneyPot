'use client';

import React from 'react';
import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';

import { useSearchParams } from 'next/navigation';

// import styles from './map.module.scss';

declare global {
  interface Window {
    kakao: any;
  }
}

function KakaoMap({ pollList }: { pollList: { name: string; address: string }[] }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  // console.log(pollList, 'poLLLIST');

  const [windowDefine, setWindowDefine] = useState(false);

  // var dongvalue= searchParams.get('dong')
  useEffect(() => {
    if (typeof window !== undefined) setWindowDefine(true);
  }, []);

  useEffect(() => {
    if (windowDefine && window.kakao) {
      const script = window.kakao.maps.load(() => {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div
          mapOption = {
            center: new window.kakao.maps.LatLng(37.531804, 126.915121), // 지도의 중심좌표
            level: 3, // 지도의 확대 레벨
          };

        // 지도를 생성합니다
        var map = new window.kakao.maps.Map(mapContainer, mapOption);

        // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new window.kakao.maps.services.Geocoder();
        // console.log(pollList, 'pl');
        // 주소로 좌표를 검색합니다
        var bounds = new window.kakao.maps.LatLngBounds(); //추가한 코드

        pollList.forEach(function (position) {
          //추가한 코드
          // 주소로 좌표를 검색합니다
          geocoder.addressSearch(position.address, function (result: any, status: any) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              var coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

              // 결과값으로 받은 위치를 마커로 표시합니다
              var marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });
              marker.setMap(map); //추가한 코드

              // LatLngBounds 객체에 좌표를 추가합니다
              bounds.extend(coords);

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              //변경한 코드
              // const infoWindow = document.
              var infowindow = new window.kakao.maps.InfoWindow({
                content:
                  '<div style="display:flex;width:fit-content;justify-contents:center;text-align:center;align-items:center;padding:6px 0;">' +
                  position.name +
                  '</div>',
              });
              // infowindow.open(map, marker);

              window.kakao.maps.event.addListener(marker, 'mouseover', function () {
                // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
                infowindow.open(map, marker);
              });

              // 마커에 마우스아웃 이벤트를 등록합니다
              window.kakao.maps.event.addListener(marker, 'mouseout', function () {
                // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
                infowindow.close();
              });

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              // map.setCenter(coords);
              map.setBounds(bounds);
            }
          });
        });
      });
    }
  }, [windowDefine, pollList]);

  return (
    <>
      <Script
        strategy="beforeInteractive"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false&libraries=services`}
      />
      {windowDefine && (
        <>
          <div id="map" style={{ width: '80vw', height: '60vh' }}></div>
        </>
      )}
    </>
  );
}

export default KakaoMap;
