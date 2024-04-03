import React, { useState } from 'react';
import * as Comp from '@/components';
import { useSuspenseQuery } from '@tanstack/react-query';

import * as API from '@/_apis/bill';
import * as T from '@/types';
import Pagination from '@/_components/Pagination/Pagination';

export default function HotBillPageTest() {
  const [page, setPage] = useState(0); // 페이지 상태 추가
  const [size, setSize] = useState(10); // 한 페이지에 보일 아이템 개수 상태 추가

  const { data: billResponse, isFetched: billFetched } = useSuspenseQuery({
    queryKey: [{ bill: `info-request-hotbill-list` }, { page, size }], // 쿼리 키에 page와 size 추가
    queryFn: () => API.getHotBillInfo({ page, size }), // API 호출 시 동적으로 page와 size 전달
    retry: false,
  });

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px', padding: 16 }}>
        {billResponse.data.hotIssues.map((res: T.HotBillProps, index: number) => (
          <Comp.HotBill key={index} {...res} />
        ))}
      </div>
      <Pagination
        currentPage={page}
        onPageChange={handlePageChange}
        // limit={limit}
        // onLimitChange={handleLimitChange}
        totalItems={billResponse.data.totalElements}
      ></Pagination>
    </>
  );
}
