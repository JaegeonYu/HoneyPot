'use client';
import type { NextPage } from 'next';
import * as API from '@/_apis/election';

import KakaoMap from '@/_components/KakaoMap/KakaoMap';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
// import NaverMap from '@/_components/NaverMap/NaverMap';

export default function Poll() {
  const [page, setPage] = useState(1); // 페이지 상태 추가
  const [size, setSize] = useState(100); // 한 페이지에 보일 아이템 개수 상태 추가
  const [sido, setSido] = useState('서울특별시'); // 한 페이지에 보일 아이템 개수 상태 추가
  const [gugun, setGugun] = useState('종로구'); // 한 페이지에 보일 아이템 개수 상태 추가
  const [pollList, setPollList] = useState<{ name: string; address: string }[]>([]);

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
    if (pollResponse) {
      const { convertXML, createAST } = require('simple-xml-to-json');
      const myJson = convertXML(pollResponse.data);
      const total = myJson.response.children[1].body.children[3].totalCount.content;
      let temparr = [];
      for (let i = 0; i < total; i++) {
        // console.log(myJson.response.children[1].body.children[3].totalCount.content);
        // myJson.response.children[1].body.children[0].items.children[i].item.children[7].addr.content
        let name = myJson.response.children[1].body.children[0].items.children[i].item.children[2].psName.content;
        let address = myJson.response.children[1].body.children[0].items.children[i].item.children[7].addr.content;
        temparr.push({ name, address });
      }
      // console.log(temparr);
      setPollList(temparr);
      // console.log('바뀌지?');
    }
  }, [pollResponse, size]);
  return (
    <div>
      <button>dd</button>
      <KakaoMap pollList={pollList || []}></KakaoMap>{' '}
    </div>
  );
}
