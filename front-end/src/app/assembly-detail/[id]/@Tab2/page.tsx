'use client';

import React from 'react';
import * as API from '@/_apis/assembly';
import * as S from './page.css';
import * as T from '@/types';
import * as Comp from '@/components';
import { CATEGORY_LIST, PALETTE } from '@/_constants';
import { useInfiniteQuery } from '@tanstack/react-query';

export default function AssemblyDetailTab2({ params }: T.AssemblyDetailTab2Props) {
  // const { data } = useInfiniteQuery({
  //   queryKey: [{ assemblyDetail: `detail-${params.id}` }],
  //   queryFn: ({ pageParam = 0 }) => API.getAssemblyBill({ page: pageParam, assemblyId: params.id, take: 4 }),
  // });
  const {
    data,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
    ...result
  } = useInfiniteQuery({
    queryKey: [{ assemblyDetail: `detail-${params.id}` }],
    queryFn: ({ pageParam }) => API.getAssemblyBill({ page: pageParam, assemblyId: params.id, take: 4 }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      console.log(`GET NEXT :`, lastPage);
      return null;
    },
    getPreviousPageParam: (firstPage, allPages, firstPageParam, allPageParams) => {
      console.log(`GET PREV :`, firstPage);
      return null;
    },
  });

  console.log(`data.pages[0].data :`, data?.pages[0].data);
  console.log(`data.pageParams :`, data?.pageParams);
  console.log(`data.pages :`, data?.pages);

  return (
    <div className={S.window}>
      <div className={S.categoriesWrapper}>
        {CATEGORY_LIST.map((category, i) => (
          <Comp.Category
            key={i}
            categoryId={i}
            fontSize="13px"
            dynamicColorMode={true}
            iconWidth="32px"
            iconHeight="34px"
          />
        ))}
      </div>
      <section>
        {/* {data?.pages[0].data.map((res, i) => (
          <Comp.Bill key={res.billId} partycolor={PALETTE.party[]}
          partyname={}
          represent={}
          committee={}
          billtitle={}
          progressbar={}
          panelsectiondata={} ></Comp.Bill>
        ))} */}
        {/* <div><Comp.PieChart chartTitle='전체 의안 추진 현황' legendList={} UNIQUE_ID_FOR_LEGEND='assembly-member-bill-current-situation'/></div> */}
      </section>
    </div>
  );
}

billId: 87;
billName: '정부조직법 일부개정법률안';
billNo: '2126493';
cmitName: '행정안전위원회';
cmtPresentDt: null;
cmtProcDt: null;
cmtProcResultCd: null;
committeeDt: '2024-02-05';
detailLink: 'https://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_T2S4M0L1K1T7R1R0Z2X5E4D0C7B0J7';
hgName: '정점식';
lawPresentDt: null;
lawProcDt: null;
lawProcResultCd: null;
lawSubmitDt: null;
procDt: null;
procResult: null;
proposeDt: '2024-02-02';
proposer: '정점식의원 등 10인';
publProposer: 'EMPTY';
rstProposer: '정점식';
textBody: '제안이유 및 주요내용\r\n\r\n  생산가능인구 감소, 지역 소멸 등 인구 위기의 충격을 최소화하기 위해 적극적 이민정책이 필요하다는 사회적 요구가 많으나, 국가백년대계 관점에서 이민정책을 체계적ㆍ종합적으로 수립하고 이민과 관련한 각종 문제에 대해 능동적이고 책임있게 대처할 전담조직은 부재한 상황임.\r\n  주요 선진국은 물론, 주변국인 일본, 대만 등도 외국 우수인재 및 숙련인력을 확보하고 동시에 외국인 유입에 따른 부작용을 최소화하기 위해 이미 이민정책 전담조직을 설치하여 정책 역량을 강화하고 있는 만큼 우리나라도 이민정책 경쟁력 확보를 위한 전담조직 신설이 시급함.\r\n  이에 법무부의 외청으로 출입국ㆍ이민관리청을 설치하여 우리나라 상황에 부합한 출입국ㆍ이민정책을 수립하고, 이민을 둘러싼 복잡한 과제를 책임감 있게 수행할 수 있는 조직 기반을 마련하려는 것임(안 제32조 제4항 및 제5항 신설).';
