import { instance } from '../instance';

// export async function getBillInfo({ billId }: { billId: string }) {
//   return await instance.get(`/bill/${billId}`);
// }

export async function getBillInfo({
  page,
  limit,
  cmit,
  word,
}: {
  page: number;
  limit: number;
  cmit: number;
  word: string | undefined;
}) {
  return await instance.get(`/bill?page=${page}&limit=${limit}&cmit=${cmit}&word=${word}`);
}

export async function getHotBillInfo({ page, size }: { page: number; size: number }) {
  return await instance.get(`hot-issue?page=${page}&size=${size}`);
}
