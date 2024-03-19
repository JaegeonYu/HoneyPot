import React from 'react';
import * as Comp from '@/components';

export default function HotBillPageTest() {
  return (
    <>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px', padding: 16 }}>
        <Comp.HotBill></Comp.HotBill>
        <Comp.HotBill></Comp.HotBill>
        <Comp.HotBill></Comp.HotBill>
      </div>
    </>
  );
}
