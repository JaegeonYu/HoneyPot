import { instance } from '../instance';

export async function getPolyList() {
  return await instance.get(`/poly`);
}

export async function getPolyDetail({ polyId }: { polyId: number }) {
  return await instance.get(`/poly/${polyId}`);
}
