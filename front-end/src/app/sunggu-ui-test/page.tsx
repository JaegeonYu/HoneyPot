'use client';

import React from 'react';
import * as Comp from '@/components';
import SeongqTest from '@/seongqtest/page';
import HotBill from '@/_components/HotBill/HotBIll';

export default function SungguUiTest() {
  return (
    <>
      <Comp.Tab
        tabTitleList={['전체 의안', '주목을 받았던 의안']}
        tabChildrenList={[
          <SeongqTest key={`bill-list-${0}`}></SeongqTest>,
          <Comp.HotBillPageTest key={`bill-list-${1}`}></Comp.HotBillPageTest>,
        ]}
      >
        <Comp.SearchInput inputId="12" onChange={() => {}} value="" placeholder="hello world"></Comp.SearchInput>
      </Comp.Tab>
    </>
  );
}
