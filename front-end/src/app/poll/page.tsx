'use client';
import type { NextPage } from 'next';
import * as API from '@/_apis/election';
import * as Comp from '@/components';

import { useSearchParams } from 'next/navigation';

import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
// import NaverMap from '@/_components/NaverMap/NaverMap';

export default function Poll() {
  const searchParams = useSearchParams();

  const [pollList, setPollList] = useState<{ name: string; address: string }[]>([]);
  const [isTotalCountOverflow, setIsTotalCountOverflow] = useState(false);

  const { data: initialPollResponse, isFetched: initialPollResponseFetched } = useQuery({
    queryKey: [
      { poll: `initial-request` },
      { page: 1, size: 100, sido: searchParams.get('sido'), gugun: searchParams.get('gungu') },
    ], // 쿼리 키에 page와 limit 추가
    queryFn: () =>
      API.getPoll({ page: 1, size: 100, sido: searchParams.get('sido'), gugun: searchParams.get('gungu') }).then(
        res => {
          console.log(`INITIAL :`, res.data);
          if (res.data.response.body.totalCount > 100) {
            setIsTotalCountOverflow(true);
          }
          return res.data;
        },
      ), // API 호출 시 동적으로 page와 limit 전달
    retry: false,
  });

  const { data: optionalPollResponse, isFetched: optionalPollResponseFetched } = useQuery({
    queryKey: [
      { poll: `optional-request` },
      { page: 2, size: 100, sido: searchParams.get('sido'), gugun: searchParams.get('gungu') },
    ], // 쿼리 키에 page와 limit 추가
    queryFn: () =>
      API.getPoll({ page: 1, size: 100, sido: searchParams.get('sido'), gugun: searchParams.get('gungu') }).then(
        res => {
          console.log(`OPTIONAL :`, res.data);
          return res.data;
        },
      ), // API 호출 시 동적으로 page와 limit 전달
    retry: false,
    enabled: isTotalCountOverflow,
  });
  // if 동이 선택이 됐으면 list 배열 필터링 된 것으로 초기화
  // else if 동

  // useEffect(() => {
  //   // 데이터가 변경되면 isActive 상태를 false로 초기화
  //   if (pollFetched && pollResponse && gugun) {
  //     // console.log(pollResponse.data.response.body.totalCount, 'pollResponse');
  //     // console.log(pollResponse, 'pollResponse');
  //     let data = pollResponse.response.body.items.item;
  //     let temparr: any = [];
  //     data.forEach(function (res: any) {
  //       // console.log(res, 'here');
  //       // console.log(typeof dong, 'dong');
  //       let address = res.addr;
  //       let name = res.placeName;
  //       let emd = res.emdName; // -> 동
  //       if (dong !== '') {
  //         if (emd === dong) {
  //           temparr.push({ name, address });
  //         }
  //       } else {
  //         temparr.push({ name, address });
  //         // console.log('동이 없어요');
  //       }
  //     });

  //     setPollList(temparr);
  //   }
  // }, [pollFetched, pollResponse, gugun, dong]);

  return <div>{/* <Comp.KakaoMap pollList={pollList || []}></Comp.KakaoMap>{' '} */}</div>;
}
