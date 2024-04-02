'use client';

import React, { useCallback, useRef, useState } from 'react';
import * as S from './page.css';
import * as Comp from '@/components';
import * as API from '@/_apis/video';
import * as Icon from '@/_assets/icon';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

export default function UserInteractionSection() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const translateRef = useRef<HTMLDivElement>(null);
  const listContainerRef = useRef<HTMLDivElement>(null);

  const [value, setValue] = useState('');
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const { data: categoryList, isFetched: categoryListFetched } = useQuery({
    queryKey: [{ videoNews: `category-list` }],
    queryFn: () => API.getVideoCategoryList().then(res => [{ id: 0, categoryName: '전체보기' }, ...res.data]),
  });

  const handleQueryString = useCallback(
    ({ category, word }: { category: number; word: string }) => {
      const params = new URLSearchParams(searchParams.toString());

      params.set('category', String(category));
      params.set('word', word);

      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams],
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleQueryString({ category: Number(searchParams.get('category')), word: value });
  };

  const handleCaluseolClick = (dir: 'L' | 'R') => {
    if (translateRef.current && listContainerRef.current) {
      const movingSize = translateRef.current.offsetWidth / 2;
      const currentMoved = translateRef.current.scrollLeft;
      const limitSize = listContainerRef.current.offsetWidth;

      if (dir === 'L') {
        if (currentMoved < movingSize) {
          translateRef.current.scrollLeft = 0;
        } else if (currentMoved - movingSize >= 0) {
          translateRef.current.scrollLeft = translateRef.current.scrollLeft - movingSize;
        }
      } else if (dir === 'R') {
        if (limitSize - currentMoved < movingSize) {
          translateRef.current.scrollLeft = limitSize;
        } else if (limitSize - currentMoved > movingSize) {
          translateRef.current.scrollLeft = translateRef.current.scrollLeft + movingSize;
        }
      }
    }
  };

  return (
    <section className={S.wrapper}>
      {categoryListFetched ? (
        <div className={S.relativeWrapper}>
          <div className={S.keywordWindow} ref={translateRef}>
            <div className={S.keywordList} ref={listContainerRef}>
              {categoryList?.map((res, i) => (
                <Comp.FillterButton
                  key={`category-${res.id}`}
                  isSelected={Number(searchParams.get('category')) === i}
                  onClick={() => handleQueryString({ category: res.id, word: searchParams.get('word') || '' })}
                >
                  {res.categoryName}
                </Comp.FillterButton>
              ))}
            </div>
          </div>
          <Icon.ArrowBlack
            className={S.toLeftIcon}
            onClick={() => handleCaluseolClick('L')}
            onTouchStart={() => handleCaluseolClick('L')}
          />
          <Icon.ArrowBlack
            className={S.toRightIcon}
            onClick={() => handleCaluseolClick('R')}
            onTouchStart={() => handleCaluseolClick('R')}
          />
        </div>
      ) : (
        <div className={S.skeletonWrapper} />
      )}
      <form className={S.inputWrapper} onSubmit={handleSubmit}>
        <span className={S.givenInfomation}>
          영상 출처 :
          <a className={S.givenInfomationLink} href="https://www.youtube.com/@NATV_korea" target="_black">
            NATV,
          </a>
          <a className={S.givenInfomationLink} href="https://www.natv.go.kr/natv/info/natvCopyright.do" target="_black">
            국회방송
          </a>
        </span>
        <Comp.SearchInput
          value={value}
          inputId="video-news-input"
          placeholder={'제목 또는 키워드로 검색해보세요!'}
          onChange={handleOnChange}
          onSubmit={handleSubmit}
        />
      </form>
    </section>
  );
}
