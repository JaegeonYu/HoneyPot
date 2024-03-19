'use client';

import React from 'react';
import * as Comp from '@/components';
import SeongqTest from '@/seongqtest/page';

export default function SungguUiTest() {
  return (
    <>
      <Comp.Tab
        tabTitleList={['전체 의안', '주목을 받았던 의안']}
        tabChildrenList={[<SeongqTest></SeongqTest>, <div>f4</div>]}
      >
        <Comp.SearchInput inputId="12" onChange={() => {}} value="" placeholder="hello world"></Comp.SearchInput>
      </Comp.Tab>
    </>
  );
}
