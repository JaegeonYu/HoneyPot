import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as API from '@/apis';
import * as S from './News.css';

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  url: string;
}

export default function News() {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  useEffect(() => {
    async function fetchNews() {
      const API_KEY = '6bb43679068f4572b5a1d97d1115b209';
      const API_URL = `https://open.assembly.go.kr/portal/openapi/nbzyjjyoamdqqjorw/serviceKey=${API_KEY}&Type=json`;
      try {
        const response = await axios.get(API_URL);
        const items = response.data.items || [];
        const formattedItems = items.slice(0, 6).map((item: any, index: number) => ({
          id: index,
          title: item.COMP_MAIN_TITLE,
          date: item.REG_DATE,
          url: item.LINK_URL,
        }));
        setNewsData(formattedItems);
      } catch (error) {
        console.error('Axios fetch error:', error);
      }
    }

    fetchNews();
  }, []);

  function handleClick(url: string) {
    window.location.href = url;
  }

  const firstHalf = newsData.slice(0, 3);
  const secondHalf = newsData.slice(3);

  return (
    <div className={S.newsWrapper}>
      <div className={S.newsHeader}>최근 국회 뉴스</div>

      <div className={S.newsContent}>
        {/* 왼쪽 컬럼 */}
        <div className={S.leftItem}>
          {firstHalf.map((item, i) => (
            <div className={S.item} key={i} onClick={() => handleClick(item.url)}>
              <div className={S.itemContent}>
                <h3>{item.title}</h3>
              </div>
              <div className={S.itemDate}>{item.date}</div>
            </div>
          ))}
        </div>

        <div className={S.line}></div>

        {/* 오른쪽 컬럼 */}
        <div className={S.rightItem}>
          {secondHalf.map(item => (
            <div className={S.item} key={item.id} onClick={() => handleClick(item.url)}>
              <div className={S.itemContent}>
                <h3>{item.title}</h3>
              </div>
              <div className={S.itemDate}>{item.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
