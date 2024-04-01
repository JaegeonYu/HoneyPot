'use client';

import React from 'react';
import * as S from './page.css';
import * as API from '@/apis';
import { useQueries, useSuspenseInfiniteQuery } from '@tanstack/react-query';

export default function CandidatesPage() {
  // const {
  //   data: candidateList,
  //   isFetched: candidateListFetched,
  //   fetchNextPage: fetchNextCandidateList,
  // } = useSuspenseInfiniteQuery({
  //   queryKey: [`test`],
  //   queryFn: ({ pageParam }) =>
  //     API.cantidate.getCandidateList({ page: pageParam, limit: 10, sido: '', sigungu: '', dong: '' }),
  //   initialPageParam: 0,
  //   getNextPageParam: () => {
  //     return null;
  //   },
  // });
  return <div>PAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGE</div>;
}
