'use client';

import React from 'react';
import * as T from '@/types';
import * as API from '@/_apis/assembly';
import { decode } from 'html-entities';
import { useSuspenseQuery } from '@tanstack/react-query';

export default function AssemblyTab3({ params }: T.AssemblyTab3Props) {
  const { data: infoResponse, isFetched: infoFetched } = useSuspenseQuery({
    queryKey: [{ assembly: `info-request-${params.id}` }],
    queryFn: () => API.getAssemblyInfo({ assemblyId: params.id }),
    retry: false,
  });

  return (
    <form>
      <pre>{decode(infoResponse.data.memTitle)}</pre>
    </form>
  );
}
