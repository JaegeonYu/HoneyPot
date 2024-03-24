// 'use client';

// import React, { useState } from 'react';
// import * as Comp from '@/components';
// import * as S from './style.css';
// import { Category } from '@/components';
// import { PieChart } from '@/components';
// import { CATEGORY_LIST } from '@/_constants';
// // import { fontName } from '@/_components/Bill/Bill.css';

// export default function JunguTest() {
//   const [isSelectedIdx, setIsSelectedIdx] = useState(0);
//   const handleIsSelectedIdx = (idx: number) => {
//     setIsSelectedIdx(idx);
//   };
//   const data = {
//     party: '더불어민주당',
//     attendance: 88,
//     average: 76,
//     top: ['김성제', '강건', '유잼건'],
//     topattendance: [112, 90, 88],
//     bottom: ['김가빈', '권준구', '조성규'],
//     bottomattendance: [30, 20, 10],
//     mostlaw: ['김성제', '강건', '유잼건'],
//   };

//   return (
//     <>
//       <div className={S.mainContainer}>
//         <div className={S.partyLogo}>더블어민주당</div>
//         <div className={S.statisticsContainer}>
//           <Comp.Poster>
//             <div style={{ width: 260 }}>
//               <PieChart
//                 chartTitle="의원 수"
//                 legendList={[
//                   { title: '참석', color: '#152484' },
//                   { title: '불참', color: '#DDDDDD' },
//                 ]}
//                 datasetList={[53.2, 46.8]}
//                 legendDisplay={false}
//                 UNIQUE_ID_FOR_LEGEND="assembly-member-bill-current-situation"
//               />
//               158 명 / 297 명
//             </div>
//           </Comp.Poster>

//           <Comp.Poster>
//             <div className={S.textWrapper} style={{ rowGap: 2 }}>
//               <p className={S.fontTitle}>{data.party}평균 출석률</p>
//               <p className={S.fontContent}>{data.attendance} %</p>
//             </div>
//             <div className={S.textWrapper}>
//               <p className={S.fontTitle}>출석률 상위 (전체 평균 {data.average} 건) </p>
//               <p className={S.fontContent}>
//                 {data.top[0]} ({data.topattendance[0]} 건)
//               </p>
//               <p className={S.fontContent}>
//                 {data.top[1]} ({data.topattendance[1]} 건)
//               </p>
//               <p className={S.fontContent}>
//                 {data.top[2]} ({data.topattendance[2]} 건)
//               </p>
//             </div>
//             <div className={S.textWrapper}>
//               <p className={S.fontTitle}>출석률 하위 (전체 평균 {data.average} 건) </p>
//               <p className={S.fontContent}>
//                 {data.bottom[1]} ({data.bottomattendance[0]} 건)
//               </p>
//               <p className={S.fontContent}>
//                 {data.bottom[0]} ({data.bottomattendance[1]} 건)
//               </p>
//               <p className={S.fontContent}>
//                 {data.bottom[2]} ({data.bottomattendance[2]} 건)
//               </p>
//             </div>
//           </Comp.Poster>
//           <Comp.Poster>
//             <div className={S.textWrapper}>
//               <p className={S.fontTitle}>가장 많이 발의한 분야</p>
//               <p className={S.fontContent}>여기에 이미지 컴포넌트</p>
//             </div>
//             <div className={S.textWrapper}>
//               <p className={S.fontTitle}>가장 많이 발의한 의원 </p>
//               <p className={S.fontContent}>{data.mostlaw[0]}</p>
//               <p className={S.fontContent}>{data.mostlaw[1]}</p>
//               <p className={S.fontContent}>{data.mostlaw[2]}</p>
//             </div>
//           </Comp.Poster>
//         </div>
//       </div>

//       <div className={S.tabBarContainer}>
//         <Comp.Tab
//           selectedIdx={isSelectedIdx}
//           selectedIdxHandler={handleIsSelectedIdx}
//           tabTitleList={['국회의원', '의안']}
//         />
//       </div>

//       <div className={S.mainContainer}>
//         <div className={S.sectionHeader}>
//           <p className={S.fontHead}>분야별 발의 현황</p>
//         </div>

//         <div className={S.categoryListContainer}>
//           {CATEGORY_LIST.map((category, i) => (
//             <div key={`category-${i}`}>
//               <div className={S.categoryCard}>
//                 <Category
//                   categoryId={i}
//                   color={{ default: '#717171', hover: '#000000', focus: '#000000' }}
//                   width="30px"
//                   height="34px"
//                 />
//                 <p className={S.name}>{category.name}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className={S.billListContainer}>
//           <Comp.Bill></Comp.Bill>
//           <Comp.Bill></Comp.Bill>
//           <Comp.Bill></Comp.Bill>
//           <Comp.Bill></Comp.Bill>
//         </div>
//       </div>
//     </>
//   );
// }
