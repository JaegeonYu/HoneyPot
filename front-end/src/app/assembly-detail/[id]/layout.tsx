'use client';

import React from 'react';
import * as S from './layout.css';
import * as API from '@/_apis/assembly';
import * as T from '@/types';
import * as Comp from '@/components';
import * as SubComp from './_Subs';
import * as Icon from '@/_assets/icon';
import { useQueries, useQuery } from '@tanstack/react-query';

const DUMMY = {
  assemblyId: 258,
  assemblyImgUrl: 'http://www.assembly.go.kr/photo/9770984.jpg',
  polyName: '더불어민주당',
  monaCd: 'GFF1986K',
  hgName: '김병욱',
  hjName: '金炳旭',
  engName: 'KIM BYUNGWOOK',
  birthDate: '1965-04-15',
  origName: '경기 성남시분당구을',
  reeleGbn: '재선',
  units: '제20대, 제21대',
  gender: '남',
  memTitle:
    '[더불어민주당 김병욱 국회의원(분당을)]\r\n\r\n부산 배정고 졸업\r\n한양대 법학과 (4년 장학생조건으로 입학) 졸업\r\n고려대 MBA 졸업\r\n국민대 경영학 박사 \r\n\r\n(현)  제21대 국회의원 (경기 성남시분당구을/더불어민주당)\r\n(현)  제21대 국회 전반기 정무위원회 위원 간사\r\n(현)  더불어민주당 자본시장활성화 위원장\r\n(현)  더불어민주당 정책위원회 상임부의장\r\n(현)  더불어민주당 기후변화대응 및 에너지전환산업육성특별위원회 위원\r\n(현)  더불어민주당 혁신성장추진위원회 위원\r\n(현)  더불어민주당 을지로위원회 책임위원\r\n\r\n(전)  제20대 국회의원 (경기 성남시분당구을/더불어민주당)\r\n(전)  제20대 국회 후반기 정무위원회 위원 \r\n(전)  제20대 국회 후반기 국회운영위원회 위원\r\n(전)  더불어민주당 원내부대표 \r\n(전)  제20대 국회 전반기 교육문화체육관광위원회 위원\r\n(전)  제20대 국회 전반기 예산결산특별위원회 위원\r\n(전)  제20대 국회 미세먼지 대책 특별위원회 위원\r\n(전)  제19대 대선 문재인 후보 선거대책위원회 대변인\r\n(전)  제19대 대선 문재인 후보 경기도당 선거대책본부 공동본부장\r\n\r\n(전)  가천대학교 경영학과 겸임교수\r\n(전)  성남정책포럼 공동대표\r\n(전)  경제정의실천시민연합 상임집행위원\r\n(전)  전국증권유관기관노조협의회 의장\r\n(전)  분당구탁구연합회 회장\r\n(전)  국민대학교 겸임교수\r\n(전)  한국증권업협회(현 금융투자협회) 코스닥공시과장',
  email: '777byung@naver.com',
  plenaryAttendance: 0,
  standingAttendance: 0,
};

export default function AssemblyDetailLayout({ Tab1, Tab2, Tab3, params }: T.AssemblyDetailLayoutProps) {
  // const [infoResponse, mostCategoriesResponse, snsResponse] = useQueries({
  //   queries: [
  //     {
  //       queryKey: [{ assemblyDetail: `info-request-${params.id}` }],
  //       queryFn: () => API.getAssemblyInfo({ assemblyId: params.id }),
  //     },
  //     {
  //       queryKey: [{ assemblyDetail: `most-categories-request-${params.id}` }],
  //       queryFn: () => API.getAssemblyMostCategories({ assemblyId: params.id }),
  //     },
  //     {
  //       queryKey: [{ assemblyDetail: `sns-request-${params.id}` }],
  //       queryFn: () => API.getAssemblySns({ assemblyId: params.id }),
  //     },
  //   ],
  // });
  // console.log(`infoResponse :`, infoResponse);
  // console.log(`mostCategoriesResponse :`, mostCategoriesResponse);
  // console.log(`snsResponse :`, snsResponse);

  return (
    <>
      <section className={S.mainSectionWrapper}>
        <ul>
          <SubComp.AssemblyCard {...DUMMY} />
          <div className={S.snsWrapper}>
            <button className={S.snsItem}>
              <Icon.YoutubeLogo />
            </button>
            <button className={S.snsItem}>
              <Icon.XLogo />
            </button>
            <button className={S.snsItem}>
              <Icon.FaceboookLogo />
            </button>
            <button className={S.snsItem}>
              <Icon.HomePageLogo />
            </button>
          </div>
        </ul>
        <section className={S.rightOfMainContent}>
          <SubComp.Charts polyName={DUMMY.polyName} />
          <SubComp.TopBillCategories />
        </section>
      </section>
      <section className={S.tabSectionWrapper}>
        <Comp.Tab tabTitleList={['공약', '의안', '약력']} tabChildrenList={[Tab1, Tab2, Tab3]} />
      </section>
    </>
  );
}
