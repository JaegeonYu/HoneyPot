// import React, { useState } from 'react';
// import { Pagination } from '@/_components';
// import * as Comp from '@/components';
// import * as T from '@/types';
// import { useSuspenseQuery } from '@tanstack/react-query';
// import * as API from '@/_apis/bill';

// export default function BillList({ category }: T.BillListProps) {
//   const [page, setPage] = useState(0); // 페이지 상태 추가
//   const [limit, setLimit] = useState(10); // 한 페이지에 보일 아이템 개수 상태 추가

//   const handlePageChange = (newPage: number) => {
//     setPage(newPage);
//   };

//   const { data: billResponse, isFetched: billFetched } = useSuspenseQuery({
//     queryKey: [{ bill: `info-request-bill-list` }, { page, limit, category }], // 쿼리 키에 page와 limit 추가
//     queryFn: () => API.getBillInfo({ cmit: category, page, limit, word: '' }), // API 호출 시 동적으로 page와 limit 전달
//     retry: false,
//   });

//   return (
//     <>
//       <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px', padding: 16 }}>
//         {billResponse.data.billResponse.map((res: T.BillProps, index: number) => (
//           <Comp.Bill key={index} {...res} />
//         ))}
//       </div>

//       <Pagination
//         currentPage={page}
//         onPageChange={handlePageChange}
//         // limit={limit}
//         // onLimitChange={handleLimitChange}
//         totalItems={billResponse.data.billStatResponse.totalCount}
//       ></Pagination>
//     </>
//   );
// }
