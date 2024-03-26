import { instance } from '../instance';

export async function getPolyList() {
  return await instance.get(`/poly`);
}

export async function getPolyDetail({ polyId }: { polyId: string }) {
  return await instance.get(`/poly/${polyId}`);
}
export async function getPolyDetailInfo({
  polyId,
  cmit,
  page,
  limit,
}: {
  polyId: string;
  cmit: number;
  page: number;
  limit: number;
}) {
  return await instance.get(`/poly/${polyId}/bill?cmit=${cmit}&page=${page}&limit=${limit}`);
}
