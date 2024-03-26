import axios from 'axios';
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

export async function getNewsInPolyList() {
  const API_KEY = '6bb43679068f4572b5a1d97d1115b209';
  const API_URL = `https://open.assembly.go.kr/portal/openapi/nbzyjjyoamdqqjorw?Key=${API_KEY}&REG_DATE=${2024}&Type=json&pSize=${6}`;
  return await axios.get(API_URL);
}
