import { instance } from '../instance';

export async function getSiDoList() {
  return await instance.get(`/region/sido`);
}

export async function getSiGunGuList({ siDoId }: { siDoId: number }) {
  return await instance.get(`/region/sigungu?sido=${siDoId}`);
}

export async function getDongList({ siGunGuId }: { siGunGuId: number }) {
  return await instance.get(`/region/dong?sigungu=${siGunGuId}`);
}

export async function getRegionName({ siDo, siGunGu, dong }: { siDo: number; siGunGu: number; dong: number }) {
  return await instance.get(`/region/name?sido=${siDo}&sigungu=${siGunGu}&dong=${dong}`);
}
