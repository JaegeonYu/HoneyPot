import { instance } from '../instance';

export async function getBillInfo({ billId }: { billId: string }) {
  return await instance.get(`/bill/${billId}`);
}
