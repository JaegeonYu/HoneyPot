import { instance } from '../instance';

export async function getPolyList() {
  return instance.get(`/poly`);
}

export async function getPolyDetail({ polyId }: { polyId: number }) {
  return instance.get(`/poly/${polyId}`);
}
