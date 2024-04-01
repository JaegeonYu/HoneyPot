'use client';

import React, { useCallback } from 'react';
import * as S from './page.css';
import * as API from '@/apis';
import * as Comp from '@/components';
import { useSuspenseQuery } from '@tanstack/react-query';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function UserInteractionSection() {
  // const router = useRouter();
  // const pathname = usePathname();
  // const searchParams = useSearchParams();

  // const handleQueryString = useCallback(() => {
  //   const params = new URLSearchParams(searchParams.toString());
  // }, [searchParams]);

  // const { data: siDoListResponse, isFetched: siDoListFetched } = useSuspenseQuery({
  //   queryKey: [{ candidate: `si-do-list` }],
  //   queryFn: () => API.cantidate.getCandianteSiDoList(),
  //   retry: false,
  // });

  //   const { data: siGunGuListResponse, isFetched: siGunGuListFetched } = useSuspenseQuery({
  //     queryKey: [{ candidate: `si-gun-gu-list` }],
  //     queryFn: () => API.cantidate.getCandianteSiGunGuList(),
  //     retry: false,
  //   });

  //   const { data: dongListResponse, isFetched: dongListFetched } = useSuspenseQuery({
  //     queryKey: [{ candidate: `dong-list` }],
  //     queryFn: () => API.cantidate.getCandianteDongList(),
  //     retry: false,
  //   });

  return (
    // <Comp.AreaSelector>
    //   UserInteractionSectionUserInteractionSectionUserInteractionSectionUserInteractionSectionUserInteractionSectionUserInteractionSection
    // </Comp.AreaSelector>
    <>
      UserInteractionSectionUserInteractionSectionUserInteractionSectionUserInteractionSectionUserInteractionSectionUserInteractionSection
    </>
  );
}
