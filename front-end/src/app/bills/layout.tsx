'use client';

import React, { Suspense } from 'react';
import * as Comp from '@/components';
import * as T from '@/types';

import HotBill from '@/_components/HotBill/HotBIll';
import BillLoading from './@Tab1/loading';

export default function BillsLayout({ Tab1, Tab2 }: T.BillsLayoutProps) {
  return (
    <Suspense fallback={<BillLoading width="350px" height="43px"></BillLoading>}>
      <Comp.Tab tabTitleList={['전체 의안', '주목을 받았던 의안']} tabChildrenList={[Tab1, Tab2]}>
        {/* <Comp.SearchInput inputId="12" onChange={() => {}} value="" placeholder="hello world"></Comp.SearchInput> */}
      </Comp.Tab>
    </Suspense>
  );
}
