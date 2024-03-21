import { instance } from '../instance';

export async function getAssemblyList({
  sido,
  sigungu,
  dong,
  page,
  limit,
  poly,
  word,
}: {
  sido: number;
  sigungu: number;
  dong: number;
  page: number;
  limit: number;
  poly: number;
  word: string;
}) {
  return await instance.get(
    `/assembly?sido=${sido}&sigungu=${sigungu}&dong=${dong}&page=${page}&limit=${limit}&poly=${poly}&word=${word}`,
  );
}

export async function getAssemblyInfo({ assemblyId }: { assemblyId: string }) {
  return await instance.get(`/assembly/${assemblyId}`);
}
export async function getAssemblySns({ assemblyId }: { assemblyId: string }) {
  return await instance.get(`/assembly/${assemblyId}/sns`);
}
export async function getAssemblyMostCategories({ assemblyId }: { assemblyId: string }) {
  return await instance.get(`/assembly/${assemblyId}/most`);
}

export async function getAssemblyPledge({ assemblyId }: { assemblyId: string }) {
  return await instance.get(`/assembly/${assemblyId}/pledge`);
}

export async function getAssemblyBill({
  assemblyId,
  cmit,
  page,
  take,
}: {
  assemblyId: string;
  cmit: number;
  page: number;
  take: number;
}) {
  return await instance.get(`/assembly/${assemblyId}/bill?cmit=${cmit}&page=${page}&limit=${take}`);
}

export async function getAssemblyVideoList({ assemblyId }: { assemblyId: string }) {
  return await instance.get(`/assembly/${assemblyId}/video`);
}

export async function getAssemblyVideoDetail({ assemblyId, video_id }: { assemblyId: string; video_id: string }) {
  return await instance.get(`/assembly/${assemblyId}/video/${video_id}`);
}
