import { instance } from '../instance';

// export async function getBillInfo({ billId }: { billId: string }) {
//   return await instance.get(`/bill/${billId}`);
// }

export async function getBillInfo({
  page,
  limit,
  cmit,
  word,
  accept,
}: {
  page: number;
  limit: number;
  cmit: number;
  word: string | undefined;
  accept: boolean | undefined;
}) {
  return await instance.get(`/bill?page=${page}&limit=${limit}&cmit=${cmit}&word=${word}&accept=${accept}`);
}
export async function getSummaryBill({ billId }: { billId: number }) {
  return await instance.get(`bill/${billId}/summary`);
}

export async function getHotBillInfo({ page, size }: { page: number; size: number }) {
  return await instance.get(`hot-issue?page=${page}&size=${size}`);
}

export async function getCompleteBill({ page, limit, cmit }: { page: number; limit: number; cmit: number }) {
  return await instance.get(`/bill/accept?page=${page}&limit=${limit}&cmit=${cmit}`);
}
