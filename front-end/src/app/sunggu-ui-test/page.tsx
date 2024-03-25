'use client';

import React, { Suspense } from 'react';
import * as Comp from '@/components';
import SeongqTest from '@/seongqtest/page';
import HotBill from '@/_components/HotBill/HotBIll';
import BillLoading from '@/seongqtest/loading';

export default function SungguUiTest() {
  return (
    <Suspense fallback={<BillLoading width="350px" height="43px"></BillLoading>}>
      <Comp.Tab
        tabTitleList={['전체 법안', '주목을 받았던 ']}
        tabChildrenList={[
          <SeongqTest key={`bill-list-${0}`}></SeongqTest>,
          <Comp.HotBillPageTest key={`bill-list-${1}`}></Comp.HotBillPageTest>,
        ]}
      >
        {/* <Comp.SearchInput inputId="12" onChange={() => {}} value="" placeholder="hello world"></Comp.SearchInput> */}
      </Comp.Tab>
    </Suspense>
  );
}
