import { instance } from '../instance';

export async function getVideoList({
  page,
  size,
  keyword,
  categoryId,
}: {
  page: number;
  size: number;
  keyword: string;
  categoryId: number;
}) {
  return await instance.get(`/video?page=${page}&size=${size}&keyword=${keyword}&categoryId=${categoryId}`);
}

export async function getVideoDetail({ id }: { id: number }) {
  return await instance.get(`/video/${id}`);
}

export async function getVideoCategoryList() {
  return await instance.get(`/video/category`);
}
