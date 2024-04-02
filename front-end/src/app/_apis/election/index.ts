import { instance, pollinstance } from '../instance';

// GET
export async function getCandidateList({
  page,
  limit,
  sido,
  sigungu,
  dong,
}: {
  page: number;
  limit: number;
  sido: string;
  sigungu: string;
  dong: string;
}) {
  return await instance.get(`/election?page=${page}&limit=${limit}&sido=${sido}&sigungu=${sigungu}&dong=${dong}`);
}

// GET
export async function getCandianteSiDoList() {
  return await instance.get(`/election/region/sido`);
}

// GET
export async function getCandianteSiGunGuList({ siDo }: { siDo: string }) {
  return await instance.get(`/election/region/sigungu?sido=${siDo}`);
  // 시도코드 파라미터
}

// GET
export async function getCandianteDongList({ siDo, siGunGu }: { siDo: string; siGunGu: string }) {
  return await instance.get(`/election/region/dong?sido=${siDo}&sigungu=${siGunGu}`);
  // 시도코드/시군구 파라미터
}

// GET
export async function getCandianteDetail({ id }: { id: number }) {
  // return await instance.get(`/election/candidate/${id}/pledge`);
  return await instance.get(`/election/candidate/${1}/pledge`);
}

// GET
export async function getPoll({
  page,
  size,
  sido,
  gugun,
}: {
  page: number;
  size: number;
  sido: string;
  gugun: string;
}) {
  return await pollinstance.get(
    `getPolplcOtlnmapTrnsportInfoInqire?ServiceKey=${process.env.NEXT_PUBLIC_POLL_KEY}&pageNo=${page}&numOfRows=${size}&sgId=20240410&sdName=${sido}&wiwName=${gugun}`,
  );
}
