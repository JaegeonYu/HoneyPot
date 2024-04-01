import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DEVELOP_END_POINT,
  headers: { 'Content-Type': 'application/json' },
});

export const pollinstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_POLL_END_POINT,
  headers: { 'Content-Type': 'application/json' },
});
