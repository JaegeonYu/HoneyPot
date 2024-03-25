import { instance } from '../instance';

export async function getPolyList() {
  return await instance.get(`/poly`);
}

export async function getPolyDetail({ polyId }: { polyId: string }) {
  return await instance.get(`/poly/${polyId}`);
}
export async function getPolyDetailMostCategories({ polyId }: { polyId: string }) {
  return await instance.get(`/poly/${polyId}/most`);
}
