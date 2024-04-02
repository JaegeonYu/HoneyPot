import { instance, pollinstance } from '../instance';

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
  return await instance.get(
    `/election/candidate?page=${page}&limit=${limit}&sido=${sido}&sigungu=${sigungu}&dong=${dong}`,
  );
}

export async function getCandidateSiDoList() {
  return await instance.get(`/election/region/sido`);
}

export async function getCandidateSiGunGuList({ siDo }: { siDo: string }) {
  return await instance.get(`/election/region/sigungu?sido=${siDo}`);
}

export async function getCandidateDongList({ siDo, siGunGu }: { siDo: string; siGunGu: string }) {
  return await instance.get(`/election/region/dong?sido=${siDo}&sigungu=${siGunGu}`);
}

export async function getCandidateDetail({ id }: { id: number }) {
  return await instance.get(`/election/candidate/${id}/pledge`);
}

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
