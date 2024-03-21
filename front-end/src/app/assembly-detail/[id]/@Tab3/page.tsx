'use client';

import React from 'react';
import * as T from '@/types';
import * as API from '@/_apis/assembly';
import * as S from './page.css';
import { useSuspenseQuery } from '@tanstack/react-query';

export default function AssemblyDetailTab3({ params }: T.AssemblyDetailTab3Props) {
  const { data: infoResponse, isFetched: infoFetched } = useSuspenseQuery({
    queryKey: [{ assemblyDetail: `info-request-${params.id}` }],
    queryFn: () => API.getAssemblyInfo({ assemblyId: params.id }),
    retry: false,
  });

  return (
    <form>
      <pre>{infoResponse.data.memTitle}</pre>
    </form>
  );
}
