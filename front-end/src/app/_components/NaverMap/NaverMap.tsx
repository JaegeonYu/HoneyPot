// import { useEffect, useRef } from 'react';

// type Props = {
//   mapId?: string;
//   initialCenter?: [37.5262411, 126.99289439];
//   initialZoom?: number;
//   onLoad?: (map: naver.maps.Map) => void;
// };

// export default function NaverMap  ()  {
//   const mapRef = useRef<naver.maps.Map | null>(null);

//   const initializeMap = () => {
//     const mapOptions = {
//       center: new window.naver.maps.LatLng([37.5262411, 126.99289439]),
//       zoom: 10,
//       minZoom: 9,
//       scaleControl: false,
//       mapDataControl: false,
//       logoControlOptions: {
//         position: naver.maps.Position.BOTTOM_LEFT,
//       },
//     };
//     //새로운 네이버 맵 인스턴스 생성
//     const map = new window.naver.maps.Map(mapId, mapOptions);
//     mapRef.current = map;

//     if (onLoad) {
//       onLoad(map);
//     }
//   };

//   //맵이 unmount되었을 때 맵 인스턴스 destory하기
//   useEffect(() => {
//     return () => {
//       mapRef.current?.destroy();
//     };
//   }, []);

//   return (
//     <>
//       <div id="1" style={{ width: '100px', height: '100px' }} />
//     </>
//   );
// };
