import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './News.css';
import { title } from 'process';

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  url: string;
}

function formatDate(dateString: string) {
  return dateString.split(' ')[0];
}

function decodeHTMLEntities(text: string) {
  var textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
}

export default function News() {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  useEffect(() => {
    async function fetchNews() {
      const API_KEY = '6bb43679068f4572b5a1d97d1115b209';
      const API_URL = `https://open.assembly.go.kr/portal/openapi/nbzyjjyoamdqqjorw?Key=${API_KEY}&REG_DATE=${2024}&Type=json&pSize=${6}`;
      try {
        const response = await axios.get(API_URL);
        const items = response.data.nbzyjjyoamdqqjorw[1].row;

        const formattedItems = items.map((item: any, index: number) => ({
          id: index,
          title: decodeHTMLEntities(item.COMP_MAIN_TITLE),
          date: formatDate(item.REG_DATE),
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

  useEffect(() => {
    console.log(`newsData :`, newsData);
  }, [newsData]);

  return (
    <div className={S.newsWrapper}>
      <div className={S.newsHeader}>최근 국회 뉴스</div>

      <div className={S.newsContent}>
        {/* 왼쪽 컬럼 */}
        <div className={S.items}>
          {firstHalf.map((item, i) => (
            <div className={S.item} key={item.id}>
              <div className={S.itemContent}>
                <h3 onClick={() => handleClick(item.url)} style={{ cursor: 'pointer' }}>
                  {item.title}
                </h3>
              </div>
              <div className={S.itemDate}>{item.date}</div>
            </div>
          ))}
        </div>

        <div className={S.line}></div>

        {/* 오른쪽 컬럼 */}
        <div className={S.items}>
          {secondHalf.map((item, i) => (
            <div className={S.item} key={item.id}>
              <div className={S.itemContent}>
                <h3 onClick={() => handleClick(item.url)} style={{ cursor: 'pointer' }}>
                  {item.title}
                </h3>
              </div>
              <div className={S.itemDate}>{item.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
