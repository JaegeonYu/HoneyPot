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
  sido: 'string';
  sigungu: 'string';
  dong: 'string';
}) {
  return await instance.get(`/election`);
}

// GET
export async function getCandianteSiGunGuList() {
  return await instance.get(`/election/region/sigungu`);
}

// GET
export async function getCandianteSiDoList() {
  return await instance.get(`/election/region/sido`);
}

// GET
export async function getCandianteDongList() {
  return await instance.get(`/election/region/dong`);
}

// GET
export async function getCandianteCandidateDetail() {
  return await instance.get(`/election/candidate/{candidate_id}`);
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
