'use client';

import React from 'react';
import * as S from './page.css';
import * as T from '@/types';
import * as API from '@/_apis/assembly';
import * as Comp from '@/components';
import { useSuspenseQuery } from '@tanstack/react-query';

export default function AssemblyTab1({ params }: T.AssemblyTab1Props) {
  const { data: infoResponse, isFetched: infoFetched } = useSuspenseQuery({
    queryKey: [{ assembly: `info-request-${params.id}` }],
    queryFn: () => API.getAssemblyInfo({ assemblyId: params.id }),
    retry: false,
  });

  return (
    <section className={S.wrapper}>
      <h2 className={S.titleWrapper}>
        <span className={S.title}>공약</span>
        <span className={S.totalContWrapper}>
          총 <span className={S.number}>N</span>개
        </span>
      </h2>
      <ul className={S.pledgeWrapper}>
        {DUMMY.map((el, i) => (
          <Comp.Pledge key={`pledge-${el.id}`} {...el} polyName={infoResponse.data.polyName} />
        ))}
      </ul>
    </section>
  );
}

const DUMMY = [
  {
    turn: '1',
    id: '1',
    pledge_fulfillment_rate_id: '1',
    content_division_continued_new: '지속',
    content_division_in_term_out_term: '임기내',
    executed_budget_amount: '억원',
    execution_details: '-', // 집행내역 :
    fulfillment_rate: '추진중',
    general_scope: '',
    legislative_details: ' -  ', // 입법내역 :
    legislative_name: '행정수도 세종시 완성 위한 개헌', // 입법명 :
    nature_division_legislation_finance: '입법',
    nature_division_national_regional: '국정',
    other_implementation_basis:
      '-의원실, ‘국민개헌의 방향과 방안 국회 대토론회’ 주최(21.12.20.) -민주당, 행정수도완성추진단 출범(20.7월) 및 특별위원회(국가균형발전특위)로 격상(20.12월) * 강준현 의원, 민주당 국가균형발전특위 부위원장으로 지속 활동 -김진표 국회의장, 개헌 추진 언급(22.8.21.)', // 기타이행근거 :
    pledge_name: '행정수도 세종시 완성 위한 개헌', // 공약명 :
    pledge_summary: '-행정수도로서의 기능 완성을 위해 개헌을 통해 ‘수도’는 법률로서 정하도록 명시', // 공약내용요약 :
    plenary_session_resolution: '',
    proposal: '',
    required_budget_amount: '억원',
    secured_budget_amount: '억원',
    secured_details: '-', // 확보내역 :
    standing_committee: '',
  },
  {
    turn: '12',
    id: '12',
    pledge_fulfillment_rate_id: '1',
    content_division_continued_new: '지속',
    content_division_in_term_out_term: '임기내',
    executed_budget_amount: '억원',
    execution_details: '-', // 집행내역 :
    fulfillment_rate: '폐기',
    general_scope: '',
    legislative_details: ' -  ', // 입법내역 :
    legislative_name: '', // 입법명 :
    nature_division_legislation_finance: '재정',
    nature_division_national_regional: '지역',
    other_implementation_basis: '-내부순환/보조BRT 운행 개시(21.2.5.) -', // 기타이행근거 :
    pledge_name: '도심 순환지선 신설 추진', // 공약명 :
    pledge_summary: '- 세종시 내부를 순환하는 BRT 순횐노선 신설', // 공약내용요약 :
    plenary_session_resolution: '',
    proposal: '',
    required_budget_amount: '억원',
    secured_budget_amount: '억원',
    secured_details: '-', // 확보내역 :
    standing_committee: '',
  },
  {
    turn: '4',
    id: '4',
    pledge_fulfillment_rate_id: '1',
    content_division_continued_new: '지속',
    content_division_in_term_out_term: '임기내',
    executed_budget_amount: '억원',
    execution_details: '-', // 집행내역 :
    fulfillment_rate: '완료',
    general_scope: '○',
    legislative_details: ' -세종시에 국회 세종의사당 설치를 위한 근거법 마련 - 20.6.10. 발의 / 21.9.28. 본회의 통과', // 입법내역 :
    legislative_name: '국회법 일부개정법률안', // 입법명 :
    nature_division_legislation_finance: '입법',
    nature_division_national_regional: '국정',
    other_implementation_basis:
      '- 국회 세종의사당 설치법 통과 이후 기본계획 연구용역 중 - 2021년도 예산안에 국회 세종의사당 설계비 127억원 확보', // 기타이행근거 :
    pledge_name: '국회세종의사당 설치', // 공약명 :
    pledge_summary: '-국회 세종의사당 설치', // 공약내용요약 :
    plenary_session_resolution: '○',
    proposal: '○',
    required_budget_amount: '억원',
    secured_budget_amount: '억원',
    secured_details: '-', // 확보내역 :
    standing_committee: '○',
  },
];
