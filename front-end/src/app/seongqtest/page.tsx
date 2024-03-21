'use client';

import React, { useState, useEffect, Suspense } from 'react';
import * as Comp from '@/components';
import * as S from './style.css';
import * as API from '@/_apis/bill';

import { CATEGORY_LIST } from '@/_constants';
import { PALETTE } from '@/_constants';
import { Category } from '@/components';
import { useSuspenseQuery } from '@tanstack/react-query';
// import { fontName } from '@/_components/Bill/Bill.css';

export default function SeongqTest() {
  const [isSelectedIdx, setIsSelectedIdx] = useState(0);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { data: infoResponse, isFetched: infoFetched } = useSuspenseQuery({
    queryKey: [{ bill: `info-request-billtest` }],
    queryFn: () => API.getBillInfo({ billId: '25999' }),
    retry: false,
  });

  const handleIsSelectedIdx = (idx: number) => {
    setIsSelectedIdx(idx);
  };

  console.log(infoResponse, 'INFO');

  const ddata = {
    party: '더불어민주당',
    attendance: 88,
    average: 76,
    top: ['김성제', '강건', '유잼건'],
    topattendance: [112, 90, 88],
    bottom: ['김가빈', '권준구', '조성규'],
    bottomattendance: [30, 20, 10],
    mostlaw: ['김성제', '강건', '유잼건'],
    mostcategory: [1, 3, 5],
  };

  const billdata = [
    {
      billId: 87,
      billName: '정부조직법 일부개정법률안',
      billNo: '2126493',
      cmitId: 3,
      cmitName: '행정안전위원회',
      cmtPresentDt: null,
      cmtProcDt: null,
      cmtProcResultCd: null,
      committeeDt: '2024-02-05',
      detailLink: 'https://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_T2S4M0L1K1T7R1R0Z2X5E4D0C7B0J7',
      hgName: '정점식',
      lawPresentDt: null,
      lawProcDt: null,
      lawProcResultCd: null,
      lawSubmitDt: null,
      procDt: null,
      procResult: null,
      proposeDt: '2024-02-02',
      proposer: '정점식의원 등 10인',
      publProposer: 'EMPTY',
      rstProposer: '정점식',
      textBody:
        '제안이유 및 주요내용\r\n\r\n  생산가능인구 감소, 지역 소멸 등 인구 위기의 충격을 최소화하기 위해 적극적 이민정책이 필요하다는 사회적 요구가 많으나, 국가백년대계 관점에서 이민정책을 체계적ㆍ종합적으로 수립하고 이민과 관련한 각종 문제에 대해 능동적이고 책임있게 대처할 전담조직은 부재한 상황임.\r\n  주요 선진국은 물론, 주변국인 일본, 대만 등도 외국 우수인재 및 숙련인력을 확보하고 동시에 외국인 유입에 따른 부작용을 최소화하기 위해 이미 이민정책 전담조직을 설치하여 정책 역량을 강화하고 있는 만큼 우리나라도 이민정책 경쟁력 확보를 위한 전담조직 신설이 시급함.\r\n  이에 법무부의 외청으로 출입국ㆍ이민관리청을 설치하여 우리나라 상황에 부합한 출입국ㆍ이민정책을 수립하고, 이민을 둘러싼 복잡한 과제를 책임감 있게 수행할 수 있는 조직 기반을 마련하려는 것임(안 제32조 제4항 및 제5항 신설).',
      summary: 'hello',
    },
    {
      billId: 87,
      billName: '정부조직법 일부개정dd법률안',
      billNo: '2126493',
      cmitId: 2,
      cmitName: '행정안전위원회',
      cmtPresentDt: null,
      cmtProcDt: null,
      cmtProcResultCd: null,
      committeeDt: '2024-02-05',
      detailLink: 'https://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_T2S4M0L1K1T7R1R0Z2X5E4D0C7B0J7',
      hgName: '정점식',
      lawPresentDt: null,
      lawProcDt: null,
      lawProcResultCd: null,
      lawSubmitDt: null,
      procDt: null,
      procResult: null,
      proposeDt: '2024-02-02',
      proposer: '정점식의원 등 10인',
      publProposer: 'EMPTY',
      rstProposer: '정점식',
      textBody:
        '제안이유 및 주요내용\r\n\r\n  생산가능인구 감소, 지역 소멸 등 인구 위기의 충격을 최소화하기 위해 적극적 이민정책이 필요하다는 사회적 요구가 많으나, 국가백년대계 관점에서 이민정책을 체계적ㆍ종합적으로 수립하고 이민과 관련한 각종 문제에 대해 능동적이고 책임있게 대처할 전담조직은 부재한 상황임.\r\n  주요 선진국은 물론, 주변국인 일본, 대만 등도 외국 우수인재 및 숙련인력을 확보하고 동시에 외국인 유입에 따른 부작용을 최소화하기 위해 이미 이민정책 전담조직을 설치하여 정책 역량을 강화하고 있는 만큼 우리나라도 이민정책 경쟁력 확보를 위한 전담조직 신설이 시급함.\r\n  이에 법무부의 외청으로 출입국ㆍ이민관리청을 설치하여 우리나라 상황에 부합한 출입국ㆍ이민정책을 수립하고, 이민을 둘러싼 복잡한 과제를 책임감 있게 수행할 수 있는 조직 기반을 마련하려는 것임(안 제32조 제4항 및 제5항 신설).',
      summary: null,
    },
  ];

  return (
    mounted && (
      <>
        {/* <Comp.Tab
          tabTitleList={['전체 의안', '주목을 받았던 의안']}
          tabChildrenList={[<div>ffdfd</div>, <div>fdfdfd</div>, <div></div>]}
        >
          <Comp.SearchInput inputId="12" onChange={() => {}} value="" placeholder="hello world"></Comp.SearchInput>
        </Comp.Tab> */}

        <div className={S.postWrapper}>
          <Comp.Poster posterwidth="360px" posterheight="100%">
            <Comp.PieChart
              chartTitle="의안 추진 현황"
              legendList={[
                { title: '이행', color: PALETTE.party.국민의힘[100] },
                { title: '진행중', color: PALETTE.party.국민의힘[80] },
                { title: '폐기', color: PALETTE.party.국민의힘[60] },
              ]}
              datasetList={[30, 40, 70]}
              legendDisplay={false}
              UNIQUE_ID_FOR_LEGEND="bill-list-current-situation"
            ></Comp.PieChart>
          </Comp.Poster>

          <Comp.Poster posterwidth="360px" posterheight="392px">
            <div className={S.textWrapper}>
              <p className={S.fontTitle}>가장 많이 발의한 분야</p>
              <p className={S.fontContent}></p>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                padding: '0px 8px',
              }}
            >
              {ddata.mostcategory.map((category, i) => (
                <div
                  key={`category-${i}`}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Category
                    categoryId={category}
                    dynamicColorMode={false}
                    iconWidth="24px"
                    iconHeight="28px"
                    fontSize="12px"
                  />
                </div>
              ))}
            </div>

            <div className={S.textWrapper}>
              <p className={S.fontTitle}>가장 많이 발의한 의원 </p>
            </div>
            <div className={S.textWrapper}>
              <p className={S.fontContent}>{ddata.mostlaw[0]}</p>
              <p className={S.fontContent}>{ddata.mostlaw[1]}</p>
              <p className={S.fontContent}>{ddata.mostlaw[2]}</p>
            </div>
          </Comp.Poster>
        </div>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-evenly' }}>
          {CATEGORY_LIST.map((category, i) => (
            <div key={`category-list-${i}`}>
              <div>
                <Category categoryId={i} dynamicColorMode={false} iconWidth="20px" iconHeight="24px" fontSize="12px" />
              </div>
            </div>
          ))}
        </div>
        <div className={S.headWrapper}>
          <p className={S.fontHead}>발의한 국회운영 의안</p>
          <p className={S.fontSub}>{billdata.length}개의 검색결과</p>
        </div>
        {/* <form>
          <pre>{infoResponse.data}</pre>
        </form> */}
        <div>{infoResponse.data.billProgressResponse.resultCd[1]}</div>

        {/* <Comp.Bill {...bill}></Comp.Bill> */}
        {/* <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px', padding: 16 }}>
          {billdata.map((bills, index) => (
            <Comp.Bill key={index} {...bills} />
          ))}
        </div> */}

        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px', padding: 16 }}>
          <Comp.Bill {...infoResponse.data} />
        </div>
      </>
    )
  );
}
