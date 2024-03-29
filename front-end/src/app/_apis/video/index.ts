import { instance } from '../instance';

export async function getVideoList({ page, size }: { page: number; size: number }) {
  return await instance.get(`/video?page=${page}&size=${size}`);
}
