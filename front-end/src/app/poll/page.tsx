'use client';
import type { NextPage } from 'next';
import * as API from '@/_apis/election';

import { useSearchParams } from 'next/navigation';

import KakaoMap from '@/_components/KakaoMap/KakaoMap';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
// import NaverMap from '@/_components/NaverMap/NaverMap';

export default function Poll() {
  const searchParams = useSearchParams();

  const [page, setPage] = useState(1); // 페이지 상태 추가
  const [size, setSize] = useState(100); // 한 페이지에 보일 아이템 개수 상태 추가
  const [sido, setSido] = useState<string | null>('서울특별시'); // 한 페이지에 보일 아이템 개수 상태 추가
  const [gugun, setGugun] = useState<string | null>('종로구'); // 한 페이지에 보일 아이템 개수 상태 추가
  const [dong, setDong] = useState<string | null>();
  const [pollList, setPollList] = useState<{ name: string; address: string }[]>([]);

  // console.log(searchParams.get('sido'), '==============');
  // let dong = searchParams.get('dong');

  useEffect(() => {
    if (searchParams.get('sido') !== null || searchParams.get('sigungu') !== null) {
      setSido(searchParams.get('sido'));
      setGugun(searchParams.get('sigungu'));
      setDong(searchParams.get('dong'));
    }
  }, [sido, gugun, dong, searchParams]);

  const { data: pollResponse, isFetched: pollFetched } = useQuery({
    queryKey: [{ bill: `info-request-poll-list` }, { page, size, sido, gugun }], // 쿼리 키에 page와 limit 추가
    queryFn: () => API.getPoll({ sido, gugun, page, size }), // API 호출 시 동적으로 page와 limit 전달
    retry: false,
  });
  // console.log(pollResponse?.data);
  // const {convertXML, createAST} = require("simple-xml-to-json")

  // const myJson = convertXML(myXMLString)

  useEffect(() => {
    // 데이터가 변경되면 isActive 상태를 false로 초기화
    if (pollFetched && pollResponse && gugun) {
      // console.log(pollResponse.data.response.body.totalCount, 'pollResponse');
      // console.log(pollResponse.data.response.body.items, 'pollResponse');
      let data = pollResponse.data.response.body.items.item;
      let temparr: any = [];
      data.forEach(function (res: any) {
        // console.log(res, 'here');
        // console.log(typeof dong, 'dong');
        let address = res.addr;
        let name = res.placeName;
        let emd = res.emdName;
        if (dong !== '') {
          if (emd === dong) {
            temparr.push({ name, address });
          }
        } else {
          temparr.push({ name, address });
          // console.log('동이 없어요');
        }
      });

      setPollList(temparr);
    }
  }, [pollFetched, pollResponse, gugun, dong]);
  return (
    <div>
      <KakaoMap pollList={pollList || []}></KakaoMap>{' '}
    </div>
  );
}
