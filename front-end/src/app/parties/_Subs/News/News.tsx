import React from 'react';
import * as S from './News.css';
import { decode } from 'html-entities';

interface NewsProps {
  title: string;
  date: string;
  url: string;
}

export default function News({ date, title, url }: NewsProps) {
  const formatDate = () => {
    const newDate = new Date(date);
    return `${newDate.getFullYear().toString().slice(2, 4)}년 ${newDate.getMonth() + 1}월 ${newDate.getDate()}일`;
  };

  return (
    <a target="_blank" href={url} className={S.item}>
      <h3 className={S.itemContent}>{decode(title)}</h3>
      <div className={S.itemDate}>{formatDate()}</div>
    </a>
  );
}
